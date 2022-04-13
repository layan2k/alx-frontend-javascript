interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const Student1: Student = {
    firstName: 'David',
    lastName: 'Dake',
    age: 12,
    location: 'Malawi',
}

const Student2: Student = {
    firstName: 'Leslie',
    lastName: 'Dawn',
    age: 16,
    location: 'Nairobi',
}

let studentsList: Student[] = [Student1, Student2]

const student_table = document.createElement('table');
const tablebody = document.createElement('tbody');

studentsList.forEach((objlis)=>{
    const tablename = document.createElement('tablename');
    const tablerow = document.createElement('tablerow');
    const tablelocation = document.createElement('tablelocation');

    tablename.textContent = objlis.firstName;
    tablelocation.textContent = objlis.location;
    tablerow.appendChild(tablename);
    tablerow.appendChild(tablelocation);
    tablebody.appendChild(tablerow);
})
student_table.appendChild(tablebody);
document.body.appendChild(student_table);