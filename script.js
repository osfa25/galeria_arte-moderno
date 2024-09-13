
const artworks = [
    
    { title: "La persistencia de la memoria", artist: "Salvador Dalí", year: 1931, image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg" },
    { title: "La noche estrellada", artist: "Vincent van Gogh", year: 1889, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
    { title: "El grito", artist: "Edvard Munch", year: 1893, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg" }
];

const exhibitions = [
    { title: "Expresionismo Abstracto", date: "10 Mayo - 15 Junio, 2024", image: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" },
    { title: "Nuevas Perspectivas", date: "1 Julio - 30 Agosto, 2024", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" }
];

const artists = [
   
    { name: "Pablo Picasso", specialty: "Cubismo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg" },
    { name: "Georgia O'Keeffe", specialty: "Modernismo americano", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/O%27Keeffe-%28hands%29.jpg/800px-O%27Keeffe-%28hands%29.jpg" },
    { name: "Andy Warhol", specialty: "Pop Art", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Andy_Warhol_1975.jpg/800px-Andy_Warhol_1975.jpg" }
];

const events = [
    { title: "Taller de Pintura Abstracta", date: "5 Junio, 2024", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { title: "Charla: El Futuro del Arte Digital", date: "20 Julio, 2024", image: "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" }
];




function loadGallery() {
    const gallery = document.getElementById('featured-gallery');
    artworks.forEach(artwork => {
        const item = createItemElement(artwork, 'gallery-item');
        gallery.appendChild(item);
    });
}


function loadExhibitions() {
    const exhibitionList = document.querySelector('.exhibition-list');
    exhibitions.forEach(exhibition => {
        const item = createItemElement(exhibition, 'exhibition-item');
        exhibitionList.appendChild(item);
    });
}


function loadArtists() {
    const artistGrid = document.querySelector('.artist-grid');
    artists.forEach(artist => {
        const item = createItemElement(artist, 'artist-item');
        artistGrid.appendChild(item);
    });
}


function loadEvents() {
    const eventList = document.querySelector('.event-list');
    events.forEach(event => {
        const item = createItemElement(event, 'event-item');
        eventList.appendChild(item);
    });
}


function createItemElement(data, className) {
    const item = document.createElement('div');
    item.className = className;
    item.innerHTML = `
        <img src="${data.image}" alt="${data.title || data.name}">
        <div class="info">
            <h3>${data.title || data.name}</h3>
            <p>${data.artist || data.date || data.specialty}${data.year ? `, ${data.year}` : ''}</p>
        </div>
    `;
    return item;
}

// Función para manejar la navegación
function handleNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(targetId).classList.add('active');
            
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    loadExhibitions();
    loadArtists();
    loadEvents();
    handleNavigation();
});