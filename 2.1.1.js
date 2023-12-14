var cardBack = "https://i.pinimg.com/originals/40/66/44/40664440b9dcbf61bbd896b919c6b703.png"
var deck = ["Ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","As","2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks", "Ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","As","2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks",]
var deckImages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png",]
var deckValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,]
var pCards = []
var pCards2 = []
var playerTotal
var playerTotal2
var selectedTotal
var pStart
var pTurns
var splitCardValue
var splitToggle
var cardLocation

var dCards = []
var dealerTotal
var dStart
var dTurns
var cardFront

var selectedHand
var wins = 0
var losses = 0
var draws = 0

var betSubtraction = 0
var betAmount = 0
var wallet = 500

var musicVolume = 0.5
var crowdVolume = 0.5

function betAdd(){
    betSubtraction = 0
    document.getElementById("betAdd").style.backgroundColor = "lightgreen"
    document.getElementById("betSub").style.backgroundColor = "white"
}

function betSub(){
    betSubtraction = 1
    document.getElementById("betAdd").style.backgroundColor = "white"
    document.getElementById("betSub").style.backgroundColor = "red"
}

function bet1(){

    //subtract chip amount if sub button is pressed and bet is greater than 0
    if(betSubtraction == 1 && betAmount > 0){

        //if bet is less than chip amount, subtract what is left
        if(betAmount < 1){

            wallet += betAmount
            betAmount -= betAmount

        }else{

            betAmount--
            wallet++

        }

    //add chip amount if add button is pressed and wallet is greater than 0
    }else if(betSubtraction == 0 && wallet >= 1){

        betAmount++
        wallet--

    //if wallet is less than chip amount, alert user
    }else{

        alert("Insufficient Funds")

    }

    //update bet and wallet
    document.getElementById("betAmount").innerHTML = betAmount
    document.getElementById("wallet").innerHTML = "$" + wallet

    }
    
function bet5(){

    //subtract chip amount if sub button is pressed and bet is greater than 0
    if(betSubtraction == 1 && betAmount > 0){
    
        //if bet is less than chip amount, subtract what is left
        if(betAmount < 5){
    
            wallet += betAmount
            betAmount -= betAmount
    
        }else{
    
            betAmount -= 5
            wallet += 5
    
        }
    
    //add chip amount if add button is pressed and wallet is greater than 0
    }else if(betSubtraction == 0 && wallet >= 5){
    
        betAmount += 5
        wallet -= 5
    
    //if wallet is less than chip amount, alert user
    }else{
    
        alert("Insufficient Funds")
    
    }
    
    //update bet and wallet
    document.getElementById("betAmount").innerHTML = betAmount
    document.getElementById("wallet").innerHTML = "$" + wallet
    
    }

function bet25(){

    //subtract chip amount if sub button is pressed and bet is greater than 0
    if(betSubtraction == 1 && betAmount > 0){
        
        //if bet is less than chip amount, subtract what is left
        if(betAmount < 25){
        
            wallet += betAmount
            betAmount -= betAmount
        
        }else{
        
            betAmount -= 25
            wallet += 25
        
        }
        
    //add chip amount if add button is pressed and wallet is greater than 0
    }else if(betSubtraction == 0 && wallet >= 25){
        
        betAmount += 25
        wallet -= 25
        
    //if wallet is less than chip amount, alert user
    }else{
        
        alert("Insufficient Funds")
        
    }
        
    //update bet and wallet
    document.getElementById("betAmount").innerHTML = betAmount
    document.getElementById("wallet").innerHTML = "$" + wallet
        
    }

    function bet100(){

    //subtract chip amount if sub button is pressed and bet is greater than 0
    if(betSubtraction == 1 && betAmount > 0){
        
        //if bet is less than chip amount, subtract what is left
        if(betAmount < 100){
        
            wallet += betAmount
            betAmount -= betAmount
        
        }else{
        
            betAmount -= 100
            wallet += 100
        
        }
        
    //add chip amount if add button is pressed and wallet is greater than 0
    }else if(betSubtraction == 0 && wallet >= 100){
        
        betAmount += 100
        wallet -= 100
        
    //if wallet is less than chip amount, alert user
    }else{
        
        alert("Insufficient Funds")
        
    }
        
    //update bet and wallet
    document.getElementById("betAmount").innerHTML = betAmount
    document.getElementById("wallet").innerHTML = "$" + wallet
        
    }

function betScreenUp(){

    //reset bet amount
    document.getElementById("betAmount").innerHTML = "0"
    betAmount = 0
    //update wallet total
    document.getElementById("wallet").innerHTML = "$" + wallet

    document.getElementById("betScreen").style.animation = "betScreenUp 1.5s"
    document.getElementById("betScreen").style.animationFillMode = "forwards"
    
    document.getElementById("newGameBtn").style.display = "none"


}

function newGame(){

    console.clear()

    document.getElementById("musicSlider").addEventListener("input", function(){ 

        musicVolume = (document.getElementById("musicSlider").value/100)
        updateAudio()

    });

    document.getElementById("crowdSlider").addEventListener("input", function(){ 

        crowdVolume = (document.getElementById("crowdSlider").value/100)
        updateAudio()

    });

    document.getElementById("betScreen").style.animation = "betScreenDown 2s"
    document.getElementById("betScreen").style.animationFillMode = "forwards"

    //show buttons
    document.getElementById("hitBtn").style.display = "initial"
    document.getElementById("playHandBtn").style.display = "initial"

    //hide buttons
    document.getElementById("newGameBtn").style.display = "none"
    document.getElementById("splitBtn").style.display = "none"
    document.getElementById("doubleDownBtn").style.display = "none"

    //continue game if split has occured
    if(splitCardValue > 0){

        //set cardLocation to second table
        cardLocation = document.getElementById("playerTable2")
		
		//change player hand value to second hand
        document.getElementById("playerHand2").innerHTML = playerTotal2

        //change play hand button
        document.getElementById("playHandBtn").innerHTML = "Play Second Hand"

        //subtract bet for second hand
        wallet -= betAmount

        //reset value
        splitCardValue = 0
		
		//set split toggle for hit function
		splitToggle = 1

        updateScreen()

        console.log("split card value has been set to" + splitCardValue)
        console.log("split toggle value has been set to" + splitToggle)

    }else{

        //reset deck and cardFront
        reset()

        //reset player loop
        pStart = 0
        pTurns = 2

        //reset dealer loop
        dStart = 0
        dTurns = 2

        //reset hands
        pCards = []
        pCards2 = []
        dCards = []
        
        //reset totals
        playerTotal = 0
        playerTotal2 = 0
        dealerTotal = 0

        //reset tables
        document.getElementById("playerTable").innerHTML = ""

        document.getElementById("dealerTable").innerHTML = ""

        //remove second hand total and table if they exist
        if(document.getElementById("playerTable2")){

            var playerTable2 = document.getElementById("playerTable2")
            document.getElementById("playerTable2Location").removeChild(playerTable2)

            document.getElementById("playerHand2").innerHTML = ""

            //change play hand button
            document.getElementById("playHandBtn").innerHTML = "Play Hand"

        }else{}


        //set cardLocation to first table
        cardLocation = document.getElementById("playerTable")

        //start game
        getPlayerCards()
        getDealerCards()
        naturalCheck()

    }

}

function getPlayerCards(){

    for (let i = pStart; i < pTurns; i++) {

        //get random card
        var random = Math.floor(Math.random()*deckValue.length)
		
        //add card value to hand
		if(splitToggle > 0){
			
			playerTotal2 += deckValue[random]

            //add card to array
            pCards2.push(deckValue[random])
			
		}else{
			
			playerTotal += deckValue[random]

            //add card to array
            pCards.push(deckValue[random])
			
		}
        
        //remove card from array
        deckValue.splice(random, 1)

        //create new image
        playingCard = document.createElement('img')
		
        //set image class
        playingCard.classList.add('playingCard')
		
        //set image id
        playingCard.id = "pCard" + i
		
        //set image source
        playingCard.src = deckImages[random]
		
        //display card
        cardLocation.appendChild(playingCard)
		
        //remove card image from array
        deckImages.splice(random, 1)
        
    }

    //set total and list
    selectedList = pCards
    selectedTotal = playerTotal

    //change total and list if split has occured
    if(splitToggle > 0){

        selectedList = pCards2
        selectedTotal = playerTotal2

    }else{}

    //check for unchanged aces in hand if selected total > 21
    //check for mid game loss
    if(selectedTotal > 21){

        aceCorrection()

        //set new values of list and total
        if(splitToggle > 0){

            pCards2 = selectedList
            playerTotal2 = selectedTotal
    
        }else{
    
            pCards = selectedList
            playerTotal = selectedTotal
    
        }

        midGameLoss()

    }

    console.log(playerTotal)
	
	//display split button if the players cards are the same
    if(pCards[0] == pCards[1] && splitToggle == 0){

        document.getElementById("splitBtn").style.display = "initial"

    }

    //display double down button if the players is between 9-11
    if(playerTotal > 8 && playerTotal < 12 && (splitCardValue == 0 || splitToggle == 0)){

        document.getElementById("doubleDownBtn").style.display = "initial"

    }

    updateScreen()

}



