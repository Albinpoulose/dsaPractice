#  Rotate array


def main():
    array = []
    sizeOfArray = int(input())
    for i in range(0,sizeOfArray):
       array.append(input())

    rotation = int(input())
          
    while(rotation):
        element = array.pop(0)
        array.append(element)
        rotation = rotation-1
    
    print(array)

main()
