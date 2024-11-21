function mostrarMensaje(){
    alert("Hola, Eres Bienvenido")
}



function validarFormulario(){
 const name = document.getElementById('nombre').value;
 const email = document.getElementById('email').value;
 if (name === '' || email === '') {

 alert('Por favor, completa todos los campos.');
 } else {
 alert('¡Formulario enviado correctamente!');
 }
}
