
let pokemonNumber = 1;

function render(){
    let pokemonContainer = document.getElementById('pokemon');
    pokemonContainer.innerHTML = `<img src="https://tinyurl.com/ironhack-pokemons/${pokemonNumber}.svg" />`;
}

let prev_btn = document.getElementById('prev');
let next_btn = document.getElementById('next');

prev_btn.onclick = function(){
    if (pokemonNumber>1){
        pokemonNumber = pokemonNumber - 1;
        render();
    } 
}

next_btn.onclick = function(){
    if (pokemonNumber<650){
        pokemonNumber = pokemonNumber + 1;
        render();
    } 
}

render();

function showOld() {
    alert('test');
    }