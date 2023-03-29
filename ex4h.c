#include<stdio.h>
void main() {
    int num;
    printf("Enter an integer : ");
    scanf("%d", &num);
    if(num!=0) {
        if(num % 2 == 0)
        printf("%d is Even.", num);
        else
        printf("%d is Odd.", num);
    }
    else
    printf("%d is Zero.", num);
}