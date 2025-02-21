#include<bits/stdc++.h>
using namespace std;

class Human(){
    public:
    int weight;
    int height;
    void setheight(int n)
    {
        this->height=n;
    }
    int getheight()
    {
        return this->height;
    }



};

class Male:public Human{

   public:
   int colour:


};
int main()
{
    Human h1;
    h1.setheight(15);
    Male m1;
    cout<<m1.getheight<<endl;
    return 0;
}
