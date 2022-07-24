
var playerTotal
var dealerTotal
var card1
var card1Change
var card2
var card2Change
var dealerCard3
var dcardReveal
var deckNum
var idNum
var cardsNum
var cardId
var cardImage
var pcard1
var pcard1Change
var pcard2
var pcard2Change
var playingCard3
var cardBack = "https://i.pinimg.com/originals/40/66/44/40664440b9dcbf61bbd896b919c6b703.png"
var deck = ["Ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","As","2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks", "Ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","As","2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks",]
var deckImages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png",]
var deckValue
var selectedCard
var num
var wins = 0
var losses = 0
var draws = 0
var nextMove = 0
var dealerAdditions = [0]
var wallet = 500
var betTotal = 0
var betSubtraction = 0
var insToggle = 0
var insBet = 0




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

if(insToggle == 1){

    var max = betTotal/2

    if(betSubtraction == 1){

        if(insBet < 1){
            wallet = wallet + insBet
            insBet = insBet - insBet
        }else{
            insBet = insBet - 1
            wallet = wallet + 1
        }

    }else{

        if(insBet + 1 > max){
            wallet = wallet + (insBet - max)
            insBet = max
        }else{
            insBet = insBet + 1
            wallet = wallet - 1
        }

    }

    document.getElementById("bet").innerHTML = "$" + insBet

    }else{

    if(wallet < 1 && betSubtraction == 0){

        alert("Insufficient Funds")

    }else if(betSubtraction == 1){

        if(betTotal < 1){
            wallet = wallet + betTotal
            betTotal = betTotal - betTotal
        }else{
            betTotal = betTotal - 1
            wallet = wallet + 1
        }

    }else{
        betTotal = betTotal + 1
        wallet = wallet - 1
    }
        document.getElementById("bet").innerHTML = "$" + betTotal
    }

    document.getElementById("wallet").innerHTML = "$" + wallet
}




function bet5(){

    if(insToggle == 1){
    
        var max = betTotal/2
    
        if(betSubtraction == 1){
    
            if(insBet < 5){
                wallet = wallet + insBet
                insBet = insBet - insBet
            }else{
                insBet = insBet - 5
                wallet = wallet + 5
            }
    
        }else{
    
            if(insBet + 5 > max){
                wallet = wallet + (insBet - max)
                insBet = max
            }else{
                insBet = insBet + 5
                wallet = wallet - 5
            }
    
        }
    
        document.getElementById("bet").innerHTML = "$" + insBet
    
        }else{
    
        if(wallet < 5 && betSubtraction == 0){
    
            alert("Insufficient Funds")
    
        }else if(betSubtraction == 1){
    
            if(betTotal < 5){
                wallet = wallet + betTotal
                betTotal = betTotal - betTotal
            }else{
                betTotal = betTotal - 5
                wallet = wallet + 5
            }
    
        }else{
            betTotal = betTotal + 5
            wallet = wallet - 5
        }
            document.getElementById("bet").innerHTML = "$" + betTotal
        }
        
        document.getElementById("wallet").innerHTML = "$" + wallet
    }




function bet25(){
    if(insToggle == 1){
    
        var max = betTotal/2
    
        if(betSubtraction == 1){
    
            if(insBet < 25){
                wallet = wallet + insBet
                insBet = insBet - insBet
            }else{
                insBet = insBet - 25
                wallet = wallet + 25
            }
    
        }else{
    
            if(insBet + 25 > max){
                wallet = wallet + (insBet - max)
                insBet = max
            }else{
                insBet = insBet + 25
                wallet = wallet - 25
            }
    
        }
    
        document.getElementById("bet").innerHTML = "$" + insBet
    
        }else{
    
        if(wallet < 25 && betSubtraction == 0){
    
            alert("Insufficient Funds")
    
        }else if(betSubtraction == 1){
    
            if(betTotal < 25){
                wallet = wallet + betTotal
                betTotal = betTotal - betTotal
            }else{
                betTotal = betTotal - 25
                wallet = wallet + 25
            }
    
        }else{
            betTotal = betTotal + 25
            wallet = wallet - 25
        }
            document.getElementById("bet").innerHTML = "$" + betTotal
        }
        
        document.getElementById("wallet").innerHTML = "$" + wallet
}




