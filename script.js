let fields = [];

let currentShape = 'cross';

function fillShape(id) { // id ist der Funktionsparameter und greift auf die Id der jeweiligen Stelle zu zb. fillShape(3) = an stelle 3
    if (currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }

    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
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

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { //&& fields[0]: Evaluieren (Auswerten): 'circle' == 'circle' / true 'circle' == 'cross' / false
        winner = fields[0];
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }
    if (winner) {
        console.log('Gewonnen', winner)
    }

}