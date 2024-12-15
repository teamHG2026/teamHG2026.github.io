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



function updateText() {
    const textBox = document.getElementById("text01");
    const screenWidth = window.innerWidth;

    let textContent = `<p> 산속 작은 마을에서 온 레비는 부적과 장승을 사용하여 적에게 디버프를 걸며 팀원들을 서포트해줍니다 <br>
                어릴 때부터 장승과 부적을 가지고 놀며 항상 만지다 보니 무기 친화력이 가장 높습니다 <br>
                그녀가 가지고 있는 부적은 스스로 만든 부적이라 어느 부적보다 효과가 강력합니다 <br>
                항상 밝고 무서운 게 없는 그녀는 팀을 이끄는 것에 조금 부담감이 있지만 그 누구보다 노력합니다</p>`;

    // 화면 크기 1250px 이하
    if (screenWidth <= 1250 && screenWidth > 750) {
        textContent = `<p> 산속 작은 마을에서 온 레비는 부적과 장승을 <br>
                사용하여 적에게 디버프를 걸며 팀원들을 서포트해줍니다 <br>
                어릴 때부터 장승과 부적을 가지고 놀며 항상 만지다 보니 무기 친화력이 가장 높습니다 <br>
                그녀가 가지고 있는 부적은 스스로 만든 부적이라 어느 부적보다 효과가 강력합니다 <br>
                항상 밝고 무서운 게 없는 그녀는 팀을 이끄는 것에 조금 부담감이 있지만 <br>
                그 누구보다 노력합니다</p>`;
    }
    // 화면 크기 750px 이하
    else if (screenWidth <= 750 && screenWidth > 550) {
        textContent = `<p> 산속 작은 마을에서 온 레비는 부적과 장승을 사용하여 <br>
                적에게 디버프를 걸며 팀원들을 서포트해줍니다 <br>
                어릴 때부터 장승과 부적을 가지고 놀며 항상 만지다 보니 무기 친화력이 가장 높습니다 <br>
                그녀가 가지고 있는 부적은 스스로 만든 부적이라 <br>
                어느 부적보다 효과가 강력합니다 <br>
                항상 밝고 무서운 게 없는 그녀는 팀을 이끄는 것에 <br>
                조금 부담감이 있지만 그 누구보다 노력합니다</p>`;
    }
    // 화면 크기 550px 이하
    else if (screenWidth <= 550) {
        textContent = `<p> 산속 작은 마을에서 온 레비는 부적과 장승을 사용하여 <br>
                적에게 디버프를 걸며 팀원들을 서포트해줍니다 <br>
                어릴 때부터 장승과 부적을 가지고 놀며 항상 <br>
                만지다 보니 무기 친화력이 가장 높습니다 <br>
                그녀가 가지고 있는 부적은 스스로 만든 부적이라 <br>
                어느 부적보다 효과가 강력합니다 <br>
                항상 밝고 무서운 게 없는 그녀는 팀을 이끄는 것에 <br>
                조금 부담감이 있지만 그 누구보다 노력합니다</p>`;
    }

    // 텍스트 업데이트
    textBox.innerHTML = textContent;
}




// 스킬 이벤트 리스너 설정
function setupSkillListeners() {
    const box03 = document.querySelector('#box03');
    const text02 = document.querySelector('#text02');

    document.querySelector('.box02.skill').addEventListener('click', function () {
        if (window.innerWidth <= 550) {
            text02.innerHTML = `
                <h1><span class="text002">낙인</span></h1>
                <br>
                부적을 사용하여 저주를 내린다 <br>
                매 초마다 1씩 대미지를 주고 5초 <br>
                뒤 부적이 터지며 100% 피해를 <br>
                추가로 입힌다
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">낙인</span></h1>
                <br>
                부적을 사용하여 저주를 내린다 <br>
                매 초마다 1씩 대미지를 주고 5초 뒤 <br>
                부적이 터지며 100% 피해를 <br>
                추가로 입힌다
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">낙인</span></h1>
                <br>
                부적을 사용하여 저주를 내린다 <br>
                매 초마다 1씩 대미지를 주고 5초 뒤 <br>
                부적이 터지며 100% 피해를 추가로 <br>
                입힌다
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">낙인</span></h1>
                <br>
                부적을 사용하여 저주를 내린다 <br>
                매 초마다 1씩 대미지를 주고 5초 뒤 <br>
                부적이 터지며 100% 피해를 추가로 <br>
                입힌다
            `;
        }
        box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
    });

    document.querySelector('.box02.skill2').addEventListener('click', function () {
        if (window.innerWidth <= 550) {
            text02.innerHTML = `
                <h1><span class="text002">혼령인도</span></h1>
                <br>
                장승을 소환하여 주변의 적에게 <br>
                피해를 주고 장승쪽으로 <br>
                끌어당긴다
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">혼령인도</span></h1>
                <br>
                장승을 소환하여 주변의 적에게 <br>
                피해를 주고 장승쪽으로 끌어당긴다
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">혼령인도</span></h1>
                <br>
                장승을 소환하여 주변의 적에게 <br>
                피해를 주고 장승쪽으로 끌어당긴다
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">혼령인도</span></h1>
                <br>
                장승을 소환하여 주변의 적에게 <br>
                피해를 주고 장승쪽으로 끌어당긴다
            `;
        }
        box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
    });
}

// 초기화 함수
function initialize() {
    setupSkillListeners();
    updateText();
}

// 화면 크기 변경 시 텍스트 업데이트 및 스킬 이벤트 리스너 초기화
window.addEventListener('resize', function () {
    setupSkillListeners(); // 화면 크기가 변경되면 리스너를 다시 초기화
    updateText(); // 텍스트도 업데이트
});

// 초기화 실행
initialize();