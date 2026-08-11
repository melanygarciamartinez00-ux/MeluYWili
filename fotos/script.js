/* =====================================
   IR A LA GALERÍA
===================================== */

function irAGaleria() {

    const galeria =
        document.getElementById("galeria");

    if (galeria) {

        galeria.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =====================================
   CONTROL DE MÚSICA
===================================== */

function controlarMusica() {

    const musica =
        document.getElementById("musica");

    if (!musica) return;


    if (musica.paused) {

        musica.play()
            .catch(() => {

                console.log(
                    "El navegador necesita que se presione Play."
                );

            });

    } else {

        musica.pause();

    }
}


/* =====================================
   CORAZONES FLOTANTES
===================================== */

function crearCorazon() {

    const contenedor =
        document.getElementById("corazones");

    if (!contenedor) return;


    const corazon =
        document.createElement("div");


    corazon.classList.add(
        "corazon-flotante"
    );


    const tipos = [

        "💗",
        "💕",
        "💖",
        "💓",
        "💞",
        "✨"

    ];


    corazon.innerHTML =
        tipos[
            Math.floor(
                Math.random() *
                tipos.length
            )
        ];


    corazon.style.left =
        Math.random() * 100 + "%";


    corazon.style.fontSize =
        15 +
        Math.random() * 25 +
        "px";


    corazon.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";


    contenedor.appendChild(
        corazon
    );


    setTimeout(() => {

        corazon.remove();

    }, 10000);
}


/* =====================================
   CREAR CORAZONES
===================================== */

setInterval(
    crearCorazon,
    700
);


/* Corazones iniciales */

for (
    let i = 0;
    i < 8;
    i++
) {

    setTimeout(
        crearCorazon,
        i * 300
    );

}


/* =====================================
   CUANDO CARGA LA PÁGINA
===================================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "💗 Melu y Wili cargado correctamente 💗"
        );

    }
);