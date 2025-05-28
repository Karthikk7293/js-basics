// json => javascripit object notation 

const data = {
    "key": "value",
    "age": "10",
    "flag": "true"
}

const obj = {
    key: "value",
    age: 10,
    flag: true
}

document.getElementById('click-me').addEventListener('click', () => {

    fetch('https://fakestoreapi.com/products').then((response) => {
        console.log({ response });
        return response.json()
    }).then((result) => {
        console.log({ result });
        result.id = 10
        return result
    }).then((res) => {
        console.log({ res });

        for (let i = 0; i < res.length; i++) {

            const row = document.getElementById('row')
            const col = document.createElement('div')
            const card = document.createElement('div')
            const title = document.createElement('h6')
            const image = document.createElement('img')
            const description = document.createElement('p')

            col.setAttribute('class', 'col-4 mx-auto  py-4')
            card.setAttribute('class', 'card shadow border border-success rounded  p-3')

            title.innerHTML = res[i].title
            title.setAttribute('class', 'text-success font-bold')

            image.src = res[i].image
            image.style.width = '8rem'
            image.setAttribute('class', 'mx-auto')

            description.innerHTML = res[i].description
            description.setAttribute('class', 'text-info font-bold')
            description.style.fontSize = '12px'

            card.appendChild(image)
            card.appendChild(title)
            card.appendChild(description)
            col.appendChild(card)
            console.log(row);

            row.appendChild(col)
        }





    }).catch((err) => {
        const error = err.toString()

        if (error.startsWith("S")) {
            alert("something went wrong")

        }


    })
})
