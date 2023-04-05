console.log("connected");
let num = prompt("Give me a number.")

function numberCheck(num) {
    if (num<50)
    {
        alert("Currently at " + num + "." + " Terminating the loop")        
    }
    else if (num%10==0)
        {
            alert("The " + num + " is divisible by 10. Skipping the number")
        }
    else if (num%5==0) 
        {
            alert(num)
        }
        
}
numberCheck(num)