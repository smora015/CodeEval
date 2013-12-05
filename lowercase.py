"""
  (c) Sergio Morales 2013
  CodeEval Challenge: Lowercase
  Date Solved: 12/05/13
"""

import sys
file = open(sys.argv[1], 'r')
for line in file:
    print(line.lower())
file.close()
