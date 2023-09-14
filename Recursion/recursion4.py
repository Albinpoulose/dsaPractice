# Get the sum of N number (functional way)

def recursiveFuntion(n):
    if(n==0):
        return n;
    return n+recursiveFuntion(n-1)



def main ():
    print("Enter the value of N:")
    n = int(input())
    print(recursiveFuntion(n))

main()