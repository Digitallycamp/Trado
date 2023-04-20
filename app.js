let baseUrl = `https://fakestoreapi.com/products/`;
const main = document.querySelector('main');
const modalElem = document.querySelector('.modal');
const innerModalElem = document.querySelector('.inner-modal');
const closeBtn = document.querySelector('.close');

// Fetching data
function readData(url){

    fetch(url).then((response)=>{
        if(response.ok){
            return response.json()
        }
    }).then(data => showData(data))

}

readData(baseUrl)

//Show function

function showData(data){
        data.forEach((returnData)=>{
            const returnItem = `
                <div class="data" 
                data-image="${returnData.image}"
                data-title="${returnData.title}"
                data-price="${returnData.price}"
                data-description="${returnData.description}"
                data-rating="${returnData.rating.rate}"
                data-category="${returnData.category}"
                data-sales="${returnData.rating.count}"
                >
                    <img src="${returnData.image}" alt="${returnData.title}" >
                    <p>${returnData.title}</p>
                    <p>$${returnData.price}</p>
                    <button class="add-to-cart">Add to cart</button>
                    
                </div>
            
            `;
            main.insertAdjacentHTML('afterbegin', returnItem)

        }) // foreach fun end

        const producrCard = document.querySelectorAll('.data');
        producrCard.forEach((card)=>{
            card.addEventListener('click', function(event){

                if(event.target.className !== 'add-to-cart'){
                        modalElem.classList.add('show-modal');
                        
                        const modal =  `
                            <div class="product-image">
                                    <img src="${event.currentTarget.dataset.image}"

                            </div>
                            
                        
                        
                        `;
                        const modal2 =`
                        
                        <div class="product-info">
                                <h1>${event.currentTarget.dataset.title}</h1>
                                <p>Rating: <strong>${event.currentTarget.dataset.rating}</strong>
                                    <span class="material-symbols-outlined">
                                    star
                                    </span><span class="material-symbols-outlined">
                                    star
                                    </span><span class="material-symbols-outlined">
                                    star
                                    </span><span class="material-symbols-outlined">
                                    star
                                    </span><span class="material-symbols-outlined">
                                    star
                                    </span
                                </p>
                                <p> Price per 1: <strong>$${event.currentTarget.dataset.price}</strong></p>
                                <p>Category: <strong>${event.currentTarget.dataset.category}</strong></p>
                                <p>Quantity sold:<strong> ${event.currentTarget.dataset.sales}</strong></p>
                                
                                <h2>Product details</h2>
                                <p>${event.currentTarget.dataset.description}</p>
                                <button class="add-to-cart">Add to cart</button>

                            </div>
                        
                        `

                        innerModalElem.insertAdjacentHTML('afterbegin', modal)
                        innerModalElem.insertAdjacentHTML('beforeend', modal2)
                        event.stopPropagation();

                } // if statement


            })// card loop

        }) // Productcard loop

}// show data end

// close modal

closeBtn.addEventListener('click', closeModal)
function closeModal(){
    modalElem.classList.remove('show-modal');
    innerModalElem.innerHTML=" ";
}
