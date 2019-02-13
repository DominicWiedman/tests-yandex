/** @returns Boolean */
module.exports = function (nums, k) {
    for (let i in nums) {
        s = k - nums[i]
        n = nums.indexOf(s)
        Boolean(n !== -1)
    }
}

// const nums = [10, 15, 3, 7], k = 17
//
// function sum(nums, k) {
//     for (let i in nums) {
//         s = k - nums[i]
//         n = nums.indexOf(s)
//         Boolean(n !== -1)
//     }
// }
//
// sum(nums, k)