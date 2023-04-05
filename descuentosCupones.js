const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const arrayUObjecto = undefined; // ['cupones': descuento] {}?

// const couponsObj = {
//     "you_know_why?": 30,
//     "3456789": 25,
//     "123": 15,
// }

const couponList = [];
couponList.push({
    name: "you_know_why?",
    discount: 30,
})

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  
  let discount;

  function isTheCoupon (couponElement) {
    return couponElement.name == coupon
  }

  const couponUser = couponList.find(isTheCoupon)

  if (couponUser) {
    discount = couponUser.discount
  } else {
    pResult.innerText = 'El cupón no es válido';
    return;
  }

//   if (couponsObj[coupon]) { //este if verifica si alguna de las propiedades del objeto "conjuntoObj" coincide con lo que el usuario halla colocado en el input del cupon
//     discount = couponsObj[coupon]
//   }else{
//     pResult.innerText = 'El cupón no es válido';
//     return;
//   }

//   switch (coupon) {
//     case 'JuanDC_es_Batman':
//       discount = 30;
//       break;
//     case 'no_le_digas_a_nadie':
//       discount = 25;
//       break;
//     default:
    //   pResult.innerText = 'El cupón no es válido';
    //   return;
//   }
  
  // if (coupon == 'JuanDC_es_Batman') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}