// # Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    map = {}
    for( let str of strs){
        s = str.split('').sort().join('')
        if(!map[s]) map[s] = []
        map[s].push(str)
    }
    return Object.values(map);
};



console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));