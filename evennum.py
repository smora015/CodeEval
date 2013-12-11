"""
  (c) Sergio Morales 2013
  CodeEval Challenge: Even Numbers
  Date Solved: 12/10/13
"""

import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
    if int(test) % 2 == 0:
        print('1')
    else:
        print('0')

test_cases.close()
