// Function to search
function search() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const dataTable = document.getElementById("dataTable");
    const rows = dataTable.getElementsByTagName("tr");

    // Loop through each row in the table
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let found = false;

        // Check each column in the current row
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.toLowerCase();
            if (cellText.includes(filter)) {
                found = true;
                break;
            }
        }

        // Show or hide the row based on the search result
        if (found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Set up event listener for the input field
document.getElementById("searchInput").addEventListener("input", search);

document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    fetch('data.json') // ใส่ URL ของ API ที่ใช้ดึงข้อมูล
        .then(response => response.json())
        .then(data => {
            const dataBody = document.getElementById('dataBody');

            // ลบข้อมูลเก่าทั้งหมด
            dataBody.innerHTML = '';

            // เพิ่มข้อมูลใหม่ลงไป
            data.forEach(item => {
                const row = document.createElement('tr');

                const dateCell = document.createElement('td');
                dateCell.textContent = item.date;
                row.appendChild(dateCell);

                const topicCell = document.createElement('td');
                topicCell.textContent = item.topic;
                row.appendChild(topicCell);

                const statusCell = document.createElement('td');
                statusCell.textContent = item.status;
                row.appendChild(statusCell);

                const fileCell = document.createElement('td');
                const fileLink = document.createElement('a');
                fileLink.href = item.fileUrl;
                fileLink.target = '_blank';
                fileLink.textContent = 'ไฟล์';
                fileCell.appendChild(fileLink);
                row.appendChild(fileCell);

                dataBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}

