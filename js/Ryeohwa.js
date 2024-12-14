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


//뷰 1030px 세계관

function updateText() {
    const textBox = document.getElementById("text01");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1250) {
        textBox.innerHTML = `
            <p> 활발한 화산지역에서 온 려화는 화려하게 쌍검과 뜨거운 불을 사용하여 <br>
                적을 정화하고 소멸시킵니다 <br>
                팀의 최전방에 서서 팀을 이끌며 적을 강하고 빠르게 처치합니다 <br>
                그 누구보다 책임감과 사명감이 강하여 한번 맡은 임무는 항상 잘 해결이 됩니다 <br>
                항상 침착하고 표정의 변화가 크게없는 그녀이지만 <br>
                화가 나면 근처의 공기는 견디기 힘들정도로 온도가 높아집니다</p>
        `;
    } else {
        textBox.innerHTML = `
            <p> 활발한 화산지역에서 온 려화는 화려하게 쌍검과 뜨거운 불을 사용하여 적을 정화하고 소멸시킵니다 <br>
                팀의 최전방에 서서 팀을 이끌며 적을 강하고 빠르게 처치합니다 <br>
                그 누구보다 책임감과 사명감이 강하여 한번 맡은 임무는 항상 잘 해결이 됩니다 <br>
                항상 침착하고 표정의 변화가 크게없는 그녀이지만 <br>
                화가 나면 근처의 공기는 견디기 힘들정도로 온도가 높아집니다</p>
        `;
    }
}

// 초기 실행
updateText();

// 화면 크기 변경 시 텍스트 업데이트
window.addEventListener("resize", updateText);

//뷰 750px 세계관

function updateText() {
    const textBox = document.getElementById("text01");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 750) {
        textBox.innerHTML = `
            <p> 활발한 화산지역에서 온 려화는 화려하게 <br>
                쌍검과 뜨거운 불을 사용하여 <br>
                적을 정화하고 소멸시킵니다 <br>
                팀의 최전방에 서서 팀을 이끌며 적을 강하고 <br>
                빠르게 처치합니다 <br>
                그 누구보다 책임감과 사명감이 강하여 <br>
                한 번 맡은 임무는 항상 잘 해결이 됩니다 <br>
                항상 침착하고 표정의 변화가 크게없는 그녀이지만 <br>
                화가 나면 근처의 공기는 견디기 힘들정도로 <br>
                온도가 높아집니다</p>
        `;
    } else {
        textBox.innerHTML = `
            <p> 활발한 화산지역에서 온 려화는 화려하게 쌍검과 뜨거운 불을 사용하여 적을 정화하고 소멸시킵니다 <br>
                팀의 최전방에 서서 팀을 이끌며 적을 강하고 빠르게 처치합니다 <br>
                그 누구보다 책임감과 사명감이 강하여 한번 맡은 임무는 항상 잘 해결이 됩니다 <br>
                항상 침착하고 표정의 변화가 크게없는 그녀이지만 <br>
                화가 나면 근처의 공기는 견디기 힘들정도로 온도가 높아집니다</p>
        `;
    }
}

// 초기 실행
updateText();

// 화면 크기 변경 시 텍스트 업데이트
window.addEventListener("resize", updateText);

//뷰 550px 세계관

function updateText() {
    const textBox = document.getElementById("text01");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 550) {
        textBox.innerHTML = `
            <p> 활발한 화산지역에서 온 려화는 화려하게 <br>
                쌍검과 뜨거운 불을 사용하여 적을 <br>
                정화하고 소멸시킵니다 <br>
                팀의 최전방에 서서 팀을 이끌며 적을 강하고 <br>
                빠르게 처치합니다 그 누구보다 <br>
                책임감과 사명감이 강하여 한 번 맡은 <br>
                임무는 항상 잘 해결이 됩니다 <br>
                항상 침착하고 표정의 변화가 크게없는 <br>
                그녀이지만  화가 나면 근처의 공기는 <br>
                견디기 힘들정도로 온도가 높아집니다</p>
        `;
    } else {
        textBox.innerHTML = `
            <p> 활발한 화산지역에서 온 려화는 화려하게 쌍검과 뜨거운 불을 사용하여 적을 정화하고 소멸시킵니다 <br>
                팀의 최전방에 서서 팀을 이끌며 적을 강하고 빠르게 처치합니다 <br>
                그 누구보다 책임감과 사명감이 강하여 한번 맡은 임무는 항상 잘 해결이 됩니다 <br>
                항상 침착하고 표정의 변화가 크게없는 그녀이지만 <br>
                화가 나면 근처의 공기는 견디기 힘들정도로 온도가 높아집니다</p>
        `;
    }
}

// 초기 실행
updateText();

// 화면 크기 변경 시 텍스트 업데이트
window.addEventListener("resize", updateText);


    // 초기 이벤트 리스너 추가
    function setupSkillListeners() {
        const box03 = document.querySelector('#box03');
        const text02 = document.querySelector('#text02');
    
        document.querySelector('.box02.skill').addEventListener('click', function () {
            if (window.innerWidth <= 750) {
                text02.innerHTML = `
                    <h1><span class="text002">불꽃베기</span></h1>
                    <br>
                    주변의 적에게 150%의 피해를 <br>
                    입히고 화상을 입힌다
                `;
            } else {
                text02.innerHTML = `
                    <h1><span class="text002">불꽃베기</span></h1>
                    <br>
                    주변의 적에게 150%의 피해를 입히고<br>
                    화상을 입힌다
                `;
            }
            box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
        });
    
        document.querySelector('.box02.skill2').addEventListener('click', function () {
            if (window.innerWidth <= 750) {
                text02.innerHTML = `
                    <h1><span class="text002">회전베기</span></h1>
                    <br>
                    회전하며 주변의 적에게 <br>200%의 피해를 입힌다
                `;
            } else {
                text02.innerHTML = `
                    <h1><span class="text002">회전베기</span></h1>
                    <br>
                    회전하며 주변의 적에게 200%의<br>
                    피해를 입힌다
                `;
            }
            box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
        });
    }
    
    // 초기화
    setupSkillListeners();
    
    // 화면 크기 변화에 따른 업데이트
    window.addEventListener('resize', function () {
        setupSkillListeners(); // 화면 크기가 변경되면 리스너를 다시 초기화
    });