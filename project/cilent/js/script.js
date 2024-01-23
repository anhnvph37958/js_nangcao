window.addEventListener('DOMContentLoaded', init);

function init() {

}

async function renderProductList() {
    const API_URL = 'http://localhost:3000/products'
    // b1: laasy date 
    // const productList =[] ;
    const res = await fetch(API_URL);
    const productList = await res.json();


    // lay dom element
    const productListElm = document.getElementById('product-list');
    // b3 create element moi 

    const div = document.createElement('div');
    div.classList.add('row', 'gap-2')
    // b4 InnerHTMl
    div.innerHTML = `${productList.map((product) => {
        return `<div class="row gap-2">
        <div class="col-12 col-md-3">
          <div class="card" style="width: 18rem">
            <img
              src=${product.image}
              class="img-fluid img-thumbnail"
              alt=""
              style="height: 300px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title" style="font-size: 1.1rem">${product.title}</h5>
              <p class="card-text">${product.description.substring(0, 60)}...</p>
              <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        </div>`
    })}`;
    // b5 chenf vao dom
    productListElm.appendChild(div);
}