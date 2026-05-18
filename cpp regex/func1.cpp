#include<iostream>
using namespace std;

int great(int a,int b,int c){
 return if(a>>b && a>>c){
    cout<<"a is greater";
    else if(b>>c && b>>a){
        cout<<"b is greater";
    }
    else if(c>>a && c>>b){
        cout<<"c is greater";
    }
    
 }
}
int main(){
 
    cout<<great(3,5,4); 

    return 0;
}