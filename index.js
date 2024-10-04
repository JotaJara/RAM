$(document).ready(() => {
  const apiURL = "https://rickandmortyapi.com/api/character"

  // Función para obtener los personajes y crear las cards
  const cargarPersonajes = () => {
    $.ajax({
      url: apiURL,
      method: "GET",
      success: (response) => {
        const personajes = response.results.slice(0, 20) // Obtener los primeros 20
        personajes.forEach((personaje) => {
          const { image, name, status } = personaje

          // Crear una card para cada personaje
          const cardHTML = `
                        <div class="card">
                            <img src="${image}" alt="${name}">
                            <h2>${name}</h2>
                            <p>${status}</p>
                        </div>
                    `

          // Añadir la card al contenedor
          $("#characters-container").append(cardHTML)
        })
      },
      error: () => {
        $("#characters-container").html(
          "<p>Error al cargar los personajes.</p>"
        )
      },
    })
  }

  // Llamar a la función para cargar los personajes
  cargarPersonajes()
})
