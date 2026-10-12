async function showProject() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  const projects = await loadProjects();
  const project = projects.find(project => project.id === projectId);
  console.log(project);
  const hero = document.querySelector('.project-page-hero-container');
  hero.innerHTML += createProjectHero(project);
  const gallery = document.querySelector('.project-page-images-container');
  gallery.innerHTML += createProjectGallery(project);
}

function createProjectHero(project) {
  return `
    
  `;
}

function createProjectGallery(project) {
  return `
    
  `;
}

showProject();