#include<stdio.h>
void main() {
    int age;
    printf("Enter your age : ");
    scanf("%d", &age);

    if(age>=0 && age<=15)
    printf("You are Child.");
    else if(age>15 && age<=30)
    printf("You are Young.");
    else if(age>30 && age<=60)
    printf("You are Mature.");
    else
    printf("You are Old.");
}