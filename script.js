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

    const playerDiv = document.querySelector('.human');
    const computerDiv = document.querySelector('.nonhuman');

    const playerChoice = document.getElementById('player');
    const computerChoice = document.getElementById('computer');

    const gridArray = Array.from(gridItems);

    let newNumber = Math.floor(Math.random() * 5);
    let playersChoice = "";
    let computersChoice = "";

    let score = 0; 
    let width = screen.width;

    console.log(width)
    


    const scissors = {
        image: './images/icon-scissors.svg', 
        border: 'hsl(39, 89%, 49%) 1.5rem solid',
        mobile: 'hsl(39, 89%, 49%) 0.75rem solid',
        shadow: 'inset 0px 6px 0px 0px #cbc8c8, 0px 6px 0px 0px hsla(39, 89%, 49%, 0.747)'
    }

    const rock = {
        image: './images/icon-rock.svg', 
        border: 'hsl(349, 71%, 52%) 1.5rem solid',
        mobile: 'hsl(349, 71%, 52%) 0.75rem solid',
        shadow: 'inset 0px 6px 0px 0px #cbc8c8, 0px 6px 0px 0px hsla(349, 71%, 52%, 0.753)'
    }

    const paper = {
        image: './images/icon-paper.svg', 
        border: 'hsl(230, 89%, 62%) 1.5rem solid',
        mobile: 'hsl(230, 89%, 62%) 0.75rem solid',
        shadow: 'inset 0px 6px 0px 0px #cbc8c8, 0px 6px 0px 0px hsla(230, 89%, 62%, 0.74)'
    }

    const spock = {
        image: './images/icon-spock.svg', 
        border: 'hsl(189, 59%, 53%) 1.5rem solid',
        mobile: 'hsl(189, 59%, 53%) 0.75rem solid',
        shadow: 'inset 0px 6px 0px 0px #cbc8c8, 0px 6px 0px 0px hsla(189, 59%, 53%, 0.747)'
    }

    const lizard = {
        image: './images/icon-lizard.svg', 
        border: 'hsl(261, 73%, 60%) 1.5rem solid',
        mobile: 'hsl(261, 73%, 60%) 0.75rem solid',
        shadow: 'inset 0px 6px 0px 0px #cbc8c8, 0px 6px 0px 0px hsla(261, 73%, 60%, 0.74)'
    }

    // playersChoice = "rock"
    // playerChoice.src = rock.image;
    // playerDiv.style.border = rock.border;

    // computerChoice.src = paper.image;
    // computerDiv.style.border = paper.border;

    const choiceSelected = (e) =>
    {
        switch (e.target.id) {
            case "scissors": 
                playersChoice = "scissors"
                playerChoice.src = scissors.image; 
                window.innerWidth > 600 ? playerDiv.style.border = scissors.border : playerDiv.style.border = scissors.mobile 
                playerDiv.style.boxShadow = scissors.shadow
                setComputer();   
                break; 
            case "paper": 
                playersChoice = "paper"; 
                playerChoice.src = paper.image;
                window.innerWidth > 600 ? playerDiv.style.border = paper.border : playerDiv.style.border = paper.mobile 
                playerDiv.style.boxShadow = paper.shadow 
                setComputer();
                break; 
            case "rock": 
                playersChoice = "rock"
                playerChoice.src = rock.image;
                window.innerWidth > 600 ? playerDiv.style.border = rock.border : playerDiv.style.border = rock.mobile  
                playerDiv.style.boxShadow = rock.shadow
                setComputer();
                break; 
            case "spock": 
                playersChoice = "spock"
                playerChoice.src = spock.image; 
                window.innerWidth > 600 ? playerDiv.style.border = spock.border : playerDiv.style.border = spock.mobile 
                playerDiv.style.boxShadow = spock.shadow 
                setComputer();
                break; 
            case "lizard": 
                playersChoice = "lizard"
                playerChoice.src = lizard.image;  
                window.innerWidth > 600 ? playerDiv.style.border = lizard.border : playerDiv.style.border = lizard.mobile  
                playerDiv.style.boxShadow = lizard.shadow
                setComputer();
                break; 
        }
    }

    const setComputer = () => {
        computersChoice = gridArray[newNumber].id;
        switch(computersChoice) {
            case "scissors": 
                computerChoice.src = scissors.image;
                window.innerWidth > 600 ? computerDiv.style.border = scissors.border : computerDiv.style.border = scissors.mobile
                computerDiv.style.boxShadow = scissors.shadow
                break; 
            case "paper": 
                computerChoice.src = paper.image;
                window.innerWidth > 600 ? computerDiv.style.border = paper.border : computerDiv.style.border = paper.mobile
                computerDiv.style.boxShadow = paper.shadow
                break; 
            case "rock": 
                computerChoice.src = rock.image;
                window.innerWidth > 600 ? computerDiv.style.border = rock.border : computerDiv.style.border = rock.mobile
                computerDiv.style.boxShadow = rock.shadow
                break; 
            case "spock": 
                computerChoice.src = spock.image;
                window.innerWidth > 600 ? computerDiv.style.border = spock.border : computerDiv.style.border = spock.mobile
                computerDiv.style.boxShadow = spock.shadow
                break; 
            case "lizard": 
                computerChoice.src = lizard.image;
                window.innerWidth > 600 ? computerDiv.style.border = lizard.border : computerDiv.style.border = lizard.mobile
                computerDiv.style.boxShadow = lizard.shadow
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
        rulesButton.classList.add('hide');
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
         }, 2500)    
    }

    const handleResult = () => {
        if(window.innerWidth > 600)
        {
            moveComp() 
            movePlayer()
        } 
        moveResult()
    }

    const gameReset = () => {
        newNumber = Math.floor(Math.random() * 5);
        const precursor = document.querySelector('.precursor').classList.toggle('hide');
        gameContainer.classList.toggle('hide');
        faceoffContainer.classList.toggle('hide');
        computerDiv.classList.toggle('hide');
        playerDiv.classList.remove('box-shadow')
        computerDiv.classList.remove('box-shadow')
        rulesButton.classList.remove('hide');
        resetElements()
    }

    const moveComp = () => {
        anime({
            targets: '.computer',
            easing: 'easeOutExpo',
            translateX: 150, 
            delay: 2000
          });
    }

    const movePlayer = () => {
        anime({
            targets: '.player',
            easing: 'easeOutExpo',
            translateX: -150, 
            delay: 2000
          });
    }

    const moveResult = () => {
        anime({
            targets: '.result-container',
            translateY: 0, 
            easing: 'easeOutExpo',
            duration: 2000, 
            delay: 2500
        });
    }

    const resetElements = () => {
        if(window.innerWidth > 600){
            anime({
                targets: '.computer',
                easing: 'easeOutExpo',
                translateX: -50, 
                duration: 1
              });
              anime({
                targets: '.player',
                easing: 'easeOutExpo',
                translateX: 50, 
                duration: 1
              });
        }
          anime({
            targets: '.result-container',
            translateY: 600, 
            easing: 'easeOutExpo'
        });
    }
    
    resetElements(); 

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

