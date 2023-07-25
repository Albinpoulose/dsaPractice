# Print name n times

def recursiveFunction(i,n):
    if(i==n): return
    print("Albin")
    recursiveFunction(i+1,n)




def main():
    print("Enter the value of n!")
    n = int(input())
    recursiveFunction(1,n)

main()