#include<stdio.h>

void main() {
    float c, f, k;
    printf("Enter the temperature in Centigrade : ");
    scanf("%f", &c);

    f= ((c*9)/5) + 32; 
    printf("%f degree celcius is equal to %f degree Fahrenheit .", c, f);

    k=c+273;
    printf("\n%f degree celcius is equal to %f Kelvin.",c,k);
}