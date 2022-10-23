document.addEventListener('DOMContentLoaded', (e) => {

    const scoreDiv = document.getElementById('score');
    const gridItems = document.querySelectorAll('.grid-item');
    const rulesButton = document.querySelector('.rules');
    const rulesModal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    const gameContainer = document.querySelector('.game-container');
    const faceoffContainer = document.querySelector('.faceoff-container')

    const resultCont = document.querySelector('.result-container');
    const result = document.querySelector('.result');
    const reset = document.querySelector('.game-reset');

    const boxShadow = document.querySelector('.winner-circle');

    const playerDiv = document.querySelector('.human');
    const computerDiv = document.querySelector('.nonhuman');

    const playerChoice = document.getElementById('player');
    const computerChoice = document.getElementById('computer');

    const gridArray = Array.from(gridItems);

    let newNumber = Math.floor(Math.random() * 5);
    let playersChoice = "";
    let computersChoice = "";

    let score = 0; 

    const scissors = {
        image: './images/icon-scissors.svg', 
        border: 'hsl(39, 89%, 49%) 30px solid'
    }

    const rock = {
        image: './images/icon-rock.svg', 
        border: 'hsl(349, 71%, 52%) 30px solid'
    }

    const paper = {
        image: './images/icon-paper.svg', 
        border: 'hsl(230, 89%, 62%) 30px solid'
    }

    const spock = {
        image: './images/icon-spock.svg', 
        border: 'hsl(189, 59%, 53%) 30px solid'
    }

    const lizard = {
        image: './images/icon-lizard.svg', 
        border: 'hsl(261, 73%, 60%) 30px solid'
    }

    const choiceSelected = (e) =>
    {
        switch (e.target.id) {
            case "scissors": 
                playersChoice = "scissors"
                playerChoice.src = scissors.image; 
                playerDiv.style.border = scissors.border;  
                setComputer();   
                break; 
            case "paper": 
                playersChoice = "paper"; 
                playerChoice.src = paper.image;
                playerDiv.style.border = paper.border; 
                setComputer();
                break; 
            case "rock": 
                playersChoice = "rock"
                playerChoice.src = rock.image;
                playerDiv.style.border = rock.border; 
                setComputer();
                break; 
            case "spock": 
                playersChoice = "spock"
                playerChoice.src = spock.image; 
                playerDiv.style.border = spock.border; 
                setComputer();
                break; 
            case "lizard": 
                playersChoice = "lizard"
                playerChoice.src = lizard.image;  
                playerDiv.style.border = lizard.border; 
                setComputer();
                break; 
        }
    }

    const setComputer = () => {
        computersChoice = gridArray[newNumber].id;
        switch(computersChoice) {
            case "scissors": 
                computerChoice.src = scissors.image;
                computerDiv.style.border = scissors.border;
                break; 
            case "paper": 
                computerChoice.src = paper.image;
                computerDiv.style.border = paper.border;
                break; 
            case "rock": 
                computerChoice.src = rock.image;
                computerDiv.style.border = rock.border;
                break; 
            case "spock": 
                computerChoice.src = spock.image;
                computerDiv.style.border = spock.border;
                break; 
            case "lizard": 
                computerChoice.src = lizard.image;
                computerDiv.style.border = lizard.border;
                break; 
        } 
        changeScene();  
    }

    const changeScene = () => {
        // Cool code to switch which div is displayed and then send to function for actual game functionality
        gameContainer.classList.toggle('hide');
        faceoffContainer.classList.toggle('hide');
        setTimeout(() => {
            const precursor = document.querySelector('.precursor').classList.toggle('hide');
            computerDiv.classList.toggle('hide');
        }, 2000)
        startGame(); 
    }

    const startGame = () =>{
        //Blob of logic to see who wins
        if(playersChoice === computersChoice){
            result.innerHTML = "Tie"
            handleResult(); 
        }
        else {
            if(playersChoice === "scissors" && (computersChoice === "paper" || computersChoice === "lizard")){
                result.innerHTML = "You win!"
                handleScore();
            }
            else if(playersChoice === "paper" && (computersChoice === "spock" || computersChoice === "rock")){
                result.innerHTML = "You win!"
                handleScore();
            }
            else if(playersChoice === "rock" && (computersChoice === "lizard" || computersChoice === "scissors")){
                result.innerHTML = "You win!"
                handleScore();
            }
            else if(playersChoice === "lizard" && (computersChoice === "spock" || computersChoice === "paper")){
                result.innerHTML = "You win!"
                handleScore();
            }
            else if(playersChoice === "spock" && (computersChoice === "rock" || computersChoice === "scissors")){
                result.innerHTML = "You win!"
                handleScore();
            }
            else {
                result.innerHTML = "You lose"
                setTimeout(() => {
                    computerDiv.classList.add('box-shadow')
                }, 2000)
                handleResult(); 
            }
        }
    }

    const handleScore = () => {
        handleResult(); 
        score++;
        setTimeout(() => {
            scoreDiv.innerHTML = score;
            playerDiv.classList.add('box-shadow')
         }, 2000)    
    }

    const handleResult = () => {
        setTimeout(() => {
            resultCont.classList.toggle('hide');
         }, 2000) 
    }

    const gameReset = () => {
        newNumber = Math.floor(Math.random() * 5);
        const precursor = document.querySelector('.precursor').classList.toggle('hide');
        gameContainer.classList.toggle('hide');
        faceoffContainer.classList.toggle('hide');
        computerDiv.classList.toggle('hide');
        playerDiv.classList.remove('box-shadow')
        computerDiv.classList.remove('box-shadow')
        resultCont.classList.toggle('hide');
        boxShadow.style.display = "none";
    }

    rulesButton.addEventListener('click', () => {
        rulesModal.style.display = 'block';
    })

    closeModal.addEventListener('click', () => {
        rulesModal.style.display = 'none';
    })

    gridArray.forEach(item => {
        item.addEventListener('click', (e) => {
            choiceSelected(e); 
        })
    })

    reset.addEventListener('click', gameReset)
    
});

