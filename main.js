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

const form = document.getElementById('form'); // this puts the thing that has the 'form' id into this variable

// create and append the table to the document
const table = document.createElement('table'); // creates the table in the const table variable
document.body.appendChild(table); // appends said table to the body

// it was already done like 9 billion commits ago
function renderMenu(){ //this is the function
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
    const tbody = document.createElement('tbody'); // creates the table body in the const tbody variable
    table.appendChild(tbody); // appends tbody to the table

    for (let i = 1; i < array.length; i += 2){ // the cycle goes through the array 2 at a time
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
        if (array[i + 1] != undefined && array[i + 1].uralkodo == undefined){ // checks if i + 1 has anything even related to an uralkodo property OR IF IT EVEN EXISTS!!!!!!!!!!!!
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
};
renderMenu(); //this calls said function

function validateField(inputElement){ // creates the function
    let valid = true; // creates this boolean
    if (inputElement.value == ''){ // checks if the variable is empty
        const parent = inputElement.parentElement; // puts the parent element into the variable
        const error = parent.querySelector('.error'); // we find the first thing with the error group and put it in the variable
        if (error != undefined){ // if said div is empty
            error.innerHTML = 'Ez a mező kötelező!'; // we put this text in it
        }
        valid = false; // sets the boolean to false
    }
    return valid; // returns this boolean
}

function validateFieldEitherOr(inputElement1, inputElement2) { // creates the function
    let valid = true; // creates this boolean
    if (inputElement1.value != '' && inputElement2.value == '' || inputElement1.value == '' && inputElement2.value != ''){ // checks if either one is empty but the other isnt
        const parent1 = inputElement1.parentElement; // puts the parent element into the variable
        const parent2 = inputElement2.parentElement; // puts the parent element into the variable
        const error1 = parent1.querySelector('.error'); // we find the first thing with the error group and put it in the variable
        const error2 = parent2.querySelector('.error'); // we find the first thing with the error group and put it in the variable
        if (error1 != undefined){ // if said div is empty
            error1.innerHTML = 'Mind két mező kötelező, ha 2 sort akar!'; // we put this text in it
        }
        if (error2 != undefined){ // if said div is empty
            error2.innerHTML = 'Mind két mező kötelező, ha 2 sort akar!'; // we put this text in it
        }
        valid = false; // sets the boolean to false
    }
    return valid; // returns this boolean
}

function validate(v1, v2, v3, v4, v5){ // this is useless but the teacher is making me do it
    let valid = true
    if (!validateField(v1)){ // runs this function with the element in it
        valid = false; // sets the boolean to false
    }
    if (!validateField(v2)){ // runs this function with the element in it
        valid = false; // sets the boolean to false
    }
    if (!validateField(v3)){ // runs this function with the element in it
        valid = false; // sets the boolean to false
    }
    if (!validateFieldEitherOr(v4, v5)){ // runs this function with the elements in it
        valid = false; // sets the boolean to false
    }
    return valid;
}

form.addEventListener('submit', function(e){ // checks if anyone pressed the funny button
    e.preventDefault(); // this prevents the site from running it's default function upon pressing the shiny button
    const urNevElement = document.getElementById('uralkodo_nev') // this puts the htmlElement with the corresponding id into this variable
    const esemeny1Element = document.getElementById('esemeny1') // this puts the htmlElement with the corresponding id into this variable
    const evszam1Element = document.getElementById('evszam1') // this puts the htmlElement with the corresponding id into this variable
    const esemeny2Element = document.getElementById('esemeny2') // this puts the htmlElement with the corresponding id into this variable
    const evszam2Element = document.getElementById('evszam2') // this puts the htmlElement with the corresponding id into this variable

    const thisForm = e.currentTarget; // the current target is our form, this puts it into this variable
    const elementsWithError = thisForm.querySelectorAll('.error') // this "selects" all elements with the error css group
    for (const error of elementsWithError){ // this goes through each of them one by one
        error.innerHTML = ''; // this sets their content to a blank/deletes it
    }

    let valid = validate(urNevElement, esemeny1Element, evszam1Element, esemeny2Element, evszam2Element); // this is literally useless

    if (valid){ //checks if the boolean is true
        const urNevValue = urNevElement.value; // this puts the value of the element into this variable
        const esemeny1Value = esemeny1Element.value; // this puts the value of the element into this variable
        const evszam1Value = evszam1Element.value; // this puts the value of the element into this variable
        const esemeny2Value = esemeny2Element.value == "" ? undefined : esemeny2Element.value; // this puts the value of the element into this variable, unless it is empty, in which case it becomes undefined
        const evszam2Value = evszam2Element.value == "" ? undefined : evszam2Element.value; // this puts the value of the element into this variable, unless it is empty, in which case it becomes undefined
        
        const newElement = { // we make new element
            uralkodo: urNevValue, // the new element's value here becometh the called variable
            esemeny: esemeny1Value, // the new element's value here becometh the called variable
            evszam: evszam1Value // the new element's value here becometh the called variable
        }   
        array.push(newElement); // we push this to the array
        if (esemeny2Value != undefined || evszam2Value != undefined) { // }
            const newElement2 = { // we make new element
                esemeny: esemeny2Value, // the new element's value here becometh the called variable
                evszam: evszam2Value // the new element's value here becometh the called variable
            }
            array.push(newElement2); // we push this to the array
        }
        table.innerHTML = ''; // we delete the contents of the previous tbodeehhh
        renderMenu(); // this re-renders the table
        thisForm.reset(); // this removes everything from the form
    }
})
