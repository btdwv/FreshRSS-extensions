'use strict';
window.onload = function () {
    // Initial addTitle for situation where 'no new item changes triggered later' (https://github.com/FreshRSS/Extensions/issues/183)
    addTitle();
    // Insert entry monitor for autoloading list
    monitorEntry(addTitle);
    function monitorEntry(monitorCallback) {
        const targetNode = document.getElementById('stream');
        const config = { attributes: false, childList: true, subtree: false };
        const callback = function (mutationsList, observer) {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    monitorCallback(mutationsList);
                }
            }
        };
        const observer = new MutationObserver(callback);
        if (targetNode) {
            observer.observe(targetNode, config);
        }
    }
};

function addTitle(mList) {
    // 获取所有class为‘item-title’的元素
    var itemTitles = document.querySelectorAll('.item-title');

    // 遍历每个元素并为其添加title属性
    itemTitles.forEach(function (itemTitle) {
        var titleValue = itemTitle.textContent; // 获取a标签的内容作为title值
        itemTitle.setAttribute('title', titleValue); // 为元素添加title属性
    });
}
