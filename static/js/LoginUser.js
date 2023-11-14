document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', login);
});

async function login() {
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    const url = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU49b541cbc03a4e73161ff86929d77450e207862f4682b6acefadd7df0f4cf43529e6a77d67f5bf094ea39a5a87178b9b',
        },
    };

    const postData = JSON.stringify({
        UserName: studentId,
        PassWord: password,
    });

    try {
        const response = await fetch(url, {
            ...options,
            body: postData,
        });

        const data = await response.json();

        if (data.status) {

            localStorage.setItem('displayname_th', data.displayname_th);
            localStorage.setItem('username', data.username);

            window.location.href = "HomePage.html";
        } else {
            alert('เข้าสู่ระบบไม่สำเร็จ')
        }

    } catch (error) {
        console.error('Error connecting to API:', error);
    }
}





document.getElementById('menu-switch-select').addEventListener('change', function () {
    var selectedValue = this.value; // Get the selected value from the dropdown
    if (selectedValue) {
        // If a value is selected, navigate to the corresponding link
        window.location.href = selectedValue;
    }
});

