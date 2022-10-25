// Write your solution here!


//cats = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
  
};

//console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(prepends) {
    cats.unshift(prepends);
    return cats;
    
  };
  
  // console.log(destructivelyPrependCat("Bob"))
  cats = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
  
};

//console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat(cat) {
    cats.shift();
    return cats
  };
  
  //console.log(destructivelyRemoveFirstCat());

  function appendCat(params) {
    const newArray = [...cats,"Broom"];
    return newArray;
    
  };
  
  // console.log(appendCat("Broom"));

  
function prependCat(catName) {
  const newList = ["Arnold",...cats];
  return newList;
  
};

// console.log(prependCat("Arnold"));
  
function removeLastCat(){
    const newCatList = cats.slice(0,cats.length -1); // the last element is removed nondestructively.
    return newCatList;
  };
  
  //console.log(removeLastCat());

  function removeFirstCat(){
    const removeFirst = cats.slice(1);  // unlike the above function, this one remove the first elemenet from the list nondestructively.
    return removeFirst;
  };
  
  console.log(removeFirstCat());