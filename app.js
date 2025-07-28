let box_1 = document.getElementById('box_1');
let C1_parent_1 = document.getElementById('C1_parent_1');
let C1_parent_2 = document.getElementById('C1_parent_2');

let C2_parent_1 = document.getElementById('C2_parent_1');
let C2_parent_2 = document.getElementById('C2_parent_2');



// =================== Sign in/up (Go Next page) started ============================

box_1.style.height = '0px';
box_2.style.height = '773px';

C1_parent_1.style.display = 'none'
C1_parent_2.style.display = 'none'


function sign_in() {

  box_1.style.height = '773px';
  box_2.style.height = '0px';

  C1_parent_1.style.display = 'block'
  C1_parent_2.style.display = 'block'

  C2_parent_1.style.display = 'none'
  C2_parent_2.style.display = 'none'


  console.log('Abdul Ghaffar Your Function is worked');


}

function sign_up() {

  box_1.style.height = '0px';
  box_2.style.height = '773px';

  C1_parent_1.style.display = 'none'
  C1_parent_2.style.display = 'none'

  C2_parent_1.style.display = 'block'
  C2_parent_2.style.display = 'block'

}

// // =================== Sign in/up (Go Next page) ended ============================



// // =================== Get Data started ============================
// LocalStorage سے users کو read کرو یا خالی array بناؤ
let users = JSON.parse(localStorage.getItem("users")) || [];

// Sign Up function
function signup_value(e) {
  e.preventDefault();

  // Input fields سے data لو
  const name = document.getElementById("C2_Name").value.trim();
  const email = document.getElementById("C2_Email").value.trim();
  const password = document.getElementById("C2_Password").value.trim();

  // Check: user already exists
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    alert("⚠️ Email already registered. Please use another email.");
    return;
  }

  // New user object
  const newUser = {
    name: name,
    email: email,
    password: password
  };

  // Add user & save to localStorage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));


  alert("✅ Account created successfully!");
  window.location.href = 'blog.html';
}

// Sign In function
function signin_value(e) {
  e.preventDefault();

  const email = document.getElementById("C1_Email").value.trim();
  const password = document.getElementById("C1_Password").value.trim();

  // Check user from stored users
  const foundUser = users.find(user => user.email === email && user.password === password);

  if (foundUser) {
    alert(`🎉 Welcome, ${foundUser.name}! You are now logged in.`);
    window.location.href = "blog.html";
  } else {
    alert("❌ Invalid email or password. Please try again.");
  }
}


// Default: show signup
window.onload = function () {
  sign_up();
};

function forgot(){

  localStorage.removeItem();
  displayData();
}

// // =================== Get Data ended ============================




