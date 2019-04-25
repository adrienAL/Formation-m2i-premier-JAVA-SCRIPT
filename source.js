//création d'une fonction qui sera declaché lorsque l'on clique sur le bouton (onclick)
function Traitement() {
	var nom = document.getElementById("txtNom").value;
	var prenom = document.getElementById("txtPrenom").value;
	var poid = document.getElementById("nbrPoid").value;
	var taille = document.getElementById("nbrTaille").value;
	var sexe = document.getElementById("lstSexe").value;

	var p = new Personne(nom, prenom, poid, taille, sexe);

	document.getElementById("txtIMC").value = p.CalculIMC();
	document.getElementById("txtDiagnost").value = p.Diagnost();
	document.getElementById("txtPoidMin").value = p.CalculPoidMin() + " kg";
	document.getElementById("txtPoidMax").value = p.CalculPoidMax() + " kg";
	document.getElementById("txtPoidIdeal").value = p.poidIdeal() + " kg";

}

function round(nbr, d) {
	return Math.round(nbr * (10 ** d)) / (10 ** d);
}

function Personne(nom, prenom, poid, taille, sexe) {
	this.Nom = nom;
	this.Prenom = prenom;
	this.Poid = poid;
	this.Taille = taille;
	this.Sexe = sexe;

	this.CalculIMC = function () {
		return round(this.Poid / (this.Taille ** 2), 1);
	}

	this.CalculPoidMax = function () {
		return round(25 * this.Taille * this.Taille , 1);
	}

	this.CalculPoidMin = function () {
		return round(19 * this.Taille ** 2 , 1);
	}

	this.poidIdeal = function () {
		if (this.Sexe == "MASCULIN") {
			return round(22 * this.Taille ** 2 , 1);
		}
		else {
			return round(21 * this.Taille ** 2 , 1);
		}
	}

	this.Diagnost = function () {
		var d = "";
		if (this.CalculIMC() < 17) {
			d = "Anorexique \nconsulter un medecin rapidement";
			document.getElementById("condIMC").style.background = "red";
		}
		else if (this.CalculIMC() < 19) {
			d = "Maigre";
			document.getElementById("condIMC").style.background = "orange";
		}
		else if (this.CalculIMC() < 25) {
			d = "En super forme \ncontinuez sur cette lancé";
			document.getElementById("condIMC").style.background = "green";
		}
		else if (this.CalculIMC() < 30) {
			d = "Quelque kilos en trop";
			document.getElementById("condIMC").style.background = "orange";
		}
		else if (this.CalculIMC() < 40) {
			d = "Obese leger";
			document.getElementById("condIMC").style.background = "red";
		}
		else {
			d = "Obese morbide";
			document.getElementById("condIMC").style.background = "red";
		}
		return d;
	}

	this.Affiche = function() {
		alert(this.Nom + " " + this.Prenom + " a un IMC de " + this.CalculIMC());
	}

}

