/**
 * Retrieves a list of students.
 * @returns {Array} An array of student objects.
 */
// export default function getListStudents() {
//   const obj1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
//   const obj2 = { id: 2, firstName: 'James', location: 'Columbia' };
//   const obj3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };

//   const myArray = [obj1, obj2, obj3];

//   return myArray;
// }

const getListStudentIds = () => [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];

export default getListStudentIds;
