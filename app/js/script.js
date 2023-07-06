const input = document.querySelector("input");
const error = document.querySelector(".icon-error");
const success = document.querySelector(".icon-success");

input.addEventListener("keyup", function() {

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value === "") {
        console.log("It's empty");
        return error.style.display = "none", success.style.display = "none", input.style.border = "2px solid hsl(0, 36%, 70%)";
    }

    if (input.value.match(pattern)) {;
        console.log("It's a valid email!");
        return error.style.display = "none", success.style.display = "inline-block", input.style.border = "2px solid hsl(0, 36%, 70%)";
    }

    else {
        console.log("It's invalid email!")
        return error.style.display = "inline-block", success.style.display = "none", input.style.border = "2px solid hsl(0, 93%, 68%)";
    }
})