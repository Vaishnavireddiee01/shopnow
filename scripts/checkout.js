import { renderOrderSummary } from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';

//import '../data/cart-class.js';
//import '../data/backend-practice.js'


//async(20)

async function loadPage(){
  //console.log('load page');

    await loadProductsFetch();

    await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

    renderOrderSummary();
    renderPaymentSummary();

  //return 'value2';
}
loadPage();
  

//promises
//Prome.all()

/*

Promise.all([

    loadProductsFetch(),

    
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
    
     
]).then((values) => {
    console.log(values);

    renderOrderSummary();
    renderPaymentSummary();
});

*/
/*
//here, resolve() let us contrl when we go to the next step

new Promise((resolve) => {
   // console.log('promise');
   //console.log('start promisse');

   loadProducts(() => {
    //console.log('finished loading');

    resolve('value1');
   });

}).then((value) => {
    //console.log('next step');
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
    //renderOrderSummary();
    //renderPaymentSummary();

}).then(() => {

    renderOrderSummary();
    renderPaymentSummary();
});

*/

//call back prgm
/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});

*/
