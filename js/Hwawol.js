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

    let textContent = `<p> 산속 호랑이가 많은 곳에서 온 화월이는 커다란 검과 단단한 방패를 사용하여 적을 막고 큰 치명타를 입힙니다 <br>
                오랫동안 산속에 살아 온 그녀는 생활력이 높아 어느 곳에 가든 잘 지내는 모습을 보여줍니다 <br>
                장난꾸러기 팀원들 때문에 항상 골머리를 앓으며 사고 친 것을 수습하는 등 뒤처리 담당이기도 합니다 <br>
                그녀의 단단하고 큰 방패로 적을 해치며 앞으로 나아가는 모습은 용맹하며 팀의 사기를 높여줍니다</p>`;

    // 화면 크기 1250px 이하
    if (screenWidth <= 1250 && screenWidth > 750) {
        textContent = `<p> 산속 호랑이가 많은 곳에서 온 화월이는 커다란 검과 단단한 방패를 사용하여 <br>
                적을 막고 큰 치명타를 입힙니다 <br>
                오랫동안 산속에 살아 온 그녀는 생활력이 높아 어느 곳에 가든 <br>
                잘 지내는 모습을 보여줍니다 <br>
                장난꾸러기 팀원들 때문에 항상 골머리를 앓으며 사고 친 것을 수습하는 등 <br>
                뒤처리 담당이기도 합니다 <br>
                그녀의 단단하고 큰 방패로 적을 해치며 앞으로 나아가는 모습은 <br>
                용맹하며 팀의 사기를 높여줍니다</p>`;
    }
    // 화면 크기 750px 이하
    else if (screenWidth <= 750 && screenWidth > 550) {
        textContent = `<p> 산속 호랑이가 많은 곳에서 온 화월이는 커다란 검과 <br>
                단단한 방패를 사용하여 적을 막고 큰 치명타를 입힙니다 <br>
                오랫동안 산속에 살아 온 그녀는 생활력이 높아 어느 곳에 <br>
                가든 잘 지내는 모습을 보여줍니다 <br>
                장난꾸러기 팀원들 때문에 항상 골머리를 앓으며 사고 <br>
                친 것을 수습하는 등 뒤처리 담당이기도 합니다 <br>
                그녀의 단단하고 큰 방패로 적을 해치며 앞으로 나아가는 <br>
                모습은 용맹하며 팀의 사기를 높여줍니다</p>`;
    }
    // 화면 크기 550px 이하
    else if (screenWidth <= 550) {
        textContent = `<p> 산속 호랑이가 많은 곳에서 온 화월이는 커다란 검과 <br>
                단단한 방패를 사용하여 적을 막고 큰 치명타를 입힙니다 <br>
                오랫동안 산속에 살아 온 그녀는 생활력이 높아 어느 곳에 <br>
                가든 잘 지내는 모습을 보여줍니다 <br>
                장난꾸러기 팀원들 때문에 항상 골머리를 앓으며 사고 <br>
                친 것을 수습하는 등 뒤처리 담당이기도 합니다 <br>
                그녀의 단단하고 큰 방패로 적을 해치며 앞으로 나아가는 <br>
                모습은 용맹하며 팀의 사기를 높여줍니다</p>`;
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
                <h1><span class="text002">접근 금지</span></h1>
                <br>
                공중에 뜬 상태에서 힘껏 내려쳐 <br>
                공격한다 적에게 100% 피해를 <br>
                입히고 3초간 기절시킨다 <br>
                스킬강화 : 피해량 증가
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">접근 금지</span></h1>
                <br>
                공중에 뜬 상태에서 힘껏 내려쳐 공격한다 <br>
                적에게 100% 피해를 입히고 3초간 <br>
                기절시킨다 <br>
                스킬강화 : 피해량 증가(10%, 20%, 30%)
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">접근 금지</span></h1>
                <br>
                공중에 뜬 상태에서 힘껏 내려쳐 공격한다 <br>
                적에게 100% 피해를 입히고 3초간 <br>
                기절시킨다 <br>
                스킬강화 : 피해량 증가(10%, 20%, 30%)
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">접근 금지</span></h1>
                <br>
                공중에 뜬 상태에서 힘껏 내려쳐 공격한다 <br>
                적에게 100% 피해를 입히고 3초간 <br>
                기절시킨다 <br>
                스킬강화 : 피해량 증가(10%, 20%, 30%)
            `;
        }
        box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
    });

    document.querySelector('.box02.skill2').addEventListener('click', function () {
        if (window.innerWidth <= 550) {
            text02.innerHTML = `
                <h1><span class="text002">철갑</span></h1>
                <br>
                방패로 자신의 몸을 지켜 피해를 <br>
                막는다
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">철갑</span></h1>
                <br>
                방패로 자신의 몸을 지켜 피해를 막는다
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">철갑</span></h1>
                <br>
                방패로 자신의 몸을 지켜 피해를 막는다
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">철갑</span></h1>
                <br>
                방패로 자신의 몸을 지켜 피해를 막는다
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