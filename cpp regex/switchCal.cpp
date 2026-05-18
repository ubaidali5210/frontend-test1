#include<iostream>
using namespace std;
int main(){

int a,b;
char x;

cout<<"enter number";
cin>>a;

cout<<"enter oparetion";
cin>>x;

cout<<"enter number";
cin>>b;

switch(x){
    case '+':
    cout<<a+b;
    break;

    case '-':
    cout<<a-b;
    break;

    case '*':
    cout<<a*b;
    break;

    case '/':
    cout<<a/b;
    break;

    default:
    cout<<"not valid";

}




  return 0;
}