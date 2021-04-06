function validar() {

   let nombre, apellido, correo, usuario, clave, telefono, expresion;

   nombre = document.getElementById("nombre").value;
   apellido = document.getElementById("apellido").value;
   correo = document.getElementById("correo").value;
   usuario = document.getElementById("usuario").value;
   clave = document.getElementById("clave").value;
   telefono = document.getElementById("telefono").value;

   expresion = /\w+@\w+\.+[a-z]/;

   if (nombre == "" || apellido == "" || correo == "" || usuario == "" || clave == "" || telefono == "") {
      alert("todos los campos son obligatorios");
      return false;
   }
   else if (nombre.length > 30) {
      alert("El nombre es muy largo");
      return false;
   }
   else if (apellido.length > 80) {
      alert("Los apellidos estan vacios");
      return false;
   }
   else if (correo.length > 100) {
      alert("el correo es muy largo");
      return false;
   }
   else if (!expresion.test(correo)) {
      alert("Correo no valido");
      return false;
   }
   else if (usuario.length > 20 || clave.lenght > 20) {
      alert("usuario o clave solo deben tener como maximo 20 caracteres");
      return false;
   }
   else if (telefono.length > 10) {
      alert("El telefono es muy largo");
      return false;
   }
   else if (isNaN(telefono)) {
      alert("El telefono no es un numero");
      return false;
   }

}
