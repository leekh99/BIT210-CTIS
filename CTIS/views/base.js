const parent = document.getElementById('testDetails');
const renderLoader = () =>{
    const loader = `
        <div class = "loader">
            <img src="img/loading.gif" alt="">
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin',loader);
    setTimeout(clearLoader, 2500);
};

const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader){
        loader.parentElement.removeChild(loader);
    }

    document.getElementById('covidTestDetails').style.visibility = "visible";
};


