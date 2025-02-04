const { format } = require("path");

document.getElementById('createForm').onsubmit = function(event) {
    event.preventDefault(); 
    const brand = document.getElementById('marca').value;
    const sae = document.getElementById('sae').value;
    createProduct(brand,sae);
  };
  console.log(`hola`)
  function createProduct(marca, sae) {
    fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand: marca,
        sae: sae,
        gamma:gamma,
        subname:subname,
        approval:approval,
        liters:liters,
        price:price
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(sae);
          window.alert("Product created successfully");
        } else {
          console.error("Error creating the product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }