#include<stdio.h>
void main() {
    int i, a, sum=0;
    printf("Enter the range : ");
    scanf("%d", &a);
    printf("\nThe Natural numbers upto %d are: ", a);
    for(i=1;
    i<=a;
    i=i+1)
    {
        sum=sum+i;
        printf("%d  ",i);
    }
    printf("\nSum of Natural Numbers upto %d is %d",a,sum);
}