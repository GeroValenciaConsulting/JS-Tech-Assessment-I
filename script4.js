console.log("connected");
// let num = prompt("Enter a number.");
function oddOrEven (num) {
    if (isNaN (num) || typeof parseInt(num) !== "number")
   
    {
        return `Unexpected Input`;
    }
    else if (num == ''){
        return "Please input inside the box"
    }

    else {
        if (num % 2 == 0)
        {
            return "even number";
        }
        else {
            return "odd number";
        }
    }
}

oddOrEven(num);

console.log(oddOrEven (5));
console.log(oddOrEven (10));
console.log(oddOrEven ("8"));
console.log(oddOrEven ("20"));
console.log(oddOrEven ("seven"));
console.log(oddOrEven ("Fifteen"));
console.log(oddOrEven (true));
console.log(oddOrEven (null));
console.log(oddOrEven (undefined));

