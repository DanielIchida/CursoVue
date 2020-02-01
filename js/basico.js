function calculate(birthYear){
   return 2019 - birthYear
}

var ageDaniel = calculate(1995);
console.log(ageDaniel);

//ARRAYS
var nom = ['John','Smith',1990,'teacher',false];
//Agrega un elemento
nom.push('Mrs');
//Agrega un elemento en la primera posicion
nom.unshift('blue');
console.log(nom)
//borrar el ultimo elemento
nom.pop()
nom.pop()
//borrar el primer elemento
nom.shift()
console.log(nom)

//busca el indice de un elemento
console.log(nom.indexOf(1990));

var isDesigner = nom.indexOf('designer') === -1
    ? 'no es diseñador'
    : 'es diseñador'
console.log(isDesigner)

//OBJETOS
var equipo = {
    name: 'Liverpool',
    ciudad: 'Liverpool city',
    birthday: 1905,
    ligas: [1960,1968,2020],
    isChampions: true,
    calcage: function(birthday){
        return 2020 - birthday;
    }
};

console.log(equipo.calcage(1905))



