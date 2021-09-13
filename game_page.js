
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    document.getElementById("player_question").style.color = "deeppink";
    document.getElementById("player_answer").style.color = "deeppink";

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
function sendno(){
    
    number1 = document.getElementById("numberInput1").value;
    number2 = document.getElementById("numberInput2").value;
    answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + "x" + number2;
    input = "<br><br><h4>Answer: <input type='number' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'Checkans()' id = 'checkans'>Check</button>";
    div = question + input + check_button;
    document.getElementById("output").innerHTML = div;
    document.getElementById("numberInput1").value= "";
    document.getElementById("numberInput2").value= "";
}
ques_turn = "player1";
ans_turn = "player2";


function Checkans(){
    
get_answer = document.getElementById("input_check_box").value;

if(get_answer == answer){
 
    if(ans_turn == "player1")
    {
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else 
    {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
    if(ques_turn == "player1")
	{
		ques_turn = "player2";
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		ques_turn = "player1";
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(ans_turn == "player1")
	{
		ans_turn = "player2";
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		ans_turn = "player1";
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}
    document.getElementById("output").innerHTML = "";
 
}



