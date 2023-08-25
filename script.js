var student_names = [];
var student_ids = [];
var test_score1 = [];
var test_score2 = [];
var test_score3 = [];
var numberOfStudents = 4;

function fillArray() {
  var inputHtml = `
    Student Name: <input id="studentName" type="text" /><br />
    Student ID: <input id="studentId" type="number" /><br />
    Test Score 1: <input id="testScore1" type="number" /><br />
    Test Score 2: <input id="testScore2" type="number" /><br />
    Test Score 3: <input id="testScore3" type="number" /><br />
    <button onclick="addStudent()">Add Student</button>
    <button onclick="inputAreaClear()">Exit</button>
  `;
  document.getElementById('inputArea').innerHTML = inputHtml;
}

function addStudent() {
  student_names.push(document.getElementById("studentName").value);
  student_ids.push(parseInt(document.getElementById("studentId").value));
  test_score1.push(parseInt(document.getElementById("testScore1").value));
  test_score2.push(parseInt(document.getElementById("testScore2").value));
  test_score3.push(parseInt(document.getElementById("testScore3").value));
  document.getElementById('outputArea').innerHTML = "Student information populated successfully!";
}

function inputAreaClear() {
  var clearHtml = `
    Select an action from the dropdown menu and click "Perform Action"   
  `;
  document.getElementById("inputArea").innerHTML = clearHtml;
}


function updateStudentInfo() {
  const testTest = 'You are testing update function, its working';
  document.getElementById("outputArea").innerHTML = testTest;
}

function showStudentInfo() {
  const testTest = 'You are testing showStudent function, its working';
  document.getElementById("outputArea").innerHTML = testTest;
}

function promptForStudentID() {
  const getStudentId = `<input type="number" id="getStudentId" placeholder="Please enter student ID number"></input><br /><button onclick="proceedWithSearch()">Search</button>`;
  document.getElementById("outputArea").innerHTML = getStudentId;
}

function proceedWithSearch() {
  const studentId = parseInt(document.getElementById("getStudentId").value);
  if(searchStudent(studentId)) {
    calculateGrade(studentId);
  } else {
    const studentFoundFalse = 'Student ID is invalid';
    document.getElementById("outputArea").innerHTML = studentFoundFalse;
  }
}

function calculateGrade(studentId) {
  const studentIndex = student_ids.indexOf(studentId);
  if(studentIndex !== -1) {
    const average_score = (test_score1[studentIndex] + test_score2[studentIndex] + test_score3[studentIndex]) / 3;
    document.getElementById("outputArea").innerHTML = "Average score for student ID " + studentId + " is: " + average_score;
  } 
}

function searchStudent(studentId) {
  for(let i = 0; i < student_ids.length; i++) {
    
    if(studentId === student_ids[i]) {
      const testId = 'student ID: ' + student_ids[i];
      return true;
    }
  }
  return false;
}



function performAction() {
  var selectedOption = document.getElementById("selectAction").value;
  switch (selectedOption) {
    case 'P':
      fillArray();
      break;
    case 'U':
      updateStudentInfo();
      break;
    case 'D':
      showStudentInfo();
      break;
    case 'C':
      promptForStudentID();
      break;
    default:
      document.getElementById('outputArea').innerHTML = "Invalid choice. Please try again!";
      break;
  }
}

window.onload = function() {
  document.getElementById('inputArea').innerHTML = 'Select an action from the dropdown menu and click "Perform Action"';
  document.getElementById('outputArea').innerHTML = "Results will be displayed here.";
}
