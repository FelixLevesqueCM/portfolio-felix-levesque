async function loadProjects() {
  const response = await fetch('data/projects.json');
  const projects = await response.json();
  return projects;
}

function createProjectCard(project) {
  return `
    <article class="project-card">
      <img class="project-card__image" src="${project.image}" alt="${project.title}">
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__meta">${project.category} · ${project.year}</p>
        <p class="project-card__description">${project.description}</p>
      </div>
    </article>
  `;
}

async function init() {
  const projects = await loadProjects();
  console.table(projects);
  projects.forEach((project) => {
    console.log(project.title);
  });
  const grid = document.querySelector('.projects__grid');
  projects.forEach(project => {
    grid.innerHTML += createProjectCard(project);
  });
}

init();