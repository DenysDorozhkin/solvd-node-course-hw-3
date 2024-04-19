function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function filterUniqueWords(text) {
  function getWordsOfText(text) {
    return text.toLowerCase().match(/\b\w+\b/g) || [];
  }

  function filterUniqueValues(values) {
    return [...new Set(values)];
  }

  function sortAlphabetically(values) {
    return values.sort();
  }

  if (typeof text === "string") {
    return sortAlphabetically(filterUniqueValues(getWordsOfText(text)));
  }
  throw new Error("Text must be a string.");
}

function getAverageGrade(students) {
  const getAverage = (grades) =>
    grades.reduce((accumulator, grade) => accumulator + grade, 0) /
    grades.length;

  return getAverage(students.flatMap((student) => student.grades));
}
