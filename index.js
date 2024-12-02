let main = document.querySelector('.main')
const API = "https://fakestoreapi.com/products"

async function getAPI() {
   const response = await fetch(API)
   const data = await response.json()
   console.log(data);
   htmlga(data)
}

function htmlga(data) {
    let html = ""
    data.map ((el) => {
        html +=`
        <div class="card">
        <img src=${el.image} alt="" />
        <h3>${el.title}</h3>
        </div>
        `
    })
    
    main.innerHTML=html
}

async function getMen() {
    const response = await fetch(API)
    const data = await response.json()
    console.log(data);
    htmlgaMen(data)
 }
 
 function htmlgaMen(data) {
     let html = ""
     const men = data.filter((el) => el.category === "men's clothing")
     men.map ((el) => {
         html +=`
         <div class="card">
         <img src=${el.image} alt="" />
         <h3>${el.title}</h3>
         </div>
         `
     })
     
     main.innerHTML=html
 }

 async function getWomen() {
    const response = await fetch(API)
    const data = await response.json()
    console.log(data);
    htmlgaWomen(data)
 }
 
 function htmlgaWomen(data) {
     let html = ""
     const women = data.filter((el) => el.category === "women's clothing")
     women.map ((el) => {
         html +=`
         <div class="card">
         <img src=${el.image} alt="" />
         <h3>${el.title}</h3>
         </div>
         `
     })
     
     main.innerHTML=html
 }

 async function getjewelery() {
    const response = await fetch(API)
    const data = await response.json()
    console.log(data);
    htmlgajewelery(data)
 }
 
 function htmlgajewelery(data) {
     let html = ""
     const jewelery = data.filter((el) => el.category === "jewelery")
     jewelery.map ((el) => {
         html +=`
         <div class="card">
         <img src=${el.image} alt="" />
         <h3>${el.title}</h3>
         </div>
         `
     })
     
     main.innerHTML=html
 }

 async function getelectronics() {
    const response = await fetch(API)
    const data = await response.json()
    console.log(data);
    htmlgaelectronics(data)
 }
 
 function htmlgaelectronics(data) {
     let html = ""
     const electronics = data.filter((el) => el.category === "electronics")
     electronics.map ((el) => {
         html +=`
         <div class="card">
         <img src=${el.image} alt="" />
         <h3>${el.title}</h3>
         </div>
         `
     })
     
     main.innerHTML=html
 }


