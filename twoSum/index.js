var twoSum = function(nums, target) {
    let hashMap = {};
    for (let j=0; j<nums.length; j++) {
        let val = target - nums[j];
        if (typeof hashMap[val] !== 'undefined') {
            return [hashMap[val], j];
        } else {
            hashMap[nums[j]] = j;
        }
    }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 3], 6))