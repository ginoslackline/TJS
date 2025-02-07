const name = []; // Array vacío sin longitud definida

// Función para agregar un nuevo grupo de arrays con objetos de tipo persona
function agregarGrupo(nombreDelGrupo, personas) {
  name.push({
    name: nombreDelGrupo,
    value: personas,
  });
}

// Crear personas
function crearPersona(name, age, country, category) {
  return { name, age, country, category};
}

const persona1 = crearPersona("Gino Anoso", 31, "Argentina", "Professional");
const persona2 = crearPersona("Oscar Cortegoso", 27, "Spain", "Professional");
const persona3 = crearPersona("Marius Kitowski", 26, "Germany", "Advanced");
const persona4 = crearPersona("Pedro Rafael", 26, "Brazil", "Intermediate");
const persona5 = crearPersona("Ivan Balsa", 27, "Chile", "Professional");
const persona6 = crearPersona("Abrahan Hernandez", 30, "Chile", "Advanced");
const persona7 = crearPersona("Bruno Pedrosa", 30, "Portugal", "Professional");
const persona8 = crearPersona("Cristian Reyes", 32, "Chile", "Intermediate");
const persona9 = crearPersona("Hendle Santos", 28, "Brazul", "Advanced");
const persona10 = crearPersona("Jonatan Boza", 29, "Venezuela", "Advanced");
const persona11 = crearPersona("Marcel Foca", 31, "Spain", "Intermediate");
const persona12 = crearPersona("Eishin Hayashi", 17, "Japan", "Professional");
const persona13 = crearPersona("Beni Schmid", 31, "Germay", "Advanced");
const persona14 = crearPersona("Daryllon Araujo", 27, "Brazil", "Intermediate");
const persona15 = crearPersona("Rikuto Nakamura", 16, "Japan", "Advanced");
const persona16 = crearPersona("Takushi Nakamura", 12, "Japan", "Professional");

// Agregar grupos con las personas
agregarGrupo("Qualification", [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10, persona11, persona12, persona13, persona14, persona15, persona16]);

console.log(JSON.stringify(name, null, 2));

function crearTarjetaHTML(persona) {
  return `
    <div class="swiper-slide">
      <div class="atlethes-item">
        <img src="assets/img/atlethes/${persona.name.toLowerCase().replace(/ /g, "-")}.jpg" class="atlethes-img" alt="${persona.name}">
        <h3>${persona.name}</h3>
        <h4>${persona.country}</h4>
        <p>${persona.category}</p>
      </div>
    </div>
  `;
}

// Obtener el contenedor de los atletas
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Recorrer todas las personas y agregar sus tarjetas al contenedor
name[0].value.forEach(persona => {
  const tarjetaHTML = crearTarjetaHTML(persona);
  swiperWrapper.innerHTML += tarjetaHTML; // Agregar el HTML generado dinámicamente al contenedor
});

// Agregar grupos con las personas
agregarGrupo("Qualification", [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10, persona11, persona12, persona13, persona14, persona15, persona16]);

// Crear las tarjetas HTML dinámicamente
function llenarDatosAtletas() {
  name[0].value.forEach((persona, index) => {
    const atletaIndex = index + 1; // Para tener id únicos como athlete1, athlete2, etc.
    
    // Asignar los valores correspondientes a cada atleta
    document.getElementById(`athlete${atletaIndex}-img`).src = `assets/img/atlethes/${persona.name.toLowerCase().replace(/ /g, "-")}.jpg`;
    document.getElementById(`athlete${atletaIndex}-name`).textContent = persona.name;
    document.getElementById(`athlete${atletaIndex}-country`).textContent = persona.country;
    document.getElementById(`athlete${atletaIndex}-category`).textContent = persona.category;
  });
}

// Llamar la función para llenar los datos al cargar la página
window.onload = llenarDatosAtletas;