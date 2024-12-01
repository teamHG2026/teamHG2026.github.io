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

//up 버튼 애니메이션

window.addEventListener('scroll', function() {
    var story = document.querySelector('#story'); // #story 요소 선택
    var buttonUp = document.querySelector('#button_up'); // #button_up 버튼 선택
    var windowHeight = window.innerHeight; // 윈도우 높이
    var scrollY = window.scrollY; // 현재 스크롤 위치

    // #story 요소의 위치 계산
    var storyTop = story.getBoundingClientRect().top + scrollY;
    var storyBottom = storyTop + story.offsetHeight;

    // #story가 화면에 다 보일 때 버튼을 나타나게 함
    if (scrollY + windowHeight > storyBottom - 100) { // #story가 화면에 거의 다 보일 때
        story.classList.add('visible'); // #story 애니메이션 시작
        buttonUp.style.opacity = 1; // 버튼을 보이게 함
    } else {
        story.classList.remove('visible'); // #story 애니메이션 초기화
        buttonUp.style.opacity = 0; // 버튼을 숨김
    }
});

//각 박스 스크롤 애니메이션

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
    var boxes = document.querySelectorAll('#gameEX'); // 모든 story 요소 선택
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
    var boxes = document.querySelectorAll('#profile'); // 모든 story 요소 선택
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
    var boxes = document.querySelectorAll('#gameIMG'); // 모든 story 요소 선택
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
    var boxes = document.querySelectorAll('#made_in'); // 모든 story 요소 선택
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

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('#G_logo'); // 모든 story 요소 선택
    var windowHeight = window.innerHeight; // 윈도우 높이
    var scrollY = window.scrollY; // 현재 스크롤 위치

    boxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top + scrollY; // 요소의 실제 상단 위치
        if (scrollY + windowHeight > boxTop + 100) { // 100px 위에서 나타나도록
            box.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
        }
    });
});

// 팀 소속 애니메이션
window.addEventListener('scroll', triggerScrollAnimation);

function triggerScrollAnimation() {
    const boxes = document.querySelectorAll('.Pro_box01'); // 모든 Pro_box01 요소
    const windowHeight = window.innerHeight; // 윈도우 높이

    boxes.forEach(function (box) {
        const boxTop = box.getBoundingClientRect().top; // 화면 기준의 상단 위치
        if (boxTop < windowHeight - 100) { // 100px 이전에 나타나도록 조건 수정
            box.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
        } else {
            box.classList.remove('visible'); // 화면 밖에 있으면 visible 클래스를 제거
        }
    });
}

// 팀 소속 슬라이드쇼
$(function () {
    let currentIndex = 0; // 현재 슬라이드 인덱스
    const slideImages = [
        [
            { src: 'img/려화/소속_려화.png', href: 'https://teamHG2026.github.io/Ryeohwa' },
            { src: 'img/실루엣/소속/소속_소운.png', href: '#' },
            { src: 'img/실루엣/소속/소속_도월.png', href: '#' },
            { src: 'img/실루엣/소속/소속_연이.png', href: '#' },
        ],
        [
            { src: 'img/레비/소속_레비.png', href: 'https://teamHG2026.github.io/Ryeohwa' },
            { src: 'img/실루엣/소속/소속_망나니.png', href: '#' },
            { src: 'img/실루엣/소속/소속_서화.png', href: '#' },
            { src: 'img/실루엣/소속/소속_앨리스.png', href: '#' },
        ],
        [
            { src: 'img/알리/소속_알리.png', href: 'https://teamHG2026.github.io/Ryeohwa' },
            { src: 'img/실루엣/소속/소속_해태.png', href: '#' },
            { src: 'img/실루엣/소속/소속_사린.png', href: '#' },
            { src: 'img/실루엣/소속/소속_해랑.png', href: '#' },
        ],
        [
            { src: 'img/화월/소속_화월.png', href: 'https://teamHG2026.github.io/Ryeohwa' },
            { src: 'img/실루엣/소속/소속_비.png', href: '#' },
            { src: 'img/실루엣/소속/소속_소르귀.png', href: '#' },
            { src: 'img/실루엣/소속/소속_쥐돌이.png', href: '#' },
        ],
        [
            { src: 'img/하늘비/소속_하늘비 (아기).png', href: 'https://teamHG2026.github.io/Ryeohwa' },
            { src: 'img/실루엣/소속/소속_마야.png', href: '#' },
            { src: 'img/실루엣/소속/소속_이류.png', href: '#' },
            { src: 'img/실루엣/소속/소속_주지탈.png', href: '#' },
        ],
    ]; // 슬라이드마다 보여줄 이미지 세트

    const $slides = $('.Pro_box01 img'); // 슬라이드 내부 이미지
    const totalSlides = slideImages.length; // 슬라이드 세트 개수

    function updateSlides() {
        const images = slideImages[currentIndex];
        const $slides = $('.Pro_box01 img');
    
        $slides.each(function (index) {
            const image = images[index];
            if (image) {
                const $anchor = $(this).parent('a');
                $(this).attr('src', image.src);
                $anchor.attr('href', image.href);
    
                // 디버깅: 콘솔에 현재 링크 표시
                console.log('Link updated to:', image.href);
            }
        });
    
        // 애니메이션 초기화
        const boxes = document.querySelectorAll('.Pro_box01');
        boxes.forEach((box) => {
            box.classList.remove('visible');
            box.style.transition = 'none';
        });
    
        setTimeout(() => {
            boxes.forEach((box) => {
                box.style.transition = 'opacity 1s ease, transform 1s ease';
            });
            triggerScrollAnimation();
        }, 50);
    }

    // 왼쪽 버튼 클릭
    $('#btn-left').on('click', function () {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1; // 이전 슬라이드로
        updateSlides();
    });

    // 오른쪽 버튼 클릭
    $('#btn-right').on('click', function () {
        currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0; // 다음 슬라이드로
        updateSlides();
    });

    // 초기화: 첫 슬라이드 이미지 적용
    updateSlides();
});

