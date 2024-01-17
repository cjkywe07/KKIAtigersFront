let i = 0;

// 파일추가 버튼 누르면 파일선택 버튼 생성
$("#add-btn").click(function () {
    $("#fileBox-wrap").append(`
            <div class="fileBox display-flex">
                <label for="file${i}" class="picture-btn">파일 선택</label>
                <input type="file" id="file${i}" class="player-pic" name="player${i}" accept="image/*" style="display: none" />
                <div class="confirmBox" style="display: none"></div>
                <button type="button" class="file-delete-btn" onclick="$(this).parent().remove()"></button>
            </div>`);
    i++;

    const playerPics = document.querySelectorAll(".player-pic");
    const confirms = document.querySelectorAll(".confirmBox");

    console.log(playerPics);
    console.log(confirms);

    // 파일선택 버튼 누르면 파일 추가
    playerPics.forEach((playerPic, idx) => {
        console.log(idx, playerPic);

        playerPic.onchange = () => {
            console.log(idx, playerPic);

            const splitPic = playerPic.value.split("");
            const joinPic = splitPic.slice(12).join("");

            confirms[idx].style.display = "block";
            confirms[idx].innerText = joinPic;

            console.log(confirms[idx]);
        };
    });
});
