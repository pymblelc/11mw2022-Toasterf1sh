const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("login");
const bypassBtn = document.getElementById("bypass");
const loginErrorMsg = document.getElementById("error-msg");

//login to website
loginBtn.addEventListener("click", (e) => {e.preventDefault()
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "password") {
        alert("You have logged in.");
        location.reload();

        document.location.href = "home.html";
        console.log(hello);
    } else{ 
        loginErrorMsg.style.opacity = 1;
    }
});

//bypass the login  process
bypassBtn.addEventListener("click", (e) => {e.preventDefault()
    document.location.href = "home.html";
    alert("You have bypassed login")
    console.log(hello);
});