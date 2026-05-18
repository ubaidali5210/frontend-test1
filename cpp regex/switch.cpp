#include<iostream>
using namespace std;
int main(){

    int day;
    cin>>day;

    switch(day){
        case 1:
        cout<<"monday";
        break;

        case 2:
        cout<<"tuesday";
        break;

        default:
        cout<<"not a valid day";

    };



    return 0;
}