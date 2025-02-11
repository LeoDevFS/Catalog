
function FormCreateProduct() {
  return <>
    
    <form className='formCreateProduct' action="post">
    <input  type="text" name='inputBrand' id='inputBrand' placeholder='BRAND'/><br />
    <input  type="text" name='inputSae' id='' placeholder='inputSae'/><br />
    <input  type="text" name='inputGamma' id='' placeholder='inputGamma'/><br />
    <input  type="text" name='inputSubname' id='' placeholder='inputSubname'/><br />
    <input  type="number" name='inputFormat' id='' placeholder='inputFormat'/><br />
    <button>Crear</button>
</form>
  </>
  
}

export default FormCreateProduct