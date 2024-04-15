index = {}


index.btnLogin = document.getElementById("BTN_LOGIN")

index.inputEmail = document.getElementById("INPUT_EMAIL")
index.inputPassword = document.getElementById("INPUT_PASSWORD")
index.error = document.getElementById("ERROR")

index.btnLogin.addEventListener("click", (e) => {
    fetch("http://127.0.0.1:3000/api/teacher/login", {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: index.inputEmail.value,
            password: index.inputPassword.value

        })
    }).then(rawResponse => rawResponse.json())
        .then(jsonResponse => {

            if (jsonResponse.auth) {
                window.location.href = "/dashboard"

            } else {
                index.error.classList.remove("d-none")
            }


        }

        )
        .catch((e) => {
            console.log(e)
        })
})