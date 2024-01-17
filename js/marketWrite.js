// validation
const $errMsgArr = document.querySelectorAll(".err-msg");
const $submitBtn = document.querySelector("#submit-btn");
const $validInputArr = document.querySelectorAll(".valid");
const $submitForm = document.querySelector("form");

$submitBtn.onclick = () => {
    
    let count = 0;
    let checkCost = false;

    // check price
    const checkPrice = (price) => {
        if(isNaN(price.value)) { // 문자열이면
            $errMsgArr[2].innerText = `* 숫자를 입력해 주세요`
            $errMsgArr[2].style.display = `block`;
            checkCost = false;
        } else {
            $errMsgArr[2].style.display = ``;
            checkCost = true;
        }
    }

    // 모두 입력 
    $validInputArr.forEach((input, index) => {
        if(!input.value) {
            $errMsgArr[index].style.display = `block`;
        } else {
            $errMsgArr[index].style.display = ``;
            if(index == 2) checkPrice(input);
            count++;
        }
    })

    if(count == 4 && checkCost) {
        $submitForm.submit();
    }
}