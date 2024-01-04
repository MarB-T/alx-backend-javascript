export default function createEmployeeObject(departmentName, employees){
  const employeesPerDepartment = {
    [departmentName]: [...employees],
  };
  return employeesPerDepartment;
}
