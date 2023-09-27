from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:       
        return len(set(nums))!=len(nums)
    

# 1) Using two loops (Take long time for larger arrays)
# 2) Using sort() 
# 3) Using set() 

x= Solution()
print(x.containsDuplicate([1,2,3,1])) 