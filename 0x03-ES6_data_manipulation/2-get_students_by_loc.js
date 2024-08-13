/**
 * Retrieves students in a given location.
 * @param {{
 * id: Number,
 * firstName: String,
 * location: String
 * }[]} studentList - The list of students.
 * @param {String} city - The location.
 * @author Kehinde Olajide <https://github.com/Kdamzy>
 * @returns
 */
export default function getStudentsByLocation(studentList, city) {
 if (Array.isArray(studentList)) {
   return studentList.filter((student) => student.location === city);
 }
 return [];
}
