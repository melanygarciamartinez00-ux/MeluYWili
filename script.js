```javascript
/* =========================
   MELU & WILI
   JAVASCRIPT
========================= */


/* =========================
   BOTÓN DE ENTRAR
========================= */

function entrar() {

    const galeria =
        document.getElementById("galeria");

    galeria.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   FOTOS
   EXACTAMENTE 4
========================= */

const fotos = [
    "fotos/foto1.webp",
    "fotos/foto2.webp",
    "fotos/foto3.webp",
    "fotos/foto4.webp"
];


let fotoActual = 0;


/* =========================
   ABRIR FOTO
========================= */

function abrirFoto(elemento) {

    const imagen =
        elemento.querySelector("img");

    const ruta =
        imagen.getAttribute("src");

    fotoActual =
        fotos.indexOf(ruta);

    if (fotoActual === -1) {
        fotoActual = 0;
    }

    mostrarFoto();

    const visor =
        document.getElementById("visor");

    visor.classList.add("activo");

    document.body.style.overflow =
        "hidden";
}


/* =========================
   MOSTRAR FOTO GRANDE
========================= */

function mostrarFoto() {

    const fotoGrande =
        document.getElementById("fotoGrande");

    fotoGrande.src =
        fotos[fotoActual];

    document.getElementById("contador")
        .textContent =
        `${fotoActual + 1} / ${fotos.length}`;
}


/* =========================
   CERRAR FOTO
========================= */

function cerrarFoto() {

    const visor =
        document.getElementById("visor");

    visor.classList.remove("activo");

    document.body.style.overflow =
        "";
}


/* =========================
   SIGUIENTE FOTO
========================= */

function siguiente() {

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    mostrarFoto();
}


/* =========================
   FOTO ANTERIOR
========================= */

function anterior() {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual =
            fotos.length - 1;
    }

    mostrarFoto();
}


/* =========================
   CERRAR TOCANDO AFUERA
========================= */

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
   TECLADO
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        const visor =
            document.getElementById("visor");

        if (
            !visor.classList.contains(
                "activo"
            )
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

                    play.textContent =
                        "❚❚";

                    reproduciendo = true;

                })
                .catch(function() {

                    alert(
                        "No se pudo reproducir la música. Revisa que cancion.mp3 esté dentro de la carpeta musica."
                    );

                });

        }

    }
);


/* =========================
   CUANDO TERMINA LA CANCIÓN
========================= */

audio.addEventListener(
    "ended",
    function() {

        play.textContent = "▶";

        reproduciendo = false;

    }
);


/* =========================
   MENSAJE DE COMPROBACIÓN
========================= */

console.log(
    "💗 Melu y Wili cargado correctamente 💗"
);
```
