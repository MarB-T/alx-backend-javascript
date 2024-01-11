export interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const student1: Student = {
	firstName: "Alex",
	lastName: "Smith",
	age: 30,
	location: "Nakuru"
}
const student2: Student = {
	firstName: "Abby",
	lastName: "Too",
	age: 23,
	location: "Nairobi"
}

const studentsList: Array<Student> = [Alex, Abby]

export const Table = (studentsList: Array<Student>) => {
    const table = document.createElement('table')
    const header = document.createElement('tr')
    table.insertAdjacentElement("beforeend", header)
    header.insertAdjacentHTML("beforeend", "<th>Firstname</th>")
    header.insertAdjacentHTML("beforeend", "<th>Location</th>")

    for (const std of studentsList) {
        const tr = document.createElement('tr')
        tr.insertAdjacentHTML("beforeend", `<td>${std.firstName}</td>`)
        tr.insertAdjacentHTML("beforeend", `<td>${std.location}</td>`)
        table.insertAdjacentElement("beforeend", tr)
    }
    document.body.insertAdjacentElement("beforeend", table)
}

Table(studentsList)
