# Get the sum of N number (Parameterized way)

def recursiveFuntion(n,sum):
    if(n<1):
        print(sum)
        return
    recursiveFuntion(n-1,sum+n)



def main ():
    print("Enter the value of N:")
    n = int(input())
    recursiveFuntion(n,0)

main()