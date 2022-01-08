const btnEnviar = document.querySelector('#btnEnviar');
btnEnviar.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Aqui puedes enviar tus datos a una API");
    
});
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //Busca todos los formularios que nosotros queramos aplicar estilos de validación
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  //Prevent default event // previene el evento default
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
