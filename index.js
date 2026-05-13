let firstcard = 10
let secondcard= 11
let sum = firstcard + secondcard + 4
let hasblackjack = false
let isalive =true

let message=""
if (sum>20){
message="do you want to draw a new card ?"
}else if(sum===21){
    message="you have got blackjack ?"
hasblackjack=true;
}else{
    message="you're out of the game"
    isalive=false;
}
console.log(message)