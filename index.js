// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards



				////Black-Jack_Game////



let sum = 0
let cards =[]
playerWin = false
isAlive= false
let message =""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById('message-el')
var cardEl = document.querySelector("#cards-el")
let playerEL = document.getElementById('player-el')
var player = {

	Name : "Your account " ,
	Chips : 150

}
playerEL.textContent= player.Name + ": "+ player.Chips +" $"
function getRandomCard () {
	let Rnumbre = Math.floor(Math.random()*13 + 1)
	if (Rnumbre == 1) {
		return 11
	}
	else if (Rnumbre==13 || Rnumbre==12 || Rnumbre==11) {
		return 10
	}
	else {
	return Rnumbre
	}
}

function startGame (){
	let firstCard=getRandomCard()
	let secondCard=getRandomCard()
	cards=[firstCard, secondCard]
	sum = firstCard + secondCard
	isAlive= true
	player.Chips -= 40
	playerEL.textContent= player.Name + ": "+ (player.Chips) +" $"
	renderGame()
}

function renderGame () {
	
	if (sum < 21){
	message= "Do you want to draw a new card"+String.fromCodePoint(0x1F354)
	isAlive= true	
	}
	if (sum == 21)  {
	message= "Wohoo! You've got black-jack"+String.fromCodePoint(0x1F607)
	playerWin = true
	playerEL.textContent= player.Name + ": "+ (player.Chips) +" $"+" x 4 =" +(player.Chips*4)+" $"
	}
	if (sum > 21) {
	message= "you are out of the game"+String.fromCodePoint(0x1F613)
	isAlive = false
	}

	messageEl.innerText = message
	sumEl.textContent = "sum: "+sum
	cardEl.textContent ="Cards: "
	for (let i=0 ;i<cards.length ;i++){
		cardEl.textContent += cards[i]+" "
	}
}

let newCard = function(){
	if (isAlive && playerWin===false) {
	console.log("Dawing a new card")
	let card = getRandomCard()
	cards.push(card)
	sum += card 
	player.Chips -= 20
	playerEL.textContent= player.Name + ": "+ player.Chips +" $"
	renderGame()
}
}
    ////    ARRAYS   ////

/*experience =["engineer-intership", "sales-manager","technical-intership"]
education =["mechanical-Design","mechatronic-engineering"]
licenses=["CSWA","building-Game","ILETS"]
skills=["CAD","HTML","CSS","Java-script"]
console.log(skills[3])
	*/

/*mySelf=["issam", 26 ,true]
console.log(mySelf)
let newMessage = "Magneto"
mySelf.push(newMessage)
console.log(mySelf)
*/



  /// FOR LOOP ////
 

/*for(let i=10; i<=100; i+=10){
	console.log(i)
}*/

/*for (let i=0; i<=3; i++){
console.log(mySelf[i])
}*/

/*let cards = [7, 3, 9]
for(let i=0; i<cards.length; i++){
	console.log(cards[i])

}*/

/*let sentence = ["hello" ,"my","name","is","issam"]
let greetingEl= document.getElementById('greeting-el')
console.log(greetingEl)
for (let i =0; i<sentence.length; i++){
	greetingEl.textContent += sentence[i]+" "
}*/

   //// RANDOM ////


/*   let player1 = 102
   let player2 = 107
   function sumTime() {
   		return player1+player2
   	// body...
   }
   let variable = sumTime()
   console.log(sumTime())*/


 ///// Random nbre between 0 and 5.999
/*let floorNumber = Math.floor(Math.random() * 6 + 1) //// 5.999 ===> 5  //// -5.999 ==> -6
console.log(floorNumber)*/
/*function rollDice() {
	let numbre = Math.floor(Math.random()*10 + 2)
	return numbre
}
console.log(rollDice())*/




  /////Logical AND /////


/* let courseCompleted = false
 let givesCertificate = false

if (courseCompleted=== false || givesCertificate=== false) {
  	generateCertificate()
}
function generateCertificate() {
  	// body...
  	console.log("generating certificate")
  }
*/

/*let likesDocumentaries = true
let likesStatups = false
if (likesStatups || likesDocumentaries) {
	recommendMovie()
}
function recommendMovie() {
	console.log("Hey, check out this new film we think you will like !")
}*/

    			 
    			   //// OBJECTS ////



/*let castle= {
	name : "Valahala",
	cool : true ,
	price :190,
	details :["2 beds" , "1 bedroom" , "2 baths"]

}
console.log(castle.details)
*/


   ///// practice EXEMPLES ////


/*person = {

	name : "issam",
	age : "25",
	country :"Tunisia"

}
function logData() {
	let definition = person.name + " is " + person.age +" years old"+" and lives in "+ person.country
	console.log(definition)
}	
logData()*/





/*let age = 33
if (age < 6) {
	console.log("free")
}
else if (6 < age && age < 17) {
	console.log("child discount")
}
else if (18 < age && age < 26) {
	console.log("student discount")
}
else if (27 < age && age < 66) {
	console.log("full price")
}
else {
	console.log("senior citizen discount")
}
*/

/*let largeCountries = ["china" ,"india","usa","indonesia","Pakistan"]

/*for (let i = 0; i < largeCountries.length  ; i++) {
	 console.log(largeCountries[i])
}
*/
/*let largeCountries = ["Tuvalu" ,"india","usa","indonesia","Monaco"]
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("china")
console.log(largeCountries)*/
 

  		////LOGICAL OPERATOR ////


/*let day = 31
let weekDay = "Friday"
if (weekDay==="Friday"&& day ==31) {

		console.log(String.fromCodePoint(0x1F613))
}*/


/*let hands = ["rock","paper","scissor"]

function randomElement() {
	let item = hands[Math.floor(Math.random()* hands.length)]
	console.log(item)
}
randomElement()*/


/*let Fruit=["apple","orange","apple","apple","orange"]
let appleShelf = document.getElementById("apple-el") 
let orangeShelf = document.getElementById("orange-el") 

function appora() {
	for (let i = 0 ; i< Fruit.length ; i++){
		if (Fruit[i]=== "apple") {
			appleShelf.textContent += "apple "
		} 
		else {
			orangeShelf.textContent += "orange "
		}
	}
	
}
appora()*/