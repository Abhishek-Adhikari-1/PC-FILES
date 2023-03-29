import turtle as tim
import colorsys

tim.color('red')
tim.pensize(5)
tim.shape('turtle')
tim.speed(0)
tim.bgcolor('black')
h = 0
for i in range(265):
    c = colorsys.hsv_to_rgb(h,1,1)
    tim.color(c)
    tim.begin_fill()
    tim.circle(i,20)
    tim.circle(i,-144)
    tim.right(100)
    h+=0.006
tim.done()