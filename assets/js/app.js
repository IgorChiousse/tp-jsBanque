console.log('Bijour Bank !');

$(document).ready(function () {
	$(document).foundation();
});
const database = [
    {
      operateur: "credit",
      titre: "Salaire",
      desc: "mois de septembre",
      montant: 1200,
      percent: 100,
    },
    {
      operateur: "debit",
      titre: "Loyer",
      desc: "mois d'aout",
      montant: 450,
      percent: 37.5,
    },
    {
      operateur: "credit",
      titre: "Vente Boncoin",
      desc: "jeu PS5",
      montant: 25,
      percent: 3.33,
    },
    {
      operateur: "debit",
      titre: "Restaurant",
      desc: "mc do",
      montant: 15,
      percent: 1.9,
    },
    {
      operateur: "credit",
      titre: "Realisation de site web2",
      desc: "ma mairie",
      montant: 1800,
      percent: 236.84,
    },
  ];
console.log(database);


/////// IGOR



// function DataOperation(operateur, titre, desc, montant) {
// 	this.operateur = operateur
// 	this.titre = titre
// 	this.desc = desc
// 	this.montant = montant

// }



// creer l application du bouton
const formulaire = document.getElementById('operationForm');
const ajout = document.querySelector('.btSubmit');

ajout.addEventListener('click', ajouter);
// formulaire.addEventListener('submit',ajouter);

function ajouter(event) {
	event.preventDefault()

// récupérer les value 
	const operator = document.getElementById('operator').value;
	const title = document.getElementById('titre').value;
	const description = document.getElementById('desc').value;
	const montants = document.getElementById('montant').value;
	
// creer un objet avec les value 
	// const maData = new DataOperation(operator, titre, desc, montant);
const maData = new Object()
maData.operateur = operator
maData.titre = title
maData.desc = description
maData.montant = Number(montants).toFixed(2)


 //operation pour modifier la courbe
 const mytab = datapoints;
 console.log("mytab ", mytab);
 let mypop = mytab[datapoints.length - 1];
 console.log("mypop", mypop);
 let result = "";

 switch (maData.operateur) {
   case "credit":
     //   console.log("case credit", mypop, maData.montant);
     result = mypop + Number(maData.montant);
     //   console.log("avec crédit", result);
     //   console.log(datapoints);
     addTemperature(datapoints.length - 1, result);
     break;

   case "debit":
     //   console.log("case debit", mypop, maData.montant);
     result = mypop - Number(maData.montant);
     //   console.log("avec debit", result);
     //   console.log(datapoints);
     addTemperature(datapoints.length - 1, result);
     break;
 }


// envoyer l objet dans la Data base 
	// console.log(maData);
	database.push(maData)
	console.log(database);
    displayData(database);
	formulaire.reset();
    // mydat.push(maData);
    // console.log(mydat);
	
	// const tab = document.querySelector('.grid-container')
	// 	tab.appendChild(maData);

    //pour fermer la modal automatiquement en envoyant le formulaire en ciblant le bouton fermeture "x"
    document.querySelector(".close-button").click();
    
}
const foundCredit = database.filter((op) => op.operateur === "credit");
const foundDebit = database.filter((op) => op.operateur === "debit");
console.log(foundCredit);
console.log(foundDebit);


const varier = document.querySelector('.text-center small');
function good() {
    if (datapoints[datapoints.length -1] <= 100 ) {
        varier.textContent = 'On est dans la merde'
        varier.classList.add('bad')
        
    }
};
// ex var e = document.getElementById('logo');
// e.style.color = 'red';
// e.style.backgroundColor = 'yellow';
// e.style.fontSize = '12px';

/// Toggle Vincent

//fonction pour passer entre les différents boutons de la nav
function navToggle(navCurrent) {
	navBtn1.removeAttribute('class', 'active');
	navBtn2.removeAttribute('class', 'active');
	navBtn3.removeAttribute('class', 'active');
	navCurrent.setAttribute('class', 'active');
};

//recupère le premier <a> de la <nav>
const navBtn1 = document.querySelector('.navHeader a');
navBtn1.addEventListener('click', () => {
	navToggle(navBtn1)
    displayData(database);
});

//recupère le second <a> de la <nav>
const navBtn2 = document.querySelector('.navHeader a:nth-child(2)');
navBtn2.addEventListener('click', () => {
	navToggle(navBtn2),
    displayData(database.filter((op) => op.operateur === "credit"));
});


//recupère le troisième <a> de la <nav>
const navBtn3 = document.querySelector('.navHeader a:nth-child(3)');
navBtn3.addEventListener('click', () => {
	navToggle(navBtn3),
    displayData(database.filter((op) => op.operateur === "debit"));
});


//////////////Florent 
//affichage des donnees du tableau d'objets
function displayData(data) {
    const maindiv = document.querySelector("main .grid-container");
    let htmlContent = "";
    data.forEach((e) => {
      htmlContent +=
      `<!-- operation -->
      <div class="operation ${e.operateur}"> 
      <div class="grid-x grid-padding-x align-middle">
      <div class="cell shrink">
      <div class="picto">
      <img src="./assets/images/` +
      (e.operateur === "credit" ? "sac-dargent" : "depenses") +
      `.png" alt="${e.operateur}" />
      </div>
      </div>
      <div class="cell auto">
      <div>
      <h2>${e.titre}</h2>
      <small>${e.desc}</small>
      </div>
      </div>
      <div class="cell small-3 text-right">
      <div>
      <p class="count">${e.montant}€</p>
      <small>${e.percent}%</small>
      </div>
      </div>
      </div>
      </div>`;
    });
    maindiv.innerHTML = htmlContent;
    document.querySelector('.solde').textContent = datapoints[datapoints.length -1] + " €";
    good();
    saveMoves();
}

setTimeout(displayData(database), 1000)

let mouvements = JSON.parse(localStorage.getItem('moves'));
function saveMoves(mouvements) {
    mouvements = datapoints;
    localStorage.setItem('moves', JSON.stringify(mouvements));
};
