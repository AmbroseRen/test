from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

# 读取iris数据集
iris = datasets.load_iris()
# 获取数据集中的属性值（花瓣和萼片长度宽度）
iris_X = iris.data
# 获取数据集中的标签，分别是哪种花
iris_y = iris.target

# 将数据分别训练数据和测试数据，测试数据为20%
train_X, test_X, train_y, test_y = train_test_split(iris_X, iris_y, test_size=0.2)

# 创建K邻近分类器
knn = KNeighborsClassifier()
# 输入训练数据
knn.fit(train_X, train_y)
# 得到预测标签
predicts = knn.predict(test_X)

# 对比结果
print(predicts)
print(test_y)

# 计算准确率
print(knn.score(test_X, test_y))
