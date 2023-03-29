import turtle

tim = turtle.Turtle()
turtle.bgcolor('black')
tim.speed(3)
tim.pensize(5)
tim.shape()
def func():
    for i in range(200):
        tim.right(1)
        tim.forward(1)

tim.color('red','red')
tim.begin_fill()
tim.left(140)
tim.forward(111.65)
func()
tim.left(120)
func()
tim.forward(111.65)
tim.end_fill()
tim.hideturtle()
turtle.done()