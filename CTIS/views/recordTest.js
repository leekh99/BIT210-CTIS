const elements = {
    testAccountForm : document.getElementById('test-form'),
    checkForm : document.getElementById('chkForm')
}


const formToggle = () =>{
    if (elements.checkForm.checked)
        elements.testAccountForm.className = "";     
    else
        elements.testAccountForm.className = "collapse";
}

elements.checkForm.checked = true;