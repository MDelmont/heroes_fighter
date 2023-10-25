// Navbar listener

// Sélectionnez tous les éléments ayant une certaine classe CSS
const navBtns = document.querySelectorAll(".title-page"); // Remplacez 'maClasse' par la classe que vous ciblez

// Parcourez les éléments et ajoutez un gestionnaire d'événements à chacun
navBtns.forEach(function (navBtn) {
  navBtn.addEventListener("click", function () {
    console.log("test");
    let navBtncleans = document.querySelectorAll(".title-page");
    navBtncleans.forEach(function (navBtnclean) {
      navBtnclean.classList.remove("active");
    });
    navBtn.classList.add("active");
  });
});
