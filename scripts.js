const preguntas = [
    {
        pregunta: "¿Cada cuanto tiempo piensas en el mar?",
        opciones: [{
            texto: "Todos los días",
            puntos: 10,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Una vez a la semana",
            puntos: 5,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Una vez al mes",
            puntos: 1,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Nunca",
            puntos: 0,
            imagen: "./assets/mar.jpg"
        }],
        imagen: "./assets/mar.jpg"
    },
    {
        pregunta: "¿Cómo es tu postura al estar sentad@?",
        opciones: [{
            texto: "Erguid@",
            puntos: 0,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Un poco encorvad@",
            puntos: 5,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Muy encorvad@",
            puntos: 10,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Medio acostad@",
            puntos: 0,
            imagen: "./assets/mar.jpg"
        }],
        imagen: "./assets/mar.jpg"
    },
    {
        pregunta: "¿Te gusta seguir la corriente?",
        opciones: [{
            texto: "Siempre",
            puntos: 10,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "A veces",
            puntos: 5,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Rara vez",
            puntos: 1,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Nunca",
            puntos: 0,
            imagen: "./assets/mar.jpg"
        }],
        imagen: "./assets/mar.jpg"
    },
    {
        pregunta: "¿Eres fanátic@ de los Seattle Mariners?",
        opciones: [{
            texto: "Sí, los amo",
            puntos: 10,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Sí, me gustan",
            puntos: 5,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "No los conozco",
            puntos: 1,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "No me gustan",
            puntos: 0,
            imagen: "./assets/mar.jpg"
        }],
        imagen: "./assets/mar.jpg"
    },
    {
        pregunta: "¿Cuál es tu destino favorito para ir de vacaciones?",
        opciones: [{
            texto: "La playa",
            puntos: 10,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "La montaña",
            puntos: 0,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "La ciudad",
            puntos: 5,
            imagen: "./assets/mar.jpg"
        }, {
            texto: "Prefiero quedarme en casa",
            puntos: 1,
            imagen: "./assets/mar.jpg"
        }],
        imagen: "./assets/mar.jpg"
    }
]
const btnIniciar = document.getElementById("boton-iniciar");
const pantallaInicio = document.querySelector(".pantalla-inicio");
const pantallaQuiz = document.querySelector(".pantalla-quiz");
const pantallaFinal = document.querySelector(".pantalla-final");
const textoPregunta = document.getElementById("texto-pregunta");
const opciones = document.querySelector(".opciones");
const medidor = document.getElementById("medidor");
const resultado = document.getElementById("resultado");
const botonReiniciar = document.getElementById("boton-reiniciar");
let puntaje = 0;
let preguntaActualIndex = 0;
btnIniciar.addEventListener("click", () => {
    empezarQuiz();
});
function crearPregunta(index) {
    const preguntaActual = preguntas[index];
    const contenedorPregunta = document.createElement("div");
    contenedorPregunta.className = "pregunta";
    contenedorPregunta.id = "pregunta-" + index;
    contenedorPregunta.dataset.puntos = 0;

    const tituloPregunta = document.createElement("h3");
    tituloPregunta.textContent = preguntaActual.pregunta;
    const contenedorOpciones = document.createElement("div");
    contenedorOpciones.className = "opciones";
    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.textContent = opcion.texto;
        boton.addEventListener("click", () => {
            contenedorPregunta.dataset.puntos = opcion.puntos;
            deseleccionarOtrasOpciones(contenedorPregunta);
            boton.classList.add("seleccionada");
        });
        contenedorOpciones.appendChild(boton);
    });
    contenedorPregunta.appendChild(tituloPregunta);
    contenedorPregunta.appendChild(contenedorOpciones);

    const contenedorNavegacion = document.createElement("div");
    contenedorNavegacion.className = "contenedor-navegacion";

    if (index > 0) {
        crearBotonPrev(contenedorNavegacion);
    }
    if (index < preguntas.length - 1) {
        crearBotonNext(contenedorNavegacion);
    }
    if (index === preguntas.length - 1) {
        crearBotonFinal(contenedorNavegacion);
    }
    contenedorPregunta.appendChild(contenedorNavegacion);
    contenedorPregunta.style.display = "none";
    pantallaQuiz.appendChild(contenedorPregunta);
}
function crearBotonNext(parent) {
    const botonNext = document.createElement("button");
    botonNext.className = "boton-navegacion";
    botonNext.textContent = "Siguiente";
    botonNext.addEventListener("click", () => {
        siguientePregunta();
    });
    parent.appendChild(botonNext);
}
function crearBotonPrev(parent) {
    const botonPrev = document.createElement("button");
    botonPrev.className = "boton-navegacion";
    botonPrev.textContent = "Anterior";
    botonPrev.addEventListener("click", () => {
        preguntaAnterior();
    });
    parent.appendChild(botonPrev);
}
function siguientePregunta() {
    ocultarPregunta(preguntaActualIndex);
    preguntaActualIndex++;
    mostrarPregunta(preguntaActualIndex);
}
function preguntaAnterior() {
    ocultarPregunta(preguntaActualIndex);
    preguntaActualIndex--;
    mostrarPregunta(preguntaActualIndex);
}
function empezarQuiz() {
    pantallaInicio.style.display = "none";
    pantallaQuiz.style.display = "flex";
    for (let i = 0; i < preguntas.length; i++) {
        crearPregunta(i);
    }
    mostrarPregunta(preguntaActualIndex);
}
function mostrarPregunta(index) {
    const contenedorPregunta = document.getElementById("pregunta-" + index);
    contenedorPregunta.style.display = "block";
}
function ocultarPregunta(index) {
    const contenedorPregunta = document.getElementById("pregunta-" + index);
    contenedorPregunta.style.display = "none";
}
function crearBotonFinal(parent) {
    const botonFinal = document.createElement("button");
    botonFinal.className = "boton-navegacion";
    botonFinal.textContent = "Finalizar";
    botonFinal.addEventListener("click", () => {
        finalizarQuiz();
    });
    parent.appendChild(botonFinal);
}
function finalizarQuiz() {
    pantallaQuiz.style.display = "none";
    pantallaFinal.style.display = "flex";
    calcularResultados();
}
function calcularResultados() {
    let puntajeTotal = 0;
    const preguntas = document.querySelectorAll(".pregunta");
    preguntas.forEach(pregunta => {
        puntajeTotal += parseInt(pregunta.dataset.puntos);
    });
    console.log(puntajeTotal);

    switch (true) {
        case puntajeTotal <= 5:
            resultado.innerText = "No eres camarón, 0% de hecho...";
            break;
        case puntajeTotal < 10:
            resultado.innerText = "No eres un camarón ni por poquito, te salvaste de ser ceviche.";
            break;
        case puntajeTotal >= 10 && puntajeTotal < 15:
            resultado.innerText = "No eres un camarón, pero tienes potencial ¿Dentro de una Maruchán, quizás?";
            break;
        case puntajeTotal >= 15 && puntajeTotal < 20:
            resultado.innerText = "No eres un camarón, pero cuidado por donde nadas.";
            break;
        case puntajeTotal >= 20 && puntajeTotal < 30:
            resultado.innerText = "No eres un camarón, pero cuida tu postura.";
            break;
        case puntajeTotal >= 30 && puntajeTotal <= 40:
            resultado.innerText = "¡Eres un camarón!";
            break;
        case puntajeTotal > 40:
            resultado.innerText = "¡Eres un camarón y te lleva la corriente!";
            break;
        default:
            resultado.innerText = "hubo un error mamahuevo";
            break;
    }
}
function deseleccionarOtrasOpciones(contenedorPregunta) {
    const opciones = contenedorPregunta.querySelectorAll(".opcion");
    opciones.forEach(opcion => {
        opcion.classList.remove("seleccionada");
    });
}