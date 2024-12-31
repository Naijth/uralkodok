const array = [
    { // creates the first element of the array
        uralkodo: "Uralkodó", // this is the label for the ruler column
        esemeny: "Koronázás", // this is the label for the event column
        evszam: "Évszám" // this is the label for the year column
    },
    { 
    uralkodo: "Uralkodó", // this is the label for the ruler column
    esemeny: "Koronázás", // this is the label for the event column
    evszam: "Évszám" // this is the label for the year column
    },
    { // creates the second element of the array
        uralkodo: "I. István", // the ruler's name
        esemeny: "Koronázás", // the event name
        evszam: "1000" // the year of the event
    },
    { // creates the third element of the array
        uralkodo: "I. István", // the ruler's name
        esemeny: "Koronázás", // the event name
        evszam: "1000" // the year of the event
    },
    {
        esemeny: "Pannonhalmi apátság megalapítása", // the event name
        evszam: "1001" // the year of the event
    },
    { // creates the fourth element of the array
        uralkodo: "IV. Béla", // the ruler's name
        esemeny: "tatárjárás", // the event name
        evszam: "1241-1242" // the year of the event
    },
    { // creates the fifth element of the array
        uralkodo: "Mátyás király", // the ruler's name
        esemeny: "Bécs elfoglalása", // the event name
        evszam: "1485" // the year of the event
    },
    { // creates the sixth element of the array
        esemeny: "Kenyérmezei csata", // the event name
        evszam: "1479" // the year of the event
    },
    { // creates the seventh element of the array
        uralkodo: "II. Rákóczi Ferenc", // the ruler's name
        esemeny: "A szabadságharc kezdete", // the event name
        evszam: "1703" // the year of the event
    },
    { // creates the eigth element of the array
        esemeny: "A szabadságharc vége", // the event name
        evszam: "1711" // the year of the event
    }
]

// create and append the table to the document
const table = document.createElement('table'); // creates the table in the const table variable
document.body.appendChild(table); // appends said table to the body

// define the table structure with a colgroup
const colgroup = document.createElement('colgroup'); // creates a colgroup in the const colgroup variable
table.appendChild(colgroup); // appends colgroup to the previously created table
const col1 = document.createElement('col'); // creates a column in the const col1 variable
colgroup.appendChild(col1); // appends col1 to colgroup
col1.className = "column"; // gives col1 the "column" class
const col2 = document.createElement('col'); // creates a column in the const col2 variable
colgroup.appendChild(col2); // appends col2 to colgroup
const col3 = document.createElement('col'); // creates a column in the const col3 variable
colgroup.appendChild(col3); // appends col3 to colgroup
col3.className = "column"; // gives col3 the "column" class

// create the table header
const thead = document.createElement('thead'); // creates the table header element in the const thead variable
table.appendChild(thead); // appends thead to the previously created table
const tr1 = document.createElement('tr'); // creates a row in the const tr1 variable for the header
thead.appendChild(tr1); // appends tr1 to thead
const th1 = document.createElement('th'); // creates a table header cell in the const th1 variable
tr1.appendChild(th1); // appends th1 to tr1
th1.innerHTML = array[0].uralkodo; // sets the text of th1 to the variable uralkodo's content
const th2 = document.createElement('th'); // creates a table header cell in the const th2 variable
tr1.appendChild(th2); // appends th2 to tr1
th2.innerHTML = array[0].esemeny; // sets the text of th2 to the variable esemeny's content
const th3 = document.createElement('th'); // creates a table header cell in the const th3 variable
tr1.appendChild(th3); // appends th3 to tr1
th3.innerHTML = array[0].evszam; // sets the text of th3 to the variable evszam's content

// create the table body
const tbody = document.createElement('tbody'); // creates the table body in the const tbody variable
table.appendChild(tbody); // appends tbody to the table

// first set of rows (line1 and line2)
const tr2 = document.createElement('tr'); // creates a row for the first set of data
tbody.appendChild(tr2); // appends tr2 to tbody
const td1 = document.createElement('td'); // creates a table cell for the ruler's name
tr2.appendChild(td1); // appends td1 to tr2
td1.rowSpan = 2; // sets td1 to span 2 rows
td1.innerHTML = array[1].uralkodo; // sets the text of td1 to the ruler's name
const td2 = document.createElement('td'); // creates a table cell for the event name
tr2.appendChild(td2); // appends td2 to tr2
td2.innerHTML = array[1].esemeny; // sets the text of td2 to the event name
const td3 = document.createElement('td'); // creates a table cell for the year
tr2.appendChild(td3); // appends td3 to tr2
td3.innerHTML = array[1].evszam; // sets the text of td3 to the year

