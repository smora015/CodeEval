/**
  (c) Sergio Morales 2013
  Challenge: Fizz Buzz Divisibility Test
  Date Solved: 12/04/13
**/

#include <iostream>
#include <fstream>
#include <stdlib.h>
using namespace std;

int main(int argc, char** argv) {
    ifstream file;
    string lineBuffer;

    // Open file
    file.open(argv[1]);
    while(file) {
        // Get words from file
        getline(file, lineBuffer);
        
        // If line is not empty, start fizz buzz
        if(lineBuffer.length() != 0) {
            // Split integers by space delimiters
            int fizz = atoi((lineBuffer.substr(0,lineBuffer.find(" "))).c_str());
            lineBuffer = lineBuffer.substr(lineBuffer.find(" ")+1);
            
            
            int buzz = atoi((lineBuffer.substr(0, lineBuffer.find(" "))).c_str());
            lineBuffer = lineBuffer.substr(lineBuffer.find(" ")+1);
            
            
            int n = atoi((lineBuffer.substr(0, lineBuffer.find(" "))).c_str());

            // Start count            
            for(int i = 1 ; i <= n; ++i) {
                if( i % fizz == 0 && i % buzz == 0) {
                    cout << "FB" << " ";
                }
                else if( i % buzz == 0) {
                    cout << "B" << " ";
                }
                else if( i % fizz == 0) {
                    cout << "F" << " ";
                }
                else
                    cout << i << " ";
            }
            
            cout << endl;
        }
        
        // Close file if all lines are read.
        else
            file.close();
    }
    
}
