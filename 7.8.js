//7.8 Student Enrollment:

let dsaStudents = [];
let webDevStudents = [];

function enroll(subject, studentName){
  subject.push(studentName);
  console.log(studentName + " enrolled in " + subject);
}

function unenroll(subject, studentName) {
  let index = subject.indexOf(studentName);
  if (index > -1) {
    subject.splice(index, 1);
    console.log(studentName + " unenrolled from " + subject);
  } else {
    console.log(studentName + " not found in " + subject);
  }
}

enroll("DSA", "Shiela");
enroll("WebDev", "Shaine");
unenroll("DSA", "Shiela");

console.log("DSA students:", dsaStudents);
console.log("WebDev students:", webDevStudents);


//https://www.w3schools.com/jsref/met_win_prompt.asp
//https://www.w3schools.com/js/js_popup.asp
//https://www.bing.com/search?q=java+script+prompt+code&FORM=QSRE6
//https://www.bing.com/search?q=javascript+prompt+user+for+input&FORM=QSRE9