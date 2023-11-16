// เรียกชื่อ
document.addEventListener('DOMContentLoaded', function () {
    // Check if the user information is stored in Local Storage
    if (localStorage.getItem('displayname_th') && localStorage.getItem('username')) {
        // Get the elements by their IDs
        const displayNameElement = document.getElementById('displayname');
        const usernameElement = document.getElementById('username');

        // Retrieve data from Local Storage
        const displayName = localStorage.getItem('displayname_th');
        const username = localStorage.getItem('username');

        // Display data on the page
        displayNameElement.textContent = displayName;
        usernameElement.textContent = username;
    } else {
        // Handle the case when user information is not found in Local Storage
        console.error('User information not found in Local Storage');
    }
});