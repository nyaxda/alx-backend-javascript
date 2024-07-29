export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    throw new Error('Students is not an array');
  }
  return students.filter((student) => student.location === city);
}
