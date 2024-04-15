dashboard = {}

const token = localStorage.getItem('token');

fetch("http://127.0.0.1:3000/api/book/", {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
    .then(response => response.json()).then(json => console.log(json))
    .catch(error => {
        console.error('Error:', error)
    });