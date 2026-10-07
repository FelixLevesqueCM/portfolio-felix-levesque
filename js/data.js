async function loadProjects() {
  const response = await fetch('./data/projects.json');
  const projects = await response.json();
  if (!response.ok) {
    throw new Error(`Impossible de charger les projets (${response.status})`);
  }
  return projects;
}

function createProjectCard(project) {
  return `
    <article class="projet-item">
      <img class="card-image" src="${project.image}">
      <div class="card-info">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-type">${project.type}</p>
        <p class="card-year">${project.year}</p>
      </div>
      <button class="card-button" onclick="window.location.href='${project.link}'">></button>
    </article>
  `;
}

async function init() {
  const projects = await loadProjects();
  console.table(projects);
  projects.forEach((project) => {
    console.log(project.title);
  });
  const grid = document.querySelector('.projets-list');
  projects.forEach(project => {
    grid.innerHTML += createProjectCard(project);
  });
}

init();