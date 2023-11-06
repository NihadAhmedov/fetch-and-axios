sessionStorage.setItem('5', 'Mehman')

let a = ['audi', 'bmw', 'mercedes', 'kia']

sessionStorage.setItem('1', JSON.stringify(a))
let az = JSON.parse(sessionStorage.getItem('1'))
console.log(az);

sessionStorage.removeItem('1')

sessionStorage.clear('5')

 