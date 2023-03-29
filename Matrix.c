#include<stdio.h>
void main() {
    int i,j,a[3][3],b[3][3],c[3][3];
    printf("The 3x3 First Matrix\n");
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
            printf("Enter any Number");
            scanf("%d",&a[i][j]);
        }
    }
    printf("The 3x3 Second Matrix\n");
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
            printf("Enter any Number");
            scanf("%d",&b[i][j]);
        }
    }
    printf("Sum of Matrix\n");
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
            c[i][j]=a[i][j]+b[i][j];
            printf("%d\t",c[i][j]);
        }
        printf("\n");
    }
}