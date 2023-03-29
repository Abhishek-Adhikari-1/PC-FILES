#include<stdio.h>
#include<math.h>

int main() {
    int a, square;
    printf("Enter any number : ");
    scanf("%d", &a);

    square= pow(a,2);
    printf("\nThe Square of %d is %d  .", a, square);

    double b=a, root;
    
    root= sqrt(a);
    printf("\nThe Square root of %d is %f  .", a, root);

        return 0;
}