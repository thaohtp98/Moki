$(document).ready(function () {
    $(".btn_add_menu").click(function () {
        var meals = $(this).siblings('.choose_meal');
        // var meals = $('.choose_meal');
        if (meals.val() === '') {
            alert('<div class="alert_icon_notification"><span class="icon-advertising icon_notification"></span></div><h3 class="alert_title_notification">Hãy chọn bữa ăn trước <br></h3><p class="alert_text_nofitication">Bạn hãy vui lòng chọn bữa ăn trước để chúng tôi có thể đưa ra những gợi ý tốt nhất cho bạn</p>');
            $('.choose_meal').focus();

            return false;
        }
        else return;
    });
});
var ALERT_TITLE = "";
var ALERT_BUTTON_TEXT = "Đóng";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";
    
}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
    alert('');
}