#include<stdio.h>
int main() {
    int a, b;
    {
        printf("Enter 1st Number: ");
        scanf("%d", &a);
        printf("Enter 2nd Number: ");
        scanf("%d", &b);
    }
    {
        int sum, minus, product, div;
        sum=a+b;
        printf("\n                  %d + %d = %d", a, b, sum);

        minus=a-b;
        printf("\n                  %d - %d = %d", a, b, minus);

        product=a*b;
        printf("\n                  %d * %d = %d", a, b, product);

        div=a/b;
        printf("\n                  %d / %d = %d (Quotient)", a, b, div);

        div=a%b;
        printf("\n                  %d / %d = %d (Remainder)", a, b, div);
    }
        {
            double c=a, d=b,
            div;
            div=c/d;
            printf("\n                  Accurate Division of %d / %d = %lf", a, b, div);
        }
    return 0;
}