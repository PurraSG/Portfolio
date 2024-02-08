// nightTime / dayTime //
const styleSheet = document.getElementById('styleSheet');
const nightDayBtn = document.getElementById("nightDayBtn");
const moonSunIcon = document.getElementById("moonSunIcon");

let nightTime = false;
const opening = () => {
    nightDayBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}
opening();

const changeMode = () => {
    nightTime = !nightTime;
    if (nightTime === true) {
        nightDayBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
        styleSheet.href = "CSS/nightTime.css";
        iglogo.src = "img/IGN.png";
        linklogo.src = "img/linkedinN.png";
        githublogo1.src = "img/GithubLogoN.png";
        githublogo2.src = "img/GithubLogoN.png";
        soon.src = "img/comingN.png";
        pythonlogo.src = "img/pythonN.png";
    } else {
        nightDayBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        styleSheet.href = 'CSS/dayTime.css';
        iglogo.src = "img/IG.png";
        linklogo.src = "img/linkedin.png";
        githublogo1.src = "img/GithubLogo.png";
        githublogo2.src = "img/GithubLogo.png";
        soon.src = "img/7292022_nuraghies_2_08-removebg-preview.png";
        pythonlogo.src = "img/pngwing.png";
    }
};

nightDayBtn.addEventListener("click", changeMode);



// Back to top button //
const upBtn = document.querySelector("button.upBtn");

const checkHeight = () => {
    if (window.scrollY > 50) {
        upBtn.style.display = "flex";
    } else {
        upBtn.style.display = "none";
    }
}

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

upBtn.addEventListener("click", scrollUp);
window.addEventListener("scroll", checkHeight);

// GAME

const gameBoard = document.querySelector(".gameBoard");
const placeAction = document.getElementById("action");
const choiceIcons = document.querySelectorAll('.choices i');
const canvas = document.querySelector("#canvasC")
const jsConfetti = new JSConfetti()

let player = document.getElementById("player");
let computer = document.getElementById("computer");
let result = document.getElementsByClassName("result")[0];

const win = () => {
    jsConfetti.addConfetti();
};


const switchClass = (choice) => {
    switch (choice) {
        case "rock":
            return "fa-regular fa-hand-back-fist fa-rotate-90"
            break;
        case "paper":
            return "fa-regular fa-hand fa-rotate-90"
            break;
        case "scissors":
            return "fa-regular fa-hand-scissors fa-flip-horizontal"
            break;
        default:
            break;
    }
}

const updateIcons = (playersChoice, computerChoice) => {
    // Update player's icon
    player.querySelector('i').className = switchClass(playersChoice);
    // Update computer's icon
    computer.querySelector('i').className = switchClass(computerChoice);
};

const newGame = () => {
    player.querySelector('i').className = "fa-regular fa-hand-back-fist fa-rotate-90";
    computer.querySelector('i').className = "fa-regular fa-hand-back-fist fa-rotate-90";
}

choiceIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
        newGame()
        const playersChoice = icon.id;
        icon.classList.add("active");

        choiceIcons.forEach((otherIcon) => {
            if (otherIcon !== icon) {
                otherIcon.classList.remove("active");
            }
        });

        gameBoard.classList.add("start");
        result.innerHTML = "&nbsp;";


        let time = setTimeout(() => {
            gameBoard.classList.remove("start");

        const computerChooses = () => {
            randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber === 0) {
                return "rock";
            } else if (randomNumber === 1) {
                return "paper";
            } else {
                return "scissors";
            }
        };

        let computerChoice = computerChooses();

        console.log("Player's choice:", playersChoice);
        console.log("Computer's choice:", computerChoice);

        if (playersChoice === computerChoice) {
            updateIcons(playersChoice, computerChoice);
            result.innerHTML = "It's a tie!"
        } else if (
            (playersChoice === "rock" && computerChoice === "scissors") ||
            (playersChoice === "paper" && computerChoice === "rock") ||
            (playersChoice === "scissors" && computerChoice === "paper")
        ) {
            updateIcons(playersChoice, computerChoice);
            result.innerHTML = "You win!";
            win();
        } else {
            result.innerHTML = "You lose!";
            updateIcons(playersChoice, computerChoice);
        }
    }, 1500);
});
});
