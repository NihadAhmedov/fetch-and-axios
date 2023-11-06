const productsDiv = document.getElementById("products");

//? FETCH  GET  METHOD

// function getMethod (){
//     fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data =>{
//         data.forEach(item => {
//             const p = document.createElement('p')
//             p.innerText = item.companyName
//             productsDiv.appendChild(p)

//         });
//     } )
// }

// window.onload = () =>{
//     getMethod()
// }

//? FETCH  POST   METHOD

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

//  function postMethod(){
//     fetch('https://northwind.vercel.app/api/customers',{
//         method: "POST",
//         headers: {
//            "Content-Type" : "application/json",
//         },
//         body: JSON.stringify({
//            name: inp.value
//         })

//        });
//     }

// btn.addEventListener('click', postMethod)

//? FETCH  DELETE  METHOD

//  const inp = document.getElementById('inp')
//  const btn = document.getElementById('btn')

// function fetchDelete(){
//     fetch('https://northwind.vercel.app/api/customers/ZTla359',{
//     method : "DELETE",
// }) .then(res =>console.log(res));

// }

// btn.addEventListener('click', fetchDelete)

//? AXIOS POST METOD

//  const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function axiosMethod(){
//     axios.post('https://northwind.vercel.app/api/customers',{
//         name: inp.value
//     }) .then((res)=>{
//         console.log("data getdi");
//     })
// }

// btn.addEventListener('click', axiosMethod)

// function xiosDelete(){
//     axios.delete(`https://northwind.vercel.app/api/customers/${inp.value}`)
// }

// btn.addEventListener('click', xiosDelete)

// function axMethod(){
//  axios.post('https://northwind.vercel.app/api/customers',{
//     name: inp.value
//  })
// }

// btn.addEventListener('click', axMethod)






//! 2ci TASK

// ? Ən bahalı məhsul

// function expensive() {
//   axios.get("https://northwind.vercel.app/api/products")
//   .then((res) => {
//     const products = res.data;
//     let enBahali = products[0];

//     products.forEach((product) => {
//       if (product.unitPrice > enBahali.unitPrice) {
//         enBahali = product;
//       }
//     });

//     console.log(enBahali)
//   });
// }

// expensive()




//? Ortalama stok miqdarı:

// function myfunc() {
//   fetch("https://northwind.vercel.app/api/products")
//     .then((res) => res.json())
//     .then((data) => {
//       let total = 0;
//       data.forEach(function (item) {
//         total += item.unitsInStock;
//       });
//       let result = total / data.length;
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error("error : ", error);
//     });
// }
// myfunc();




//?“C” ilə başlayan məhsullar

// const apiUrl = "https://northwind.vercel.app/api/products";

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((products) => {
//     const cProducts = products.filter((product) =>
//       product.name.startsWith("C")
//     );
//     cProducts.forEach((product) => {
//       console.log(product);
//     });
//   });



//?  “London” şəhərindəki müştəriləri console a yaz
//?Region NULL olan nə qədər customer var?

// function myfunc() {
//   fetch("https://northwind.vercel.app/api/customers")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(
//         "London seherindeki müsteriler:",
//         data.filter((item) => item.address.city === "London")
//       );
//       console.log(
//         "Null olan regionlar: ",
//         data.filter((item) => item.address.region === "NULL")
//       );
//     });
// }
// myfunc();




//?API 2: https://jsonplaceholder.typicode.com
//? /posts
//? Id-si 1 olan userin nə qədər postu var?

// function myfunc() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       let result = data.filter((item) => item.userId === 1);
//       console.log(`Id-si 1 olan userin nə qədər postu : ${result.length}`);
//       console.log(result);
//     });
// }
// myfunc();




//? 1 nömrəli albümdə nə qədər fotoqraf var?

function myfunc() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => {
      let total = data.filter((item) => item.userId === 1);
      console.log(`1 nömreli albümde fotograf sayı : ${total.length}`);
    });
}
myfunc();
