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
  var allDivs = document.querySelectorAll('#resign, #deferred , #other');
  for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].style.display = 'none';
  }

  var selectedRadio = document.querySelector('input[name="main-topic"]:checked');
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

  var selectedRadioreason = document.querySelector('input[name="resignReason"]:checked');
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

document.addEventListener("DOMContentLoaded", function () {
  const dateField = document.getElementById("date");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function (event) {
    if (dateField.value.trim() === "") {
      dateField.style.border = "2px solid red";

      event.preventDefault();

      dateField.scrollIntoView({ behavior: "smooth" });

      alert("กรุณากรอกวันที่");
    } else {
      dateField.style.border = "none";
    }
  });


  dateField.addEventListener("input", function () {
    dateField.style.border = "none";
  });
});



// document.addEventListener('DOMContentLoaded', function () {
//   // ตรวจสอบว่ามีข้อมูล username ใน Local Storage หรือไม่

//   document.getElementById('form').addEventListener('submit', async (event) => {
//     // ป้องกันฟอร์มไม่ทำการ submit โดยปกติ
//     event.preventDefault();

//     // ดึงข้อมูลจากฟอร์ม
//     const form = document.getElementById('form');
//     const data = new FormData(form);

//     // เพิ่มข้อมูล username จาก Local Storage เข้าไปในชุดข้อมูล
//     data.append('username', localStorage.getItem('username'));

//     // แสดงข้อมูลที่ได้จากฟอร์มใน Console Log
//     console.log('Send form', Object.fromEntries(data.entries()));

//     try {
//       // ทำการ fetch ข้อมูลไปยังเซิร์ฟเวอร์
//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//       const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: JSON.stringify(Object.fromEntries(data.entries())),
//         redirect: 'follow'
//       };

//       const response = await fetch("http://localhost:8080/api/req/create", requestOptions);

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const result = await response.json();

//       // แสดงข้อมูลที่ได้จากเซิร์ฟเวอร์ใน Console Log
//       console.log('Result from Server:', result);

//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   });
// });






// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('form').addEventListener('submit', async (event) => {
//       event.preventDefault();
//       const form = document.getElementById('form');
//       const data = new FormData(form);
//       const datasend = {};

//       // เพิ่มข้อมูล input ทุกช่องลงใน datasend
//       data.forEach((value, key) => {
//           datasend[key] = value;
//       });

//       // เพิ่มข้อมูล ResignList
//       datasend.ResignList = [];
//       const resignSemester = data.get('resignSemester');
//       if (resignSemester) {
//           const resignData = {
//               resignSemester,
//               resignYears: data.get('resignYears'),
//               resignReason: data.get('resignReason'),
//               resignUniversity: data.get('resignUniversity'),
//               resignFaculty: data.get('resignFaculty'),
//               resignBranch: data.get('resignBranch'),
//               resignDebt: data.get('resignDebt')
//           };
//           datasend.ResignList.push(resignData);
//       }

//       // เพิ่มข้อมูล OtherList
//       datasend.OtherList = [];
//       const otherReason = data.get('otherReason');
//       if (otherReason) {
//           const otherData = { otherReason };
//           datasend.OtherList.push(otherData);
//       }

//       // เพิ่มข้อมูล username จาก Local Storage เข้าไปในชุดข้อมูล
//       datasend.username = localStorage.getItem('username');

//       // แสดงข้อมูลที่ได้จากฟอร์มใน Console Log
//       console.log('Send form', datasend);
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = document.getElementById('form');
      const data = new FormData(form);
      const datasend = {};

      // เพิ่มข้อมูล input ทุกช่องลงใน datasend
      data.forEach((value, key) => {
          datasend[key] = value;
      });

      // เพิ่มข้อมูล ResignList
      const resignSemester = data.get('resignSemester');
      if (resignSemester) {
          datasend.ResignList = [{
              resignSemester,
              resignYears: data.get('resignYears'),
              resignReason: data.get('resignReason'),
              resignUniversity: data.get('resignUniversity'),
              resignFaculty: data.get('resignFaculty'),
              resignBranch: data.get('resignBranch'),
              resignDebt: data.get('resignDebt')
          }];
      } else {
          datasend.ResignList = [];
      }

      // เพิ่มข้อมูล OtherList
      const otherReason = data.get('otherReason');
      if (otherReason) {
          datasend.OtherList = [{
              otherReason
          }];
      } else {
          datasend.OtherList = [];
      }

      // เพิ่มข้อมูล username จาก Local Storage เข้าไปในชุดข้อมูล
      datasend.username = localStorage.getItem('username');

      // แสดงข้อมูลที่ได้จากฟอร์มใน Console Log
      console.log('Send form', datasend);




    try {
      // ทำการ fetch ข้อมูลไปยังเซิร์ฟเวอร์
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(Object.fromEntries(data.entries())),
        redirect: 'follow'
      };

      const response = await fetch("http://localhost:8080/api/req/create", requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      // แสดงข้อมูลที่ได้จากเซิร์ฟเวอร์ใน Console Log
      console.log('Result from Server:', result);

    } catch (error) {
      console.error('Error:', error.message);
    }
  });
});





// try {
//   // ทำการ fetch ข้อมูลไปยังเซิร์ฟเวอร์
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: JSON.stringify(Object.fromEntries(data.entries())),
//     redirect: 'follow'
//   };

//   const response = await fetch("http://localhost:8080/api/req/create", requestOptions);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const result = await response.json();

//   // แสดงข้อมูลที่ได้จากเซิร์ฟเวอร์ใน Console Log
//   console.log('Result from Server:', result);

// } catch (error) {
//   console.error('Error:', error.message);
// }
//   });
// });
