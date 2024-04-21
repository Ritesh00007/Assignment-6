document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter text here...';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    submitButton.addEventListener('click', function() {
        const text = textarea.value.trim();
        const words = text.split(/\s+/);
        const frequency = {};

        words.forEach(word => {
            if (word in frequency) {
                frequency[word]++;
            } else {
                frequency[word] = 1;
            }
        });

        console.log(frequency);

        const sortedWords = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a] || a.localeCompare(b));
        const topWords = sortedWords.slice(0, 5);

        let table = document.createElement('table');
        let header = table.insertRow();
        header.insertCell(0).textContent = 'Word';
        header.insertCell(1).textContent = 'Frequency';

        topWords.forEach(word => {
            let row = table.insertRow();
            row.insertCell(0).textContent = word;
            row.insertCell(1).textContent = frequency[word];
        });

        let existingTable = document.querySelector('table');
        if (existingTable) {
            root.replaceChild(table, existingTable);
        } else {
            root.appendChild(table);
        }
    });

    root.appendChild(textarea);
    root.appendChild(submitButton);
});
