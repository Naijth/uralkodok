const table = document.createElement('table'); //creates the table in the const table variable
document.body.appendChild(table); //appends said table to the body

const colgroup = document.createElement('colgroup'); //creates a colugroup in the const colgroup variable
table.appendChild(colgroup); //appends colgroup to the previously created table
const col1 = document.createElement('col'); //creates a column in the const col1 variable
colgroup.appendChild(col1); //appends col1 to colgroup
col1.className = "column"; //gives col1 the "column" class
const col2 = document.createElement('col'); //creates a column in the const col2 variable
colgroup.appendChild(col2); //appends col2 to colgroup
const col3 = document.createElement('col'); //creates a column in the const col3 variable
colgroup.appendChild(col3); //appends col3 to colgroup
col3.className = "column"; //gives col3 the "column" class

const uralkodo = "Uralkodó"; //this is a variable
const esemeny = "Esemény"; //this is a variable
const evszam = "Évszám"; //this is a variable

const thead = document.createElement('thead'); //creates the table header element in the const thead variable
table.appendChild(thead); //appends thead to the previously created table
const tr1 = document.createElement('tr'); //creates a row in the const tr1 variable for the header
thead.appendChild(tr1); //appends tr1 to thead
const th1 = document.createElement('th'); //creates a table header cell in the const th1 variable
tr1.appendChild(th1); //appends th1 to tr1
th1.innerHTML = uralkodo; //sets the text of th1 to the variable uralkodo's content
const th2 = document.createElement('th'); //creates a table header cell in the const th2 variable
tr1.appendChild(th2); //appends th2 to tr1
th2.innerHTML = esemeny; //sets the text of th2 to the variable esemeny's content
const th3 = document.createElement('th'); //creates a table header cell in the const th3 variable
tr1.appendChild(th3); //appends th3 to tr1
th3.innerHTML = evszam; //sets the text of th3 to the variable evszam's content

/**
 * The rest does the same unless specified otherwise
 */

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const uralkodo1 = "I. István";
const esemeny1 = "Koronázás";
const evszam1 = "1000";

const tr2 = document.createElement('tr');
tbody.appendChild(tr2);
const td1 = document.createElement('td');
tr2.appendChild(td1);
td1.rowSpan = 2;  //sets td1 to span 2 rows
td1.innerHTML = uralkodo1;
const td2 = document.createElement('td');
tr2.appendChild(td2);
td2.innerHTML = esemeny1;
const td3 = document.createElement('td');
tr2.appendChild(td3);
td3.innerHTML = evszam1;

const esemeny2 = "Pannonhalmi apátság megalapítása";
const evszam2 = "1001";

const tr3 = document.createElement('tr');
tbody.appendChild(tr3);
const td4 = document.createElement('td');
tr3.appendChild(td4);
td4.innerHTML = esemeny2;
const td5 = document.createElement('td');
tr3.appendChild(td5);
td5.innerHTML = evszam2;

const uralkodo2 = "IV. Béla";
const esemeny3 = "tatárjárás";
const evszam3 = "1241-1242";

const tr4 = document.createElement('tr');
tbody.appendChild(tr4);
const td6 = document.createElement('td');
tr4.appendChild(td6);
td6.innerHTML = uralkodo2;
const td7 = document.createElement('td');
tr4.appendChild(td7); 
td7.innerHTML = esemeny3;
const td8 = document.createElement('td');
tr4.appendChild(td8);
td8.innerHTML = evszam3;

const uralkodo3 = "Mátyás király";
const esemeny4 = "Bécs elfoglalása";
const evszam4 = "1485";

const tr5 = document.createElement('tr');
tbody.appendChild(tr5);
const td9 = document.createElement('td');
tr5.appendChild(td9);
td9.rowSpan = 2;
td9.innerHTML = uralkodo3;
const td10 = document.createElement('td');
tr5.appendChild(td10);
td10.innerHTML = esemeny4;
const td11 = document.createElement('td');
tr5.appendChild(td11);
td11.innerHTML = evszam4;

const esemeny5 = "Kenyérmezei csata";
const evszam5 = "1479";

const tr6 = document.createElement('tr');
tbody.appendChild(tr6);
const td12 = document.createElement('td');
tr6.appendChild(td12);
td12.innerHTML = esemeny5;
const td13 = document.createElement('td');
tr6.appendChild(td13);
td13.innerHTML = evszam5;

const uralkodo4 = "II. Rákóczi Ferenc";
const esemeny6 = "A szabadságharc kezdete";
const evszam6 = "1703";

const tr7 = document.createElement('tr');
tbody.appendChild(tr7);
const td14 = document.createElement('td');
tr7.appendChild(td14);
td14.rowSpan = 2;
td14.innerHTML = uralkodo4;
const td15 = document.createElement('td');
tr7.appendChild(td15);
td15.innerHTML = esemeny6;
const td16 = document.createElement('td');
tr7.appendChild(td16);
td16.innerHTML = evszam6;

const esemeny7 = "A szabadságharc vége";
const evszam7 = "1711";

const tr8 = document.createElement('tr');
tbody.appendChild(tr8);
const td17 = document.createElement('td');
tr8.appendChild(td17);
td17.innerHTML = esemeny7;
const td19 = document.createElement('td');
tr8.appendChild(td19);
td19.innerHTML = evszam7;