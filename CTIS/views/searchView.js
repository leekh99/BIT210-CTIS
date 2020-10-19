const elements = {
    search : document.getElementById('btnSearch'),
    renderPatientList : document.querySelector('.patient-list')
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


