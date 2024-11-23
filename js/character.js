let menuOn = false; // 메뉴가 오픈 상태인지를 확인하기 위한 변수

// 로고(#logo)를 클릭하면 애니메이션이 실행됨
$('#logo').on('click', function(){
    console.log("ok");
    if(!menuOn) {
        $('#menu_t').stop().animate({
            top: 175,
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
            left: 300, // #mainmenu>p의 초기값
            opacity: 0.0 // #mainmenu>p의 초기값
        }, 200);
        
        setTimeout(function(){
            $('#menu_t').stop().animate({
                top: -500, // #mainmenu의 초기값
                opacity: 0.0 // #mainmenu의 초기값
            }, 200);
            menuOn = false;
        }, 100);
    }
});

// 하늘비 이미지 애니메이션

document.querySelector('.clip2').addEventListener('mouseenter', function() {
    var img = this.querySelector('a img');
    var newImage = "img/하늘비/chara_하늘비 (성체).png";

    img.classList.add('hidden');
    setTimeout(function() {
        img.src = newImage;
        img.classList.remove('hidden');
        img.classList.add('visible');
    }, 300); // 300ms 후 이미지 변경
});

document.querySelector('.clip2').addEventListener('mouseleave', function() {
    var img = this.querySelector('a img');
    var originalImage = "img/하늘비/chara_하늘비 (아기).png";

    img.classList.add('hidden');
    setTimeout(function() {
        img.src = originalImage;
        img.classList.remove('hidden');
        img.classList.add('visible');
    }, 300); // 300ms 후 원래 이미지 변경
});