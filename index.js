function productUpadteValue(product,price,change){
    const productVlaue = document.getElementById(product + "_number");
    let productNumber = productVlaue.value;
    let productNumberChange;
    if(change == true){
        productNumberChange =  parseInt(productNumber) + 1; 
    }else if(change == false ){
         productNumberChange =parseInt(productNumber)  - 1 ;
    }
    productVlaue.value =  productNumberChange;

    const productPrice = document.getElementById(product + "_total");

    productPrice.innerText = productNumberChange * price ;

    calculateTotal();

}

function getInputValue(product){
    const productPrice = document.getElementById(product + "_number");
    let productNumber = parseInt(productPrice.value);
    return productNumber

}

function calculateTotal(){
    const computerTotal = getInputValue("computer") * 3010;
    const mouseTotal = getInputValue("mouse")* 350 ;
    const keybordTotal = getInputValue("keybord") * 150;

    let subTotal = computerTotal + mouseTotal + keybordTotal;
    let tax = subTotal / 15 ; 
    let totalPrice = subTotal + tax ;


    document.getElementById('sub-total').innerHTML = subTotal;
    document.getElementById('tax-amount').innerHTML = tax;
    document.getElementById('total-price').innerHTML = totalPrice;
}

const computerPlusBtn = document.getElementById("computer_plus");
computerPlusBtn.addEventListener('click',function(){
    productUpadteValue("computer",3010,true);
   
});

document.getElementById('computer_minus').addEventListener('click',function(){
    productUpadteValue("computer",3010,false);
    
});


document.getElementById("mouse_plus").addEventListener('click',function(){
    productUpadteValue("mouse",350,true);
   
});

document.getElementById('mouse_minus').addEventListener('click',function(){
    productUpadteValue("mouse",350,false);
    
});

document.getElementById("keybord_plus").addEventListener('click',function(){
    productUpadteValue("keybord",150,true);
   
});

document.getElementById('keybord_minus').addEventListener('click',function(){
    productUpadteValue("keybord",150,false);
    
});


document.getElementById('check_out').addEventListener('click',function(){
        alert("Welcome ! mr check out complite");
});
    
