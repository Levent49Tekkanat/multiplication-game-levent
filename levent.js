export default function initGame() {
    document.getElementById("main").addEventListener("click", onPlay)



}










let one = Math.round(Math.random() * 10);;
let two = Math.round(Math.random() * 10);
let result = one * two;
let erreur = 0;
let score = 10;
let up = 3;

function onPlay(event) {
    let timeoutID;
    if (event.target === document.getElementById("play")) {


        finishTime()
        

        function finishTime() {
            
            timeoutID = window.setTimeout(slowAlert, 120000);
        }

        function slowAlert() {
            const content = `
          <h2 aria-live="assertive"> Partie terminer </h2>
          <p> Ton score est de ${score} points </p>
          <a href= "./index.html">Rejouer</a>
          `
            document.getElementById("main").innerHTML = content
        }

        

        const message = `
            <p aria-live="assertive"  id="label"> calcul ${one}*  ${two} </p> 
            <form id="form-game">

<input type="tel" id="input">
<button type="submit" id="valid">Valider</button>
</form> 
<div id="div-up"> 
<div> chance(s) ${up} </div>
</div>
`
        document.getElementById("zone").innerHTML = message;
        document.getElementById("input").focus()

    }


    if (event.target === document.getElementById("valid")) {
        if (up === 0) {
            
            window.clearTimeout(gameOver());
            
        }
        event.preventDefault()
        let userInput = parseInt(document.getElementById("input").value);

        if (userInput == result) {

            one = Math.round(Math.random() * 10);
            two = Math.round(Math.random() * 10);
            result = one * two
            const message = `
                <p aria-live="assertive" id="label"> calcul ${one} * ${two} </p> 
                <form id="form-game">


<input type="tel" id="input">
<button type="submit" id="valid">Valider</button>
</form>
<div>Ton score ${score}</div>
<div id="div-up"> 
<div> chance(s) ${up} </div>
</div>
`
            score += 10
            document.getElementById("zone").innerHTML = message
            document.getElementById("input").focus()

        }
        

        else if (userInput !== result) {

            up--

            erreur++
            
            const content = `
<div> Chances restantes  ${up}</div>
                <div aria-live="assertive"> Faux tu as utilisé  ${erreur} chances </div>
                `
            document.getElementById("div-up").innerHTML = content
            if (up === 0) {
                const content = `
    <div> Chances restantes  ${up}</div>
                <div aria-live="assertive"> Faux c'est ta dernière chances </div>
                `
            document.getElementById("div-up").innerHTML = content
            }
        }
        

    }
}



function gameOver() {
    const content = `
    <h2 aria-live= "assertive"> Game Over </h2>
    <p> Ton score est de ${score} point(s) </p>
    
    <a href= "./index.html">Retour a l'accueil </a>
    `
    document.getElementById("main").innerHTML = content
} 