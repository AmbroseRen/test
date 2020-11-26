# from sklearn import datasets
import sklearn.datasets as ds

# 读取iris数据集
iris = ds.load_iris()
# 获取数据集中的属性值（花瓣和萼片长度宽度）
iris_X = iris.data
print(iris_X)
print('=========')
# 获取数据集中的标签，分别是哪种花
iris_y = iris.target
print(iris_y)
print('======')

print(iris_X[::50])
print(iris_y[::50])
