/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} не возвращайте ничего, вместо этого модифицируйте nums1.
 */

module.exports = function merge(nums1, m, nums2, n) {
    for (let i in nums2) {
        nums1.splice(m, n, nums2[i])
        n--
        m++
    }
}

const nums1 = [46, 55, 88, 0, 0, 0, 0], m = 3, nums2 = [18, 29, 80, 90], n = 4

function merge(nums1, m, nums2, n) {
    for (let i in nums2) {
        nums1.splice(m, n, nums2[i])
        m++
        n--
    }
    console.log(nums1)
}

merge(nums1, m, nums2, n)