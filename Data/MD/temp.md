---
title: 

top: true

cover: false

toc: true

mathjax: true

date: 2020-02-16 15:09:23
password:
summary: 预览
tags:
- leetcode
- 算法
categories:
- 编程算法
---
！[Anurag的github统计信息]（https://github-readme-stats.vercel.app/api？username = anuraghazra＆show_icons = true＆theme = radical）
> 关注公众号【AmbroseRen】，集结号！
## 前言

本文整理并总结了十大经典的排序算法（冒泡排序、选择排序、插入排序、快速排序、归并排序、希尔排序、计数排序、基数排序、桶排序、堆排序）的时间复杂度、空间复杂度等性质。

**正文并 [链接](https://leetcode-cn.com/problems/sort-an-array/ "LeetCode 912. 排序数组") 无无。
**正文加强突出**，网上有很多很好的教程，大家可以自己去搜了看。

## 性质汇总

> 如果发现表中有错误，请留言告知。

|列一|列二|列三|

|行一|++++|++++|

|行二|++++|++++|

**冒泡排序**  
[https://en.wikipedia.org/wiki/Bubble_sort](https://en.wikipedia.org/wiki/Bubble_sort)

## 代码实现
所有的排序算法接口都是相同的，也就是 `vector<int> xxxSort(vector<int>& nums)` 。只需要你传入一个 `vector<int>` 类型的数组，就能返回排序后的结果。
```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        return quickSort(nums);
    }

    // 冒泡排序（超时）
    vector<int> bubbleSort(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            for (int j = n-2; j >= i; --j) {
                if (nums[j] > nums[j+1]) {
                    swap(nums[j], nums[j+1]);
                }
            }
        }
        return nums;
    }

    // 选择排序（超时）
    vector<int> selectSort(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            int idx = i;
            for (int j = i; j < n; ++j) {
                if (nums[j] < nums[idx]) {
                    idx = j;
                }
            }
            swap(nums[i], nums[idx]);
        }
        return nums;
    }

    // 插入排序（超时）
    vector<int> insertSort(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; ++i) {
            for (int j = i; j > 0 && nums[j] < nums[j-1]; --j) {
                swap(nums[j], nums[j-1]);
            }
        }
        return nums;
    }

    // 快速排序（24 ms）
    void qSort(vector<int>& nums, int l, int r) {
        if (l >= r) return;
        int m = l;
        for (int i = l; i < r; ++i) {
            if (nums[i] < nums[r]) {
                swap(nums[m++], nums[i]);
            }
        }
        swap(nums[m], nums[r]);
        qSort(nums, l, m-1);
        qSort(nums, m+1, r);
    }

    vector<int> quickSort(vector<int>& nums) {
        int n = nums.size();
        qSort(nums, 0, n-1);
        return nums;
    }

    // 归并排序（192 ms）
    vector<int> mSort(vector<int>& nums, int l, int r) {
        if (l >= r) return {nums[l]};
        int m = l+(r-l)/2;
        vector<int> lnums = mSort(nums, l, m);
        vector<int> rnums = mSort(nums, m+1, r);
        vector<int> res;
        int i = 0, j = 0;
        while (i <= m-l && j <= r-m-1) {
            if (lnums[i] < rnums[j]) {
                res.push_back(lnums[i++]);
            } else {
                res.push_back(rnums[j++]);
            }
        }
        while (i <= m-l) {
            res.push_back(lnums[i++]);
        }
        while (j <= r-m-1) {
            res.push_back(rnums[j++]);
        }
        return res;
    }

    vector<int> mergeSort(vector<int>& nums) {
        int n = nums.size();
        nums = mSort(nums, 0, n-1);
        return nums;
    }

    // 归并排序 + 非递归（80 ms）
    vector<int> mergeSortNR(vector<int>& nums) {
        int n = nums.size();
        for (int len = 1; len < n; len <<= 1) {
            for (int l = 0; l < n-len; l += 2*len) {
                int m = l+len-1;
                int r = min(n-1, l+2*len-1);
                vector<int> res;
                int i = l, j = m+1;
                while (i <= m && j <= r) {
                    if (nums[i] < nums[j]) {
                        res.push_back(nums[i++]);
                    } else {
                        res.push_back(nums[j++]);
                    }
                }
                while (i <= m) {
                    res.push_back(nums[i++]);
                }
                while (j <= r) {
                    res.push_back(nums[j++]);
                }
                for (int i = l; i <= r; ++i) {
                    nums[i] = res[i-l];
                }
            }
        }
        return nums;
    }

    // 希尔排序（40 ms）
    vector<int> shellSort(vector<int>& nums) {
        int n = nums.size();
        for (int gap = n/2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; ++i) {
                for (int j = i; j-gap >= 0 && nums[j-gap] > nums[j]; j -= gap) {
                    swap(nums[j-gap], nums[j]);
                }
            }
        }
        return nums;
    }

    // 计数排序（32 ms）
    vector<int> countSort(vector<int>& nums) {
        int n = nums.size();
        if (!n) return {};
        int minv = *min_element(nums.begin(), nums.end());
        int maxv = *max_element(nums.begin(), nums.end());
        int m = maxv-minv+1;
        vector<int> count(m, 0);
        for (int i = 0; i < n; ++i) {
            count[nums[i]-minv]++;
        }
        vector<int> res;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < count[i]; ++j) {
                res.push_back(i+minv);
            }
        }
        return res;
    }

    // 基数排序（不适用于负数）
    vector<int> radixSort(vector<int>& nums) {
        int n = nums.size();
        int maxv = *max_element(nums.begin(), nums.end());
        int maxd = 0;
        while (maxv > 0) {
            maxv /= 10;
            maxd++;
        }
        vector<int> count(10, 0), rank(n, 0);
        int base = 1;
        while (maxd > 0) {
            count.assign(10, 0);
            for (int i = 0; i < n; ++i) {
                count[(nums[i]/base)%10]++;
            }
            for (int i = 1; i < 10; ++i) {
                count[i] += count[i-1];
            }
            for (int i = n-1; i >= 0; --i) {
                rank[--count[(nums[i]/base)%10]] = nums[i];
            }
            for (int i = 0; i < n; ++i) {
                nums[i] = rank[i];
            }
            maxd--;
            base *= 10;
        }
        return nums;
    }

    // 桶排序 (20 ms)
    vector<int> bucketSort(vector<int>& nums) {
        int n = nums.size();
        int maxv = *max_element(nums.begin(), nums.end());
        int minv = *min_element(nums.begin(), nums.end());
        int bs = 1000;
        int m = (maxv-minv)/bs+1;
        vector<vector<int> > bucket(m);
        for (int i = 0; i < n; ++i) {
            bucket[(nums[i]-minv)/bs].push_back(nums[i]);
        }
        int idx = 0;
        for (int i = 0; i < m; ++i) {
            int sz = bucket[i].size();
            bucket[i] = quickSort(bucket[i]);
            for (int j = 0; j < sz; ++j) {
                nums[idx++] = bucket[i][j];
            }
        }
        return nums;
    }

    // 堆排序（32 ms）
    void adjust(vector<int>& nums, int p, int s) {
        while (2*p+1 < s) {
            int c1 = 2*p+1;
            int c2 = 2*p+2;
            int c = (c2<s && nums[c2]>nums[c1]) ? c2 : c1;
            if (nums[c] > nums[p]) swap(nums[c], nums[p]);
            else break;
            p = c;
        }
    }

    vector<int> heapSort(vector<int>& nums) {
        int n = nums.size();
        for (int i = n/2-1; i >= 0; --i) {
            adjust(nums, i, n);
        }
        for (int i = n-1; i > 0; --i) {
            swap(nums[0], nums[i]);
            adjust(nums, 0, i);
        }
        return nums;
    }
};
```
