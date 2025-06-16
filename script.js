function preveriObrazec() {
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const sporocilo = document.getElementById("sporocilo").value;
    const napaka = document.getElementById("napaka");
  
    if (!email.includes("@")) {
      napaka.textContent = "Email mora vsebovati @";
      return false;
    }
  
    napaka.textContent = "";
    alert("Sporočilo poslano!");
    return true;
  }
  
  function povecaj(slika) {
    document.getElementById("popup-img").src = slika.src;
    document.getElementById("popup").classList.remove("hidden");
  }
  
  function zapri() {
    document.getElementById("popup").classList.add("hidden");
  }