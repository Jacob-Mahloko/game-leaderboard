const leaderboardContent = document.querySelector('.leaderboard-content');

const players = [
    { rank: 1, name: 'PlayerOne', score: 2000, avatar: 'path/to/avatar1.png' },
    { rank: 2, name: 'PlayerTwo', score: 1800, avatar: 'path/to/avatar2.png' },
    { rank: 3, name: 'PlayerThree', score: 1700, avatar: 'path/to/avatar3.png' },
    // Add more players here
];

players.forEach(player => {
    const entry = document.createElement('div');
    entry.classList.add('leaderboard-entry');

    entry.innerHTML = `
        <div class="player-info">
            <img src="${player.avatar}" alt="${player.name}">
            <span>${player.rank}. ${player.name}</span>
        </div>
        <span>${player.score}</span>
    `;

    leaderboardContent.appendChild(entry);
});
