let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) { // id ist der Funktionsparameter und greift auf die Id der jeweiligen Stelle zu zb. fillShape(3) = an stelle 3
    if (!fields[id] && !gameOver) { // if !fields(id) zb = fields(0) und da ist noch nichts drin bekommen wir den wert undifined => if (fields[id]) = false und die ganze if abfrage wird nicht ausgeführt.
        //! macht es möchtlich, dass das erste mal klicken erlaubt ist (macht false zu true) sonst würde das gar nicht mehr anklickbar sein (muss negiert werden)
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive')
            document.getElementById('player-2').classList.add('player-inactive')
        }

        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) { // i++ = i = i+1
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none'); // 'circle-0: die Stelle (0,1,2...) wird ersetzt mit i
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }

    }
}


function checkForWin() {
    let winner;
    // First Row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { //&& fields[0]: Evaluieren (Auswerten): 'circle' == 'circle' / true 'circle' == 'cross' / false
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';

    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1)';
    }
    if (winner) {
        console.log('Gewonnen', winner)
        gameOver = true;
        setTimeout(function() {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1000)

    }

}


function restartGame() {
    gameOver = false;
    fields = [] //fields muss wieder geleert werden 
    document.getElementById('game-over').classList.add('d-none');
    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).classList.add('d-none'); // setzt alle linien wieder auf d-none
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}



/* zur GameOver Funktion: 
man legt eine Variable gameOver = False an damit normalerweise natürlich man nicht gameOver ist. da wir mit der if abfrage fields[id]
schon checken ob etwas drin ist, kann man hier GameOver gleich noch mit rein nehmen. 
d.h die if abfrage checkt jetzt ob ich das ganze ausführen möchte und ob man nicht gameOver ist. gameOver ist false und mit ! wird es 
zu true also wenn man nicht gameOver ist geht es weiter */