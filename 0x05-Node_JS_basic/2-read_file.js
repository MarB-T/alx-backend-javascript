const file = require('fs');

const countStudents = (path) => {
  if (!file.existsSync(path) || !file.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lineArray = file.readFileSync(path, 'utf-8').toString('utf-8').trim().split('\n');
  const students = {};
  const headers = lineArray[0].split(',');
  const studentProps = headers.slice(0, headers.length - 1);

  for ( const line of lineArray.splice(1)) {
    const oneStudent = line.split(',');
    const studentVal = oneStudent.slice(0, oneStudent.length - 1);
    const field = oneStudent[oneStudent.length - 1];
    if (!Object.keys(students).includes(field)) {
    students[field] = [];
    }
    const studentRecord = studentProps.map((nm, ind) => [nm, studentVal[ind]]);
    students[field].push(Object.fromEntries(studentRecord));
  }
  const numStudents = Object.values(students).reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${numStudents}`);
  for ( const [field, group] of Object.entries(students)) {
    const studentNames = group.map((student) => student.firstname).join(',');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};
module.exports = countStudents;
