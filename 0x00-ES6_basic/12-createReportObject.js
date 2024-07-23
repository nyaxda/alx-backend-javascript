export default function createReportObject(employeesList) {
  const output = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
  return output;
}
