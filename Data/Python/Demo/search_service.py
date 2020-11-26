#!/usr/bin/env python

import json
import falcon
from whoosh.index import open_dir
from whoosh.qparser import QueryParser

class SearchResource(object):

    def __init__(self):
        self._ix = open_dir('../../work/demoOne/_search_index')

    def _do_search(self, query_str, page):
        ret = {}

        with self._ix.searcher() as searcher:
            qp = QueryParser('content', self._ix.schema)
            q = qp.parse(query_str)
            results = searcher.search_page(q, page, 15)

            ret['page'] = results.pagenum
            ret['pages'] = results.pagecount
            ret['hits'] = []

            for h in results:
                match = {
                    'uri': h['uri'],
                    'title': h['title'],
                    'post_date': h['post_date'],
                    'excerpt': h['excerpt']
                }
                ret['hits'].append(match)

        return ret


    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        res = self._do_search(req.get_param('s', default=''), int(req.get_param('p', default=1)))
        resp.body = json.dumps(res)

app = falcon.API()
searcher = SearchResource()
app.add_route('/', searcher)
