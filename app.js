const userScore=0;
const compScore=0;
const scoreBoard_div=document.querySelector("score-board");
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const result_div=document.querySelector("result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
// dd

function getCompChoice(){
	const choices=['r','p','s'];
	let rand=Math.random();
	let randIndex=Math.floor(rand*choices.length);
	return choices[randIndex];


}
function game(userChoice){
	console.log(userChoice);
	console.log(getCompChoice());
}

function main(){
	rock_div.addEventListener('click',function(){
	
	game("r");
})
paper_div.addEventListener('click',function(){
	
	game("p");

})
scissors_div.addEventListener('click',function(){
	
	game("s");

})
}

main();
