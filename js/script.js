function copyWebsiteButton() {
    var text =  document.getElementById("button-link");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("copied! x3");
}