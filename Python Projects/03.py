import turtle
t = turtle.Turtle()
t.shape()
t.pensize(5)
t.pencolor('red')

t.forward(500)
t.right(90)
t.forward(200)
t.right(90)
t.forward(500)
t.right(90)
t.forward(200)

t.left(90)
t.forward(500)
t.left(90)
t.forward(200)
t.left(90)
t.forward(500)

t.left(90)
t.penup()
t.forward(100)
t.pendown()
t.left(90)
t.forward(500)

t.left(180)
t.penup()
t.forward(500)
t.pendown()
t.forward(500)

t.penup()
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.pendown()
t.left(90)
t.forward(200)

turtle.done()