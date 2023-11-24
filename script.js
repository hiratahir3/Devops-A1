// Sample project data
const projects = [
    { name: "Blood Report Analyzer", technology: "C++" },
    { name: "Event Management System", technology: "C++, OOPs Concepts" },
    { name: "Movie recommendation system on a large dataset", technology: "C++, Datastructures" },
    { name: "Online Grocery Store", technology: "MySQL, HTML, CSS, JavaScript" },
    { name: "Emotion Detector using AI", technology: "Python, Data preprocessing" },
];

// Sample education data
const education = [
    { course: "Biology", grade: "A", year: 2018 },
    { course: "Chemistry", grade: "A", year: 2018 },
    { course: "Physics", grade: "A", year: 2018 },
    { course: "English", grade: "A", year: 2018 },
    { course: "Mathematics", grade: "A", year: 2018 },
    { course: "Maths(A'Levels)", grade: "A", year: 2019 },
    { course: "Computer Science(A'Levels)", grade: "A", year: 2019 },
    { course: "Physics(A'Levels)", grade: "A", year: 2019 },
    { course: "Programming fundamentals", grade: "A", year: 2018 },
    { course: "Islamiat", grade: "A", year: 2018 },
    { course: "Intro to Info. and Comm. Technologies", grade: "A+", year: 2019 },
    { course: "Programming Fundamentals - Lab", grade: "B-", year: 2019 },
    { course: "Programming Fundamentals", grade: "B+", year: 2019 },
    { course: "Applied Physics", grade: "B+", year: 2019 },
    { course: "Calculus and Analytical Geometry", grade: "B", year: 2019 },
    { course: "English Composition and Comprehension - Lab", grade: "A", year: 2019 },
    { course: "Islamic and Religious Studies", grade: "B+", year: 2019 },
    { course: "English Composition and Comprehension", grade: "B-", year: 2019 },
    { course: "Object Oriented Programming - Lab", grade: "A", year: 2020 },
    { course: "Object Oriented Programming", grade: "B", year: 2020 },
    // Add more courses as needed
];


document.addEventListener('DOMContentLoaded', function () {
    displayProjects();
    displayEducation();
});

function displayProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `<h3>${project.name}</h3><p>${project.technology}</p>`;
        projectList.appendChild(projectItem);
    });
}

function filterProjects() {
    const filterText = document.getElementById('filter').value.toLowerCase();
    const filteredProjects = projects.filter(project => project.technology.toLowerCase().includes(filterText));
    displayFilteredProjects(filteredProjects);
}

function displayFilteredProjects(filteredProjects) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `<h3>${project.name}</h3><p>${project.technology}</p>`;
        projectList.appendChild(projectItem);
    });
}

function displayEducation() {
    const educationSection = document.getElementById('education');

    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.innerHTML = `<p>${edu.year}: ${edu.course} - Grade: ${edu.grade}</p>`;
        educationSection.appendChild(eduItem);
    });
}
