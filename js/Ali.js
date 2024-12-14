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

    let textContent = `<p> 넓은 들판에서 온 알리는 밝은 눈과 뛰어난 활 솜씨로 멀리 있는 적을 처치하고 전술에 능합니다 <br>
        신기하거나 흥미로운 것에 많은 관심과 남들과 내기하는 것을 좋아하는 활발한 장난꾸러기입니다 <br>
        그에 대해서 알려진 것은 별로 없지만 그를 억압하거나 강요하면 좋지 않은 결말을 맞이한다는 건 확실합니다 <br>
        가볍고 장난기가 많은 그이지만 전장에서는 그 누구 못지않게 진지하며 체계적으로 팀을 이끌어갑니다</p>`;

    // 화면 크기 1250px 이하
    if (screenWidth <= 1250 && screenWidth > 750) {
        textContent = `<p> 넓은 들판에서 온 알리는 밝은 눈과 뛰어난 활 솜씨로 멀리 있는 <br>
            적을 처치하고 전술에 능합니다 <br>
            신기하거나 흥미로운 것에 많은 관심과 남들과 내기하는 것을 좋아하는 <br>
            활발한 장난꾸러기입니다 <br>
            그에 대해서 알려진 것은 별로 없지만 그를 억압하거나 강요하면 <br>
            좋지 않은 결말을 맞이한다는 건 확실합니다 <br>
            가볍고 장난기가 많은 그이지만 전장에서는 그 누구 못지않게 진지하며 <br>
            체계적으로 팀을 이끌어갑니다</p>`;
    }
    // 화면 크기 750px 이하
    else if (screenWidth <= 750 && screenWidth > 550) {
        textContent = `<p> 넓은 들판에서 온 알리는 밝은 눈과 뛰어난 활 솜씨로 <br> 
            멀리 있는 적을 처치하고 전술에 능합니다 <br>
            신기하거나 흥미로운 것에 많은 관심과 남들과 내기하는 <br>
            것을 좋아하는 활발한 장난꾸러기입니다 <br>
            그에 대해서 알려진 것은 별로 없지만 그를 억압하거나 <br>
            강요하면 좋지 않은 결말을 맞이한다는 건 확실합니다 <br>
            가볍고 장난기가 많은 그이지만 전장에서는 <br>
            그 누구 못지않게 진지하며 체계적으로 팀을 <br>
            이끌어갑니다</p>`;
    }
    // 화면 크기 550px 이하
    else if (screenWidth <= 550) {
        textContent = `<p> 넓은 들판에서 온 알리는 밝은 눈과 뛰어난 활 솜씨로 <br>
            멀리 있는 적을 처치하고 전술에 능합니다 <br>
            신기하거나 흥미로운 것에 많은 관심과 남들과 내기하는 <br>
            것을 좋아하는 활발한 장난꾸러기입니다 <br>
            그에 대해서 알려진 것은 별로 없지만 그를 억압하거나 <br>
            강요하면 좋지 않은 결말을 맞이한다는 건 확실합니다 <br>
            가볍고 장난기가 많은 그이지만 전장에서는 <br>
            그 누구 못지않게 진지하며 체계적으로 팀을 <br>
            이끌어갑니다</p>`;
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
                <h1><span class="text002">척도</span></h1>
                <br>
                후방으로 도약하며 화살을 쏘아 <br>
                200%의 피해를 입힌다
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">척도</span></h1>
                <br>
                후방으로 도약하며 화살을 쏘아 <br>
                200%의 피해를 입힌다
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">척도</span></h1>
                <br>
                후방으로 도약하며 화살을 쏘아 200%의 피해를 입힌다
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">척도</span></h1>
                <br>
                후방으로 도약하며 화살을 쏘아 200%의 <br>
                피해를 입힌다
            `;
        }
        box03.style.backgroundImage = 'url("img/스킬/준비중.png")';
    });

    document.querySelector('.box02.skill2').addEventListener('click', function () {
        if (window.innerWidth <= 550) {
            text02.innerHTML = `
                <h1><span class="text002">화살주의보</span></h1>
                <br>
                자신이 서있는 위치에 화살비를 <br>
                내려 이동속도 감소효과와 <br>
                100%의 피해를 입힌다
            `;
        } else if (window.innerWidth <= 750) {
            text02.innerHTML = `
                <h1><span class="text002">화살주의보</span></h1>
                <br>
                자신이 서있는 위치에 화살비를 <br>
                내려 이동속도 감소효과와 <br>
                100%의 피해를 입힌다
            `;
        } else if (window.innerWidth <= 1250) {
            text02.innerHTML = `
                <h1><span class="text002">화살주의보</span></h1>
                <br>
                자신이 서있는 위치에 화살비를 내려<br>
                이동속도 감소효과와 100%의 피해를 <br>
                입힌다
            `;
        } else {
            text02.innerHTML = `
                <h1><span class="text002">화살주의보</span></h1>
                <br>
                자신이 서있는 위치에 화살비를 내려 <br>
                이동속도 감소효과와 100%의 피해를 <br>
                입힌다
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