/* While loop */

let colors = ['yellow', 'blue', 'red', 'orange'];

let i = 0;

while (i < colors.length) {
    console.log(colors);
    colors++;
}

/* For loop */

let colorsNew = ['yellow', 'blue', 'red', 'orange'];

for (let x = 0; x < colorsNew.length; colorsNew++) {
    console.log(colorsNew);
}

/* Array method: forEach */

const colorsArray = ['yellow', 'blue', 'red', 'orange'];

colorsArray.forEach(element => console.log(element));

/* 
1. For loop neemt 6 regels in beslag. While loop neemt 4 regels in beslag.
2. For each methode neemt 2 regels in beslag.
3. Voordelen: minder code nodig, je hoeft geen nieuwe variabelen toe te voegen, sneller duidelijkheid over de bedoeling van de code.
4. Nee. Zie probeersel hieronder. Ik ben hier wel aan het itereren, want het is een herhalende opdracht.
*/

const movieInfo = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes'],
    year: 2020,
    nation: 'Wonderland',
};

Object.keys(movieInfo).forEach(e => console.log('key =', e, ', value =', movieInfo[e]));