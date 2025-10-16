// const apiURL = '<t t-esc="api_url"/>'; car le template n'est pas interpreter par le QWeb

const apiURL = document.getElementById('calpicker').dataset.api;
const apiPersonnel = document.getElementById('calpicker').dataset.apiPersonnel;
const ul = document.getElementById('liste_presences');

async function loadPresences(date) {
    console.log(date);
    if (!apiURL || !apiPersonnel) { console.error('API URL or API Personnel not found'); return; }

    // récupérer la liste complette du personnel
    const [respPers, repsPres] = await Promise.all([
        fetch(apiPersonnel),
        fetch(`${apiURL}?date=${date}`)
    ]);
    if (!respPers.ok || !repsPres.ok) { console.error('API indisponible'); return; }

    const personnel = await respPers.json(); // tableau des personnels
    const presences = await repsPres.json(); // tableau des pointages

    // dico id -> nom
    const nom = {};
    personnel.forEach(p => {
        nom[p.id] = `${p.nom} ${p.prenom}`;
    });
    if(presences.length != 0) {
        console.log("personnels présent(e)");
    }

    // Affichage
    ul.innerHTML = '';
    if (presences.length === 0) {
        console.log("aucune présence");
        ul.innerHTML = '<li class="list-group-item">Aucune présence ce jour</li>';
        return;
    }
    presences.forEach(pr => {
        const nomComplet = nom[pr.personnel] || 'Inconnu';
        ul.insertAdjacentHTML('beforeend',
            `<li class="list-group-item d-flex justify-content-between">
                <span>${nomComplet}</span>
                <span>${pr.heureArrivee} → ${pr.heureDepart}</span>
            </li>`);
    });
}

document.getElementById('btn_load').addEventListener('click', () => {
    console.log("click");
    const d = document.getElementById('calpicker').value;
    if (d) loadPresences(d);
});

window.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('calpicker').value = today;
    loadPresences(today);
})