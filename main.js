const table = document.createElement('table');
document.body.appendChild(table);

const colgroup = document.createElement('colgroup');
table.appendChild(colgroup);
const col1 = document.createElement('col');
colgroup.appendChild(col1);
col1.className = "column";
const col2 = document.createElement('col');
colgroup.appendChild(col2);
const col3 = document.createElement('col');
colgroup.appendChild(col3);
col3.className = "column";

const thead = document.createElement('thead');
table.appendChild(thead);
const tr1 = document.createElement('tr');
thead.appendChild(tr1);
const th1 = document.createElement('th');
tr1.appendChild(th1);
th1.innerHTML = "Uralkodó";
const th2 = document.createElement('th');
tr1.appendChild(th2);
th2.innerHTML = "Esemény";
const th3 = document.createElement('th');
tr1.appendChild(th3);
th3.innerHTML = "Évszám";

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tr2 = document.createElement('tr');
thead.appendChild(tr2);
const td1 = document.createElement('td');
tr2.appendChild(td1);
td1.rowSpan = 2;
td1.innerHTML = "I. István";
const td2 = document.createElement('td');
tr2.appendChild(td2);
td2.innerHTML = "Koronázás";
const td3 = document.createElement('td');
tr2.appendChild(td3);
td3.innerHTML = "1000";

const tr3 = document.createElement('tr');
thead.appendChild(tr3);
const td4 = document.createElement('td');
tr3.appendChild(td4);
td4.innerHTML = "Pannonhalmi apátság megalapítása";
const td5 = document.createElement('td');
tr3.appendChild(td5);
td5.innerHTML = "1001";

const tr4 = document.createElement('tr');
thead.appendChild(tr4);
const td6 = document.createElement('td');
tr4.appendChild(td6);
td6.innerHTML = "IV. Béla";
const td7 = document.createElement('td');
tr4.appendChild(td7);
td7.innerHTML = "tatárjárás";
const td8 = document.createElement('td');
tr4.appendChild(td8);
td8.innerHTML = "1241-1242";

const tr5 = document.createElement('tr');
thead.appendChild(tr5);
const td9 = document.createElement('td');
tr5.appendChild(td9);
td9.rowSpan = 2;
td9.innerHTML = "Mátyás király";
const td10 = document.createElement('td');
tr5.appendChild(td10);
td10.innerHTML = "Bécs elfoglalása";
const td11 = document.createElement('td');
tr5.appendChild(td11);
td11.innerHTML = "1485";

const tr6 = document.createElement('tr');
thead.appendChild(tr6);
const td12 = document.createElement('td');
tr6.appendChild(td12);
td12.innerHTML = "Kenyérmezei csata";
const td13 = document.createElement('td');
tr6.appendChild(td13);
td13.innerHTML = "1479";

const tr8 = document.createElement('tr');
thead.appendChild(tr8);
const td14 = document.createElement('td');
tr8.appendChild(td14);
td14.rowSpan = 2;
td14.innerHTML = "II. Rákóczi Ferenc";
const td15 = document.createElement('td');
tr8.appendChild(td15);
td15.innerHTML = "A szabadságharc kezdete";
const td16 = document.createElement('td');
tr8.appendChild(td16);
td16.innerHTML = "1703";

const tr9 = document.createElement('tr');
thead.appendChild(tr9);
const td17 = document.createElement('td');
tr9.appendChild(td17);
td17.innerHTML = "A szabadságharc vége";
const td19 = document.createElement('td');
tr9.appendChild(td19);
td19.innerHTML = "1711";