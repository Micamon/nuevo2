  
fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data;
    console.log(personajes);

    const grid = document.querySelector('.grid');

    personajes.forEach((personaje) => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h4>${personaje.name}</h4>
        <img src="${personaje.image}" alt="imagen de ${personaje.name}">
        <p>Genero: ${personaje.gender}</p>
        <p>Especie: ${personaje.species}</p>
        <p>Actor/Actriz: ${personaje.actor}</p>
      `;

      grid.appendChild(card);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
