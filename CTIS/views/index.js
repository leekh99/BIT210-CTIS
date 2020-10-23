const elements= {
    topBtn : document.getElementById("btnTop"),
    search : document.getElementById('btnSearch'),
    renderPatientList : document.querySelector('.patient-list'),
    loginName : document.getElementById('profile-name')
}

        
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    elements.topBtn.style.display = "block";
  } else {
    elements.topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const getInput = () => {elements.search.value};
const clearInput = () => {elements.search.value = ''};

const ClearResults = () => {
    elements.renderPatientList.innerHTML = '';
}


const renderAllPatient = patient => {
    const markup = `
    <div  class="card shadow">
        <h5 class="card-header"><span>ID :</span>  Patient cham</h5>
        <div class="card-body">
            <h5 class="card-title">Patient-type: </h5>
            <h5 class="card-text">Symptoms: </h5>
                <blockquote>
                <p>bla bla bla</p>
                <footer class="blockquote-footer">dr tan</footer>
            </blockquote>
        </div>
        <ul class="list-group border-top list-group-flush">
            <li class="list-group-item">Covid Test Taken: </li>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">T1: cough</li>
            </ul>
        </ul>
        <div class="card-body">
            <div class="d-flex flex-row justify-content">
                <a href="#" class="card-link btn btn-primary shadow">Record New Test</a>
                <a href="#" class="card-link btn btn-primary shadow">Update Test Result</a>
            </div>
        </div>
    </div>`;
    

    elements.renderPatientList.insertAdjacentHTML('beforeend', markup);
}

const renderResults = (patient) => {

}

const renderAllTest = () => {

}

const checkUser = () =>{
    if (localStorage.length === 0){
        let url = window.location.href;
        url = url.slice(url.indexOf("user"), url.length);

        let user = url.split('&');
        let check = user[1].replace("check=", "");
        user = user[0].replace("user=", "");

        localStorage.setItem('loginUser', JSON.stringify({user,check}));

        if (user)
            elements.loginName.innerHTML = user;
    }
    
    const user = JSON.parse(localStorage.getItem('loginUser'));
    if (user)
        elements.loginName.innerHTML = user.user;
}
 

checkUser();


