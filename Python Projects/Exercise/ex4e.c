#include<stdio.h>

void main() {
    int sec,min,hr,temp,rem;
    printf("Enter the time in Second : ");
    scanf("%d",&sec);
    temp=sec;
    hr=sec/3600;
    rem=sec%3600;
    min=rem/60;
    sec=rem%60;
    printf("The total %d sec is equal to %d hr %d min %d sec",temp,hr,min,sec);
}