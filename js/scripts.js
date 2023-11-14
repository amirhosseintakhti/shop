/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const shopListShow= document.querySelector(".showList");
const totalPrice = document.querySelector(".badge");

let pList = '';
products.forEach((val, index) => {
    pList += `
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${val.images.main.url[0]}" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${val.title_fa}</h5>
                                    <!-- Product price-->
                                    ${val.default_variant.price.selling_price.toLocaleString()}ریال
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button class="btn btn-primary" onclick="addToCart(${index})" >shop it</button></div>
                            </div>
                        </div>
                    </div>`;
})

document.querySelector(".productList").innerHTML = pList;

const shopList = [];
function addToCart(index){
   
    let val = products[index]
    console.log(val);
    console.log(index);
    shopList.push({
        title:val.title_fa,
        image:val.images.main.url[0],
        price:val.default_variant.price.selling_price.toLocaleString()

    })
    showListShop();

}

function remove(index){
    shopList.splice(index,1)

    showListShop();

}


function showListShop() {
    let helper;
    shopList.forEach((value,index) =>{
        helper+= `<li  style="heghit:30px; "><span><button class="btn btn-danger" onclick="remove(${index})">delete</button></span><img style="height:60px" src="${value.image}"/><span>${value.price}" | "${value.title} </span></li>`


    })
    shopListShow.innerHTML = helper;

}
// function showPrice(index){
//     // let counter =0;
    
    


// }