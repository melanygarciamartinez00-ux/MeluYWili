```javascript
/* =========================================
   MELU & WILI
========================================= */


/* =========================================
   IR A LA GALERÍA
========================================= */

function irGaleria() {

    document
        .getElementById("galeria")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   LAS 4 FOTOS
========================================= */

const fotos = [

    "./fotos/foto1.webp",

    "./fotos/foto2.webp",

    "./fotos/foto3.webp",

    "./fotos/foto4.webp"

];


let fotoActual = 0;


/* =========================================
   ABRIR FOTO
========================================= */

function abrirFoto(numero) {

    fotoActual = numero;

    mostrarFoto();

    document
        .getElementById("visor")
        .classList.add("activo");

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   MOSTRAR FOTO GRANDE
========================================= */

function mostrarFoto() {

    const imagen =
        document.getElementById(
            "fotoGrande"
        );


    imagen.src =
        fotos[fotoActual];


    document.getElementById(
        "contador"
    ).textContent =

        `${fotoActual + 1} / ${fotos.length}`;

}


/* =========================================
   CERRAR FOTO
========================================= */

function cerrarFoto() {

    document
        .getElementById("visor")
        .classList.remove("activo");

    document.body.style.overflow =
        "";

}


/* =========================================
   SIGUIENTE
========================================= */

function fotoSiguiente() {

    fotoActual++;

    if (
        fotoActual >= fotos.length
    ) {

        fotoActual = 0;

    }


    mostrarFoto();

}


/* =========================================
   ANTERIOR
========================================= */

function fotoAnterior() {

    fotoActual--;

    if (
        fotoActual < 0
    ) {

        fotoActual =
            fotos.length - 1;

    }


    mostrarFoto();

}


/* =========================================
   CERRAR TOCANDO AFUERA
========================================= */

document
    .getElementById("visor")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                cerrarFoto();

            }

        }
    );


/* =========================================
   TECLADO
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const visor =
            document.getElementById(
                "visor"
            );


        if (
            !visor.classList.contains(
                "activo"
            )
        ) {

            return;

        }


        if (
            event.key === "Escape"
        ) {

            cerrarFoto();

        }


        if (
            event.key === "ArrowRight"
        ) {

            fotoSiguiente();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            fotoAnterior();

        }

    }
);


/* =========================================
   MÚSICA
========================================= */

const musica =
    document.getElementById(
        "musica"
    );


const botonMusica =
    document.getElementById(
        "botonMusica"
    );


let reproduciendo = false;


botonMusica.addEventListener(
    "click",
    function() {


        if (
            reproduciendo
        ) {

            musica.pause();

            botonMusica.textContent =
                "▶";

            reproduciendo =
                false;

        }


        else {

            musica
                .play()
                .then(
                    function() {

                        botonMusica
                            .textContent =
                            "❚❚";

                        reproduciendo =
                            true;

                    }
                )
                .catch(
                    function() {

                        alert(
                            "No se pudo reproducir la música. Comprueba que cancion.mp3 esté dentro de la carpeta musica."
                        );

                    }
                );

        }

    }
);


/* =========================================
   CUANDO TERMINA LA CANCIÓN
========================================= */

musica.addEventListener(
    "ended",
    function() {

        botonMusica.textContent =
            "▶";

        reproduciendo =
            false;

    }
);


/* =========================================
   COMPROBACIÓN
========================================= */

console.log(
    "💗 Melu y Wili cargado correctamente 💗"
);
```
