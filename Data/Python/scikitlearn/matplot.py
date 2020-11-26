#import matplotlib.pyplot as plt
from matplotlib import pyplot as plt

from sklearn import datasets
from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier

iris = datasets.load_iris()
X = iris.data
y = iris.target

knn = KNeighborsClassifier()

# 交叉验证分数，分为5组
scores = cross_val_score(knn, X, y, cv=5, scoring='accuracy')
# 输出分组平均值
print(scores.mean())

# 让K邻近分类器的k从1到30取值并计算认证分数
k_range = range(1, 31)
k_scores = []
for r in k_range:
     # 设置k，也就是n_neighbors参数
     kn = KNeighborsClassifier(n_neighbors=r)
     # 求平均值并加入k_scores中
     k_scores.append(cross_val_score(kn, X, y, cv=10, scoring='accuracy').mean())

print(k_scores)

# 以k_range为x，k_scores为y，拟点并连线
plt.plot(k_range, k_scores)
# 设置x和y的标签
plt.xlabel('n_neighbors')
plt.ylabel('score')
# 展示图表
plt.show()
