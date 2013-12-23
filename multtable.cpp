/**
  (c) Sergio Morales 2013
  CodeEval Challenge: Multiplication Tables
  Date Solved: 12/23/13
**/

#include <iostream>
#include <iomanip>
using namespace std;

int main( int argc, char** argv) {
    // define multiplication table as an array of array
    const int SIZE = 12;
    int** mtable = new int*[SIZE];
    
    for(int p = 0; p < SIZE; ++p) {
        mtable[p] = new int[SIZE];
    }
    
    // populate table
    for(int i = 0; i < SIZE; ++i) {
        for(int j = 0; j < SIZE; ++j) {
            mtable[i][j] = (i+1)*(j+1);    
        }
    }
    
    for(int i = 0; i < SIZE; ++i) {
        for(int j = 0; j < SIZE; ++j) {
            cout << setw(4) << mtable[i][j];
        }
        cout << endl;
    }
}
