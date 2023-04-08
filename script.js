$(document).ready(function () {
  $("#title").focus();
  $("#text").autosize();
});

      function copyText() {
        var copyText = document.getElementById("hiddenText");
        var textArea = document.createElement("textarea");
        textArea.value = copyText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        alert("IP has been copied!");
      }