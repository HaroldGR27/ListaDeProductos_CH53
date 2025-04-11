//const main = document.getElementsByTagName("div").item(0);
const main = document.getElementsByClassName("row").item(0);
const URLMain = "https://fakestoreapi.com/products/";

function getData() {
    fetch(URLMain)
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

getData();

function createCards(prods) {

    let i = 0
    do{
        main.insertAdjacentHTML("beforeend",
        `
        <div class="card" style="width: 18rem; display: flex; flex-wrap: wrap; justify-contet: center; padding:30px" >
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

