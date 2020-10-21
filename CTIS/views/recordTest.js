console.log("yayyy");

const elements = {
    patientAccountForm : document.getElementById('account-form'),
    testAccountForm : document.getElementById('test-form'),
    checkForm : document.getElementById('chkForm')
}


const formToggle = () =>{
    if (elements.checkForm.checked) 
        displayForm();  
    else 
        clearFormToggle();
}

const displayForm = () => {
    const markup = `
    <form action="" enctype="multipart/form-data" id="toggle">
        <div class="form-group">
            <label for="patient_username">Patient's Username</label>
            <input type="text" class="form-control" name="patient_username">
        </div>

        <div class="form-group">
            <label for="patient_type">Patient Type</label>
            <select class="form-control" name="patient_type">
            <option value="returnee">Returnee</option>
            <option value="quarantined">Quarantined</option>
            <option value="close_contact">Close Contact</option>
            <option value="infected">Infected</option>
            <option value="suspected">Suspected</option>
            </select>
        </div>

        <div class="form-group">
            <label for="patient_symptom">Patient's Symptoms</label>
            <textarea class="form-control" name="patient_symptom" id="" cols="30" rows="10"></textarea>
        </div>

        <div class="form-group">
        <input class="btn btn-primary" type="submit" name="add_test" value="Add Test to Patient" >
        </div>
    </form>`;

    elements.testAccountForm.insertAdjacentHTML('afterend', markup);
}

const clearFormToggle =(boolean) => {
    const el = document.getElementById('toggle');
    if (el) el.parentElement.removeChild(el);
}

elements.checkForm.checked = true;
formToggle();