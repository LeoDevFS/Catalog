function createProduct(marca, sae) {
  fetch("http://localhost:3000/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brand: marca,
      sae: sae,
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