function bet100(){

    if(insToggle == 1){
    
        var max = betTotal/2
    
        if(betSubtraction == 1){
    
            if(insBet < 100){
                wallet = wallet + insBet
                insBet = insBet - insBet
            }else{
                insBet = insBet - 100
                wallet = wallet + 100
            }
    
        }else{
    
            if(insBet + 100 > max){
                wallet = wallet + (insBet - max)
                insBet = max
            }else{
                insBet = insBet + 100
                wallet = wallet - 100
            }
    
        }
    
        document.getElementById("bet").innerHTML = "$" + insBet
    
        }else{
    
        if(wallet < 100 && betSubtraction == 0){
    
            alert("Insufficient Funds")
    
        }else if(betSubtraction == 1){
    
            if(betTotal < 100){
                wallet = wallet + betTotal
                betTotal = betTotal - betTotal
            }else{
                betTotal = betTotal - 100
                wallet = wallet + 100
            }
    
        }else{
            betTotal = betTotal + 100
            wallet = wallet - 100
        }
            document.getElementById("bet").innerHTML = "$" + betTotal
        }
    
        document.getElementById("wallet").innerHTML = "$" + wallet
    }





function newGame2(){

    document.getElementById("betScreen").style.display = "block"
    document.getElementById("newGame").style.display = "none"
    document.getElementById("betScreen").style.animation = "betUp 2s"
    document.getElementById("betScreen").style.animationFillMode = "forwards"
    playingCard1.src = cardBack
    playingCard2.src = cardBack
    dealerCard1.src = cardBack
    dealerCard2.src = cardBack
    document.getElementById("playerHand").innerHTML = " "
    document.getElementById("dealerHand").innerHTML = " "
    document.getElementById("newCards").innerHTML = " "
    document.getElementById("newdealerCards").innerHTML = " "
}






