window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
  
})

// Create constants for classes on divs
const dealer = document.querySelector("#deal-button")
const dealerHand = document.querySelector('#dealer-hand')
const playerHand = document.querySelector("#player-hand")
const hit = document.querySelector('#hit-button')
//Create the deck in an Array with the rank(card number) and suit(card name)
const deck = [
  {'rank': 2, suit: 'clubs'}, 
  {'rank': 2, suit: 'diamonds'}, 
  {'rank': 2, suit: 'hearts'}, 
  {'rank': 2, suit: 'spades'}, 
  {'rank': 3, suit: 'clubs'}, 
  {'rank': 3, suit: 'diamonds'}, 
  {'rank': 3, suit: 'hearts'}, 
  {'rank': 3, suit: 'spades'}, 
  {'rank': 4, suit: 'clubs'}, 
  {'rank': 4, suit: 'diamonds'}, 
  {'rank': 4, suit: 'hearts'}, 
  {'rank': 4, suit: 'spades'}, 
  {'rank': 5, suit: 'clubs'}, 
  {'rank': 5, suit: 'diamonds'}, 
  {'rank': 5, suit: 'hearts'}, 
  {'rank': 5, suit: 'spades'}, 
  {'rank': 6, suit: 'clubs'}, 
  {'rank': 6, suit: 'diamonds'}, 
  {'rank': 6, suit: 'hearts'}, 
  {'rank': 6, suit: 'spades'}, 
  {'rank': 7, suit: 'clubs'}, 
  {'rank': 7, suit: 'diamonds'}, 
  {'rank': 7, suit: 'hearts'}, 
  {'rank': 7, suit: 'spades'}, 
  {'rank': 8, suit: 'clubs'}, 
  {'rank': 8, suit: 'diamonds'}, 
  {'rank': 8, suit: 'hearts'}, 
  {'rank': 8, suit: 'spades'}, 
  {'rank': 9, suit: 'clubs'}, 
  {'rank': 9, suit: 'diamonds'}, 
  {'rank': 9, suit: 'hearts'}, 
  {'rank': 9, suit: 'spades'}, 
  {'rank': 10, suit: 'clubs'}, 
  {'rank': 10, suit: 'diamonds'}, 
  {'rank': 10, suit: 'hearts'}, 
  {'rank': 10, suit: 'spades'}, 
  {'rank': 'ace', suit: 'clubs'}, 
  {'rank': 'ace', suit: 'diamonds'}, 
  {'rank': 'ace', suit: 'hearts'}, 
  {'rank': 'ace', suit: 'spades'}, 
  {'rank': 'jack', suit: 'clubs'}, 
  {'rank': 'jack', suit: 'diamonds'}, 
  {'rank': 'jack', suit: 'hearts'}, 
  {'rank': 'jack', suit: 'spades'}, 
  {'rank': 'king', suit: 'clubs'}, 
  {'rank': 'king', suit: 'diamonds'}, 
  {'rank': 'king', suit: 'hearts'}, 
  {'rank': 'king', suit: 'spades'}, 
  {'rank': 'queen', suit: 'clubs'}, 
  {'rank': 'queen', suit: 'diamonds'}, 
  {'rank': 'queen', suit: 'hearts'}, 
  {'rank': 'queen', suit: 'spades'}, 
]
// 4 suits and 13 ranks
function generateDeck(){
  let deck = [];

  const suits = [
    'clubs',
    'spades',
    'hearts',
    'diamonds'
  ]

  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    const currentSuit = suits[suitIndex];
    for (let rank = 1; rank <= 13 ; rank++) {
      const card = {
        rank: rank,
        suit: currentSuit,
      }
      deck.push(card)
    }
  }

  return deck;
}
// Create a array to store the Dealer cards in hand
const mainDealerHand = []
// mainDealerHand.push(deck.pop())
// Create a array to store the Players cards in hand
const mainPlayerHand = []

// Create a function to append Dealers card to div dealer-hand
function displayDealer(deck){
  let dealCard = document.createElement("img")
  dealCard.setAttribute("src",`./images/${deck[deck.length -1].rank}_of_${deck[deck.length -1].suit}.png`)
  dealerHand.appendChild(dealCard)
}

// Create a function to append Players card to div player-hand
function displayPlayer(deck){
  let dealCard = document.createElement("img")
  dealCard.setAttribute("src",`./images/${deck[deck.length -1].rank}_of_${deck[deck.length -1].suit}.png`)
  playerHand.appendChild(dealCard)
}
  
  
  // Create a function to deal a card to player and dealer hand
  function deal(deck){
    mainPlayerHand.push(deck.pop())
    displayPlayer(mainPlayerHand)
    mainDealerHand.push(deck.pop())
    displayDealer(mainDealerHand)
    mainPlayerHand.push(deck.pop())
    displayPlayer(mainPlayerHand)
    mainDealerHand.push(deck.pop())
    displayDealer(mainDealerHand)
    console.log (mainPlayerHand,mainDealerHand)
    
  }
  
  // Create an event listener and attach deal function to deal button 
  dealer.addEventListener("click",function(event){
    shuffle(deck)
    deal(deck)
    console.log(calculatePoints(mainPlayerHand))
    
  }
  )
  // Create an event listener and attach function to deal player only to hit button
  hit.addEventListener("click",function(event){
    mainPlayerHand.push(deck.pop())
    
    
  })
  
  
  
  
  
// Create a function to shuffle the deck
function shuffle(array){
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain cards to shuffle
  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //swap it with current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array
}

// Write a function to calculate points
function calculatePoints(array){
  if(deck.rank === 'ace'){
    return 1
  } else if (deck.rank ==='jack'){
    return 10
  } else if (deck.rank ==='queen'){
    return 10
  } else if (deck.rank === 'king'){
    return 10
  }else 
  return deck.rank 
}

// function acePoints(hand){
//   if dec
// }