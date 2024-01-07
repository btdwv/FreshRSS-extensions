'use strict';
(function () {
    addTitle();
}());

function addTitle() {
    // 获取所有class为‘item-title’的元素
    var itemTitles = document.querySelectorAll('.item-title');

    // 遍历每个元素并为其添加title属性
    itemTitles.forEach(function (itemTitle) {
        var titleValue = itemTitle.textContent; // 获取a标签的内容作为title值
        itemTitle.setAttribute('title', titleValue); // 为元素添加title属性
    });
}
