/**
 * Create a function getListStudentIds that returns an array of ids from a list of object.
 * @Kdamzy
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudentIds(studentList) {
 if (Array.isArray(studentList)) {
   return studentList.map((student) => student.id);
 }
 return [];
}
