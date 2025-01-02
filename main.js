const array = [
    { // creates the first element of the array
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
    { // creates the eighth element of the array
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

let j = 0;
for (let i = 1; i < array.length; i += 2){ // the cycle goes through the array 2 at a time
    j++
    const tableLine = document.createElement('tr'); // creates a variable named tableLine
    tbody.appendChild(tableLine); // appends tableLine to tbody
    const td1 = document.createElement('td'); // creates td1
    tableLine.appendChild(td1); // appends td1 to tableLine
    td1.innerHTML = array[i].uralkodo; //changes td1's text to the uarlkodo located at i in the array
    const td2 = document.createElement('td'); // creates td1
    tableLine.appendChild(td2); // appends td1 to tableLine
    td2.innerHTML = array[i].esemeny; //changes td2's text to the esemeny located at i in the array
    const td3 = document.createElement('td'); // creates td1
    tableLine.appendChild(td3); // appends td1 to tableLine
    td3.innerHTML = array[i].evszam; //changes td3's text to the evszam located at i in the array
    if (array[i + 1].uralkodo == undefined){ // checks if i + 1 has anything even related to an uralkodo property
        td1.rowSpan = 2; // sets the rowspan of 
        const tableLine2 = document.createElement('tr'); // creates tableLine2
        tbody.appendChild(tableLine2); // appends tableLine2 to tbody
        const td4 = document.createElement('td'); // creates td4
        tableLine2.appendChild(td4); // appends td4 to tableLine
        td4.innerHTML = array[i + 1].esemeny; //changes td4's text to the esemeny located at i + 1 in the array
        const td5 = document.createElement('td'); // creates td5
        tableLine2.appendChild(td5); // appends td5 to tableLine
        td5.innerHTML = array[i + 1].evszam; //changes td4's text to the evszam located at i + 1 in the array
    } else{
        i--; // This beautiful babygirl is my favourite. You see this janky bullshit here reduces i by 1 so when it jumps two it suddenly is jumping to where it was originally intended to jump
    };
};