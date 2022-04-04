export default function createIteratorObject(report) {
  const output = report.allEmployees;
  let values = [];
  output.forEach((value) => { values = [...values, ...value]; });
  return values;
}
