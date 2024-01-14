const $fragmentArr = document.querySelectorAll(".fragment");
const $menuBtn = document.querySelectorAll(".mypage-menu-items");
const $menuBtnForm = document.querySelector("#mypage-menu");
const $submitInput = document.querySelector("#submit-input");

const $modal = document.querySelector("#diray-modal-wrap");
const $modalAddBtn = document.querySelector("#modal-add-btn");
const $closeModalBtn = document.querySelector("#close-btn");
const $modalDate = document.querySelector("#modal-date");
const $modalPlace = document.querySelector("#modal-place");


// 왼쪽 ------------------------------------------------------------------------ 
const clickMenuBtn = (num) => {
    $fragmentArr.forEach((fragment, index) => {
        if(index == num){
            fragment.style.display = 'block';
        } else {
            fragment.style.display = `none`;
        }
    })
}

$menuBtn.forEach((btn, index) => {
    btn.onclick = () => {
        clickMenuBtn(index);
        $submitInput.value = btn.value;
        // $menuBtnForm.submit(); // 누른 거 controller 전달
    }
})

// 오른쪽 ------------------------------------------------------------------------

// Diary --------------------------------------------------------------------------
const modalSetting = () => {
    // 매달 배열 셋팅
    const $month = document.querySelector(".year-month");
    const $dateArr = document.querySelectorAll(".dates .day span");

    // 모달창 열리기
    $dateArr.forEach((date) => {
        date.onclick = () => {
            $modal.style.visibility = `visible`;
            $modalDate.innerHTML = `${$month.innerText}.${date.innerText}`
        }
    })
    // 모달창 닫히기
    $closeModalBtn.onclick = () => {
        $modal.style.visibility = `hidden`;
    }
}

// submit setting ------------------
const $date = document.querySelector("#modal-date");
const $dateInput = document.querySelector("#modal-date-input");
const $resultArr = document.querySelectorAll("#result-wrap > div");
const $resultInput = document.querySelector("#modal-result-input");

// 경기결과 setting
$resultArr.forEach((text, index) => {
    text.onclick = () => {
        $resultInput.value = text.innerText;
        for(let i=0; i<$resultArr.length; i++){
            if(i == index){
                $resultArr[i].style.opacity = `1`;
            } else {
                $resultArr[i].style.opacity = ``;
            }
        }
    }
})

const $memoInput = document.querySelector("#memo");
const $errMsg = document.querySelector(".error-msg");
let memoCheck = false;

// ✅ 직관기록 submit
const clickAddBtn = () => {
    $dateInput.value = $date.innerText;
    document.forms["diray-add-form"].submit(); // 누른 거 controller 전달
}

$modalAddBtn.addEventListener("click", clickAddBtn);

// 달력 ------------------
$(document).ready(function() {
    calendarInit();
});

/*
    달력 렌더링 할 때 필요한 정보 목록 

    현재 월(초기값 : 현재 시간)
    금월 마지막일 날짜와 요일
    전월 마지막일 날짜와 요일
*/

function calendarInit() {

    // 날짜 정보 가져오기
    var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
    var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // uct 표준시 도출
    var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
    var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)
  
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // 달력에서 표기하는 날짜 객체
  
    
    var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
    var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
    var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

    // kst 기준 현재시간
    // console.log(thisMonth);

    // 캘린더 렌더링
    renderCalender(thisMonth);

    function renderCalender(thisMonth) {

        // 렌더링을 위한 데이터 정리
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();

        // 이전 달의 마지막 날 날짜와 요일 구하기
        var startDay = new Date(currentYear, currentMonth, 0);
        var prevDate = startDay.getDate();
        var prevDay = startDay.getDay();

        // 이번 달의 마지막날 날짜와 요일 구하기
        var endDay = new Date(currentYear, currentMonth + 1, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();

        // console.log(prevDate, prevDay, nextDate, nextDay);

        // 현재 월 표기
        $('.year-month').text(currentYear + '.' + (currentMonth + 1));

        // 렌더링 html 요소 생성
        calendar = document.querySelector('.dates')
        calendar.innerHTML = '';
        
        // 지난달
        for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>'
        }
        // 이번달
        for (var i = 1; i <= nextDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day current display-flex-set"><span>' + i + '</span></div>'
        }
        // 다음달
        for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
        }

        // 오늘 날짜 표기
        if (today.getMonth() == currentMonth) {
            todayDate = today.getDate();
            var currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate -1].classList.add('today');
        }

        // ✅ 캘린더 바뀔 때마다 배열 셋팅 
        modalSetting();
    }

    // 이전달로 이동
    $('.go-prev').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalender(thisMonth);
    });

    // 다음달로 이동
    $('.go-next').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalender(thisMonth); 
    });
}
