const preguntas = [
    {
        pregunta: "¿Cada cuánto tiempo piensas en el mar?",
        opciones: [{
            texto: "Todos los días",
            puntos: 10,
        }, {
            texto: "Una vez a la semana",
            puntos: 5,
        }, {
            texto: "Una vez al mes",
            puntos: 1,
        }, {
            texto: "Nunca",
            puntos: 0,
        }],
        imagen: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDVzaTF1MHJyaWFlajN0Y3Y4M3A2aDZ2OXl5eXIza2t6NTY1anczNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif"
    },
    {
        pregunta: "¿Cómo es tu postura al estar sentad@?",
        opciones: [{
            texto: "Erguid@",
            puntos: 0,
        }, {
            texto: "Un poco encorvad@",
            puntos: 5,
        }, {
            texto: "Muy encorvad@",
            puntos: 10,
        }, {
            texto: "Medio acostad@",
            puntos: 0,
        }],
        imagen: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjIzeXc0Nzl4cGVzaGN0Z3U3ZzU3eWYzbTRuMnZmdDhyYjAzN2t3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v7WvuXTwkWygFdFTCE/giphy.gif"
    },
    {
        pregunta: "¿Te gusta seguir la corriente?",
        opciones: [{
            texto: "Siempre",
            puntos: 10,
        }, {
            texto: "A veces",
            puntos: 5,
        }, {
            texto: "Rara vez",
            puntos: 1,
        }, {
            texto: "Nunca",
            puntos: 0,
        }],
        imagen: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDQ4b2d0aGlhOTUxaTBqdmh2Y2c1dGdrNXhiNjk0YjNzbmdneXBwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J16yxZ0TUpSGqGTt3I/giphy.gif"
    },
    {
        pregunta: "¿Eres fanátic@ de los Seattle Mariners?",
        opciones: [{
            texto: "Sí, los amo",
            puntos: 10,
        }, {
            texto: "Sí, me gustan",
            puntos: 5,
        }, {
            texto: "No los conozco",
            puntos: 1,
        }, {
            texto: "No me gustan",
            puntos: 0,
        }],
        imagen: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGxmM3VrdGI1bmNrcWxmMXBjb2hpb2hrZXJyZmNrZzJmbjR5OWNtbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9hhCeA32wYGA/giphy.gif"
    },
    {
        pregunta: "¿Cuál es tu destino favorito para ir de vacaciones?",
        opciones: [{
            texto: "La playa",
            puntos: 10,
        }, {
            texto: "La montaña",
            puntos: 0,
        }, {
            texto: "La ciudad",
            puntos: 5,
        }, {
            texto: "Prefiero quedarme en casa",
            puntos: 1,
        }],
        imagen: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFzOXYwNTN0NjM5OG0wYnJiejZpM3J4ejNqcmIyNnE4Njk0bTBrNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDarqlsEW6F7F14Fq/giphy.gif"
    }
]
const frases = [
    "8 de cada 10 personas son camaron sin saberlo.",
    "Camarón que se duerme, se convierte en ceviche con elote.",
    "Endereza la espalda.",
    "Cuidado con la Odontodactylus scyllarus.",
    "El 84% de las personas no han descubierto si son camarones.",
    "El siguiente camarón podrías ser tu... o la niña 👉",
    "The Good Place: T1E1",
    "Cuida tu postura."
]
const introduccion = document.getElementById("introduccion");
window.addEventListener("DOMContentLoaded", () => {
    introduccion.textContent = frases[Math.floor(Math.random() * frases.length)];
})
const btnIniciar = document.getElementById("boton-iniciar");
const pantallaInicio = document.querySelector(".pantalla-inicio");
const pantallaQuiz = document.querySelector(".pantalla-quiz");
const contenedorQuiz = document.querySelector(".contenedor-quiz")
const pantallaFinal = document.querySelector(".pantalla-final");
const textoPregunta = document.getElementById("texto-pregunta");
const opciones = document.querySelector(".opciones");
const medidor = document.getElementById("medidor");
const resultado = document.getElementById("resultado");
const botonReiniciar = document.getElementById("boton-reiniciar");
let puntaje = 0;
let preguntaActualIndex = 0;
let intervaloContador;
let tiempoContador = 0;

function iniciarContador() {
    clearInterval(intervaloContador);
    tiempoContador = 0;
    intervaloContador = setInterval(() => {
        tiempoContador++;
    }, 1000);
}

