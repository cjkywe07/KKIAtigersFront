const $AddfileBtn = document.querySelector(".picture-btn");
let i = 0;
$AddfileBtn.onclick = () => {
    $(".confirm-box-wrap").append(
        `<div class="confirm-box-item display-flex">
            <label class="choice-file-btn display-flex">
                <div>파일 선택</div>
                <div class="confirm-txt">png</div>
                <input type="file" name="productImg" accept="image/*" style="display: none"/>
            </label>
            <input class="file-delete-btn" type="button" value="삭제" />
        </div>`
    )
    i++;
}
