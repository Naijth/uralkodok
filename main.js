const tbody = document.createElement('tbody'); //creates the table body element in the const tbody variable
table.appendChild(tbody); //appends tbody to the previously created table

const uralkodo1 = "I. István"; //defines a variable representing a ruler's name
const esemeny1 = "Koronázás"; //defines a variable representing an event
const evszam1 = "1000"; //defines a variable representing a year

const tr2 = document.createElement('tr'); //creates a row in the const tr2 variable for the first ruler
tbody.appendChild(tr2); //appends tr2 to tbody
const td1 = document.createElement('td'); //creates a cell in the const td1 variable for the ruler's name
tr2.appendChild(td1); //appends td1 to tr2
td1.rowSpan = 2;  //sets td1 to span 2 rows for grouped events
td1.innerHTML = uralkodo1; //sets the text of td1 to the variable uralkodo1's content
const td2 = document.createElement('td'); //creates a cell in the const td2 variable for the first event
tr2.appendChild(td2); //appends td2 to tr2
td2.innerHTML = esemeny1; //sets the text of td2 to the variable esemeny1's content
const td3 = document.createElement('td'); //creates a cell in the const td3 variable for the first year
tr2.appendChild(td3); //appends td3 to tr2
td3.innerHTML = evszam1; //sets the text of td3 to the variable evszam1's content

const esemeny2 = "Pannonhalmi apátság megalapítása"; //defines a variable for the second event
const evszam2 = "1001"; //defines a variable for the second year

const tr3 = document.createElement('tr'); //creates a row in the const tr3 variable for the second event
tbody.appendChild(tr3); //appends tr3 to tbody
const td4 = document.createElement('td'); //creates a cell in the const td4 variable for the second event
tr3.appendChild(td4); //appends td4 to tr3
td4.innerHTML = esemeny2; //sets the text of td4 to the variable esemeny2's content
const td5 = document.createElement('td'); //creates a cell in the const td5 variable for the second year
tr3.appendChild(td5); //appends td5 to tr3
td5.innerHTML = evszam2; //sets the text of td5 to the variable evszam2's content

const uralkodo2 = "IV. Béla"; //defines a variable for the second ruler's name
const esemeny3 = "tatárjárás"; //defines a variable for the third event
const evszam3 = "1241-1242"; //defines a variable for the third year

const tr4 = document.createElement('tr'); //creates a row in the const tr4 variable for the second ruler
tbody.appendChild(tr4); //appends tr4 to tbody
const td6 = document.createElement('td'); //creates a cell in the const td6 variable for the ruler's name
tr4.appendChild(td6); //appends td6 to tr4
td6.innerHTML = uralkodo2; //sets the text of td6 to the variable uralkodo2's content
const td7 = document.createElement('td'); //creates a cell in the const td7 variable for the event
tr4.appendChild(td7); //appends td7 to tr4
td7.innerHTML = esemeny3; //sets the text of td7 to the variable esemeny3's content
const td8 = document.createElement('td'); //creates a cell in the const td8 variable for the year
tr4.appendChild(td8); //appends td8 to tr4
td8.innerHTML = evszam3; //sets the text of td8 to the variable evszam3's content

const uralkodo3 = "Mátyás király"; //defines a variable for the third ruler's name
const esemeny4 = "Bécs elfoglalása"; //defines a variable for the fourth event
const evszam4 = "1485"; //defines a variable for the fourth year

const tr5 = document.createElement('tr'); //creates a row in the const tr5 variable for the third ruler
tbody.appendChild(tr5); //appends tr5 to tbody
const td9 = document.createElement('td'); //creates a cell in the const td9 variable for the ruler's name
tr5.appendChild(td9); //appends td9 to tr5
td9.rowSpan = 2; //sets td9 to span 2 rows for grouped events
td9.innerHTML = uralkodo3; //sets the text of td9 to the variable uralkodo3's content
const td10 = document.createElement('td'); //creates a cell in the const td10 variable for the event
tr5.appendChild(td10); //appends td10 to tr5
td10.innerHTML = esemeny4; //sets the text of td10 to the variable esemeny4's content
const td11 = document.createElement('td'); //creates a cell in the const td11 variable for the year
tr5.appendChild(td11); //appends td11 to tr5
td11.innerHTML = evszam4; //sets the text of td11 to the variable evszam4's content

const esemeny5 = "Kenyérmezei csata"; //defines a variable for the fifth event
const evszam5 = "1479"; //defines a variable for the fifth year

const tr6 = document.createElement('tr'); //creates a row in the const tr6 variable for the fifth event
tbody.appendChild(tr6); //appends tr6 to tbody
const td12 = document.createElement('td'); //creates a cell in the const td12 variable for the event
tr6.appendChild(td12); //appends td12 to tr6
td12.innerHTML = esemeny5; //sets the text of td12 to the variable esemeny5's content
const td13 = document.createElement('td'); //creates a cell in the const td13 variable for the year
tr6.appendChild(td13); //appends td13 to tr6
td13.innerHTML = evszam5; //sets the text of td13 to the variable evszam5's content

const uralkodo4 = "II. Rákóczi Ferenc"; //defines a variable for the fourth ruler's name
const esemeny6 = "A szabadságharc kezdete"; //defines a variable for the sixth event
const evszam6 = "1703"; //defines a variable for the sixth year

const tr7 = document.createElement('tr'); //creates a row in the const tr7 variable for the fourth ruler
tbody.appendChild(tr7); //appends tr7 to tbody
const td14 = document.createElement('td'); //creates a cell in the const td14 variable for the ruler's name
tr7.appendChild(td14); //appends td14 to tr7
td14.rowSpan = 2; //sets td14 to span 2 rows for grouped events
td14.innerHTML = uralkodo4; //sets the text of td14 to the variable uralkodo4's content
const td15 = document.createElement('td'); //creates a cell in the const td15 variable for the event
tr7.appendChild(td15); //appends td15 to tr7
td15.innerHTML = esemeny6; //sets the text of td15 to the variable esemeny6's content
const td16 = document.createElement('td'); //creates a cell in the const td16 variable for the year
tr7.appendChild(td16); //appends td16 to tr7
td16.innerHTML = evszam6; //sets the text of td16 to the variable evszam6's content

const esemeny7 = "A szabadságharc vége"; //defines a variable for the seventh event
const evszam7 = "1711"; //defines a variable for the seventh year

const tr8 = document.createElement('tr'); //creates a row in the const tr8 variable for the seventh event
tbody.appendChild(tr8); //appends tr8 to tbody
const td17 = document.createElement('td'); //creates a cell in the const td17 variable for the event
tr8.appendChild(td17); //appends td17 to tr8
td17.innerHTML = esemeny7; //sets the text of td17 to the variable esemeny7's content
const td19 = document.createElement('td'); //creates a cell in the const td19 variable for the year
tr8.appendChild(td19); //appends td19 to tr8
td19.innerHTML = evszam7; //sets the text of td19 to the variable evszam7's content