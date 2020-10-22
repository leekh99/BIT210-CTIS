const elements = {
    checkRememberUser: document.getElementById('rememberUser'),
    btnLogin: document.querySelector('.login_btn'),
    username : document.getElementById('username'),
    password : document.getElementById('password')
}

const checkRememberUser = () => {
    if(elements.checkRememberUser.checked && elements.username.value != ''){
        persistData(elements.username.value, true);
    }else {
        elements.username.value = '';
        persistData('', false);
    }
        

}

const login = () =>{
    checkRememberUser();
    alert("hooray");
}


const persistData = (data, validation) =>{
    const storage = [data, validation]

    localStorage.clear();
    localStorage.setItem('login-username', JSON.stringify(storage));
    console.log("persisting ... ");
}

const setUsername = () => {
    const username = JSON.parse(localStorage.getItem('login-username'));
    if (username){
        elements.username.value = username[0];
        elements.checkRememberUser.checked = username[1];
    }
}

setUsername();
