from Tools import add ,sub ,mul ,divide
# from Tools import *

add(10 ,5)

sub(10 ,5)

if __name__ == '__main__':
	print("当前模块执行")
else :
	print("在其他模块导入当前模块时执行")

# or
'''
import Tools

Tools.add(10 ,5)

Tools.sub(10 ,5)
'''
