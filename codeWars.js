const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"
const newName = (id) => {
  return tacos.map((taco) => taco.id === id ? { ...taco, name: "changed" } : taco)
}; 

console.log(newName(1));
console.log("........")

// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)

const htmlTaco = (tacoObj) => {
  return `Here are my tacos: ${tacoObj.name} tacos!`;
};
  
  whatsThis = (htmlTaco(taco2));
  console.log (typeof whatsThis);
  console.log("........")

// write a function that takes an tacoOBJ and return formatted price with
// .00 
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const formatTacoPrice = (taco) => {
  return formatter.format(taco.price)
};

console.log(formatTacoPrice(taco2));
console.log("........")


// create a new array where all of the prices is formatted with .00

const formatTacoPriceArr = () => {
  return tacos.map((taco) => {
    return formatter.format(taco.price)
  });
};

console.log(formatTacoPriceArr())
console.log("........")

// write a function that takes an array and logs each item in the array
// hint forEach

const logEach = (arr) => {
  return arr.forEach((item) => {
    console.log(item)
  });
};

logEach(tacos)
console.log("........")

// use the find method to return the object with id:1
const tacoId = (id) => {
  myTaco = tacos.find((taco) => taco.id == id)
  return myTaco
};

console.log(tacoId(1));
console.log("........")

// return a new array with all prices greater than 19
const pricyTacos = () => {
  return tacos.filter((taco) => taco.price > 19)};

console.log("Pricy Tacos:")
console.log(pricyTacos())



// return a new array with a 'about' key where it is a combo of
// name price and about

const addAbout = () => {
  return tacos.map((taco) => {
    return {...taco, about:`${taco.name} taco, $${taco.price}, ${taco.about}`};
  });
};

console.log(addAbout());

///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

const objToHtml = (arr) => {
  toHtml = arr.forEach((item) => {
    console.log([`${item.name} tacos: $${item.price}. ${item.about}`]);
  });
};

objToHtml(tacos);

// Update (update a taco) 

const updatedPrice = (id, newPrice) => {
  return tacos.find((taco) => {
    return taco.id === id ? taco.price = newPrice : taco.price
  });
};

console.log(updatedPrice(1,14))

// Remove (delete a taco) 

const deleteTaco = (id) => tacos.filter((taco) => taco.id !== id);


console.log(deleteTaco(2));

// Create (add a taco) 

const addTaco = (id, name, price, about) => [...tacos, {id, name, price, about}]

console.log(addTaco(4,"shrimp",12,"Just lovely"))


// bonus use reduce to return the sum of prices in tacos array

const allDaTacosPrices = () => {
  let moneys = tacos.reduce((accum, taco) => {
    return accum + taco.price;
  }, 0);
  console.log(`Eat all da tacos for $${moneys}`)
};

allDaTacosPrices()

// bonus do in rails


// bonus create your own