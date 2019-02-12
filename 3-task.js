/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} не возвращайте ничего, вместо этого модифицируйте nums1.
 */

module.exports = function merge(nums1, m, nums2, n) {
    for (let i in nums1) {
        if (nums1[i] == 0) {
            for (let j in nums2) {
                nums1[i] = nums2[j]
            }
        }
    }
}

const nums1 = [46, 55, 88, 0, 0, 0, 0], nums2 = [18, 29, 80, 90]

function merge(nums1, nums2) {
    for (let i in nums1) {
        if (nums1[i] == 0) {
            for (let j in nums2) {
                if (nums1[i] != nums2[j]) {
                    nums1[i] = nums2[j]
                    console.log(nums1)
                }
            }
        }
    }
}

merge(nums1, nums2)