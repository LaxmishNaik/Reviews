// local reviews data 

const reviews = [
    {
        id: 1,
        name: "john smith",
        job: "ux designer",
        img: "./pexels-justin-shaifer-1222271.jpg",
        info: 
            `loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quidem possimus, sunt aperiam labore ab id! Cum velit cumque sed.`
    },
    {
        id: 2,
        name: "susan smith",
        job: "ui designer",
        img: "./pexels-daniel-xavier-1239291.jpg",
        info: 
            `consectetur adipisicing elit. Iste veniam, molestias possimus voluptatum asperiores  cumque! Id porro magni eum numquam sapiente animi nisi enim.`
    },
    {
        id: 3,
        name: "peter jones",
        job: "web designer",
        img: "./pexels-pixabay-220453.jpg",
        info: 
            `molestias possimus voluptatum asperiores corrupti deserunt cumque! Id porro magni  dignissimos dolore, maxime voluptatum similique numquam sapiente animi nisi enim. `
    },
    {
        id: 4,
        name: "anna johnson",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        info: 
            `maxime voluptatum similique numquam sapiente animi nisi enim. Amet laborum  aliquam, voluptas ad excepturi non dolores fugiat quaerat earum.`
    },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// set starting item 

let currentItem = 0;


// load initial item

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});


// show person based on item 

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}


// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
}); 

// show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
});