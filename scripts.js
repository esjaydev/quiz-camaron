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
btnIniciar.addEventListener("click", () => {
    pantallaInicio.style.display = "none";
    pantallaQuiz.style.display = "flex";
});

function crearPregunta(index) {
    const preguntaActual = preguntas[index];
    const contenedorPregunta = document.createElement("div");
    contenedorPregunta.className = "pregunta";
    contenedorPregunta.id = "pregunta-" + index;

    const tituloPregunta = document.createElement("h3");
    tituloPregunta.textContent = preguntaActual.pregunta;
    let puntajePreguntaActual = 0
    const contenedorOpciones = document.createElement("div");
    contenedorOpciones.className = "opciones";
    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.textContent = opcion.texto;
        boton.addEventListener("click", () => {
            puntajePreguntaActual = opcion.puntos;
        });
        contenedorOpciones.appendChild(boton);
    });
    contenedorPregunta.appendChild(tituloPregunta);
    contenedorPregunta.appendChild(contenedorOpciones);

    const contenedorNavegacion = document.createElement("div");
    contenedorNavegacion.className = "contenedor-navegacion";

    if (index < preguntas.length - 1) {
        crearBotonNext(contenedorNavegacion);
    }
    if (index > 0) {
        crearBotonPrev(contenedorNavegacion);
    }
    contenedorPregunta.appendChild(contenedorNavegacion);
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
    console.log('Cambia a siguiente pregunta...');
}
function preguntaActual() {
    console.log('Cambia a pregunta anterior...');
}
crearPregunta(0);