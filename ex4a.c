#include<stdio.h>

int main() {
    int length, peri, Area;
    printf("Enter the Length of Square : ");
    scanf("%d", &length);

    peri=4*length;
    printf("The Perimeter of Square of length %d : %d", length, peri);

    Area=length*length;
    printf("\nThe Area of Square of length %d : %d", length, Area);

        return 0;
}