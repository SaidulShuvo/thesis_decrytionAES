const loginButton = document.getElementById('loginButton');
const message = document.getElementById('message');
const form = document.getElementById('loginForm');

loginButton.addEventListener('click', function (e){
    // console.log(loginForm.username.value);
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username == 'username' && password == '6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E BF C1 DF C8 20 E6 35 09 67 49 6B 0A 3E F2 2E 6E '){
        message.classList.add('success')
        message.classList.remove('fail')
        message.innerHTML = "Login Successful";
    }

    else{
        message.classList.add('fail')
        message.classList.remove('success')
        message.innerHTML = "Invalid Credentials";
    }
    
    e.preventDefault();
});

// onclick="handleClick()"