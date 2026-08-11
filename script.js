```javascript
/* =========================
   ENTRAR
========================= */

function entrar() {

    document
        .getElementById("galeria")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   FOTOS
========================= */

const tarjetas =
    document.querySelectorAll(".foto");

const fotos = [];

tarjetas.forEach(function(tarjeta) {

    const imagen =
        tarjeta.querySelector("img");

    fotos.push(imagen.src);

});


let fotoActual = 0;


/* ABRIR FOTO */

function abrirFoto(elemento) {

    fotoActual =
        Array.from(tarjetas)
        .indexOf(elemento);

    mostrarFoto();

    document
        .getElementById("visor")
        .classList.add("activo");

    document.body.style.overflow =
        "hidden";
}


/* MOSTRAR FOTO */

function mostrarFoto() {

    document
        .getElementById("fotoGrande")
        .src =
        fotos[fotoActual];

    document
        .getElementById("contador")
        .textContent =
        (fotoActual + 1)
        + " / "
        + fotos.length;
}


/* CERRAR */

function cerrarFoto() {

    document
        .getElementById("visor")
        .classList.remove("activo");

    document.body.style.overflow =
        "";
}


/* SIGUIENTE */

function siguiente() {

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    mostrarFoto();
}


/* ANTERIOR */

function anterior() {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotos.length - 1;
    }

    mostrarFoto();
}


/* CERRAR AL TOCAR AFUERA */

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


/* =========================
   MÚSICA
========================= */

const audio =
    document.getElementById("audio");

const play =
    document.getElementById("play");

let reproduciendo = false;


play.addEventListener(
    "click",
    function() {

        if (reproduciendo) {

            audio.pause();

            play.textContent = "▶";

            reproduciendo = false;

        } else {

            audio.play()
                .then(function() {

                    play.textContent = "❚❚";

                    reproduciendo = true;

                })
                .catch(function() {

                    alert(
                        "Revisa que cancion.mp3 esté dentro de la carpeta musica."
                    );

                });

        }

    }
);


/* CUANDO TERMINA LA CANCIÓN */

audio.addEventListener(
    "ended",
    function() {

        play.textContent = "▶";

        reproduciendo = false;

    }
);


/* TECLADO */

document.addEventListener(
    "keydown",
    function(event) {

        const visor =
            document.getElementById("visor");

        if (
            !visor.classList.contains("activo")
        ) {
            return;
        }

        if (event.key === "Escape") {
            cerrarFoto();
        }

        if (event.key === "ArrowRight") {
            siguiente();
        }

        if (event.key === "ArrowLeft") {
            anterior();
        }

    }
);
```
