const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    } 
}

cat.complain();


// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";


// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.classList.add("subheading");


// Question 5
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => p.style.color = "red");


// Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7
function listFunction(list) {
    // list.forEach(i => console.log(i.name));
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

listFunction(cats);


// Question 8
function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {
        let ageDisplay = "Age unknown";

        if (cats.age){
            ageDisplay = cats.age;
        }

        html += `<div>
                    <h5>Name: ${cats[i].name}</h5>
                    <p>Age: ${cats[i].age}</p>
                </div>`;
    }
    return html;
}

const createCatsReturnHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = createCatsReturnHTML;

        // OR

        // const catContainer = document.querySelector(".cat-container");
        // catContainer.innerHTML = createCats(cats);
