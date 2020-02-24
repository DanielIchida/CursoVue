var players = [{name: "Tyler", score: 22}, {name: "Ryan", score: 41}];
localStorage.setItem('players', JSON.stringify(players));

sessionStorage.setItem('usuario', 'password');
var data = sessionStorage.getItem('key');
console.log(data)
