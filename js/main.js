

let products1 = [
    { brand: 'zara', desc: "Sweetshirt", price: 334, imgURL: 'img/2.jpg' },
    { brand: 'Gap', desc: "Shirt", price: 46, imgURL: 'img/23.jpg' },
    { brand: 'Guss', desc: "T-Shirt", price: 77, imgURL: 'img/4.jpg' },
    { brand: 'Lacoste', desc: "Trousers", price: 55, imgURL: 'img/5(2).jpg' },
]

let products2 = [
    { brand: 'zara', desc: "Sweetshirt", price: 999, imgURL: 'img/6(2).jpg' },
    { brand: 'Guss', desc: "Sweetshirt", price: 56, imgURL: 'img/7(2).jpg' },
    { brand: 'Gap', desc: "Sweetshirt", price: 789, imgURL: 'img/11.jpg' },
    { brand: 'Lacoste', desc: "Shoes", price: 433, imgURL: 'img/13.jpg' },
]

let products3 = [
    { brand: 'Gap', desc: "Blouse", price: 999, imgURL: 'img/3.jpg' },
    { brand: 'Lacoste', desc: "Pullover", price: 56, imgURL: 'img/8.jpg' },
    { brand: 'Guss', desc: "Skirt", price: 789, imgURL: 'img/30.jpg' },
    { brand: 'zara', desc: "Shorts", price: 433, imgURL: 'img/10.png' },
]

let products4 = [
    { brand: 'Guss', desc: "Trousers", price: 999, imgURL: 'img/20.jpg' },
    { brand: 'Gap', desc: "Sandales", price: 56, imgURL: 'img/21.jpg' },
    { brand: 'zara', desc: "Shirt", price: 789, imgURL: 'img/22.jpg' },
    { brand: 'Lacoste', desc: "Skirt", price: 433, imgURL: 'img/29.jpg' },
]


fill(products1, '#carousel1 .first-row');
fill(products2, '#carousel1 .second-row');

fill(products3, '#carousel2 .first-row');
fill(products4, '#carousel2 .second-row');


// fill products into slider views
function fill(products, carasoulSelector) {
    let temp = ``

    for (let i = 0; i < products.length; i++) {
        temp += `<div class="col-md-3 col-sm-6">
        <div class="card border-0 text-center" 
        imgData='${products[i].imgURL}'
         brandData='${products[i].brand}'
          descData='${products[i].desc}'
          priceData='${products[i].price}'
          >
            <div class="product-top">
                <!-- icon trigger modal -->
                <div class="product-overlay" aria-hidden="true" data-toggle="modal" data-target="#quickViewModal">
                    <i class="fa fa-eye"></i>
                </div>
                <a href="product.html">
                    <img class="card-img-top" src=${products[i].imgURL} alt="">
                </a>
            </div>
            <div class="card-body">
                <p class="card-text text-muted">${products[i].brand}</p>
                <span class="prodcut-review text-warning">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </span>
                <h6 class="card-title font-weight-normal">${products[i].desc}</h6>
                <div>$<span class="product-price text-info">${products[i].price}</span></div>
                <button class="btn btn-primary p-2">
                    <i class="fa fa-shopping-basket"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>`
        
        $(`${carasoulSelector}`).html(temp);        
    }
 

}

// set modal data
$('section .card').click(function() {
    let imgUrl = $(this).attr('imgData');
    $('#quickViewModal img').attr('src', imgUrl); //set image
    $('#quickViewModal .modalDesc').html($(this).attr('descData'));  // set description
    $('#quickViewModal .product-price').html($(this).attr('priceData')); // set price
    $('#quickViewModal .modalBrand').html($(this).attr('brandData')); // set brand
})

