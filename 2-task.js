// const nums = [90,22, 12,15, 9, 8, 7, 3,1, 5, 15], k = 17

module.exports = function (nums, k) {
    let first = 0
    let last = nums.length - 1
    while (first < last) {
        let sum = k - nums[first]
        s = nums.indexOf(sum)
        if (s != -1) {
            return true
        } else {
            first++
        }
    }
}

// function sum(nums, k) {
//     let first = 0
//     let last = nums.length - 1
//     while (first < last) {
//         let sum = k - nums[first]
//         s = nums.indexOf(sum)
//         if (s != -1) {
//             return console.log(first,s)
//         } else {
//             first++
//         }
//     }
// }
//
// sum(nums, k)