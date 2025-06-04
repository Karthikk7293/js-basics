
const handleLoad = async () => {

    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json()
    console.log({ result });

    const productRow = document.getElementById('product-row')

    for (let i = 0; i < result.length; i++) {

        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('id', `product-id-${result[i]}`)
        card.style.width = '18rem';

        const image = document.createElement('img')
        image.src = result[i].image
        image.setAttribute('class', 'card-img-top')

        const cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        const title = document.createElement('h5')
        title.setAttribute('class', 'card-title')
        title.innerHTML = result[i].title

        const description = document.createElement('p')
        description.setAttribute('class', 'card-text')
        description.innerHTML = result[i].description

        cardBody.appendChild(title)
        cardBody.appendChild(description)
        card.appendChild(image)
        card.appendChild(cardBody)

        const button = document.createElement('button')
        button.setAttribute('data-bs-toggle', "modal")
        button.setAttribute('data-bs-target', "#staticBackdrop")
        button.setAttribute('type', 'button')

        button.addEventListener('click', () => handleClick(result[i]))
        button.setAttribute('class', 'btn btn-outline-primary ')
        button.innerHTML = "edit"
        card.appendChild(button)

        const col = document.createElement('div')
        col.setAttribute('class', 'col-12  col-md-6 col-lg-4 ')
        col.appendChild(card)
        productRow.appendChild(col)

    }


}


const handleClick = (product) => {
    const title = document.getElementById('title')
    title.value = product.title
    const description = document.getElementById('description')
    description.value = product.description
    const image = document.getElementById('preview')
    image.src = product.image

}