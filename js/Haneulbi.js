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

    let textContent = `<p> 어디선가 나타난 하늘비는 평소에는 작은 몸으로 돌아다니며 도깨비 불을 사용하지만 적을 막을 힘이 <br>
                부족해질 때는 어른 모습으로 변하여 거대한 솥뚜껑과 방망이를 사용하여 적을 공격하고 적의 공격을 막습니다 <br>
                그녀가 들고 있는 솥뚜껑은 단단하여 특수한 방법을 사용하지 않는 이상 무슨 짓을 하던지 부서지지 않습니다 <br>
                장난스럽고 제멋대로이지만 그녀가 앞에서 적을 막으며 싸우는 모습을 보면 <br>
                그 누구보다 든든합니다</p>`;

    // 화면 크기 1250px 이하
    if (screenWidth <= 1250 && screenWidth > 750) {
        textContent = `<p> 어디선가 나타난 하늘비는 평소에는 작은 몸으로 돌아다니며 도깨비 불을 사용하지만 <br>
                적을 막을 힘이 부족해질 때는 어른 모습으로 변하여 거대한 솥뚜껑과 방망이를 <br>
                사용하여 적을 공격하고 적의 공격을 막습니다 <br>
                그녀가 들고 있는 솥뚜껑은 단단하여 특수한 방법을 사용하지 않는 이상 <br>
                무슨 짓을 하던지 부서지지 않습니다 <br>
                장난스럽고 제멋대로이지만 그녀가 앞에서 적을 막으며 싸우는 모습을 보면 <br>
                그 누구보다 든든합니다</p>`;
    }
    // 화면 크기 750px 이하
    else if (screenWidth <= 750 && screenWidth > 550) {
        textContent = `<p> 어디선가 나타난 하늘비는 평소에는 작은 몸으로 <br>
                돌아다니며 도깨비 불을 사용하지만 적을 막을 힘이 <br>
                부족해질 때는 어른 모습으로 변하여 거대한 솥뚜껑과 <br>
                방망이를 사용하여 적을 공격하고 적의 공격을 막습니다 <br>
                그녀가 들고 있는 솥뚜껑은 단단하여 특수한 방법을 <br>
                사용하지 않는 이상 무슨 짓을 하던지 부서지지 않습니다 <br>
                장난스럽고 제멋대로이지만 그녀가 앞에서 적을 막으며 <br>
                싸우는 모습을 보면 그 누구보다 든든합니다</p>`;
    }
    // 화면 크기 550px 이하
    else if (screenWidth <= 550) {
        textContent = `<p> 어디선가 나타난 하늘비는 평소에는 작은 몸으로 <br>
                돌아다니며 도깨비 불을 사용하지만 적을 막을 힘이 <br>
                부족해질 때는 어른 모습으로 변하여 거대한 솥뚜껑과 <br>
                방망이를 사용하여 적을 공격하고 적의 공격을 막습니다 <br>
                그녀가 들고 있는 솥뚜껑은 단단하여 특수한 방법을 <br>
                사용하지 않는 이상 무슨 짓을 하던지 부서지지 않습니다 <br>
                장난스럽고 제멋대로이지만 그녀가 앞에서 적을 막으며 <br>
                싸우는 모습을 보면 그 누구보다 든든합니다</p>`;
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
                <h1><span class="text002">장난인데</span></h1>
                <br>
                일반 : 도깨비불을 던져 100%의 <br> 
                데미지를 입히고 뒤로 3보 도약한다 <br>
                분노 : 솥뚜껑으로 내려쳐 100%의 <br>
                피해를 입히고 3초간 도발한다 </p>
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">장난인데</span></h1>
                <br>
                일반 : 도깨비불을 던져 100%의 <br> 
                데미지를 입히고 뒤로 3보 도약한다 <br>
                분노 : 솥뚜껑으로 내려쳐 100%의 <br>
                피해를 입히고 3초간 도발한다 </p>
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">장난인데</span></h1>
                <br>
                일반 : 도깨비불을 던져 100%의 <br> 
                데미지를 입히고 뒤로 3보 도약한다 <br>
                분노 : 솥뚜껑으로 내려쳐 100%의 <br>
                피해를 입히고 3초간 도발한다 </p>
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">장난인데</span></h1>
                <br>
                일반 : 도깨비불을 던져 100%의 <br> 
                데미지를 입히고 뒤로 3보 도약한다 <br>
                분노 : 솥뚜껑으로 내려쳐 100%의 <br>
                피해를 입히고 3초간 도발한다 </p>
            `;
        }
        box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
    });

    document.querySelector('.box02.skill2').addEventListener('click', function () {
        if (window.innerWidth <= 550) {
            text02.innerHTML = `
                <h1><span class="text002">안 맞을 거야</span></h1>
                <br>
                일반 : 도깨비불을 하나 희생시키며 <br>
                피해를  1회 막는다 <br>
                분노 : 솥뚜껑을 강화해 모든 <br>
                피해를 5초동안 막는다
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">안 맞을 거야</span></h1>
                <br>
                일반 : 도깨비불을 하나 희생시키며 피해를 <br>
                1회 막는다 (20초마다 하나 생성) <br>
                분노 : 솥뚜껑을 강화해 모든 피해를 5초 <br>
                동안 막는다
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">안 맞을 거야</span></h1>
                <br>
                일반 : 도깨비불을 하나 희생시키며 피해를 <br>
                1회 막는다 (20초마다 하나 생성) <br>
                분노 : 솥뚜껑을 강화해 모든 피해를 5초 <br>
                동안 막는다
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">안 맞을 거야</span></h1>
                <br>
                일반 : 도깨비불을 하나 희생시키며 <br>
                피해를 1회 막는다 (20초마다 하나 생성) <br>
                분노 : 솥뚜껑을 강화해 모든 피해를 5초동안 막는다<br>
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