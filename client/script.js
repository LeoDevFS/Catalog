function searchBrand(){
    const productBrand = document.getElementById('productBrand'.value)
    const resultado = document.getElementById('container')
    const apiURL = 'http://localhost:3000'

    fetch(apiURL)
    .then(response=>response.json())
    .then(data => {
        if(data){
            console.log(data)
           data.map(item =>{
            let productBrand = item.brand
            resultado.innerHTML += `
            <div class = "card">
             <p class = productBrand> ${productBrand}</p>
            </div>

            ` 
           })
        }else{
            resultado.innerHTML = "No se ha encontrado el personaje"
        }
    })
}