document.addEventListener("DOMContentLoaded", function () {
    const btnSave = document.getElementById("btnSave");
    const btnSearch = document.getElementById("btnSearch");
    const lista = document.getElementById("lista");
    const resultadoBusqueda = document.getElementById("resultadoBusqueda");

    // Evento para guardar un jugador
    btnSave.addEventListener("click", function () {
        const ingreso = document.getElementById("ingreso").value;
        const club = document.getElementById("club").value;
        const edad = document.getElementById("edad").value;
        const ciudad = document.getElementById("ciudad").value;

        if (ingreso && club && edad) {
            const jugador = {
                ingreso: ingreso,
                club: club,
                edad: edad,
                ciudad: ciudad,
            };

            // Guardamos en localStorage
            let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
            jugadores.push(jugador);
            localStorage.setItem("jugadores", JSON.stringify(jugadores));
            mostrarJugadores();
        } 
    });

    // Evento para buscar un jugador
    btnSearch.addEventListener("click", function () {
        const ingresoBusqueda = document.getElementById("ingreso").value.toLowerCase();

        if (ingresoBusqueda) {
            const jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];

            const jugadorEncontrado = jugadores.find(jugador =>
                jugador.ingreso.toLowerCase() === ingresoBusqueda
            );

            if (jugadorEncontrado) {
                resultadoBusqueda.innerHTML = `
                    <p><strong>Apellido y Nombre:</strong> ${jugadorEncontrado.ingreso}</p>
                    <p><strong>Club:</strong> ${jugadorEncontrado.club}</p>
                    <p><strong>Edad:</strong> ${jugadorEncontrado.edad}</p>
                    <p><strong>Ciudad:</strong> ${jugadorEncontrado.ciudad}</p>
                `;
            } else {
                resultadoBusqueda.innerHTML = "<p>No se encontró ningún jugador.</p>";
            }
        } 
    });

    function mostrarJugadores() {
        const jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];

        lista.innerHTML = "";

        jugadores.forEach(jugador => {
            const li = document.createElement("li");
            li.textContent = `${jugador.ingreso} - ${jugador.club} - ${jugador.edad} años`;
            lista.appendChild(li);
        });
    }

    mostrarJugadores();
});