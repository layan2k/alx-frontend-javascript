export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
