export async function renderingPartner() {
    const renderFetch = fetch('./db/db.json')
        .then((Response) => Response.json())
        .then((data) => {

        let divRest = document.createElement('div')
        divRest.classList.add("cards", "cards-restaurants")
        document.querySelector('.restaurants').append(divRest)

        for (let i = 0; i < data.db.partners.length; i++) {
            let div = document.createElement('a')
            div.href = "restaurant.html"
            div.classList.add('card', 'card-restaurant')
            div.dataset.products = `${data.db.partners[i].products}`

            let divTxt = document.createElement('div')
            divTxt.classList.add('card-text')

            let divHead = document.createElement('div')
            divHead.classList.add('card-heading')

            let divInfo = document.createElement('div')
            divInfo.classList.add('card-info')

            let nameDiv = document.createElement('h3')
            nameDiv.classList.add('card-title')
            nameDiv.textContent = data.db.partners[i].name

            let deliv = document.createElement('span')
            deliv.classList.add('card-tag', 'tag')
            deliv.textContent = data.db.partners[i].time_of_delivery + " " + "мин"

            let star = document.createElement('div')
            star.classList.add('rating')
            star.textContent = data.db.partners[i].stars

            let priceDiv = document.createElement('div')
            priceDiv.classList.add('price')
            priceDiv.textContent =  "От" +  " " + data.db.partners[i].price + " " + "₽"

            let kitch = document.createElement('div')
            kitch.classList.add('category')
            kitch.textContent = data.db.partners[i].kitchen

            let img = document.createElement('img')
            img.classList.add("card-image")
            img.src = data.db.partners[i].image

            divRest.append(div)
            div.append(img, divTxt)
            divTxt.append(divHead, divInfo)
            divHead.append(nameDiv, deliv)
            divInfo.append(star, priceDiv, kitch)

            div.addEventListener('click', (e) => {
                e.preventDefault()

                let rest = {
                    name: nameDiv.textContent,
                    rating: star.textContent,
                    price: priceDiv.textContent,
                    kitchen: kitch.textContent,
                    products: div.dataset.products
                }

                localStorage.setItem('rest', JSON.stringify(rest))

                window.location.href = '/restaurant.html'
            })
        }
    });
}