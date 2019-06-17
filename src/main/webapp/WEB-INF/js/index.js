    // 介绍的js代码
    var proList = document.querySelectorAll("#proList");
    var proTime = null;
    var i = 0;
    for (i = 0; i < proList.length; i++) {
        proList[i].onmouseover = function () {
            clearTimeout(proTime);
            for (i = 0; i < proList.length; i++) {
                proList[i].className = 'back';
            }
            this.className = 'activeList';
        };
        proList[i].onmouseout = function () {
            clearTimeout(proTime);
            proTime = setTimeout(function () {
                for (i = 0; i < proList.length; i++) {
                    proList[i].className = '';
                }
            }, 200);
        };
    }