
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

  function utbInput() {
    if (document.getElementById("tidutb-sel").value == "Utlänsk utbildning") {
      document.getElementById("utb-input").style.display = "inline-block"
    } else {
      document.getElementById("utb-input").style.display = "none"
    }
  }


  function utbInput() {
    if (document.getElementById("tidutb-sel").value == "Utlänsk utbildning") {
      document.getElementById("utb-input").style.display = "inline-block"
    } else {
      document.getElementById("utb-input").style.display = "none"
    }
  }


  function nuvSysInput() {
    if (document.getElementById("sys-sel").value == "Annat") {
      document.getElementById("annat-input").style.display = "inline-block"
      document.getElementById("stud-input").style.display = "none"
    } else if (document.getElementById("sys-sel").value == "Studerar"){
      document.getElementById("stud-input").style.display = "inline-block"
      document.getElementById("annat-input").style.display = "none"
    } else {
      document.getElementById("annat-input").style.display = "none"
      document.getElementById("stud-input").style.display = "none"
    }
  }

  function utbSysInput() {
    if (document.getElementById("utbsys-sel").value == "Välj") {
      document.getElementById("kurs-input").style.display = "none"
      document.getElementById("yrke-input").style.display = "none"
    } else if (document.getElementById("utbsys-sel").value == "Prövning"){
      document.getElementById("kurs-input").style.display = "inline-block"
      document.getElementById("yrke-input").style.display = "none"
    } else {
      document.getElementById("kurs-input").style.display = "none"
      document.getElementById("yrke-input").style.display = "inline-block"
    }
  }
  
  
    x = document.createElement("INPUT");
    x.setAttribute("type", "date");
    x.setAttribute("value", "2020-01-01");
    document.getElementById("startdatum").appendChild(x);
 