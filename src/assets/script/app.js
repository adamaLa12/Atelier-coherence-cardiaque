console.log(`début du script`);
// empecher que la page se recharge quand on click sur le button du formulaire

const formElt = document.getElementById("config");
formElt.addEventListener("submit", function (event) {
  console.log("soumission du formulaire");
  event.preventDefault();

  // Lancer l'animation
  // ? un titre
  // ? un rond

  displayAnimation();
});

function displayAnimation() {
  console.log(`lancement de l'animation`);

  // création de la section qui contiendra l'exercice
  const container = document.createElement("section");
  container.className = "exercice";

  // création d'un titre
  const title = document.createElement("h2");
  title.setAttribute("aria-live", "assertive");
  title.textContent = "Inspirez";
  title.className = "exercice-title";

  // création d'un rond
  const dis = document.createElement("div");
  dis.className = "exercice-disc exercice-disc--out";

  container.append(title);
  container.append(dis);

  document.querySelector("main").append(container);

  setTimeout(() => {
    startBreath("in", title, dis);
  }, 0);
}

/**
 * 
 permet de passer à l'état suivant puis programmer le prochain changement d'état dans 5 secondes
*
*@param string //step : pour savoir dans quel état on doit mettre l'animation ('in' ou 'out')

 *@param HMLElement //titleElt : afin de pouvoir modifier le titre de l'animation

*@param HMLElement //discElt : afin de pouvoir modifier la classe du disque */

function startBreath(step, titleElt, discElt) {
  console.log(`nouvel appel à starBreath() avec option: " + step`);

  // sil'état demandé est 'in'

  if (step === "in") {
    discElt.classList.replace("exercice-disc--out", "exercice-disc--in");

    titleElt.textContent = "Inspirez";

    //puis dans 5 secondes, change le classe en 'out'
    setTimeout(() => {
      startBreath("out", titleElt, discElt);
    }, 5000);
  } else {
    // sinon
    discElt.classList.replace("exercice-disc--in", "exercice-disc--out");
    titleElt.textContent = "Expirez";
    //puis, dans 5 secondes change la classe en  'in'
    setTimeout(() => {
      startBreath("in", titleElt, discElt);
    }, 5000);
  }
}
