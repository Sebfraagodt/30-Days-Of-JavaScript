const form = document.getElementById('leaderboardForm');
const leaderboardBody = document.getElementById('leaderboardBody');

const leaderboard = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const country = document.getElementById('country').value;
    const score = parseInt(document.getElementById('score').value);
    const timestamp = new Date().toLocaleString();

    leaderboard.push({ firstName, lastName, country, score, timestamp });

    updateLeaderboard();

    form.reset();
});

function updateLeaderboard() {
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboardBody.innerHTML = '';

    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.firstName}</td>
            <td>${entry.lastName}</td>
            <td>${entry.country}</td>
            <td>${entry.score}</td>
            <td>${entry.timestamp}</td>
            <td><button class="deleteButton" data-index="${index}">Delete</button><button class="addPoints" data-index="${index}">+5</button><button class="removePoints" data-index="${index}">-5</button></td>
        `;
        leaderboardBody.appendChild(row);
    });

    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            leaderboard.splice(index, 1);
            updateLeaderboard();
        });
    });

    const addPointButton = document.querySelectorAll('.addPoints');
    addPointButton.forEach((button) => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            leaderboard[index].score += 5;
            updateLeaderboard();
        });
    });
    const removePointButton = document.querySelectorAll('.removePoints');
    removePointButton.forEach((button) => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            leaderboard[index].score -= 5;
            if (leaderboard[index].score < 0) leaderboard[index].score = 0;
            updateLeaderboard();
        });
    });
}
