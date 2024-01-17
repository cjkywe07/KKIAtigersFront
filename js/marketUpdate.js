$(function(){
    var i = 0;
    $(".picture-btn").click(function () {
        $(".confirm-box-wrap").append(
            `<div class="confirm-box-item display-flex">
        <label class="choice-file-btn display-flex">
        <div>파일 선택</div>
        <div class="confirm-txt">png</div>
        <input type="file" name="productImg" accept="image/*" style="display: none"/>
        </label>
        <input class="file-delete-btn" type="button" value="삭제" />
        </div>`
        );
        i++;
        const $fileInputArr = document.querySelectorAll(".choice-file-btn > input");
        confirmTxtSet();
    });

    // update 첨부파일 지우는 건
    // intelliJ 가서 하기 
    // $(".file-delete-btn").click(function(){
    //     let fileId = $(this).attr('data-fileid-del');
    //     deleteFiles(fileId);
    //     $(this).parent().remove();
    // });
});

// function deleteFiles(fileId){
//     $("#delFiles").append(`<input type='hidden' name='delfile' value='${fileId}'>`);
// }

const confirmTxtSet = () => {
    const $fileInputArr = document.querySelectorAll(".choice-file-btn > input");
    const $confirmTxt = document.querySelectorAll(".confirm-txt");

    $fileInputArr.forEach((input, index) => {
        input.onchange = () => {
            const splitPic = input.value.split("");
            const joinPic = splitPic.slice(12).join("");
            $confirmTxt[index].innerText = joinPic;
        }
    });
}