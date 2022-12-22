let bird = document.querySelector(".bird")
let score = 0
let condition = "pause"
let speedY = 0
let pipe1 = document.querySelector(".pipe1")
let pipe2 = document.querySelector(".pipe2")
let pipe3 = document.querySelector(".pipe3")
let pipe4 = document.querySelector(".pipe4")
let pipe5 = document.querySelector(".pipe5")
let pipe6 = document.querySelector(".pipe6")
let pipe7 = document.querySelector(".pipe7")
let pipe8 = document.querySelector(".pipe8")
let pipe9 = document.querySelector(".pipe9")
let pipe10 = document.querySelector(".pipe10")
let speedX = 5
let HTMLSCORE = document.querySelector(".score")
let gameOver = false
let canCollide = true


function movepipes(pipe1,pipe2){
			pipe1.style.left = pipe1.getBoundingClientRect().left - speedX + "px"
		pipe2.style.left = pipe2.getBoundingClientRect().left - speedX + "px"
		if(check_collision (pipe1) || check_collision (pipe2)){
			gameOver = true
		}

		if(pipe1.getBoundingClientRect().bottom < bird.getBoundingClientRect().top 
			&& bird.getBoundingClientRect().bottom < pipe2.getBoundingClientRect().top
			&& bird.getBoundingClientRect().left < pipe1.getBoundingClientRect().right
			&& bird.getBoundingClientRect().right > pipe1.getBoundingClientRect().right && canCollide == true){
			score = score + 1
			console.log("can collide")
			HTMLSCORE.innerHTML = "Score: " + score
			canCollide = false
			setTimeout(() => {
				canCollide = true

			}, 500)
		}


		if(pipe1.getBoundingClientRect().left < -50){
			pipe1.style.left = 1200 + "px"
			pipe2.style.left = 1200 + "px"
			let random =  Math.random()*400-50 
			pipe1.style.height = random + "px"
			pipe2.style.height = 250 - random + "px"

		}

}


document.addEventListener("keydown" , (e) => {
			if(e.code == "Space"){
				speedY = speedY - 8 
				bird.style.top = bird.getBoundingClientRect().top + speedY + "px"
			}
		})
document.addEventListener("keydown" , (e) => {
	if(e.code == "Enter" && condition != "play"){
		canCollide = true
		score = 0
		gameOver = false
		pipe1.style.left = pipe1.getBoundingClientRect().left + 500 + "px"
		pipe2.style.left = pipe2.getBoundingClientRect().left + 500 + "px"
		pipe3.style.left = pipe3.getBoundingClientRect().left + 500 + "px"
		pipe4.style.left = pipe4.getBoundingClientRect().left + 500 + "px"
		pipe5.style.left = pipe5.getBoundingClientRect().left + 500 + "px"
		pipe6.style.left = pipe6.getBoundingClientRect().left + 500 + "px"
		pipe7.style.left = pipe7.getBoundingClientRect().left + 500 + "px"
		pipe8.style.left = pipe8.getBoundingClientRect().left + 500 + "px"
		pipe9.style.left = pipe9.getBoundingClientRect().left + 500 + "px"
		pipe10.style.left = pipe10.getBoundingClientRect().left + 500 + "px"


		speedY = 0
		bird.style.top = "250px"
		conditon = "play"
		let game = setInterval(function(){
		speedY = speedY + 0.6
		movepipes(pipe1,pipe2)
		movepipes(pipe3,pipe4)
		movepipes(pipe5,pipe6)
		movepipes(pipe7,pipe8)
		movepipes(pipe9,pipe10)		
		bird.style.top = bird.getBoundingClientRect().top + speedY + "px"
		if(bird.getBoundingClientRect().top > 477 || bird.getBoundingClientRect().top<-50 || gameOver == true){
			clearInterval(game)
			condition = "pause"


		}

		}, 1)
	}

})



function check_collision(a) {
  return !(
      ((bird.getBoundingClientRect().bottom) < (a.getBoundingClientRect().top)) ||
      (bird.getBoundingClientRect().top > (a.getBoundingClientRect().bottom)) ||
      ((bird.getBoundingClientRect().right) < a.getBoundingClientRect().left) ||
      (bird.getBoundingClientRect().left > (a.getBoundingClientRect().right))
  );
}





