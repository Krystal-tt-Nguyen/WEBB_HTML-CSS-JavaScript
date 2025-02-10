
fetch('HTML/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Unable to load Header: ', error)
    });