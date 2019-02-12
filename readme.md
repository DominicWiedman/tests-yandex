A. Картинка с заданной вариативностью

Дизайнер разработал логотип. Его потребуется использовать в самых разных условиях. Чтобы это было максимально удобно, сверстайте его с помощью одного HTML-элемента на чистом CSS.
Использовать картинки (даже через data:uri) нельзя.

Примечания
Общая ширина: 180px
Общая высота: 180px
Высота желтой секции: 90px
Ширина белой секции: 90px
Радиус скругления: 9px
Цвета:
черный: #0c0c0c
желтый: #f8e34b
белый: #eeedef
тень: #c8c8c8, 178 градусов

Решение нужно предоставить в виде CSS-файла.
Ваш файл будет подключен как solution.css к HTML-странице вида:

<!DOCTYPE html>  
<html>  
    <head>  
        <meta http-equiv="Content-Security-Policy" content="default-src ’self’; style-src ’unsafe-inline’ ’self’"/>  
        <style>  
            div {  
                width: 180px;  
                height: 180px;  
            }  
        </style>  
        <link rel="stylesheet" href="solution.css">  
    </head>  
    <body>  
        <div></div>  
    </body>  
</html>


B. Поиск чисел в массиве с определённой суммой
Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k . 


Пример:

Вход: nums = [10, 15, 3, 7], k = 17
Выход: true
Примечания
В качестве решения предоставьте функцию следующего вида:

/** @returns Boolean */  
module.exports = function(nums, k) {  
   // ваш код здесь  
}


C. Объединение отсортированных массивов
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	input.js
Вывод	output.json
Вам даны два отсортированных целочисленных массива nums1 и nums2. Нужно поместить все элементы nums2 в nums1 так, чтобы элементы итогового массива остались отсортированными.

Формат ввода
[46,55,88,0,0,0,0] 3 [18,29,80,90] 4

Примечание:
количество элементов в массивах nums1 и nums2 равны n и m соотвественно;
можно считать, что в массиве nums1 зарезервированно место для всех элементов (n + m) и заполнены нулями;
результат должен сохраниться в переменной nums1, результат функции явно возвращать не обязательно.
/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} не возвращайте ничего, вместо этого модифицируйте nums1.
 */
module.exports = function merge(nums1, m, nums2, n) {
   // ваш код здесь
}