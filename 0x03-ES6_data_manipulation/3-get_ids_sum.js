export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    throw new Error('Students is not an array');
  }
  return students.reduce((acc, cur) => acc + cur.id, 0);
}
