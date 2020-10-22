export const elements = {
    testDetails : document.getElementById('testDetails'),
    piechart : document.getElementById('piechart'),
    linechart : document.getElementById('linechart'),
    barchart : document.getElementById('barchart'),
    checkRememberUser: document.getElementById('rememberUser'),
    btnLogin: document.querySelector('.login_btn'),
    username : document.getElementById('username'),
    password : document.getElementById('password'),
    patientAccountForm : document.getElementById('account-form'),
    testAccountForm : document.getElementById('test-form'),
    checkForm : document.getElementById('chkForm'),
    topBtn : document.getElementById("btnTop"),
    search : document.getElementById('btnSearch'),
    renderPatientList : document.querySelector('.patient-list'),
    btnGenerate : document.getElementById('btnGenerate'),
    testDetails : document.getElementById('testDetails')
}


const renderLoader = () =>{
    const loader = `
        <div class = "loader">
            <img src="img/loading.gif" alt="loading">
        </div>
    `;
    elements.testDetails.insertAdjacentHTML('afterbegin',loader);
    setTimeout(clearLoader, 2500);
};

const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader){
        loader.parentElement.removeChild(loader);
    }

    document.getElementById('covidTestDetails').style.visibility = "visible";
};


