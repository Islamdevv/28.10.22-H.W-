let db = [
    {
        title: "Samsung S10",
        category: "electronics",
        price: 700,
        desc: "Super phone for your life!",
        img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png",
    },
    {
        title: "iPhone 13 Pro",
        category: "electronics",
        price: 1100,
        desc: "One of the most powerful cameras!",
        img: "https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg",
    },
    {
        title: "Apple",
        category: "fruits",
        price: 2,
        desc: "Healthy fruit that is used in many dishes and desserts.",
        img: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
    },
    {
        title: "Orange",
        category: "fruits",
        price: 7,
        desc: "Fruit for one of the most popular types of juice.",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg",
    },
    {
        title: "Audi R8",
        category: "cars",
        price: 98000,
        desc: "A sports car that can reach tremendous speed.",
        img: "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg",
    },
];

let block = document.querySelector(".block");
let div = document.createElement("div");
div.classList.add("row", "row-cols-2", "row-cols-md-5", "g-3", "mt-5", "pt-4");
function render(xXx = db) {
    div.innerHTML = "";
    xXx.forEach((wWw) => {
        div.innerHTML += `
        <div class='col'>
        <div class='card h-100 border-primary mb-3'> 
        <img src='${wWw.img}' class='card-img-top'>
        <div class='card-body'>
        <h5 class='card-title'>${wWw.title}</h5>
        <p class='card-text'> Category: ${wWw.category}</p>
        <p class='card-text'>Price: ${wWw.price}$</p>
        <p class='card-text'>${wWw.desc}</p></div> </div></div>`;
    });
}
render();
block.append(div);
let select = document.querySelector("select");
select.addEventListener("change", (x) => {
    if (x.target.value == "cars" || x.target.value == "fruits" || x.target.value == "electronics") {
        let xxx = db.filter((wWw) => {
            if (wWw.category.indexOf(x.target.value) != -1) {
                return true;
            } else {
                return false;
            }
        });
        render(xxx);
    }
    if (x.target.value == "all") {
        render();
    }
});

let input = document.querySelector(".search");
let btnSearch = document.querySelector(".btnSearch");

btnSearch.addEventListener("click", () => {
    let filtered = db.filter((wWw) => {
        if (wWw.title.toLowerCase().indexOf(input.value.toLowerCase()) != -1) {
            return true;
        } else {
            return false;
        }
    });
    render(filtered);
});
