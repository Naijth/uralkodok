const table = document.createElement('table'); //creates the table element in the const table variable
document.body.appendChild(table); //appends said table to the body

const colgroup = document.createElement('colgroup'); //creates a column group in the const colgroup variable
table.appendChild(colgroup); //appends colgroup to the previously created table
const col1 = document.createElement('col'); //creates a column in the const col1 variable
colgroup.appendChild(col1); //appends col1 to colgroup
col1.className = "column"; //gives col1 the "column" class
const col2 = document.createElement('col'); //creates a column in the const col2 variable
colgroup.appendChild(col2); //appends col2 to colgroup
const col3 = document.createElement('col'); //creates a column in the const col3 variable
colgroup.appendChild(col3); //appends col3 to colgroup
col3.className = "column"; //gives col3 the "column" class

const thead = document.createElement('thead'); //creates the table header element in the const thead variable
table.appendChild(thead); //appends thead to the previously created table
const tr1 = document.createElement('tr'); //creates a row in the const tr1 variable for the header
thead.appendChild(tr1); //appends tr1 to thead
const th1 = document.createElement('th'); //creates a table header cell in the const th1 variable
tr1.appendChild(th1); //appends th1 to tr1
th1.innerHTML = "Uralkodó"; //sets the text of th1 to "Uralkodó"
const th2 = document.createElement('th'); //creates a table header cell in the const th2 variable
tr1.appendChild(th2); //appends th2 to tr1
th2.innerHTML = "Esemény"; //sets the text of th2 to "Esemény"
const th3 = document.createElement('th'); //creates a table header cell in the const th3 variable
tr1.appendChild(th3); //appends th3 to tr1
th3.innerHTML = "Évszám"; //sets the text of th3 to "Évszám"

const tbody = document.createElement('tbody'); //creates the table body element in the const tbody variable
table.appendChild(tbody); //appends tbody to the table

const tr2 = document.createElement('tr'); //creates a row in the const tr2 variable
thead.appendChild(tr2); //appends tr2 to thead
const td1 = document.createElement('td'); //creates a table cell in the const td1 variable
tr2.appendChild(td1); //appends td1 to tr2
td1.rowSpan = 2; //sets td1 to span 2 rows
td1.innerHTML = "I. István"; //sets the text of td1 to "I. István"
const td2 = document.createElement('td'); //creates a table cell in the const td2 variable
tr2.appendChild(td2); //appends td2 to tr2
td2.innerHTML = "Koronázás"; //sets the text of td2 to "Koronázás"
const td3 = document.createElement('td'); //creates a table cell in the const td3 variable
tr2.appendChild(td3); //appends td3 to tr2
td3.innerHTML = "1000"; //sets the text of td3 to "1000"

const tr3 = document.createElement('tr'); //creates a row in the const tr3 variable
thead.appendChild(tr3); //appends tr3 to thead
const td4 = document.createElement('td'); //creates a table cell in the const td4 variable
tr3.appendChild(td4); //appends td4 to tr3
td4.innerHTML = "Pannonhalmi apátság megalapítása"; //sets the text of td4 to "Pannonhalmi apátság megalapítása"
const td5 = document.createElement('td'); //creates a table cell in the const td5 variable
tr3.appendChild(td5); //appends td5 to tr3
td5.innerHTML = "1001"; //sets the text of td5 to "1001"

const tr4 = document.createElement('tr'); //creates a row in the const tr4 variable
thead.appendChild(tr4); //appends tr4 to thead
const td6 = document.createElement('td'); //creates a table cell in the const td6 variable
tr4.appendChild(td6); //appends td6 to tr4
td6.innerHTML = "IV. Béla"; //sets the text of td6 to "IV. Béla"
const td7 = document.createElement('td'); //creates a table cell in the const td7 variable
tr4.appendChild(td7); //appends td7 to tr4
td7.innerHTML = "tatárjárás"; //sets the text of td7 to "tatárjárás"
const td8 = document.createElement('td'); //creates a table cell in the const td8 variable
tr4.appendChild(td8); //appends td8 to tr4
td8.innerHTML = "1241-1242"; //sets the text of td8 to "1241-1242"

const tr5 = document.createElement('tr'); //creates a row in the const tr5 variable
thead.appendChild(tr5); //appends tr5 to thead
const td9 = document.createElement('td'); //creates a table cell in the const td9 variable
tr5.appendChild(td9); //appends td9 to tr5
td9.rowSpan = 2; //sets td9 to span 2 rows
td9.innerHTML = "Mátyás király"; //sets the text of td9 to "Mátyás király"
const td10 = document.createElement('td'); //creates a table cell in the const td10 variable
tr5.appendChild(td10); //appends td10 to tr5
td10.innerHTML = "Bécs elfoglalása"; //sets the text of td10 to "Bécs elfoglalása"
const td11 = document.createElement('td'); //creates a table cell in the const td11 variable
tr5.appendChild(td11); //appends td11 to tr5
td11.innerHTML = "1485"; //sets the text of td11 to "1485"

const tr6 = document.createElement('tr'); //creates a row in the const tr6 variable
thead.appendChild(tr6); //appends tr6 to thead
const td12 = document.createElement('td'); //creates a table cell in the const td12 variable
tr6.appendChild(td12); //appends td12 to tr6
td12.innerHTML = "Kenyérmezei csata"; //sets the text of td12 to "Kenyérmezei csata"
const td13 = document.createElement('td'); //creates a table cell in the const td13 variable
tr6.appendChild(td13); //appends td13 to tr6
td13.innerHTML = "1479"; //sets the text of td13 to "1479"

const tr8 = document.createElement('tr'); //creates a row in the const tr8 variable
thead.appendChild(tr8); //appends tr8 to thead
const td14 = document.createElement('td'); //creates a table cell in the const td14 variable
tr8.appendChild(td14); //appends td14 to tr8
td14.rowSpan = 2; //sets td14 to span 2 rows
td14.innerHTML = "II. Rákóczi Ferenc"; //sets the text of td14 to "II. Rákóczi Ferenc"
const td15 = document.createElement('td'); //creates a table cell in the const td15 variable
tr8.appendChild(td15); //appends td15 to tr8
td15.innerHTML = "A szabadságharc kezdete"; //sets the text of td15 to "A szabadságharc kezdete"
const td16 = document.createElement('td'); //creates a table cell in the const td16 variable
tr8.appendChild(td16); //appends td16 to tr8
td16.innerHTML = "1703"; //sets the text of td16 to "1703"

const tr9 = document.createElement('tr'); //creates a row in the const tr9 variable
thead.appendChild(tr9); //appends tr9 to thead
const td17 = document.createElement('td'); //creates a table cell in the const td17 variable
tr9.appendChild(td17); //appends td17 to tr9
td17.innerHTML = "A szabadságharc vége"; //sets the text of td17 to "A szabadságharc vége"
const td19 = document.createElement('td'); //creates a table cell in the const td19 variable
tr9.appendChild(td19); //appends td19 to tr9
td19.innerHTML = "1711"; //sets the text of td19 to "1711"