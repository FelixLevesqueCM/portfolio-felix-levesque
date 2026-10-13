async function showProject() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  const projects = await loadProjects();
  const project = projects.find(project => project.id === projectId);
  console.log(project.video);
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

function createProjectHeroImg(project) {
  return `
    <h1 class="project-title">${project.title}</h1>
    <div>
      <img class="project-img" src="${project.thumbnail}">à
      <div>
        <p class="project-info">${project.type}</p>
        <p class="project-info">${project.prog}</p>
        <p class="project-info">${project.year}</p>
      </div>
    </div>
  `;
}

function createProjectHeroVideo(project) {
  return `
    <h1 class="project-title">${project.title}</h1>
    <div>
      <iframe width="560" height="315" src="${project.thumbnail}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div>
        <p class="project-info">${project.type}</p>
        <p class="project-info">${project.prog}</p>
        <p class="project-info">${project.year}</p>
      </div>
    </div>
  `;
}

function createProjectGallery(project) {
  return `
    <p>
    ${project.description}
    </p>
    <div>
      <img class="project-gallery-img" src="">
    </div>
  `;
}

showProject();