
let telegram_bot_id = "5761133952:AAGOQnLr7P62O1WL_h0ghjpUFA-P1_Cq-38";

let chat_id = 1515165125;
let u_name, user, email, message;
let ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    user = document.getElementById("phone").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message + "\nTel: " +user;
};
let sendtelegram = function() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    return false;
};
