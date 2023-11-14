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



//resign 244
function showDiv(divId) {
    var allDivs = document.querySelectorAll('#resign, #deferred, #other');
    for (var i = 0; i < allDivs.length; i++) {
      allDivs[i].style.display = 'none';
    }
  
    var selectedRadio = document.querySelector('input[name="radio-1"]:checked');
    if (selectedRadio) {

      var selectedDiv = document.getElementById(divId);
      if (selectedDiv) {
        selectedDiv.style.display = 'block';
      }
    }
  }


//resign-reason-radio 254 , 256
function showDivreason(divId) {
    var allDivs = document.querySelectorAll('#resign-reason-radio-1, #resign-reason-radio-2');
    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = 'none';
    }

    var selectedRadioreason = document.querySelector('input[name="radio-1"]:checked');
    if (selectedRadioreason) {

    var selectedDivreason = document.getElementById(divId);
    if (selectedDivreason) {
        selectedDivreason.style.display = 'block';
        }
    }
  }

// แนบเอกสาร

function validateFile() {
  var input = document.getElementById('attachment-input');
  var files = input.files;

  // ตรวจสอบจำนวนไฟล์
  if (files.length > 5) {
      alert('ไม่สามารถอัปโหลดไฟล์เกิน 5 ไฟล์ได้');
      return false;
  }

  // ตรวจสอบประเภทและขนาดของไฟล์
  for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var fileType = file.type.toLowerCase();
      
      if (file.size > 100 * 1024) {
          alert('ไฟล์เกิน 100KB');
          return false;
      }

      if (fileType !== 'application/pdf' && fileType !== 'image/png' && fileType !== 'image/jpeg') {
          alert('รองรับเฉพาะไฟล์ PDF, PNG, และ JPG เท่านั้น');
          return false;
      }
  }

  return true;
}

function deleteFiles() {
  var input = document.getElementById('attachment-input');
  input.value = ''; // ลบไฟล์ทั้งหมดที่เลือก
}


// วันที่ Date

document.addEventListener("DOMContentLoaded", function() {
  const dateField = document.getElementById("date");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function(event) {
      if (dateField.value.trim() === "") {
          dateField.style.border = "2px solid red";

          event.preventDefault();

          dateField.scrollIntoView({ behavior: "smooth" });

          alert("กรุณากรอกวันที่");
      } else {
          dateField.style.border = "none";
      }
  });


  dateField.addEventListener("input", function() {
      dateField.style.border = "none";
  });
});







document.addEventListener('DOMContentLoaded', function () {
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = document.getElementById('form');
  const data = new FormData(form);

  const datasend = {};
  data.forEach((value, key) => {
      datasend[key] = value;
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(datasend),
      redirect: 'follow'
  };

  fetch("http://localhost:8080/api/req/create", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
});
});
