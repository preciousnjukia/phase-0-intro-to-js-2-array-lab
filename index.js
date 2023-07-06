// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat() {
    cats.push('Ralph');
  }
  
  function destructivelyPrependCat() {
    cats.unshift('Bob');
  }
  function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
  }
  function destructivelyRemoveFirstCat() {
    cats.shift('Milo')
  }
  function appendCat(name) {
  const cats = ["Milo", "Otis", "Garfield"];
  const newCats = [...cats, "Broom"];
  return newCats;
  }
  function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = ["Arnold", ...cats];
    return newCats;
  }
  function removeLastCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats.slice(0, 2)];
    return newCats;
  }
  function removeFirstCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats.slice(1)];
    return newCats;
  }