function newGame(){

    document.getElementById("betScreen").style.animation = "betDown 2s"
    function animationWipe(){
        document.getElementById("betScreen").style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    window.resizeTo(1097, 535)
    deckValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,]
    deckImages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png",]
    document.getElementById("newCards").innerHTML = " "
    document.getElementById("newdealerCards").innerHTML = " "
    dealerCard2.src = cardBack
    document.getElementById("playerHand").style.color = "black"
    document.getElementById("dealerHand").style.color = "black"
    pcard1Change = 0
    pcard2Change = 0
    card1Change = 0
    card2Change = 0
    playerTotal = 0
    num = 0
    nextMove = 0
    dhandUpdate = 0
    idNum = 1
    cardsNum = 0
    dealerAdditions = [0]
    hitBtn.style.display = "initial"
    plyBtn.style.display = "initial"
    aoe.style.opacity = "1"
    aoe.style.display = "none"
    aoe.style.height = (screen.availHeight / 2) + 50
    aoe.style.width = (screen.availWidth / 2)
    document.body.style.overflowY = "hidden"
    document.body.style.overflowX = "hidden"
    console.clear()

//Update Deck Number
var loopNum = 0
deckNum = document.getElementById("decknumSet").value
while(loopNum < (deckNum - 2)){
    deckValue.push(11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, )
    deckImages.push("https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ace_of_hearts.svg/83px-Ace_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/83px-2_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_of_hearts.svg/83px-3_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/83px-4_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/83px-5_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/83px-6_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/83px-7_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/83px-8_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/83px-9_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/83px-10_of_hearts.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/83px-Jack_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/83px-Queen_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/83px-King_of_hearts2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/83px-Ace_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2_of_diamonds.svg/83px-2_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/83px-3_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/83px-4_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/83px-5_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/6_of_diamonds.svg/83px-6_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/83px-7_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/8_of_diamonds.svg/83px-8_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/9_of_diamonds.svg/83px-9_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/10_of_diamonds.svg/83px-10_of_diamonds.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jack_of_diamonds2.svg/83px-Jack_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Queen_of_diamonds2.svg/83px-Queen_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/King_of_diamonds2.svg/83px-King_of_diamonds2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/83px-Ace_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2_of_clubs.svg/83px-2_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/3_of_clubs.svg/83px-3_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/83px-4_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/5_of_clubs.svg/83px-5_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/6_of_clubs.svg/83px-6_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/83px-7_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/8_of_clubs.svg/83px-8_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/9_of_clubs.svg/83px-9_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/10_of_clubs.svg/83px-10_of_clubs.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jack_of_clubs2.svg/83px-Jack_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_clubs2.svg/83px-Queen_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/King_of_clubs2.svg/83px-King_of_clubs2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/83px-Ace_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2_of_spades.svg/83px-2_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3_of_spades.svg/83px-3_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/4_of_spades.svg/83px-4_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/83px-5_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/83px-6_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/83px-7_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/83px-8_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/83px-9_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/83px-10_of_spades.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jack_of_spades2.svg/83px-Jack_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Queen_of_spades2.svg/83px-Queen_of_spades2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/King_of_spades2.svg/83px-King_of_spades2.svg.png",)
    loopNum = loopNum + 1
}

//Generating Player Cards
 
//pcard1
do{

    selectedCard = Math.floor(Math.random()*deckValue.length);
    num = num + 1

if(deckValue[selectedCard] == 0){

    do{

    selectedCard = Math.floor(Math.random()*deckValue.length)

    }while(deckValue[selectedCard] == 0)

}else{}

    pcard1 = deckValue[selectedCard]
    document.getElementById("playingCard1").src = deckImages[selectedCard]
    deckValue[selectedCard] = 0

}while(num < 1)

//pcard2
do{

    selectedCard = Math.floor(Math.random()*deckValue.length);
    num = num + 1

if(deckValue[selectedCard] == 0){

    do{

    selectedCard = Math.floor(Math.random()*deckValue.length)

    }while(deckValue[selectedCard] == 0)

}else{}

    pcard2 = deckValue[selectedCard]
    document.getElementById("playingCard2").src = deckImages[selectedCard]
    deckValue[selectedCard] = 0

}while(num < 2)


//Generating Dealer Cards

//card1
do{

    selectedCard = Math.floor(Math.random()*deckValue.length);
    num = num + 1

if(deckValue[selectedCard] == 0){

    do{

    selectedCard = Math.floor(Math.random()*deckValue.length)

    }while(deckValue[selectedCard] == 0)

}else{}

    card1 = deckValue[selectedCard]
    document.getElementById("dealerCard1").src = deckImages[selectedCard]
    deckValue[selectedCard] = 0

}while(num < 3)

//card2
do{

    selectedCard = Math.floor(Math.random()*deckValue.length);
    num = num + 1

if(deckValue[selectedCard] == 0){

    do{

    selectedCard = Math.floor(Math.random()*deckValue.length)

    }while(deckValue[selectedCard] == 0)

}else{}

    card2 = deckValue[selectedCard]
    dcardReveal = selectedCard
    deckValue[selectedCard] = 0

}while(num < 4)

//Setting Hand Values
playerTotal = pcard1 + pcard2
dealerTotal = card1 + card2

//Adjust Interface
document.getElementById("dealerHand").innerHTML = card1;
document.getElementById("output").innerHTML = " ";
	
//Auto Correct Hand
if(playerTotal == 22){
	pcard1 = 1
	pcard1Change = 1
}

//Dealer Ace Event
if(dealerTotal == 22){
    card2= 1
    card2Change = 1
}else{}

//Adjust Hands
playerTotal = pcard1 + pcard2
dealerTotal = card1 + card2
document.getElementById("playerHand").innerHTML = playerTotal;

//Double Down Event
if(playerTotal == 9){
    dblDwn.style.display = "initial"
}else if(playerTotal == 10){
    dblDwn.style.display = "initial"
}else if(playerTotal == 11){
    dblDwn.style.display = "initial"
}else{}

//Insurance
if(card1 == 11){
    insureBtn.style.display = "initial"
}else{}

//Natural Events
if(playerTotal == 21 && dealerTotal < 21){

    document.getElementById("dealerHand").style.color = "red"
    document.getElementById("dealerHand").innerHTML = dealerTotal;
    dealerCard2.src = deckImages[dcardReveal]
    wins = wins + 1
    document.getElementById("winTotal").innerHTML = "Wins: " + wins
	hitBtn.style.display = "none";
	plyBtn.style.display = "none";
    dblDwn.style.display = "none";
    insureBtn.style.display = "none"
    document.getElementById("newGame").style.display = "initial"

    document.getElementById("slant3").innerHTML = "Blackjack!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px lightgreen"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    wallet = wallet + (betTotal * 1.5)
    betTotal = 0

}else if(playerTotal == 21 && dealerTotal == 21 && card2 == 11){

    document.getElementById("playerHand").style.color = "yellow"
    document.getElementById("dealerHand").style.color = "yellow"
    document.getElementById("dealerHand").innerHTML = dealerTotal;
    dealerCard2.src = deckImages[dcardReveal]
    draws = draws + 1
    document.getElementById("drawTotal").innerHTML = "Draws: " + draws
	hitBtn.style.display = "none";
	plyBtn.style.display = "none";
    dblDwn.style.display = "none";
    insureBtn.style.display = "none"
    document.getElementById("newGame").style.display = "initial"

    document.getElementById("slant3").innerHTML = "Push!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px yellow"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    wallet = wallet + betTotal
    betTotal = 0

}else if(playerTotal < 21 && dealerTotal == 21 && card2 == 11){

    document.getElementById("playerHand").style.color = "red"
    document.getElementById("dealerHand").innerHTML = dealerTotal;
    dealerCard2.src = deckImages[dcardReveal]
    losses = losses + 1
    document.getElementById("lossTotal").innerHTML = "Losses: " + losses
	hitBtn.style.display = "none";
	plyBtn.style.display = "none";
    dblDwn.style.display = "none";
    insureBtn.style.display = "none"
    document.getElementById("newGame").style.display = "initial"

    document.getElementById("slant3").innerHTML = "Bust!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px red"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    betTotal = 0

}

document.getElementById("bet").innerHTML = "$" + betTotal
document.getElementById("wallet").innerHTML = "$" + wallet

}






