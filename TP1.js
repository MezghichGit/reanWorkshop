//console.log("Hello REAN");
// Part 1 : let vs var
/*
function doSomething(){
    //for(var i=0; i<10;i++)
    for(let i=0; i<10;i++)
    {
        console.log("i = "+i);
    }
    console.log("final i = "+i);
}
doSomething();*/

// Part 2 : Les String Template
/*
let formation ="REAN";
let result = `Une formation sur le framework ${formation} à PLB`;
console.log("Formation : " + result);*/

//Part 3 : Les valeurs par défaut

/*let somme = function (x , y) {
    var x = x;
    var y = y;
    return x + y;
}*/
/*
let somme = function (x = 10, y = 10) {
    return x + y;
}
//let res = somme();
let res = somme(2, 12);
console.log(res);*/

//Part 4 : le foreach
/*
let names = ["Hugo","Alain","Alex"]
console.log("Méthode 1 : classique ")
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}
console.log("Méthode 2 : for, of")
for(let name of names)
{
    console.log(name);
}

console.log("Méthode 3 : Array::entries()")

let personne = {
    nom:"alex",
    age:30,
    adresse:"paris"
}


for(let [index, name] of names.entries())
{
    console.log(`Index =  ${index} => Name =  ${name}`);
}*/

//Part 5: Objet Literaux
/*
let Engine = {
    initialize(){
        console.log("Hello REAN");
    },
    nom:"RAEN"
};
Engine.initialize();
console.log(Engine.nom);*/

//Part 5 : Expression Lambda

//let nomComplet = (nom, prenom) => console.log(nom + " " + prenom);

/*let res = function(debut, fin)
{
    return debut+" "+fin;
}
console.log(res("PLB", "Consultant"));*/
/*
let res = (debut, fin) => debut + " " + fin;
console.log(res("PLB", "Consultant"));*/
//nomComplet("Mezghich","Mohamed Amine");
/*
let tabs = [20,35,14,100,90];
tabs.sort((a,b)=>(a-b));
for(let v of tabs)
console.log(v);*/
/*
class Etudiant{
    nom;
    prenom;

    display()
    {
        console.log("Vous êtes : "+ this.nom +" "+this.prenom);
    }
}

let e = new Etudiant();
e.nom = "Mezghich";
e.prenom = "Mohamed Amine";
e.display();*/
/*
const stagiaire= { nom: "Mezghich", ville: "Paris" };
console.log(Object.values(stagiaire));*/

let nom = "\t PLB COnsultant";
console.log(nom);

console.log(nom.trimStart());