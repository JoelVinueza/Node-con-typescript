const socket = io.connect();
socket.on('greeting',(data)=>{
    alert('Welcome '+ data.userName);
});

socket.on('newMessage', (data)=>{
    $('#chat').append('<p><strong>'+data.userName+'</strong>: '+data.message+'</p>');
});

const login = () =>{
    let email = $('#login_form #email').val();
    let userName = $('#login_form #userName').val();
    socket.emit('userData', {email: email, userName: userName});
}

const sendMessage = () =>{
    let message = $('#message').val();
    let userName = $('#login_form #userName').val();
    socket.emit('sendMessage', {message: message, userName: userName});
}

