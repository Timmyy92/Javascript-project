// window.addEventListener('load', () => {

//     [
//     'Buy', 'Rent'
//     ].forEach((value) => {
//         document.getElementById('Types').innerHTML += `
//     <option value="${value}">${value}</option>
//     `
//     })

// })

function forUpload() {
    location.href = "./sell.html"
}

function signUp() {
    location.href="./signup.html"
};



let categories = {
        
        "Sale": [
            {
                "descript": "This BRAND NEW 4 BEDROOM SEMI-DETACHED HOUSE WITH A BQ is located in a secured environment It features custom-made bespoke finishing, an Interlocking concrete floor, and all rooms en-suite, Fully fitted kitchen(microwave, heat extractor, washing machine, pantry), spacious master bedroom, water heaters.",
                "price": "#85,000,000",
                "location": "Lagos",
                "images": "flat1.jpeg",
                "images1": "flat2.jpeg",
                "images2": "flat3.jpeg"
            },  
                {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Ibadan",
                "images": "img1.jpeg",
                "images1": "img2.jpeg",
                "images2": "img3.jpeg"

            },
                
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Abuja",
                "images": "flat4.jpeg",
                "images1": "flat5.jpeg",
                "images2": "flat6.jpeg"

            },
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Ilorin",
                "images": "house8.jpeg",
                "images1": "image 2.jpeg",
                "images2": "image 3.jpeg"

            },
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Akure",
                "images": "image 4.jpeg",
                "images1": "image 5.jpeg",
                "images2": "image 6.jpeg"

            },
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#500,000 per year",
                "location": "Enugu",
                "images": "image 7.jpeg",
                "images1": "imag1.jpeg",
                "images2": "imag2.jpeg"

                }

            ]
    ,
        "Rent": [
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#1,500,000 per year",
                "location": "Lagos",
                "images": "house8.jpeg",
                "images1": "house9.jpeg",
                "images2": "house.jpeg"
            },  
                {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Lagos",
                "images": "flat7.jpeg",
                "images1": "flat8.jpeg",
                "images2": "flat9.jpeg"

            },
                
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Ibadan",
                "images": "flat10.jpeg",
                "images1": "flat11.jpeg",
                "images2": "flat12.jpeg"

            },
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Ilorin",
                "images": "image 4.jpeg"

            },
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Abuja",
                "images": "image 2.jpeg"

            },
            {
                "descript": "These Fantastic homes are available for all the property estates locations. They are built with style and modern day architectural designs and expertise. They express the opulence and elegance of a contemporary neighbourhood.",
                "price": "#10,000,000",
                "location": "Enugu",
                "images": "image 2.jpeg"

                }

            ]
    }



    



console.log(categories);

window.localStorage.setItem('houses', JSON.stringify(categories))

let show = document.querySelector('.img')
let gethouse = JSON.parse(localStorage.getItem('houses'))


console.log(gethouse);

window.addEventListener("load", displayhouse)

function displayhouse() {
    gethouse.Sale.map((data, index) => {
        show.innerHTML += `
        <div class="cardd" onclick="details(${index})">
                   <div class="myimg"><img src="${data.images}" alt="" width="100%"></div>
					
					<h5 class="ven">${data.descript}</h5>
					
					<h4 class="naira">${data.price}</h4>
		</div>
        
        `
})
}
let inputEl = document.getElementById("input");
let title = document.querySelector(".pro")
function forRent() {
    title.innerHTML = "FOR RENT" 
   if (inputEl.value) {
    show.innerHTML = ""
    let availhouse = gethouse.Rent.filter( data => {
        return data.location.includes(inputEl.value)
    })
       console.log(availhouse)
       for (let index2 = 0; index2 < availhouse.length; index2++) {
           const element = availhouse[index2];

           show.innerHTML += `
        <div class="cardd">
                   <div class="myimg" onclick="detailsR(${index2})"><img src="${element.images}" alt="" width="100%"></div>
					
					<h5 class="ven">${element.descript}</h5>
					<h6 class="sango">
						<img src="./locatin.png" alt="" width="2%" />${element.location}
					</h6>
					<h4 class="naira">${element.price}</h4>
		</div>
        
        `
           
       }
   } else {
    show.innerHTML = ""
    gethouse.Rent.map((data,index2) => {
        show.innerHTML += `
        <div class="cardd">
                   <div class="myimg" onclick="detailsR(${index2})"><img src="${data.images}" alt="" width="100%"></div>
					
					<h5 class="ven">${data.descript}</h5>
					
					<h4 class="naira">${data.price}</h4>
		</div>
        
        `
    })
   
   }
}
  

function forSale() {
    // window.location.reload()
    title.innerHTML = "FOR SALE" 
    if (inputEl.value) {
     show.innerHTML = ""
     let availhouse = gethouse.Sale.filter( data => {
         return data.location.includes(inputEl.value)
         
        
     })
        console.log(availhouse)
        for (let index = 0; index < availhouse.length; index++) {
            const element = availhouse[index];
 
            show.innerHTML += `
         <div class="cardd">
                    <div class="myimg" onclick="details(${index})"><img src="${element.images}" alt="" width="100%"></div>
                     
                     <h5 class="ven">${element.descript}</h5>
                     <h6 class="sango">
                         <img src="./locatin.png" alt="" width="2%" />${element.location}
                     </h6>
                     <h4 class="naira">${element.price}</h4>
         </div>
         
         `
            
        }
    } else {
     show.innerHTML = ""
     gethouse.Sale.map((data,index) => {
         show.innerHTML += `
         <div class="cardd">
                    <div class="myimg" onclick="details(${index})"><img src="${data.images}" alt="" width="100%"></div>
                     
                     <h5 class="ven">${data.descript}</h5>
                     <h6 class="sango">
                         <img src="./locatin.png" alt="" width="2%" />${data.location}
                     </h6>
                     <h4 class="naira">${data.price}</h4>
         </div>
         
         `
     })
    
    }
}


function details(index) {
    console.log(index);
    // console.log(gethouse.Sale[index]);
    console.log(gethouse.Rent[index]);
    
    let clickyy = gethouse.Sale[index]
    
    window.localStorage.setItem('more', JSON.stringify(clickyy))

    window.location.href = 'detail.html'
}

function detailsR(index2) {
    console.log(index2);
    // console.log(gethouse.Sale[index]);
    console.log(gethouse.Rent[index2]);

    let clickyy = gethouse.Rent[index2]
    
    window.localStorage.setItem('more', JSON.stringify(clickyy))

    window.location.href = 'detail.html'
}
// details()
let getstore = JSON.parse(localStorage.getItem('pro'));

function uploadd() {
    
    console.log(getstore);
    for (let index = 0; index < getstore.length; index++) {
        const element = getstore[index];

        show.innerHTML += `
        <div class="cardd">
                   <div class="myimg" onclick="details(${index})"><img src="${element.images}" alt="" width="100%"></div>
                    
                    <h5 class="ven">${element.descript}</h5>
                    
                    <h4 class="naira">${element.price}</h4>
        </div>
        
        `
        
    }
}
uploadd()