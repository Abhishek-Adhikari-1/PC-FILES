#include<ctype.h>
#include <stdio.h>

void main()
{
    char c;
    int discount=0, payableamount;
    printf("\n Enter your purchase amount:");
    scanf("%c", &c);

    if(!isdigit(c))
    printf("Error! Enter a Valid Character.");
    else if (c>30000)
    {
    discount=(c*5)/100;
    printf("Discount amount is:%d", discount);
    payableamount= c-discount;
    printf("\n The payable amount is:%d", payableamount);
    }
    else
    {
    discount= (c*3)/100;
    printf("\n Discount amount is:%d",discount);
    payableamount= c-discount;
    printf("\n The payable amount is:%d", payableamount);
    }

}