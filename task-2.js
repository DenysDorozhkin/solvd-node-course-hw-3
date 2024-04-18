function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function filterUniqueWords(text) {
  return text
    .toLowerCase()
    .match(/\b\w+\b/g)
    .filter((word, index, array) => array.indexOf(word) === index)
    .sort();
}

function getAverageGrade(students) {
  const getAverage = (grades) =>
    grades.reduce((accumulator, grade) => accumulator + grade, 0) /
    grades.length;

  return getAverage(students.flatMap((student) => student.grades));
}
