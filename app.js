console.log("test");
alert("Bienvenue sur mon site !")
let nom = prompt("Quel est ton prénom ?");
let prénom = prompt ("Est ton nom");

console.log("Bonjour " +nom + " " + prénom+ "!");

let age = prompt("Quel est ton age ?")
if(age>=10){
	console.log("Bienvenue dans conseille d'ado");
}else{
	console.log("Reviens dans quelque années...");
}
let mot_de_passe = prompt("entrer un mot de passe."); 
if(mot_de_passe>= 14_10){
	console.log ("mot de passe confirmer mon secrais est je suie fada")
}else{
	console.log("mot_de_passe incorecte")
}
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8', '#f7dc6f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
    this.textContent = 'Encore!';
});