#include<stdio.h>

void main() {
    double p, t, r, si;
    printf("Enter Principle amount :  ");
    scanf("%lf", &p);
    printf("\nEnter Time : ");
    scanf("%lf", &t);
    printf("\nEnter rate : ");
    scanf("%lf", &r);

    si=(p*t*r)/100;
    printf("\nSimple Intrest is Rs. %.0lf", si);
}