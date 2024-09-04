const ADMIN_PASSWORD = 'alex';

function login() {
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        loadVotes();
        renderSenators();
        updateVoteSummary();
    } else {
        alert('Incorrect password');
    }
}

function loadVotes() {
    const savedVotes = localStorage.getItem('senatorVotes');
    if (savedVotes) {
        const votes = JSON.parse(savedVotes);
        senators.forEach(senator => {
            senator.vote = votes[senator.id] || null;
        });
    }
}

function saveVotes() {
    const votes = {};
    senators.forEach(senator => {
        if (senator.vote) {
            votes[senator.id] = senator.vote;
        }
    });
    localStorage.setItem('senatorVotes', JSON.stringify(votes));
    alert('Votes saved successfully');
    updateVoteSummary();
}

function vote(senatorId, voteType) {
    const senator = senators.find(s => s.id === senatorId);
    if (senator) {
        // If the same vote type is clicked again, unselect it
        if (senator.vote === voteType) {
            senator.vote = null;
        } else {
            senator.vote = voteType;
        }
        updateVoteSummary();
        renderSenators();
    }
}

function renderSenators() {
    const senatorList = document.getElementById('senator-list');
    senatorList.innerHTML = '';

    senators.forEach(senator => {
        const senatorCard = document.createElement('div');
        senatorCard.className = `senator-card ${senator.vote ? 'vote-' + senator.vote : ''}`;
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

// Make sure these functions are available globally
window.login = login;
window.saveVotes = saveVotes;
window.vote = vote;