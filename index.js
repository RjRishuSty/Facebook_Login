//  console.log("Hello World");

// TODO Email Validation.........
const email_valid = document.getElementById("email");
email_valid.addEventListener("keypress", (event) => {
  let valid_Email = ["@", ".", 3];
  const showEmail_error = document.getElementById("email-error");
  if (
    event.target.value.includes(valid_Email[0]) &&
    event.target.value.includes(valid_Email[1]) &&
    event.target.value.length >= valid_Email[2]
  ) {
    showEmail_error.innerHTML = "";
  } else {
    showEmail_error.innerHTML =
      "<div class= 'alert-danger mt-2 p-2 rounded'>Invalid email | min-characters is 3 | exa@gmail.com</div>";
  }
});

// check symbol for  password Validation.........
function check_symbol(symbol, password) {
  let result = false;
  symbol.forEach((value) => {
    if (password.includes(value)) {
      result = true;
    }
  });
  return result;
}
// Check Number for password validation.........
function check_number(number, password) {
  let result = false;
  number.forEach((value) => {
    if (password.includes(value)) {
      result = true;
    }
  });
  return result;
}
// Check Lowercase for password validation.........
function check_lowerCaseAlphabet(lowercase, password) {
  let result = false;
  lowercase.forEach((value) => {
    if (password.includes(value)) {
      result = true;
    }
  });
  return result;
}
//  Check Uppercase for password validation.........
function check_uppercaseAlphabet(uppercase, password) {
  let result = false;
  uppercase.forEach((value) => {
    if (password.includes(value)) {
      result = true;
    }
  });
  return result;
}
//  storng password
function strong_password(){
    const showPassword_error = document.getElementById("password_error");
    const create_Ul = document.createElement("ul");
    create_Ul.className = "list-group";
    create_Ul.innerHTML = `
        <li class="list-group-item bg-danger text-light mb-1"> <i class="fa-solid fa-check class="px-3"></i> Symbole</li>
        <li class="list-group-item bg-danger text-light mb-1"><i class="fa-solid fa-check class="px-3"></i> Number</li>
        <li class="list-group-item bg-danger text-light mb-1"><i class="fa-solid fa-check class="px-3"></i> Lowercase Alphabet</li>
        <li class="list-group-item bg-danger text-light mb-1"><i class="fa-solid fa-check class="px-3"></i> Uppercase Alphabet</li>
        <li class="list-group-item bg-danger text-light mb-1"><i class="fa-solid fa-check class="px-3"></i> minimum 6 characters</li>
     `;
     showPassword_error.append(create_Ul)
  }

// valid Password Variable..........
const password_valid = document.getElementById("password");
let valid_password = [
  {
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%&",
  },
];

// Check password validation (Main function ............)
const target_password = document.getElementById("password");
target_password.addEventListener("input", (event) => {
  const showPassword_error = document.getElementById("password_error");
  const symbol = valid_password[0].symbol.split("");
  const number = valid_password[0].number.split("");
  const lowercaseAlphabet = valid_password[0].alphabet.split("");
  const uppercaseAlphabet = valid_password[0].alphabet.toUpperCase().split("");
  // console.log(uppercaseAlphabet,symbol,number,lowercaseAlphabet)
  if (
    check_symbol(symbol, event.target.value) === true &&
    check_number(number, event.target.value) === true &&
    check_lowerCaseAlphabet(lowercaseAlphabet, event.target.value) === true &&
    check_uppercaseAlphabet(uppercaseAlphabet, event.target.value) === true &&
    event.target.value.length >= 6
  ) {
    showPassword_error.style.display = "none";
  } else {
    showPassword_error.style.display = "block";
    strong_password();
  }
});

// ..................................................................

const target_form = document.getElementById("facebook-login");
const dataSend = (event) => {
  event.preventDefault();
  if (email_valid && target_password) {
    console.log(email_valid.value, target_password.value);
    localStorage.setItem("email" ,email_valid.value);
    localStorage.setItem("password", target_password.value)
  }
};
target_form.addEventListener("submit", dataSend);

// LocalStorage data load............
document.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  console.log(email, password);
  const email_Show = document.getElementById("email").setAttribute("value", email);
  const password_ = document.getElementById("password").setAttribute("value", password);
});
