import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
    list1 = test[0:test.find("|")-1]
    list2 = test[test.find("|")+1:]
    list1 = [int(x) for x in list1]
    list2 = [int(x1) for x1 in list2]
    
    for i in range(0,len(list1)-1):
        print(list1[i]*list2[i]+" ", end="")
    print("", end="\n")
test_cases.close()