function getDealerCards(){

    for (let i = dStart; i < dTurns; i++) {
        
        //get random card
        var random = Math.floor(Math.random()*deckValue.length)

        //add card to array
        dCards.push(deckValue[random])
        //add card value to hand
        dealerTotal += deckValue[random]
        //remove card from array
        deckValue.splice(random, 1)

    
        //create new image
        playingCard = document.createElement('img')
        //set image class
        playingCard.classList.add('playingCard')
        //set image id
        playingCard.id = "dCard" + i
        //set image source
        if(i == 0){

            playingCard.src = cardBack
            //store img for first dealer card
            cardFront = deckImages[random]

        }else{

            playingCard.src = deckImages[random]

        }
        //display card
        dealerTable.appendChild(playingCard)
        //remove card image from array
        deckImages.splice(random, 1)
        
    }

    //check for unchanged aces in hand if total > 21
    if(dealerTotal > 21){

        //set list and total
        selectedList = dCards
        selectedTotal = dealerTotal

        aceCorrection()

        //set new values of list and total
        dCards = selectedList
        dealerTotal = selectedTotal

    }

    //update dealer total
    document.getElementById("dealerHand").innerHTML = dCards[1]

    updateScreen()

}

function hit(){

    cardNoise.play()

    //run player loop one more time
    pTurns++
    pStart = pTurns - 1
    getPlayerCards()

    //hide split button
    document.getElementById("splitBtn").style.display = "none"
    //hide double down button
    document.getElementById("doubleDownBtn").style.display = "none"
}



function dealerHit(){

    //if the dealer's hand is < 17, run loop
    if(dealerTotal < 17){

        //dealer takes cards until total > 17
        do{

            dTurns++
            dStart = dTurns - 1
            getDealerCards()

        }while(dealerTotal < 17)

    }

    //check for unchanged aces in hand if total > 21
    if(dealerTotal > 21){

        //set list and total
        selectedList = dCards
        selectedTotal = dealerTotal

        aceCorrection()

        //set new values of list and total
        dCards = selectedList
        dealerTotal = selectedTotal

        //if total < 17 after changing aces, dealer must hit
        if(dealerTotal < 17){

            dealerHit()

        }

    }

}



function split(){

    //create new table
    var table2 = document.createElement('div')
    table2.id = "playerTable2"
    document.getElementById("playerTable2Location").appendChild(table2)

    //add the player's second card to table 2
    table2.appendChild(pCard1)

    //store value of second card
    splitCardValue = pCards[1]

    //remove second card value from current hand
    pCards.splice(1, 1)

    //add second card value to second hand
    pCards2 = [splitCardValue]

    //update player totals
    playerTotal -= splitCardValue
    playerTotal2 = splitCardValue

    //hide split button
    document.getElementById("splitBtn").style.display = "none"

    //change play hand button
    document.getElementById("playHandBtn").innerHTML = "Play First Hand"

    updateScreen()

    console.log("split button has been pressed")
    console.log("split card value has been set to" + splitCardValue)

}



function doubleDown(){

    //adjust wallet
    wallet -= betAmount

    //double bet amount
    betAmount = (betAmount * 2)

    //run player loop one more time
    pTurns++
    pStart = pTurns - 1
    getPlayerCards()

    //hide double down button
    document.getElementById("doubleDownBtn").style.display = "none"

    //hide split button
    document.getElementById("splitBtn").style.display = "none"

    endGame()

}



function aceCorrection(){

    for(i = 0; i < selectedList.length; i++){
        
        if(selectedTotal > 21){

            if(selectedList[i] == 11){

                selectedList[i] = 1
                selectedTotal -= 10

            }

        }

    }

    console.log("Ace Correction has been run")

}



function midGameLoss(){

    console.log("Mid Game loss has been run")

    if(splitToggle > 0){

        console.log("2")

        selectedTotal = playerTotal2

    }else{

        console.log("1")

        selectedTotal = playerTotal

    }

    //check playerTotal after ace correction
    if(selectedTotal > 21){

        //check for split before output
        if(splitCardValue > 0){

            console.log("3")

            loss()

            newGame()

        }else if(splitToggle > 0){

            console.log("4")

            loss()

            splitToggle = 0

            endGame()

        }else{

            console.log("5")

            loss()

            //show flipped card
            document.getElementById("dCard0").src = cardFront

            //show buttons
            document.getElementById("newGameBtn").style.display = "initial"

            //hide buttons
            document.getElementById("hitBtn").style.display = "none"
            document.getElementById("splitBtn").style.display = "none"
            document.getElementById("doubleDownBtn").style.display = "none"
            document.getElementById("playHandBtn").style.display = "none"

            //update losses
            document.getElementById("losses").innerHTML = "Losses: " + losses

            //update dealer total
            document.getElementById("dealerHand").innerHTML = dealerTotal

        }

    }

}



