
//-----------------------------------------register function starts-----------------------------

function registerOn(){
        
  const register_details = {
    name: username.value,
    accountNumber: account.value,
    password: passwords.value
  };

  if(register_details.name=="" || register_details.accountNumber=="" || register_details.password==""){
    alert("please fill all details");
  } else {
    
    if(localStorage.getItem(register_details.accountNumber)){
      alert("this account number already exists");
    } else {
      accountNumber is key //
      localStorage.setItem(register_details.accountNumber, JSON.stringify(register_details));
      alert("account registered successfully");
window.location.href = "login.html";
    }
  }
}//

//-----------------------------------------register function ends-----------------------------//



//-----------------------------------------login function start-----------------------------//


function loginOn(){
  const accountInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const accountNumber = accountInput.value;
  const password = passwordInput.value;

  if(accountNumber === "" || password === ""){
    alert("please fill all details");
    return;
  }

  // get localStorage
  const user_details = JSON.parse(localStorage.getItem(accountNumber));

  if(user_details){
    if(user_details.password === password){
      alert("login success");

      // 🔑 Save logged-in user globally
      localStorage.setItem("currentUser", JSON.stringify(user_details));

      window.location.href = "detail.html"; // redirect
    } else {
      alert("incorrect password");
    }
  } else {
    alert("invalid account number");
  }
}



//-----------------------------------------login function ends-----------------------------//

let display_user = JSON.parse(localStorage.getItem("currentUser"));

if(display_user){
  document.getElementById("welcomeUser").innerHTML = "Welcome " + display_user.name;
  console.log(display_user); 
} else {
  alert("No user logged in!");
  window.location.href = "login.html";
}






 function depositOn(){


 }

