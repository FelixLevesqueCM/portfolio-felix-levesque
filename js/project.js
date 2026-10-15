async function showProject() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  const projects = await loadProjects();
  const project = projects.find(project => project.id === projectId);
  console.log(project.video);
  // if statement pour vérifier si le projet contient une vidéo ou non
  if (project.video == 1) {
    const hero = document.querySelector('.project-page-hero-container');
    hero.innerHTML += createProjectHeroVideo(project);
  } else if (project.video == 0) {
    const hero = document.querySelector('.project-page-hero-container');
    hero.innerHTML += createProjectHeroImg(project);
  }
  const gallery = document.querySelector('.project-page-images-container');
  gallery.innerHTML += createProjectGallery(project);
}

//fonction pour générer le haut de la page d'un projet sans vidéo

function createProjectHeroImg(project) {
  return `
    <h1 class="project-title">${project.title}</h1>
    <div class="project-hero-box">
      <img class="project-img" src="${project.thumbnail}" alt="Projet présenté">
      <div class="project-hero-info-container">
        <p class="project-info">Type: ${project.type}</p>
        <p class="project-info">Logiciels: ${project.prog}</p>
        <p class="project-info">Année: ${project.year}</p>
      </div>
    </div>
  `;
}

//fonction pour générer le haut de la page d'un projet avec vidéo

function createProjectHeroVideo(project) {
  return `
    <h1 class="project-title">${project.title}</h1>
    <div class="project-hero-box">
      <iframe class="project-img" src="${project.thumbnail}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div class="project-hero-info-container">
        <p class="project-info">${project.type}</p>
        <p class="project-info">${project.prog}</p>
        <p class="project-info">${project.year}</p>
      </div>
    </div>
  `;
}

//fonction pour afficher la gallerie d'images

function createProjectGallery(project) {
  return `
    <p class="project-description">
    ${project.description}
    </p>
    <div class="project-gallery">
      <img class="project-gallery-img" src="${project.gallery[0]}" alt="image du projet">
      <img class="project-gallery-img" src="${project.gallery[1]}" alt="image du projet">
      <img class="project-gallery-img" src="${project.gallery[2]}" alt="image du projet">
      <img class="project-gallery-img" src="${project.gallery[3]}" alt="image du projet">
      <img class="project-gallery-img" src="${project.gallery[4]}" alt="image du projet">
      <img class="project-gallery-img" src="${project.gallery[5]}" alt="image du projet">
    </div>
  `;
}

showProject();