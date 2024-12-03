let menuOn = false; // 메뉴가 오픈 상태인지를 확인하기 위한 변수

// 로고(#logo)를 클릭하면 애니메이션이 실행됨
$('#logo').on('click', function(){
    console.log("ok");
    if(!menuOn) {
        $('#menu_t').stop().animate({
            height: 500,
            opacity: 1.0
        }, 500); // 애니메이션 시간 200 = 0.2초
        setTimeout(function(){
            $('#menu_t > div').each(function(index){
                $(this).stop().animate({
                left: 0,
                opacity: 1.0
            }, 150 * (index+1)); // 메뉴 아이템의 순서에 따라 애니메이션 시간이 달라짐 (150ms x 순서)
            });
            
            menuOn = true;
        }, 600); // 메뉴 아이템에 적용되는 애니메이션의 딜레이 시간 (100 = 0.1초)
    }
    else {
        $('#menu_t > div').stop().animate({
            left: 300, // #mainmenu>div의 초기값
            opacity: 0.0 // #mainmenu>div의 초기값
        }, 200);
        
        setTimeout(function(){
            $('#menu_t').stop().animate({
                height: 0 // #mainmenu의 초기값
            }, 200);
            menuOn = false;
        }, 100);
    }
});

//각 박스 애니메이션

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('#story'); // 모든 story 요소 선택
    var windowHeight = window.innerHeight; // 윈도우 높이
    var scrollY = window.scrollY; // 현재 스크롤 위치

    boxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top + scrollY; // 요소의 실제 상단 위치
        if (scrollY + windowHeight > boxTop + 100) { // 100px 위에서 나타나도록
            box.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
        }
    });
});

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('#skill'); // 모든 story 요소 선택
    var windowHeight = window.innerHeight; // 윈도우 높이
    var scrollY = window.scrollY; // 현재 스크롤 위치

    boxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top + scrollY; // 요소의 실제 상단 위치
        if (scrollY + windowHeight > boxTop + 100) { // 100px 위에서 나타나도록
            box.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
        }
    });
});

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('#chara_team'); // 모든 story 요소 선택
    var windowHeight = window.innerHeight; // 윈도우 높이
    var scrollY = window.scrollY; // 현재 스크롤 위치

    boxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top + scrollY; // 요소의 실제 상단 위치
        if (scrollY + windowHeight > boxTop + 100) { // 100px 위에서 나타나도록
            box.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
        }
    });
});

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('#team'); // 모든 story 요소 선택
    var windowHeight = window.innerHeight; // 윈도우 높이
    var scrollY = window.scrollY; // 현재 스크롤 위치

    boxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top + scrollY; // 요소의 실제 상단 위치
        if (scrollY + windowHeight > boxTop + 100) { // 100px 위에서 나타나도록
            box.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
        }
    });
});

    // DOM이 로드된 후 실행
    document.addEventListener('DOMContentLoaded', function () {
    // 이미지 변경할 대상 요소
    const box03 = document.querySelector('#box03');
    const text02 = document.querySelector('#text02'); // 텍스트 변경할 요소

    // 초기 상태 설정
    box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
    box03.style.backgroundSize = 'contain';
    box03.style.backgroundRepeat = 'no-repeat';
    box03.style.backgroundPosition = 'center';
    text02.innerHTML = `
        <h1><span class="text002">낙인</span></h1>
        <br>
        부적을 사용하여 저주를 내린다 <br>
        매 초마다 1씩 대미지를 주고 5초 뒤 부적이 터지며 100% 피해를 추가로 입힌다 <br>
        효과가 지속될동안 이속이 느려진다
    `;

    // 이벤트 리스너 추가
    document.querySelector('.box02.skill').addEventListener('click', function () {
        box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
        text02.innerHTML = `
            <h1><span class="text002">낙인</span></h1>
            <br>
            부적을 사용하여 저주를 내린다 <br>
            매 초마다 1씩 대미지를 주고 5초 뒤 부적이 터지며 100% 피해를 추가로 입힌다 <br>
            효과가 지속될동안 이속이 느려진다
        `;
    });

    document.querySelector('.box02.skill2').addEventListener('click', function () {
        box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
        text02.innerHTML = `
            <h1><span class="text002">혼령인도</span></h1>
            <br>
            장승을 소환하여 주변의 적에게 피해를 주고<br>
            장승쪽으로 끌어당긴다
        `;
    });
});