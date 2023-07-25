#Print 1 to N using backtracking (without using plus(+))

def recursiveFunction(i):
    if(i<1):return
    recursiveFunction(i-1)
    print(i) 



def main():
    print("Enter the value of N:")
    n = int(input())
    recursiveFunction(n)

main()