function endGame(){

    if(splitCardValue > 0){

        //continue game if split occured
        newGame()

        console.log("game has been continued due to split")

    }else{
		
        //dealer takes cards
        dealerHit()

        //show flipped card
        document.getElementById("dCard0").src = cardFront

        //set first total to be compared
        selectedTotal = playerTotal

        //set hand to set color
        selectedHand = document.getElementById("playerHand")

        //compare players hand to dealers hand
        if(splitToggle > 0){

            for(let i = 0; i < 2; i++){

                compareCards()
                //select second total 
                selectedTotal = playerTotal2

                //set hand to set color
                selectedHand = document.getElementById("playerHand2")

            }

            //set selected total back to playerTotal
            selectedTotal = playerTotal

        }else{

            compareCards()

        }
		
		//reset split toggle
		splitToggle = 0

        //show buttons
        document.getElementById("newGameBtn").style.display = "initial"

        //hide buttons
        document.getElementById("hitBtn").style.display = "none"
        document.getElementById("splitBtn").style.display = "none"
        document.getElementById("doubleDownBtn").style.display = "none"
        document.getElementById("playHandBtn").style.display = "none"

        //update wins, losses, draws
        document.getElementById("wins").innerHTML = "Wins: " + wins
        document.getElementById("losses").innerHTML = "Losses: " + losses
        document.getElementById("draws").innerHTML = "Draws: " + draws

        //update dealer total
        document.getElementById("dealerHand").innerHTML = dealerTotal

    }

}
	


function compareCards(){
		
	//check dealerTotal
	if(dealerTotal < 22 && selectedTotal < 22){

		//compare totals
		if(selectedTotal > dealerTotal){

            win()

		}else if(selectedTotal < dealerTotal){

            loss()

		}else if(selectedTotal == dealerTotal){

            draw()

		}

	}else if(dealerTotal >= 22 && selectedTotal < 22){

        win()

	}else{

      loss()

    }
		
}
	


function naturalCheck(){

    console.log("Natural Check has been run")

    if(dCards[1] == "10" || dCards[1] == "11"){

        if(dealerTotal == 21){
            endGame()
        }

    }else if(playerTotal == 21){

        endGame()

    }else{}

}



function updateScreen(){

    //update player total
    document.getElementById("playerHand").innerHTML = playerTotal

	//only show/update total 2 if it exists
	if (playerTotal2 > 0){

        document.getElementById("playerHand2").innerHTML = playerTotal2

    }

}



function win(){

    console.log("Win")
    crowdCheer.play()
    document.getElementById("dealerHand").style.color = "red"
    selectedHand.style.color = "lightgreen"
    wins++
    wallet += (betAmount * 2)

}



function loss(){

    console.log("Loss")
    crowdAww.play()
    document.getElementById("dealerHand").style.color = "lightgreen"
    selectedHand.style.color = "red"
    losses++

}



function draw(){

    console.log("Draw")
    document.getElementById("dealerHand").style.color = "yellow"
    selectedHand.style.color = "yellow"
    draws++
    wallet += betAmount

}



function reset(){

    cardBack = "https://i.pinimg.com/originals/40/66/44/40664440b9dcbf61bbd896b919c6b703.png"
    deck = ["Ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","As","2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks", "Ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","As","2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks",]
    deckImages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png",]
    deckValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,]
    //reset url
    cardFront = ""
    //reset hand colors
    document.getElementById("dealerHand").style.color = "white"
    document.getElementById("playerHand").style.color = "white"
    document.getElementById("playerHand2").style.color = "white"
}



function updateAudio(){

    var toggle
    var music
    var playlist = [document.getElementById("backgroundMusic"),document.getElementById("song2"),document.getElementById("song3"),document.getElementById("song4"),document.getElementById("song5")]

    if(toggle != 1){

        music = playlist[Math.floor(Math.random() * 5)]
        toggle = 1

    }else{}

    music.muted = false
    music.play()
    music.volume = musicVolume

    var cardNoise = document.getElementById("cardNoise")
    cardNoise.muted = false
    cardNoise.volume = 1

    var crowd = document.getElementById("crowdNoise")
    crowd.muted = false
    crowd.play()
    crowd.volume = crowdVolume

    var crowdCheer = document.getElementById("crowdCheer")
    crowdCheer.muted = false
    crowdCheer.volume = crowdVolume

    var crowdAww = document.getElementById("crowdAww")
    crowdAww.muted = false
    crowdAww.volume = crowdVolume

}