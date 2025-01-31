//FUNCIÓN QUE APLICA EL ESTILO A LA OPCIÓN SELECCIONADA EN EL MENÚ Y QUITA LA PREVIAMENTE SELECCIONADA
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //DESAPARECEMOS EL MENÚ UNA VEZ SELECCIONADA LA OPCIÓN EN EL MODO RESPONSIVE 
    var x =document.getElementById("nav")
    x.className = ""; 

}
//FUNCIÓN PARA EL MENÚ RESPONSIVE
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}

//DETECTA EL SCROLLING PARA APLICAR LA ANIMACIÓN DE LAS BARRAS DE HABILIDADES 
window.onscroll = function(){
    efectoHabilidades()
};

//FUNCIÓN PARA APLICAR LA ANIMACIÓN DE LA BARRA DE HABILIDADES
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("bs").classList.add("barra-progreso2")
        document.getElementById("js").classList.add("barra-progreso3")
        document.getElementById("nd").classList.add("barra-progreso4")
        document.getElementById("py").classList.add("barra-progreso5")
        document.getElementById("rj").classList.add("barra-progreso6")
        document.getElementById("bd").classList.add("barra-progreso7")
        document.getElementById("ps").classList.add("barra-progreso8")
    }
}
