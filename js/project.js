const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');

async function showProject() {
  // 1. Sélectionner le conteneur du détail
  // 2. Lire l'id dans l'adresse (ci-dessus)
  // 3. Attendre les projets : await loadProjects()
  // 4. Retrouver LE projet qui a cet id, avec find()
  // 5. S'il n'existe pas : message "introuvable" + lien de retour, puis return
  // 6. Sinon : remplir le conteneur avec un gabarit littéral
}

showProject();