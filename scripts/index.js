document.getElementById("submit-bar").addEventListener("click", checkInfo);


function checkInfo(){
    if (document.getElementById("first-name").value == "") {
        document.getElementById("first-name").style.borderColor = "hsl(0, 100%, 74%)"
        document.getElementById("first-name").style.borderWidth = "2px"
        document.getElementById("first-name-error").style.color = "hsl(0, 100%, 74%)"
    }
    else {
        document.getElementById("first-name").style.borderColor = "hsl(249, 10%, 26%)"
        document.getElementById("first-name").style.borderWidth = "auto"
        document.getElementById("first-name-error").style.color = "white"
    }
    
    if (document.getElementById("last-name").value == "") {
        document.getElementById("last-name").style.borderColor = "hsl(0, 100%, 74%)"
        document.getElementById("last-name").style.borderWidth = "2px"
        document.getElementById("last-name-error").style.color = "hsl(0, 100%, 74%)"
    }
    else {
        document.getElementById("last-name").style.borderColor = "hsl(249, 10%, 26%)"
        document.getElementById("last-name").style.borderWidth = "auto"
        document.getElementById("last-name-error").style.color = "white"
    }

    if (document.getElementById("email").value == "") {
        document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)"
        document.getElementById("email").style.borderWidth = "2px"
        document.getElementById("email-error").style.color = "hsl(0, 100%, 74%)"
    }
    else {
        document.getElementById("email").style.borderColor = "hsl(249, 10%, 26%)"
        document.getElementById("email").style.borderWidth = "auto"
        document.getElementById("email-error").style.color = "white"
    }

    if (document.getElementById("password").value == "") {
        document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)"
        document.getElementById("password").style.borderWidth = "2px"
        document.getElementById("password-error").style.color = "hsl(0, 100%, 74%)"
    }
    else {
        document.getElementById("password").style.borderColor = "hsl(249, 10%, 26%)"
        document.getElementById("password").style.borderWidth = "auto"
        document.getElementById("password-error").style.color = "white"
    }
}