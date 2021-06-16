document.addEventListener('DOMContentLoaded', setVal)


var targetScrollPos;
var scrollPos = 0;
var nowScrollPos = pageXOffset;
var scrollInterval;

function setVal() {
    console.log("loaded!!!!");
    var menu = document.querySelectorAll('#menus ul li');
    var contents = document.querySelectorAll('#contents > section');

    console.log(contents);
    for (var i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', menuClick);

        function menuClick() {
            var index = this.getAttribute('clickVal');
            targetScrollPos = contents[index].offsetTop;
            // 위치값을 가져와야하는데 section은 4개(0~3)
            //메뉴버튼은 5개 입니다. section으로 갈수있는 곳을 더 설정해야할듯 합니다. 임시로 메뉴의 가운데 li를 없애고, clickVal을 수정하여 테스트 하였습니다.

            //console.log(targetScrollPos);

            //window.scroll(0, targetScrollPos);

            scrollInterval = setInterval(moveTo, 50);
        }

    }
}

window.addEventListener('scroll', scrollFn);

function scrollFn() {
    nowScrollPos = pageYOffset; // pageX 가 아니라 y입니다. 
    scrollPos = nowScrollPos;
}

function moveTo() {
    scrollPos += (targetScrollPos - nowScrollPos) * 0.3;
    nowScrollPos = scrollPos;
    window.scroll(0, scrollPos);
    console.log(scrollPos);

    // 아래 인터벌 함수를 멈추기 위한 조건은...Math함수입니다. 소문자가 아닙니다.
    if (Math.abs(targetScrollPos - scrollPos) <= 1) {
        window.scroll(0, targetScrollPos);
        nowScrollPos = targetScrollPos;
        clearInterval(scrollInterval);
    }
}