//게임 설명 애니메이션

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('#box02'); // 모든 #story 요소 선택
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
    var boxes = document.querySelectorAll('#text02'); // 모든 #story 요소 선택
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
    var boxes = document.querySelectorAll('#box03'); // 모든 #story 요소 선택
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
    var boxes = document.querySelectorAll('#text03'); // 모든 #story 요소 선택
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
    var boxes = document.querySelectorAll('#box04'); // 모든 #story 요소 선택
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
    var boxes = document.querySelectorAll('#text04'); // 모든 #story 요소 선택
    var windowHeight = window.innerHeight; // 윈도우 높이
    var scrollY = window.scrollY; // 현재 스크롤 위치

    boxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top + scrollY; // 요소의 실제 상단 위치
        if (scrollY + windowHeight > boxTop + 100) { // 100px 위에서 나타나도록
            box.classList.add('visible'); // visible 클래스를 추가하여 애니메이션 실행
        }
    });
});

//플레이 화면 애니메이션 (슬라이드쇼)

$(function() {
    const images = [
        'img/실루엣/소속/소속_망나니.png',   // 첫 번째 이미지
        'img/실루엣/소속/소속_해랑.png',   // 두 번째 이미지
        'img/실루엣/소속/소속_사린.png',   // 세 번째 이미지
    ]; // 사용할 이미지들

    let currentIndex = 0; // 현재 표시된 이미지 인덱스
    let isDragging = false; // 마우스를 드래그 중인지 여부
    let startX = 0; // 드래그 시작 X 좌표
    let moveDistance = 0; // 이동 거리

    // 마우스 클릭 시 드래그 시작
    $('#gameIMG').on('mousedown', function(event) {
        isDragging = true; // 드래그 시작
        startX = event.pageX; // 마우스의 현재 X 좌표
        moveDistance = 0; // 이동 거리 초기화
    });

    // 마우스를 움직일 때 (드래그 중일 때만)
    $('#gameIMG').on('mousemove', function(event) {
        if (!isDragging) return; // 드래그 중이 아니면 종료

        moveDistance = event.pageX - startX; // 마우스 이동 거리 계산

        // 100px 이상 드래그 시에만 이미지 변경
        if (moveDistance > 100) {  // 오른쪽으로 100px 이상 이동했을 때
            changeImage('next');
            startX = event.pageX; // 새로운 시작 X 좌표로 갱신
            moveDistance = 0; // 이동 거리 리셋
        } else if (moveDistance < -100) { // 왼쪽으로 100px 이상 이동했을 때
            changeImage('prev');
            startX = event.pageX; // 새로운 시작 X 좌표로 갱신
            moveDistance = 0; // 이동 거리 리셋
        }
    });

    // 마우스 버튼을 떼면 드래그 종료
    $('#gameIMG').on('mouseup', function() {
        if (!isDragging) return;
        isDragging = false; // 드래그 종료
        moveDistance = 0; // 이동 거리 초기화
    });

    // 마우스가 게임 이미지 밖으로 나가면 드래그 종료
    $('#gameIMG').on('mouseleave', function() {
        if (!isDragging) return;
        isDragging = false; // 드래그 종료
        moveDistance = 0; // 이동 거리 초기화
    });

    // 이미지 변경 함수
    function changeImage(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % images.length; // 다음 이미지로 이동
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // 이전 이미지로 이동
        }
        $('#img01 img').attr('src', images[currentIndex]); // 이미지 변경
    }

    // 처음 페이지가 로드될 때 첫 이미지 세팅
    $('#img01 img').attr('src', images[currentIndex]);

    // visible 클래스를 추가하여 처음부터 애니메이션 실행
    $('#gameIMG').addClass('visible');
});