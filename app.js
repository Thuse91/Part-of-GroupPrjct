
//Back to top functions
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 90) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


// Help button functions.
function openHelp() {
    document.querySelector(".help-box").style.display = "block";
    document.querySelector(".help").style.display = "none";
    document.querySelector(".close").style.display = "block";
  
  }
  
  function closeHelp() {
    document.querySelector(".help-box").style.display = "none";
    document.querySelector(".help").style.display = "block";
    document.querySelector(".close").style.display = "none";
  }

  let name = null;
  function LogIn() {
    name = document.querySelector(".login-input").value
      if(name === ""){
          document.querySelector(".please").style.color = "#e90a0a"
          document.querySelector(".login-input").style.borderColor = "#e90a0a"
      }else{
    document.querySelector(".logIn-btn").style.display = "none";
    document.querySelector(".logOut-btn").style.display = "inline-block";
    document.querySelector(".login-input").style.display = "none";
    document.querySelector(".please").style.display = "none";
    document.querySelector(".welcome").innerHTML = "Welcome " + name + "!"
    document.querySelector(".login-input").value = "";
    }
    

  }

  function LogOut() {
    document.querySelector(".please").style.color = "black"
    document.querySelector(".login-input").style.borderColor = "black"
    document.querySelector(".logOut-btn").style.display = "none";
    document.querySelector(".logIn-btn").style.display = "inline-block";
    document.querySelector(".login-input").style.display = "inline-block";
    document.querySelector(".please").style.display = "block";
    document.querySelector(".welcome").innerHTML = null;
  }