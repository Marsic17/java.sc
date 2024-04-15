const inicio = confirm("bueno pues, veamos si sabes de futbol")

if (inicio) {
    const Usuario = prompt("Nombre del usuario")
    alert("bueno " + Usuario + " veamos de que eres capaz")
}

const quiz = {
    intentos:0,
    puntuacion: {
        actual: 0,
        maxima: 8,
        record: 0, 
    },
    
    preguntas: [
        {
            texto: "¿quien gano el balon de oro en 2007?",
            opciones: ["A | Lionel Messi.","B | Didier Drogba.","C | Kaka.","D | Cristiano Ronaldo."],
            respuesta:{
                correcta: "C",
                estado: false,
            }
        },
        {
            texto: "¿que jugador fue apodado como la araña negra?",
            opciones: ["A | Lev Yashin.","B | Manuel Neuer.","C | Keylor Navas.","D | Guillermo Ochoa."],
            respuesta:{
                correcta: "A",
                estado: false,
            }
        },
        {
            texto: "¿la holanda que fue apodada como la naranja mecanica a que año pertenece?",
            opciones: ["A | 2010.","B | 1974.","C | 1982.","D | 2000."],
            respuesta:{
                correcta: "B",
                estado: false,
            }
        },
        {
            texto: "¿en que año se dio el famoso MARACANAZO?",
            opciones: ["A | 1950.","B | 1946.","C | 1958.","D | 1960."],
            respuesta:{
                correcta: "A",
                estado: false,
            }
        }, 
        {
            texto: "¿cuantas premier league ha ganado sir alex ferguson como entrenador?",
            opciones: ["A | 19.","B | 16.","C | 20.","D | 13."],
            respuesta:{
                correcta: "D",
                estado: false,
            }
        },
        {
            texto: "¿que equipos se enfrentaron en el milagro de berna?",
            opciones: ["A | brasil y portugal.","B | holanda y francia.","C | hungria y alemania.","D | brasil y españa."],
            respuesta:{
                correcta: "C",
                estado: false,
            }
        },
        {
            texto: "¿que equipo es el mas ganador de la liga española?",
            opciones: ["A | Real Madrid.","B | Barcelona.","C | Atletico de Madrid.","D | Athletic de bilbao."],
            respuesta:{
                correcta: "A",
                estado: false,
            }
        },
        {
            texto: "¿cual es el equipo con mas copas libartadores?",
            opciones: ["A | Boca Juniors.","B | Peñarol.","C | Gremio.","D | Independiente."],
            respuesta:{
                correcta: "D",
                estado: false,
            }
        }
    ]
}


