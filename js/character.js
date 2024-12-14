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

//550 뷰 메뉴바 슬라이드
document.getElementById("logo").addEventListener("click", function () {
    const activeCheckbox = document.getElementById("active");
    activeCheckbox.checked = !activeCheckbox.checked; // 체크박스 상태 토글
});

//팀 로고 박스 스크롤 애니메이션

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

// 하늘비 이미지 애니메이션
// #team-5:nth-child(1)는 id가 team-5인 형제 요소들 중에서 첫 번째. 하늘비 이미지가 들어있는 요소 
$('#team-5:nth-child(1)').on('mouseenter', function(){
    // 원래 이미지 페이드아웃 시간 0.2초, 페이드아웃이 끝나면 이미지 교체 후 0.05초 동안 페이드인
    $('#team-5:nth-child(1) img').stop()
            .animate({'opacity': 0}, 200, function(){
                $('#team-5:nth-child(1) img').attr('src', 'img/하늘비/chara_하늘비 (성체).png').animate({'opacity': 1}, 50)});
});
$('#team-5:nth-child(1)').on('mouseleave', function(){
    $('#team-5:nth-child(1) img').stop()
            .animate({'opacity': 0}, 200, function(){
                $('#team-5:nth-child(1) img').attr('src', 'img/하늘비/chara_하늘비 (아기).png').animate({'opacity': 1}, 50)});
});