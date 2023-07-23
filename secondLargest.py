# Second largest element in the array
import sys

def findSecondLargest(sequenceOfNumbers):
    largest = sys.maxsize * -1
    SecondLargest = 0
    if(len(set(sequenceOfNumbers)) == 1):
        return -1
    for i in range (0,len(sequenceOfNumbers)):
        print(sequenceOfNumbers[i])
        if(sequenceOfNumbers[i]> largest):
            SecondLargest =largest
            largest = sequenceOfNumbers[i]
        if(sequenceOfNumbers[i] > SecondLargest and sequenceOfNumbers[i] != largest):
            SecondLargest = sequenceOfNumbers[i]
    return SecondLargest



def main():
    array = []
    print("Enter the size of array")
    sizeOfArray = int(input())
    for i in range(0,sizeOfArray):
       element = int(input())
       array.append(element)
          
    print( findSecondLargest(array))

main()    