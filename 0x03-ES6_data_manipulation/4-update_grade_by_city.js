// export default function updateStudentGradeByCity(students, city, newGrades) {
// //   // checking if the arguments are of the right types
//   if (!Array.isArray(students)) {
//     throw new Error('Students is not an array');
//   }
//   if (typeof city !== 'string') {
//     throw new Error('City is not a string');
//   }
//   if (!Array.isArray(newGrades)) {
//     throw new Error('New grades is not an array');
//   }
//   // filtering students by the specified city
//   const studentsMapped = students.filter((student) => student.location === city);

//   // Mapping through the filtered students to update their grades
//   return studentsMapped.map((student) => {
//     // Find the new grade for the student
//     const aGrade = newGrades.find((grade) => grade.studentId === student.id);

//     // if no grade is found, set the grade to 'N/A
//     if (!aGrade) {
//       return {
//         ...student,
//         grade: 'N/A',
//       };
//     }

//     // return the student object with the updated grade
//     return {
//       ...student,
//       grade: aGrade.grade,
//     };
//   });
// }

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}

