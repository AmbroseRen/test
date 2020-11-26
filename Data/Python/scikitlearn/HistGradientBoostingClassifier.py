import numpy as np
from matplotlib import pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.inspection import plot_partial_dependence
from sklearn.experimental import enable_hist_gradient_boosting  # noqa
from sklearn.ensemble import HistGradientBoostingRegressor

n_samples = 500
rng = np.random.RandomState(0)
X = rng.randn(n_samples, 2)
noise = rng.normal(loc=0.0, scale=0.01, size=n_samples)
y = (5 * X[:, 0] + np.sin(10 * np.pi * X[:, 0]) - noise)

gbdt_no_cst = HistGradientBoostingRegressor().fit(X, y)
gbdt_cst = HistGradientBoostingRegressor(monotonic_cst=[1, 0]).fit(X, y)

disp = plot_partial_dependence(
    gbdt_no_cst, X, features=[0], feature_names=['feature 0'],
    line_kw={'linewidth': 4, 'label': 'unconstrained'})
plot_partial_dependence(gbdt_cst, X, features=[0],
    line_kw={'linewidth': 4, 'label': 'constrained'}, ax=disp.axes_)
disp.axes_[0, 0].plot(X[:, 0], y, 'o', alpha=.5, zorder=-1, label='samples')
disp.axes_[0, 0].set_ylim(-3, 3); disp.axes_[0, 0].set_xlim(-1, 1)
plt.legend()
plt.show()
