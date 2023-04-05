console.log("connected");
let userName = prompt("Enter your username or email.");
let passWord = prompt("Enter your password.");
let logInAttempts = 3;

function logIn (userName, passWord)
{
    if ((userName === "student@mail.com" && passWord === "discovery"))
    {
        alert("Successfully Login");
    }
    else if (logInAttempts === 0)
        {
            alert("Login Failed now only have " + logInAttempts + " login attempts available.")
        }
        else 
        {
            logInAttempts = logInAttempts - 1;
            alert("Login Failed now only have " + logInAttempts + " login attempts available.")
            if(logInAttempts==0)
                {
                 document.getElementById("userName").disabled=true;
                 document.getElementById("passWord").disabled=true;
                 document.getElementById("logIn").disabled=true;
                }
         }
    
}

logIn (userName, passWord)