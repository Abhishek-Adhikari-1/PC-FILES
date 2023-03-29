#include<stdio.h>
void main() {
    int a;
    printf("Enter a Number : ");
    scanf("%d",&a);
    if(a%2==0) {
        if(a%3==0)
        printf("Yes, %d is divisible by 2 and 3.", a);
        else
        printf("%d is only divided by 2 but not 3.", a);
    }
    else {
        if(a%3==0)
        printf("%d is olny divided by 3 but not 2.", a);
        else
        printf("%d is not divided by both 2 and 3.", a);
    }
}