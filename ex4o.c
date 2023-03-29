#include<stdio.h>
void main() {
    float a,b,c;
    printf("Enter three sides of Triangle : ");
    scanf("%d%d%d",&a,&b,&c);

    if(a==b) {
        if(b==c)
        printf("The given triangle is Equilateral.");
        else
        printf("The given Triangle is Isosceles.");
    }
    else {
        if(a==c)
        printf("The given Triangle is Isosceles.");
        else
        printf("The given Triangle is Scalane.");
    }
}