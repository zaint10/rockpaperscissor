let userScore=0;
let compScore=0;
let draws=0;
const rock_paper_scissor={"r":"Rock","p":"Paper","s":"Scissors"}
const scoreBoard_div=document.querySelector(".score-board");
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const userLable_div=document.getElementById("users-lable");
const compLable_div=document.getElementById("comp-lable");
const drawLable_div=document.getElementById("draw-lable");
const draw_div=document.getElementById("draws")
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");



function getCompChoice(){
	const choices=['r','p','s'];
	let rand=Math.random();
	let randIndex=Math.floor(rand*choices.length);
	return choices[randIndex];


}

function win(userChoice,compChoice){
	console.log("USER WINS");
	const userChoice_div=document.getElementById(userChoice);
	//Increaing Score and displaying it
	userScore++;
	userScore_span.innerHTML=userScore;
	
	//Converting choice to its appropirate word.
	userChoice=rock_paper_scissor[userChoice];compChoice=rock_paper_scissor[compChoice];
	result_div.innerHTML=`${userChoice} beats ${compChoice}. You Win! 💥`;

	//Adding & Removing Glow
	userChoice_div.classList.add("green-glow");
	userLable_div.classList.add("green-glow");
	setTimeout(() => {
		userChoice_div.classList.remove("green-glow");
		userLable_div.classList.remove("green-glow");
		
	},400);
}
function lose(userChoice,compChoice){
	console.log("COMP WINS!");
	const userChoice_div=document.getElementById(userChoice);
	
	//Increaing Score and displaying it
	compScore++;
	compScore_span.innerHTML=compScore;
	
	//Converting choice to its appropirate word.
	userChoice=rock_paper_scissor[userChoice];compChoice=rock_paper_scissor[compChoice];
	result_div.innerHTML=`${userChoice} loses to ${compChoice}. You Lose!❌`;
	
	//Adding Removing Glow
	userChoice_div.classList.add("red-glow");
	compLable_div.classList.add("red-glow");
	setTimeout(() =>{
		userChoice_div.classList.remove("red-glow");
		compLable_div.classList.remove("red-glow");}
	,400);
}

function draw(userChoice,compChoice){
	console.log("DRAW!");
	
	//Increaing Draws and displaying it
	draws++;
	draw_div.innerHTML=draws;

	//Converting choice to its appropirate word.
	userChoice=rock_paper_scissor[userChoice];compChoice=rock_paper_scissor[compChoice];
	result_div.innerHTML=`${userChoice} equals ${compChoice}. Its a Draw.`;

	//Adding Removing Glow
	drawLable_div.classList.add("purple-glow");
	setTimeout(() => drawLable_div.classList.remove("purple-glow"),400);

}

function game(userChoice){
	const compChoice=getCompChoice();
	console.log("User choice ->"+userChoice);
	console.log("Comp choice ->"+compChoice);

	switch(userChoice+compChoice){
		case "pr":
		case "rs":
		case "sp":
			win(userChoice,compChoice)
			break;
		case "rp":
		case "sr":
		case "ps":
			lose(userChoice,compChoice)
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,compChoice)
			break;

	}
}

function main(){
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click',() => game("p"));
	scissors_div.addEventListener('click',()=> game("s"));
}

main();
