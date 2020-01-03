function disableScroll() {
    var checkBox = document.getElementById("menuCheck");
    var body = document.getElementById("body");
    if (checkBox.checked == true) {
        body.style.overflowY = "hidden";
    } else {
        body.style.overflowY = "visible";
    }
}