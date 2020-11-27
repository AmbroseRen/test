class Cat:
    hear:'red'

    def __init__(self, new_name, new_age):
        self.name = new_name
        self.new_age = new_age
        print("---------")

    def eat(self):
        print('eat')

    def drink(self):
        print('drink')

tom = Cat("杰西", 26)

tom.eat()

tom.drink()

# tom.name = "汤姆"
print(tom.name)

lanmao = Cat("蓝猫", 10)
# lanmao.name = "蓝猫"
# lanmao.age = 10
print(lanmao.name)

