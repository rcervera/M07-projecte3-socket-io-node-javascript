
const socket = io();

const nicknameInput = document.getElementById("nicknameInput");
const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", send)

function send() {
    socket.emit("nickname", {nickname: nicknameInput.value} )
}

socket.on('nickname rebut', function(data) {

    console.log(data)

})


socket.on('salutacio', function(data) {

    console.log(data)

})

