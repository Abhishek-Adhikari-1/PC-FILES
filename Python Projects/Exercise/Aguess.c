#include<stdio.h>
void main() {
    int num=39,guess;
    printf("Enter a Number (1 - 50) : ");

    while(1) {
        scanf("%d",&guess);

        
        if(guess>num) {
            printf("                   Wrong! Enter a Smaller Number (अलिकती सानाे अंक हाल्नुहाेस🤣🤣) : ");
        }
        else if(guess<num) {
            printf("                    Wrong! Enter a Greater Number or (अलिकती ठुलाे अंक हाल्नुहाेस🤣🤣) : ");
        }
        else {
            printf("                    Congrulation! Correct Guess.");
          break;
        }
    } 
}