# base condition

def recursiveFunction(n,condition):
    print(n)
    if(n==condition) : return
    n = n+1
    recursiveFunction(n,condition)
    

recursiveFunction(1,5)