
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("in1").value;
    const password = document.getElementById("in2").value;
    const text = document.getElementById("para");

    if (username === "Siva" && password === "52152121") {

        text.textContent = "Login Successfully";
        text.style.color = "green";

    } else {

        text.textContent = "Invalid Login Credentials.";
        text.style.color = "red";

    }

});

form.addEventListener("reset", function() {

    document.getElementById("para").textContent = "";

});
