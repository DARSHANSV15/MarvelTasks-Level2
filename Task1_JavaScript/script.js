let students = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const marks = parseInt(document.getElementById("marks").value);
    const max = parseInt(document.getElementById("max").value);

    const percentage = (marks / max) * 100;

    students.push({ name, marks, max, percentage });

    displayStudents();
}

function displayStudents() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const marksCell = row.insertCell(1);
        const maxCell = row.insertCell(2);
        const percentageCell = row.insertCell(3);

        nameCell.textContent = student.name;
        marksCell.textContent = student.marks;
        maxCell.textContent = student.max;
        percentageCell.textContent = student.percentage.toFixed(3) + "%";
    });

    calculateClassAverage();
    calculateRankings();
}

function calculateClassAverage() {
    const totalMarks = students.reduce((total, student) => total + student.marks, 0);
    const classAverage = totalMarks / students.length;
    document.getElementById("classAverage").textContent = "Class Average: " + classAverage.toFixed(2);
}

function calculateRankings() {
    students.sort((a, b) => b.marks - a.marks);

    const rankingsContainer = document.getElementById("rankings");
    rankingsContainer.innerHTML = ""; // Clear previous content

    students.forEach((student, index) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `${index + 1}. ${student.name} - ${student.percentage.toFixed(3)} %`;
        rankingsContainer.appendChild(paragraph);
    });
}
