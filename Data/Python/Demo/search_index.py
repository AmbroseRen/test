#!/usr/bin/env python

import argparse
import os
import shutil
from bs4 import BeautifulSoup
from whoosh.fields import Schema, TEXT, ID
from whoosh.index import create_in

INDEX_DIR_NAME = '_search_index'
EXERPT_LENGTH = 300

def main():
    parser = argparse.ArgumentParser(description='Generate Whoosh search index from Jekyll _site directory')
    parser.add_argument('-s', '--site_dir', help='Jekyll _site directory', default='_site')
    parser.add_argument('-o', '--output_directory', help='directory _search_index directory will be created in', default='.')

    args = parser.parse_args()

    site_dir = os.path.abspath(args.site_dir)
    out_dir = os.path.abspath(args.output_directory)
    index_dir = os.path.join(out_dir, INDEX_DIR_NAME)

    print('Creating index at: "%s"' % index_dir)

    schema = Schema(uri=ID(stored=True), title=TEXT(stored=True), content=TEXT, excerpt=TEXT(stored=True), post_date=TEXT(stored=True))
    try:
        if os.path.exists(index_dir):
            shutil.rmtree(index_dir)
        os.mkdir(index_dir)
    except:
        print('Failed to create %s directory' % index_dir)
        return

    ix = create_in(index_dir, schema)
    writer = ix.writer()

    for dirpath, dirnames, filenames in os.walk(site_dir):
        for fname in filenames:
            _, ext = os.path.splitext(fname)
            if ext not in ['.html']:
                continue

            if dirpath.endswith('/amp'):
                continue

            uri = '%s/' % dirpath[len(site_dir):]
            data = ''
            title = ''
            post_date = ''
            content = ''
            with open(os.path.join(dirpath, fname), 'rb') as f:
                data = f.read().decode('utf-8')

            tree = BeautifulSoup(data, 'lxml')
            if not tree.find(class_='post-title') or not tree.find(class_='post-content'):
                continue

            print('Adding: %s' % uri)

            node = tree.find(class_='post-title')
            title = node.text.strip()

            node = tree.find(class_='entry-date')
            if node:
                post_date = node.text.strip()

            node = tree.find(class_='post-content')
            content = node.text.strip().replace('\n', ' ');

            writer.add_document(uri=uri, title=title, content=content, excerpt=content[:EXERPT_LENGTH], post_date=post_date)

    writer.commit()

if __name__ == '__main__':
    main()