function hit(){

//Select New Card
selectedCard = Math.floor(Math.random()*deckValue.length);

if(deckValue[selectedCard] == 0){

    do{

    selectedCard = Math.floor(Math.random()*deckValue.length)

    }while(deckValue[selectedCard] == 0)

}else{}

    playerTotal = playerTotal + deckValue[selectedCard]
    playingCard3 = document.createElement('img')
    playingCard3.src = deckImages[selectedCard]
    playingCard3.classList.add('card')
    var location = document.getElementById("newCards")
    location.appendChild(playingCard3)
    document.getElementById("playerHand").innerHTML = playerTotal   

//Ace Events
    if(deckValue[selectedCard] == 11 && playerTotal > 21){

        playerTotal = playerTotal - 10

    } else if(deckValue[selectedCard] == 11 && playerTotal <= 21){

        playerTotal = playerTotal

    }else if(pcard1 == 11 && playerTotal > 21 && pcard1Change == 0){

        playerTotal = playerTotal - 10
        pcard1Change = 1

    }else if(pcard2 == 11 && playerTotal > 21 && pcard2Change == 0){

        playerTotal = playerTotal - 10
        pcard2Change = 1

    }else{}

    deckValue[selectedCard] = 0
    document.getElementById("playerHand").innerHTML = playerTotal;

//Dealer wins
if(playerTotal > 21){

	document.getElementById("playerHand").style.color = "red"
	document.getElementById("dealerHand").innerHTML = dealerTotal;

    document.getElementById("slant3").innerHTML = "Bust!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px red"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

	dealerCard2.src = deckImages[dcardReveal]
	losses = losses + 1
	document.getElementById("lossTotal").innerHTML = "Losses: " + losses
	hitBtn.style.display = "none";
	plyBtn.style.display = "none";
    document.getElementById("newGame").style.display = "initial"
    nextMove = 1

    betTotal = 0

}else{}

document.getElementById("bet").innerHTML = "$" + betTotal
document.getElementById("wallet").innerHTML = "$" + wallet

}





