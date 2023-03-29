#include<stdio.h>

int main() {
    int l, b, h, vol;
    printf("Enter the Length, Breadth and Height of Cuboid : ");
    scanf("%d %d %d",&l,&b,&h);

    vol=l*b*h;
    printf("The volume of cubiod containing length of %d, breadth of %d and height of %d : %d",l,b,h,vol);

        return 0;
}