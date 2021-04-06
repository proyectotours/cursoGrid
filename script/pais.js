const select = document.querySelector('#select1');

const opciones = document.querySelector('#opciones');

const contenidoSelect = document.querySelector('#select1 .contenido_select');

const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {

   opcion.addEventListener('click', (e) => {

      e.preventDefault();

      contenidoSelect.innerHTML = e.currentTarget.innerHTML;

      select.classList.toggle('active');

      opciones.classList.toggle('active');

      hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
   });
});

select.addEventListener('click', () => {
   select.classList.toggle('active');
   opciones.classList.toggle('active');

});

