#include<stdio.h>
int main() {
    int *pc,c;
    c=5;
    pc=&c;
    printf("Value of pc=%p\n",pc);
    printf("Value of c=%p\n",&c);
    return 0;
}