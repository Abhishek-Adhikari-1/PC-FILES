#include<stdio.h>
#include<ctype.h>
void main() {
    int num;
    printf("Enter an integer : ");
    scanf("%c", &num);
    if(!isdigit(num))
        printf("Error! Enter a Valid Character.");
    else if(num!=0) {
        if(num>0)
        printf("%c is Positive.", num);
        else
        printf("%c is Negative.", num);
    }
    else
    printf("%c is Zero.", num);
}