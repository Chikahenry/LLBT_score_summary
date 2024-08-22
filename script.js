let scores = JSON.parse(localStorage.getItem('scores')) || [];

//document.getElementById('scoreForm').addEventListener('submit', function(event) 
function submitForm() {
    //event.preventDefault();
    
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;
    const score = parseInt(document.getElementById('score').value);
    if (isNaN(score) && name === '' && code === '') {
        alert('Please fill in all fields');
        return;
    }
    
    let existingPerson = scores.find(person => person.code === code);
    
    if (existingPerson) {
        existingPerson.score += score;
    } else {
        scores.push({ name, code, score });
    }

    localStorage.setItem('scores', JSON.stringify(scores));
    alert('Successful');
    //this.reset();
};

if (document.getElementById('scoreTable')) {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
    const tbody = document.querySelector('#scoreTable tbody');
    
    sortedScores.forEach((person, index) => {
        const row = document.createElement('tr');
        row.className = index < 4 ? 'blue-row' : 'red-row';
        
        row.innerHTML = `
            <td>${person.name.toUpperCase()}</td>
            <td>${person.code.toUpperCase()}</td>
            <td>${person.score}</td>
        `;
        
        tbody.appendChild(row);
    });
}