const tr3 = document.createElement('tr'); // creates a row for the second event
tbody.appendChild(tr3); // appends tr3 to tbody
const td4 = document.createElement('td'); // creates a table cell for the event name
tr3.appendChild(td4); // appends td4 to tr3
td4.innerHTML = array[2].esemeny; // sets the text of td4 to the event name
const td5 = document.createElement('td'); // creates a table cell for the year
tr3.appendChild(td5); // appends td5 to tr3
td5.innerHTML = array[2].evszam; // sets the text of td5 to the year

// second set of rows (line3)
const tr4 = document.createElement('tr'); // creates a row for the third data row
tbody.appendChild(tr4); // appends tr4 to tbody
const td6 = document.createElement('td'); // creates a table cell for the ruler's name
tr4.appendChild(td6); // appends td6 to tr4
td6.innerHTML = array[3].uralkodo; // sets the text of td6 to the ruler's name
const td7 = document.createElement('td'); // creates a table cell for the event name
tr4.appendChild(td7); // appends td7 to tr4
td7.innerHTML = array[3].esemeny; // sets the text of td7 to the event name
const td8 = document.createElement('td'); // creates a table cell for the year
tr4.appendChild(td8); // appends td8 to tr4
td8.innerHTML = array[3].evszam; // sets the text of td8 to the year

// third set of rows (line4 and line5)
const tr5 = document.createElement('tr'); // creates a row for the fourth data row
tbody.appendChild(tr5); // appends tr5 to tbody
const td9 = document.createElement('td'); // creates a table cell for the ruler's name
tr5.appendChild(td9); // appends td9 to tr5
td9.rowSpan = 2; // sets td9 to span 2 rows
td9.innerHTML = array[4].uralkodo; // sets the text of td9 to the ruler's name
const td10 = document.createElement('td'); // creates a table cell for the event name
tr5.appendChild(td10); // appends td10 to tr5
td10.innerHTML = array[4].esemeny; // sets the text of td10 to the event name
const td11 = document.createElement('td'); // creates a table cell for the year
tr5.appendChild(td11); // appends td11 to tr5
td11.innerHTML = array[4].evszam; // sets the text of td11 to the year

const tr6 = document.createElement('tr'); // creates a row for the fifth event
tbody.appendChild(tr6); // appends tr6 to tbody
const td12 = document.createElement('td'); // creates a table cell for the event name
tr6.appendChild(td12); // appends td12 to tr6
td12.innerHTML = array[5].esemeny; // sets the text of td12 to the event name
const td13 = document.createElement('td'); // creates a table cell for the year
tr6.appendChild(td13); // appends td13 to tr6
td13.innerHTML = array[5].evszam; // sets the text of td13 to the year

// fourth set of rows (line6 and line7)
const tr7 = document.createElement('tr'); // creates a row for the sixth data row
tbody.appendChild(tr7); // appends tr7 to tbody
const td14 = document.createElement('td'); // creates a table cell for the ruler's name
tr7.appendChild(td14); // appends td14 to tr7
td14.rowSpan = 2; // sets td14 to span 2 rows
td14.innerHTML = array[6].uralkodo; // sets the text of td14 to the ruler's name
const td15 = document.createElement('td'); // creates a table cell for the event name
tr7.appendChild(td15); // appends td15 to tr7
td15.innerHTML = array[6].esemeny; // sets the text of td15 to the event name
const td16 = document.createElement('td'); // creates a table cell for the year
tr7.appendChild(td16); // appends td16 to tr7
td16.innerHTML = array[6].evszam; // sets the text of td16 to the year

const tr8 = document.createElement('tr'); // creates a row for the seventh event
tbody.appendChild(tr8); // appends tr8 to tbody
const td17 = document.createElement('td'); // creates a table cell for the event name
tr8.appendChild(td17); // appends td17 to tr8
td17.innerHTML = array[7].esemeny; // sets the text of td17 to the event name
const td18 = document.createElement('td'); // creates a table cell for the year
tr8.appendChild(td18); // appends td18 to tr8
td18.innerHTML = array[7].evszam; // sets the text of td18 to the year