function insurance(){

    insureBtn.style.display = "none"
    dealBtn.style.display = "none"
    revealBtn.style.display = "initial"
    insToggle = 1
    document.getElementById("bet").innerHTML = "$" + 0
    document.getElementById("betScreen").style.display = "block"
    document.getElementById("betScreen").style.animation = "betUp 2s"
    document.getElementById("betScreen").style.animationFillMode = "forwards"
    
}





function insurance2(){

    document.getElementById("betScreen").style.animation = "betDown 2s"
    function animationWipe(){
        document.getElementById("betScreen").style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    if(card2 == 10){

        document.getElementById("playerHand").style.color = "red"
	    document.getElementById("dealerHand").innerHTML = dealerTotal;

        document.getElementById("slant3").innerHTML = "Insured!"
        document.getElementById("slant3").style.textShadow = "2px 2px 1px orange"
        aoe.style.display = "flex"
        function animationWipe(){
            aoe.style.display = "none"
        }
        setTimeout(animationWipe, 2000)

        dealerCard2.src = deckImages[dcardReveal]
        losses = losses + 1
        document.getElementById("lossTotal").innerHTML = "Losses: " + losses
        hitBtn.style.display = "none";
        plyBtn.style.display = "none";
        document.getElementById("newGame").style.display = "initial"
        nextMove = 1

        wallet = wallet + betTotal
        betTotal = 0

    }else{}

    insBet = 0

}





function doubleDown(){

    betTotal = betTotal * 2
    hitBtn.style.display = "none"
    dblDwn.style.display = "none"
    insureBtn.style.display = "none"

    selectedCard = Math.floor(Math.random()*deckValue.length);

if(deckValue[selectedCard] == 0){

    do{

    selectedCard = Math.floor(Math.random()*deckValue.length)

    }while(deckValue[selectedCard] == 0)

}else{}

    playerTotal = playerTotal + deckValue[selectedCard]
    playingCard3 = document.createElement('img')
    playingCard3.src = deckImages[selectedCard]
    playingCard3.classList.add('card')
    var location = document.getElementById("newCards")
    location.appendChild(playingCard3)
    document.getElementById("playerHand").innerHTML = playerTotal   

//Ace Events
    if(deckValue[selectedCard] == 11 && playerTotal > 21){

        playerTotal = playerTotal - 10

    } else if(deckValue[selectedCard] == 11 && playerTotal <= 21){

        playerTotal = playerTotal

    }else if(pcard1 == 11 && playerTotal > 21 && pcard1Change == 0){

        playerTotal = playerTotal - 10
        pcard1Change = 1

    }else if(pcard2 == 11 && playerTotal > 21 && pcard2Change == 0){

        playerTotal = playerTotal - 10
        pcard2Change = 1

    }else{}

    deckValue[selectedCard] = 0
    document.getElementById("playerHand").innerHTML = playerTotal;

//Dealer wins
if(playerTotal > 21){

	document.getElementById("playerHand").style.color = "red"
	document.getElementById("dealerHand").innerHTML = dealerTotal;

    document.getElementById("slant3").innerHTML = "Bust!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px red"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

	dealerCard2.src = deckImages[dcardReveal]
	losses = losses + 1
	document.getElementById("lossTotal").innerHTML = "Losses: " + losses
    document.getElementById("newGame").style.display = "initial"
    nextMove = 1

    betTotal = 0

}else{}

document.getElementById("bet").innerHTML = "$" + betTotal
document.getElementById("wallet").innerHTML = "$" + wallet
drawCheck()

}




function drawCheck(){

    dealerCard2.src = deckImages[dcardReveal]

//Dealer Draws Cards After Player is Done
while(dealerTotal < 17){

    selectedCard = Math.floor(Math.random()*deckValue.length);

if(deckValue[selectedCard] == 0){

    do{

    	selectedCard = Math.floor(Math.random()*deckValue.length)

    }while(deckValue[selectedCard] == 0)   

}else{}

        dealerTotal = dealerTotal + deckValue[selectedCard]
        dealerCard3 = document.createElement('img')
        dealerCard3.src = deckImages[selectedCard]
        dealerCard3.classList.add('card')
        var location = document.getElementById("newdealerCards")
        location.appendChild(dealerCard3)
    
    if(card1 == 11 && dealerTotal > 21 && card1Change == 0){
        dealerTotal = dealerTotal - 10
        card1Change = 1
    }else if(card2 == 11 && dealerTotal > 21 && card2Change == 0){
        dealerTotal = dealerTotal - 10
        card2Change = 1
    }else{}

    if(deckValue[selectedCard] == 11 && dealerTotal > 21){
        dealerTotal = dealerTotal - 10
    }else if(deckValue[selectedCard] == 11 && dealerTotal <= 21){
        dealerTotal = dealerTotal
    }else{} 

    deckValue[selectedCard] = 0

}

//Dealer Loses
if(dealerTotal > 21 && playerTotal < 22){

    document.getElementById("dealerHand").style.color = "red"
    document.getElementById("dealerHand").innerHTML = dealerTotal;
    wins = wins + 1
    document.getElementById("winTotal").innerHTML = "Wins: " + wins

    document.getElementById("slant3").innerHTML = "Win!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px lightgreen"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    wallet = wallet + (betTotal * 2)
    betTotal = 0

}else if(playerTotal > dealerTotal){

    document.getElementById("dealerHand").style.color = "red"
    document.getElementById("dealerHand").innerHTML = dealerTotal;
    wins = wins + 1
    document.getElementById("winTotal").innerHTML = "Wins: " + wins
    
    document.getElementById("slant3").innerHTML = "Win!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px lightgreen"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    wallet = wallet + (betTotal * 2)
    betTotal = 0

}else if(playerTotal == dealerTotal){

    document.getElementById("playerHand").style.color = "yellow"
    document.getElementById("dealerHand").style.color = "yellow"
    document.getElementById("dealerHand").innerHTML = dealerTotal;
    draws = draws + 1
    document.getElementById("drawTotal").innerHTML = "Draws: " + draws

    document.getElementById("slant3").innerHTML = "Push!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px yellow"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    wallet = wallet + betTotal
    betTotal = 0

}else{}

//Dealer Wins
if(dealerTotal < 22 && dealerTotal > playerTotal){

    document.getElementById("playerHand").style.color = "red"
    document.getElementById("dealerHand").innerHTML = dealerTotal;
    losses = losses + 1
    document.getElementById("lossTotal").innerHTML = "Losses: " + losses

    document.getElementById("slant3").innerHTML = "Bust!"
    document.getElementById("slant3").style.textShadow = "2px 2px 1px red"
    aoe.style.display = "flex"
    function animationWipe(){
        aoe.style.display = "none"
    }
    setTimeout(animationWipe, 2000)

    betTotal = 0
    document.getElementById("bet").innerHTML = "$" + betTotal
    document.getElementById("wallet").innerHTML = "$" + wallet
    hitBtn.style.display = "none";
    plyBtn.style.display = "none";
    document.getElementById("newGame").style.display = "initial"

}else{}

document.getElementById("bet").innerHTML = "$" + betTotal
document.getElementById("wallet").innerHTML = "$" + wallet
hitBtn.style.display = "none";
plyBtn.style.display = "none";
document.getElementById("newGame").style.display = "initial"

}