
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (!nom || !prenom || !email || !password || !confirmPassword) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+/;
    if (!emailRegex.test(email)) 
      alert("Adresse email invalide.");
      return;
    

    if (password !== confirmPassword) 
      alert("Les mots de passe ne correspondent pas.");
      return;
    

    alert(`Bienvenue{prenom} ! Inscription réussie.`);
    form.reset();
  });
});
