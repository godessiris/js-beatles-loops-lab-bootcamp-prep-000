// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var array = []; 
  for(var i =0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);

function johnLennonFacts(n){
var factsArray = []
var i =0;
while(i < n.length){
  factsArray.push(n[i] + "!!!"); i++;
}
return factsArray;
}

function iLoveTheBeatles(num){
	var i = 0;

	function incrementVariable() {
		i = i + 1;
    return i;
	}

  do {
    console.log("I love the Beatles!");
  } while (incrementVariable() < num);
}

/*function iLoveTheBeatles(){
 let newArray = []; 
do {
  newArray.push(`I love the Beatles!`); 
  } while (number < 15); 
 return newArray;
}*/
