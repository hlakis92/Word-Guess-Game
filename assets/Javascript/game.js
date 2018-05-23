//Array for the words that will be used in the game

var words = ["tupac", 
               "biggie",    
               "fresh prince of bel air", 
               "fruitopia Vending Machines", 
               "floppy disks", 
               "ouch bubble gum", 
               "bubble jug", 
               "game boy", 
               "pagers", 
               "tomagotchi eggs", 
               "walkman", 
               "imac g three", 
               "milky pens", 
               "backstreet boys", 
               "nsync", 
               "time capsules", 
               "koolaid jammers", 
               "gushers", 
               "furbies", 
               "rainbow haired gremlins"]

//Array of the selectatable alphabet letters that will be used for the game
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array to select a random word
var randWord = words[Math.floor(Math.random() * words.length)]; 
var chosenWord = words[randWord];
console.log(randWord);

//underscores based on the length of the word

//Get user guest
//check if guess is right
//if guess is right, push to the right array
//check if guess is wrong
//if guess is wrong, push to the wrong array