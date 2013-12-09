"""
  (c) Sergio Morales 2013
  CodeEval Challenge: Swap Case
  Date Solved: 12/09/13
"""

import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
    for i in range(0, len(test)):
        if (test[i] >= 'A' and test[i] <= 'Z'):
            print( test[i].lower(), end="")
        else:
            print( test[i].upper(), end="")
    print('\n', end="")
test_cases.close()
