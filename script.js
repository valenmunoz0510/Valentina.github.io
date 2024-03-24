//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}
// Función para manejar el envío del formulario
document.getElementById("formulario-contacto").addEventListener("submit", function(event){
    event.preventDefault(); // Evitar el envío del formulario

    // Aquí puedes agregar tu lógica de validación del formulario si lo deseas

    // Mostrar la ventana modal
    document.getElementById('miModal').style.display = 'block';
});

// Cerrar la ventana modal al hacer clic en el botón de cerrar (×)
document.querySelector('.close').addEventListener('click', function(){
    document.getElementById('miModal').style.display = 'none';
});

// Cerrar la ventana modal al hacer clic fuera de ella
window.addEventListener('click', function(event){
    if (event.target == document.getElementById('miModal')) {
        document.getElementById('miModal').style.display = 'none';
    }
});