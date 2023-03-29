#include<stdio.h>
int main() {
    int i, num, sum=0;
    printf("Please Enter the maximum Limit of value: ");
    scanf("%d", &num);
    printf("Even Numbers between 0 and %d are: ", num);
    for(i=2;
    i<=num;
    i=i+2)
    {
        sum=sum+i;
        printf("%d  ", i);
    }
    printf("\nThe Sum of All Even Numbers upto %d = %d", num, sum);
        return 0;
}