function detenerYObtenerContador() {
    clearInterval(intervaloContador);
    return tiempoContador;
}
btnIniciar.addEventListener("click", () => {
    empezarQuiz();
});
function crearPregunta(index) {
    const preguntaActual = preguntas[index];
    const contenedorPregunta = document.createElement("div");
    contenedorPregunta.className = "pregunta";
    contenedorPregunta.id = "pregunta-" + index;
    contenedorPregunta.dataset.puntos = 0;

    const imagenPregunta = document.createElement("img");
    imagenPregunta.src = preguntaActual.imagen;
    imagenPregunta.className = "imagen-pregunta";
    contenedorPregunta.appendChild(imagenPregunta);

    const tituloPregunta = document.createElement("h3");
    tituloPregunta.textContent = preguntaActual.pregunta;
    const contenedorOpciones = document.createElement("div");
    contenedorOpciones.className = "opciones";
    let preguntaRespondida = false;

    preguntaActual.opciones.forEach(opcion => {
        const boton = crearOpcion(opcion)
        boton.addEventListener("click", () => {
            const tiempoTomado = detenerYObtenerContador();
            contenedorPregunta.dataset.tiempo = tiempoTomado;
            console.log(`Tiempo para responder: ${tiempoTomado} segundos`);

            let puntosObtenidos = opcion.puntos;
            if (tiempoTomado > 7) {
                puntosObtenidos += 5;
            }
            contenedorPregunta.dataset.puntos = puntosObtenidos;

            deseleccionarOtrasOpciones(contenedorPregunta);
            boton.classList.add("seleccionada");
            if (preguntaRespondida == false) {
                actualizarMedidor();
                preguntaRespondida = true;
            }
            if (index < preguntas.length - 1) {
                activarBotonSiguiente(index);
            }
            if (index === preguntas.length - 1) {
                activarBotonFinal();
            }
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
        crearBotonNext(contenedorNavegacion, index);
    }
    if (index === preguntas.length - 1) {
        crearBotonFinal(contenedorNavegacion);
    }
    contenedorPregunta.appendChild(contenedorNavegacion);
    contenedorPregunta.style.display = "none";
    contenedorQuiz.appendChild(contenedorPregunta);
}
function crearOpcion(opcion) {
    const boton = document.createElement("button");
    boton.className = "opcion";
    boton.textContent = opcion.texto;
    return boton
}
function crearBotonNext(parent, index) {
    const botonNext = document.createElement("button");
    botonNext.className = "boton-navegacion";
    botonNext.id = `boton-navegacion${index}`;
    botonNext.style.visibility = "hidden";
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
    pantallaFinal.style.display = "none";
    pantallaQuiz.style.scale = '0'
    pantallaQuiz.style.display = "flex";
    for (let i = 0; i < preguntas.length; i++) {
        crearPregunta(i);
    }
    mostrarPregunta(preguntaActualIndex);
    pantallaQuiz.style.scale = '1'
}
function mostrarPregunta(index) {
    const contenedorPregunta = document.getElementById("pregunta-" + index);
    contenedorPregunta.style.display = "block";
    iniciarContador();
}
function ocultarPregunta(index) {
    const contenedorPregunta = document.getElementById("pregunta-" + index);
    contenedorPregunta.style.display = "none";
}
function crearBotonFinal(parent) {
    const botonFinal = document.createElement("button");
    botonFinal.className = "boton-navegacion";
    botonFinal.textContent = "Finalizar";
    botonFinal.style.visibility = "hidden";
    botonFinal.id = "boton-final";
    botonFinal.addEventListener("click", () => {
        finalizarQuiz();
    });
    parent.appendChild(botonFinal);
}
function finalizarQuiz() {
    pantallaQuiz.style.transition = "opacity 2000ms";
    pantallaQuiz.style.opacity = "0";
    pantallaFinal.style.display = "flex";
    pantallaFinal.style.scale = '0'
    setTimeout(() => {
        pantallaQuiz.style.opacity = "1";
        pantallaQuiz.style.display = "none";
        pantallaFinal.style.scale = '1'
    }, 2000);
    calcularResultados();
}
const imagenResultado = document.getElementById("imagen-resultado");
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
            imagenResultado.src = "./assets/shrimp-noise.webp";
            break;
        case puntajeTotal < 10:
            resultado.innerText = "No eres un camarón ni por poquito, te salvaste de ser ceviche.";
            imagenResultado.src = "./assets/camaron-triste.webp";
            break;
        case puntajeTotal >= 10 && puntajeTotal < 15:
            resultado.innerText = "No eres un camarón, pero tienes potencial ¿Dentro de una Maruchán, quizás?";
            imagenResultado.src = "./assets/camaron-ross.webp";
            break;
        case puntajeTotal >= 15 && puntajeTotal < 20:
            resultado.innerText = "No eres un camarón, pero cuidado por donde nadas.";
            imagenResultado.src = "./assets/camaron-triste.webp";
            break;
        case puntajeTotal >= 20 && puntajeTotal < 30:
            resultado.innerText = "No eres un camarón, pero cuida tu postura.";
            imagenResultado.src = "./assets/shrimp-noise.webp";
            break;
        case puntajeTotal >= 30 && puntajeTotal <= 40:
            resultado.innerText = "¡Eres un camarón!";
            imagenResultado.src = "./assets/camaron-triste.webp";
            break;
        case puntajeTotal > 40:
            resultado.innerText = "¡Eres un camarón y te lleva la corriente!";
            imagenResultado.src = "./assets/shrimp-noise.webp";
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
let progreso = 0;
function actualizarMedidor() {
    const porcentaje = 100 / preguntas.length;
    progreso += porcentaje;
    medidor.style.width = progreso + "%";
}
function activarBotonSiguiente(index) {
    const botonSiguiente = document.querySelector(`#boton-navegacion${index}`);
    botonSiguiente.style.visibility = "visible";
}
function activarBotonFinal() {
    const botonFinal = document.querySelector("#boton-final");
    if (progreso === 100) {
        botonFinal.style.visibility = "visible";
    }
}
function resetQuiz() {
    pantallaFinal.style.scale = '0'
    setTimeout(() => {
        ocultarPregunta(preguntaActualIndex);
        preguntaActualIndex = 0;
        mostrarPregunta(preguntaActualIndex);
        contenedorQuiz.replaceChildren();
        empezarQuiz()
        puntaje = 0;
        progreso = 0;
        medidor.style.width = progreso + "%";
    }, 1000);
}
botonReiniciar.addEventListener("click", resetQuiz);
