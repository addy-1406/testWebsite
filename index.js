$(document).ready(function () {

    jsonObject.products.forEach((i) => loadProducts(i));

});

function loadProducts(data) {

    var x = document.createElement('div');
    x.classList.add("col-lg-4");
    x.classList.add("col-md-6");
    x.innerHTML = '<div class="card">' +
        '<div class="card-body">' +
        '<h1>' + data.title + '</h1>' +
        '<p class="card-text">' + data.description + '</p>' +
        '</div>' +
        '</div>';

    document.getElementById("prod").appendChild(x);
}


document.getElementById("search-item").addEventListener("keyup",function() {
    const searchbox = this.value.toUpperCase();
    const storeitems = jsonObject.products;

    function product(title, desc) {
        this.title = title;
        this.desc = desc;
    }

    let products = [];

    for (var i = 0; i < 30; i++) {
            let match1 = storeitems[i].title;
            let match2 = storeitems[i].description;
            if ((match1.toUpperCase().indexOf(searchbox) > -1) || (match2.toUpperCase().indexOf(searchbox)) > -1) {
                const myProduct = new product(match1,match2);
                products.push(myProduct);   
                console.log(i);
            }
    }
    // console.log(products);
    products.forEach((i) => loadProducts(i));
    // for (var i = 0; i < 30; i++) {
    //     let match1 = storeitems[i].title;
    //     let match2 = storeitems[i].description;
    //     if ((match1.toUpperCase().indexOf(searchbox) > -1) || (match2.toUpperCase().indexOf(searchbox)) > -1) {
    //         console.log(i);
    //         var x = document.createElement('div');
    //         x.classList.add("col-lg-4");
    //         x.classList.add("col-md-6");
    //         x.innerHTML = '<div class="card">' +
    //             '<div class="card-body">' +
    //             '<h1>' + storeitems[i].title + '</h1>' +
    //             '<p class="card-text">' + storeitems[i].description + '</p>' +
    //             '</div>' +
    //             '</div>';
    //         document.getElementById("prod").appendChild(x);
    //     }
    //     else{

    //     }
    // }

});