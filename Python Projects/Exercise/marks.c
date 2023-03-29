#include<stdio.h>
void main() {
    int nep,eng,comp,math,phy,che;
    float percentage=0;
    char grade;
    {
        printf("Enter Yours Marks of Nepali : ");
        scanf("%d", &nep);
        printf("Enter Yours Marks of English : ");
        scanf("%d", &eng);
        printf("Enter Yours Marks of Computer : ");
        scanf("%d", &comp);
        printf("Enter Yours Marks of Math : ");
        scanf("%d", &math);
        printf("Enter Yours Marks of Physics : ");
        scanf("%d", &phy);
        printf("Enter Yours Marks of Chemistry : ");
        scanf("%d", &che);
    }
    if(nep<40||eng<40||comp<40||math<40||phy<40||che<40)
      printf("You are Fail.");
    else {
        percentage=(float)(nep+eng+comp+math+phy+che)/6;
        printf("                                The total percentage of all subject is %f%%",percentage);

            if (percentage >= 90)
        grade = 'A';
    else if (percentage >= 80 && percentage < 90)
        grade = 'B';
    else if (percentage >= 70 && percentage < 80)
        grade = 'C';
    else if (percentage >= 60 && percentage < 70)
        grade = 'D';
    else if (percentage >= 50 && percentage < 60)
        grade = 'E';
    else if (percentage >= 40 && percentage < 50)
        grade = 'F';
    else
        grade = 'G';
        printf("\n                              The Grade is:  '%c'\n", grade);
    }
}