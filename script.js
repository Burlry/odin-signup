const submit = document.querySelector("button");
const pword1 = document.querySelector(".pword");
const pword2 = document.querySelector(".pwordconfirm")
const error = document.querySelector(".pwordinvalid")

pword1.addEventListener("input", () => {
    if (pword1.value !== pword2.value) {
        pword1.style.border = "1px solid red";
        pword2.style.border = "1px solid red";
        error.textContent = "* Passwords do not match";
    } else {
        pword1.style.border = "1px solid green";
        pword2.style.border = "1px solid green";
        error.textContent = "✔";
        error.style.color = "green";
    }
});

pword2.addEventListener("input", () => {
    if (pword1.value !== pword2.value) {
        pword1.style.border = "1px solid red";
        pword2.style.border = "1px solid red";
        error.textContent = "* Passwords do not match";
        
    } else {
        pword1.style.border = "1px solid green";
        pword2.style.border = "1px solid green";
        error.textContent = "✔";
        error.style.color = "green";
    }
});