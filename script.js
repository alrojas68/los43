const senators = [
    { id: 1, name: "Juan Antonio Martín del Campo", state: "Aguascalientes", party: "PAN", vote: null },
    { id: 2, name: "María de Jesús Díaz Marmolejo", state: "Aguascalientes", party: "PAN", vote: null },
    { id: 3, name: "Gustavo Sánchez Vásquez", state: "Baja California", party: "PAN", vote: null },
    { id: 4, name: "Susana Zatarain García", state: "Baja California Sur", party: "PAN", vote: null },
    { id: 5, name: "Daniel Barreda Pavón", state: "Campeche", party: "Movimiento Ciudadano", vote: null },
    { id: 6, name: "Mario Vázquez Robles", state: "Chihuahua", party: "PAN", vote: null },
    { id: 7, name: "Cynthia López Castro", state: "Ciudad de México", party: "PRI", vote: null },
    { id: 8, name: "Miguel Riquelme Solís", state: "Coahuila", party: "PRI", vote: null },
    { id: 9, name: "Mely Romero Celis", state: "Colima", party: "PRI", vote: null },
    { id: 10, name: "Gina Campuzano González", state: "Durango", party: "PAN", vote: null },
    { id: 11, name: "Miguel Márquez Márquez", state: "Guanajuato", party: "PAN", vote: null },
    { id: 12, name: "Manuel Añorve Baños", state: "Guerrero", party: "PRI", vote: null },
    { id: 13, name: "Carolina Viggiano Austria", state: "Hidalgo", party: "PRI", vote: null },
    { id: 14, name: "Francisco Ramírez Acuña", state: "Jalisco", party: "PAN", vote: null },
    { id: 15, name: "Enrique Vargas del Villar", state: "México", party: "PAN", vote: null },
    { id: 16, name: "Ángel García Yáñez", state: "Morelos", party: "PRI", vote: null },
    { id: 17, name: "Ivideliza Reyes Hernández", state: "Nayarit", party: "PAN", vote: null },
    { id: 18, name: "Luis Donaldo Colosio Riojas", state: "Nuevo León", party: "Movimiento Ciudadano", vote: null },
    { id: 19, name: "Néstor Camarillo Ortega", state: "Puebla", party: "PRI", vote: null },
    { id: 20, name: "Guadalupe Murguía Gutiérrez", state: "Querétaro", party: "PAN", vote: null },
    { id: 21, name: "Agustín Dorantes Lámbarri", state: "Querétaro", party: "PAN", vote: null },
    { id: 22, name: "Mayuli Martínez Simón", state: "Quintana Roo", party: "PAN", vote: null },
    { id: 23, name: "Verónica Rodríguez Hernández", state: "San Luis Potosí", party: "PAN", vote: null },
    { id: 24, name: "Paloma Sánchez Ramos", state: "Sinaloa", party: "PRI", vote: null },
    { id: 25, name: "Manlio Fabio Beltrones", state: "Sonora", party: "PRI", vote: null },
    { id: 26, name: "Imelda Sanmiguel Sánchez", state: "Tamaulipas", party: "PAN", vote: null },
    { id: 27, name: "Anabell Ávalos Zempoalteca", state: "Tlaxcala", party: "PRI", vote: null },
    { id: 28, name: "Miguel Ángel Yunes Márquez", state: "Veracruz", party: "PAN", vote: null },
    { id: 29, name: "Rolando Zapata Bello", state: "Yucatán", party: "PRI", vote: null },
    { id: 30, name: "Claudia Anaya Mota", state: "Zacatecas", party: "PRI", vote: null },
    { id: 31, name: "Marko Cortés Mendoza", state: "Lista Nacional", party: "PAN", vote: null },
    { id: 32, name: "Michel González Márquez", state: "Lista Nacional", party: "PAN", vote: null },
    { id: 33, name: "Ricardo Anaya Cortés", state: "Lista Nacional", party: "PAN", vote: null },
    { id: 34, name: "Lilly Téllez", state: "Lista Nacional", party: "PAN", vote: null },
    { id: 35, name: "Mauricio Vila Dosal", state: "Lista Nacional", party: "PAN", vote: null },
    { id: 36, name: "Laura Esquivel Torres", state: "Lista Nacional", party: "PAN", vote: null },
    { id: 37, name: "Alejandro Moreno Cárdenas", state: "Lista Nacional", party: "PRI", vote: null },
    { id: 38, name: "Karla Toledo Zamora", state: "Lista Nacional", party: "PRI", vote: null },
    { id: 39, name: "Pablo Angulo Briceño", state: "Lista Nacional", party: "PRI", vote: null },
    { id: 40, name: "Cristina Ruiz Sandoval", state: "Lista Nacional", party: "PRI", vote: null },
    { id: 41, name: "Clemente Castañeda Hoeflich", state: "Lista Nacional", party: "Movimiento Ciudadano", vote: null },
    { id: 42, name: "Alejandra Barrales", state: "Lista Nacional", party: "Movimiento Ciudadano", vote: null },
    { id: 43, name: "Amalia García Medina", state: "Lista Nacional", party: "Movimiento Ciudadano", vote: null }
];

function updateVoteSummary() {
    const yesCount = senators.filter(s => s.vote === 'a_favor').length;
    const noCount = senators.filter(s => s.vote === 'en_contra').length;
    const abstainCount = senators.filter(s => s.vote === 'abstencion').length;

    document.getElementById('yes-count').textContent = `A favor: ${yesCount}`;
    document.getElementById('no-count').textContent = `En contra: ${noCount}`;
    document.getElementById('abstain-count').textContent = `Abstención: ${abstainCount}`;
}

function vote(senatorId, voteType) {
    const senator = senators.find(s => s.id === senatorId);
    if (senator) {
        senator.vote = voteType;
        updateVoteSummary();
        renderSenators();
    }
}

function renderSenators() {
    const senatorList = document.getElementById('senator-list');
    senatorList.innerHTML = '';

    senators.forEach(senator => {
        const senatorCard = document.createElement('div');
        senatorCard.className = 'senator-card';
        senatorCard.innerHTML = `
            <div class="senator-name">${senator.name}</div>
            <div class="senator-info">
                <span class="senator-state">${senator.state}</span>
                <span class="senator-party">${senator.party}</span>
            </div>
            <div class="senator-vote">Voto: ${getVoteText(senator.vote)}</div>
            <button class="vote-button vote-yes ${senator.vote === 'a_favor' ? 'selected' : ''}" onclick="vote(${senator.id}, 'a_favor')">A favor</button>
            <button class="vote-button vote-no ${senator.vote === 'en_contra' ? 'selected' : ''}" onclick="vote(${senator.id}, 'en_contra')">En contra</button>
            <button class="vote-button vote-abstain ${senator.vote === 'abstencion' ? 'selected' : ''}" onclick="vote(${senator.id}, 'abstencion')">Abstención</button>
        `;
        senatorList.appendChild(senatorCard);
    });
}

function getVoteText(vote) {
    switch (vote) {
        case 'a_favor':
            return 'A favor';
        case 'en_contra':
            return 'En contra';
        case 'abstencion':
            return 'Abstención';
        default:
            return 'No ha votado';
    }
}

// Initial render
updateVoteSummary();
renderSenators();