'use strict';
window.onload = function () {
    'use strict';

    let urlPathname = window.location.pathname;
    let urlQuery = window.location.search;
    let searchParams = new URLSearchParams(urlQuery);
    let param_a = searchParams.get('a');
    let param_get = searchParams.get('get');
    if (/*isExist(param_a) === false || */isExist(param_get) === false) {
        return 0;
    }
    let selectParam = `#${param_get} > a`;
    let element = document.querySelector(selectParam);
    if (isExist(element) === false) {
        return 0;
    }
    if (isInViewport(element) === true) {
        return 0;
    }

    element.scrollIntoView({ behavior: "smooth", block: "center" });
    return 0;
};

function isExist(val) {
    if (val === null || val === undefined) {
        return false;
    } else {
        return true;
    }
}

function isInViewport(element) {
    let bounding = element.getBoundingClientRect();
    let isInViewport = (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    if (isInViewport) {
        return true;
    } else {
        return false;
    }
}