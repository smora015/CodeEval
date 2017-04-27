#include <iostream>
using namespace std;

// Doubly linked list structure
typedef struct linked_list
{
    linked_list* next;
    linked_list* prev;
    long val;
} linked_list;

int main() {
    long m_index, temp, size;
    
    // Initialize linked list and use a pointer to iterate through it
    linked_list inputs;
    linked_list* pointer = &inputs;
    
    // Get M index as first parameter
    cin >> m_index;
    
    // Populate linked list with inputs as second parameter
    size = 0;
    while( cin >> temp )
    {
        // Populate value and increment size
        pointer->val = temp;
        ++size;
        
        // Allocate new node and link to it
        pointer->next = new linked_list;
        pointer->next->prev = pointer;
        
        // Go to next input
        pointer = pointer->next;
    }
    
    if( m_index > size )
    {
        // Output NIL if M index is out of bounds. Boundary case is valid, where M == Linked list size
        cout << "NIL" << endl;
    }
    else
    {
        // Valid M index- now iterate from the last input through linked list until reaching Mth index
        for( long i = 0; i < (m_index); ++i)    
        {
            pointer = pointer->prev;
        }            
        
        // Output final value as Mth to last index
        cout << pointer->val << endl;
    }
}
