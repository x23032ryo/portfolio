// script.js

// モーダル要素を取得
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");

// 全ての画像要素を取得
var images = document.getElementsByClassName("clickable-img");

// 画像をクリックしたときの処理
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// クローズボタンをクリックしたときの処理
var close = document.getElementsByClassName("close")[0];
close.onclick = function() {
    modal.style.display = "none";
}
