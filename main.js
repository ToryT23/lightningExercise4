//const foods = ["pancakes", "fish", "pickles", "pan fried dumplings"]
//use .map to build an array of new strings from the foods array. 
//Each string in the new array should say "I like to eat <some food>".
//Except for pickles. The string you create with that word should say "I don't like to eat pickles".
//console.log your results to see your new array of strings.

const foods = ["pancakes", "fish", "pickles", "pan fried dumplings"]

const foodILike = foods.map( (food) => {
if  ( food !== "pickles") {
return(`I like to eat ${food}`)
}else {
return (`I don't like to eat pickles`) 
}
})
console.log(foodILike)