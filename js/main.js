const prod = document.getElementById("prod")
const ulMenu = document.getElementById("ulMenu")
const URLMain = "https://fakestoreapi.com/products/";

function getData(cat) {
    const options={"method":"GET"}
    fetch(URLMain+cat, options)
        .then((response) => {
            console.log(response)
            response.json().then((res) => {
                // console.log(res.length);//20
                // console.log(res[0].title);
                createCards(res)
            })
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                 ${err.message}
            </div>`);
        })
}//getData


function getCategories() {
    fetch(URLMain+"categories/")
        .then((response) => {
            console.log(response)
            response.json().then((res) => {
                    res.forEach((cat) => {
                        ulMenu.insertAdjacentHTML("afterbegin",
                            `<li><a class="dropdown-item" onClick="getData('category/${cat}')" href="#">${cat}</a></li>`);
                    });
            })
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                 ${err.message}
            </div>`);
        })
}//getCategories


getCategories();
getData("");

function createCards(prods) {
    prod.innerHTML="";
    let i = 0
    do{
        prod.insertAdjacentHTML("beforeend",
        `
        <div class="card" style="width: 18rem" >
               <img src="${prods[i].image}" class="card-img-top" alt="${prods[i].title}">
           <div class="card-body">
             <h5 class="card-title">${prods[i].title}</h5>
             <p class="card-text">${prods[i].description}</p>
             <a href="#" class="btn btn-primary" id=${i}>Go somewhere</a>
           </div>
         </div>`);
        i++
    } while (i <= 19);
}
