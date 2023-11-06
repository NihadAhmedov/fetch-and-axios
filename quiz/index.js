const inp = document.getElementById('inp')
const btn = document.getElementById('btn')



// btn.addEventListener('click', myFnc)
// let data={
//     name: "Nihat",
//     city: "Sumgait",
// }
// function myFnc() {
//     fetch(`https://northwind.vercel.app/api/orders/${inp.value}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         })
          
// }


function fetchDelete(){
    fetch(`https://northwind.vercel.app/api/orders/${inp.value}`,{
        method: "DELETE"
 
    })
}

btn.addEventListener('click',fetchDelete)