document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.magnifying-glass-solid').addEventListener('click', function() {
        gosearch();
    });

    document.getElementById('search-bar-field').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            gosearch();
        }
    });

    function gosearch() {
        var searchTerm = document.getElementById('search-bar-field').value;
        console.log('Searching for: ' + searchTerm);
        // Implement your search logic here (send a request to the server, search in the database, or any other action)
    }
});