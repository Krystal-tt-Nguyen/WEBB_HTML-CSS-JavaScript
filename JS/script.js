fetch('../HTML/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
})
.catch(error => {
    console.error('Unable to load Header: ', error)
});

fetch('../HTML/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data
    })
    .catch(error => {
        console.error('Unable to load Footer: ', error)
});
