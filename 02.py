import turtle
t = turtle.Turtle()
t.shape()
t.pensize(5)
t.pencolor('red')
for i in range(4):
    t.forward(100)
    t.right(90)

t.right(180)

for i in range(3):
    t.forward(100)
    t.left(90)

turtle.done()