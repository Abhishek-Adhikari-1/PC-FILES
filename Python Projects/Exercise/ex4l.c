#include<stdio.h>
int main() {
    double a,b,c;
    {
        printf("Enter three Numbers : ");
        scanf("%lf %lf %lf", &a, &b, &c);
    }
            if(a>b) {
                if(a>c)
                    printf("%.2lf is greater than %.2lf and %.2lf", a, b, c);
                else
                    printf("%.2lf is greater than %.2lf and %.2lf", c, a, b);
                }
            else {
                if(b>c)
                    printf("%.2lf is greater than %.2lf and %.2lf", b, a, c);
                else
                    printf("%.2lf is greater than %.2lf and %.2lf", c, a, b);
            }
    return 0;
}