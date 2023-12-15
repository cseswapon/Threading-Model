function simulateAsyncCourse(courseCode, courseTitle, courseInstructor, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Course Name is ${courseTitle}. Course Code ${courseCode} .Course Teacher Name ${courseInstructor} and Class Time ${time} Min`
      );
      resolve(courseCode);
    }, time);
  });
}
async function processCourse(courses) {
  const promises = courses.map((course) =>
    simulateAsyncCourse(
      course.courseCode,
      course.courseTitle,
      course.instructor,
      course.time
    )
  );
  return Promise.all(promises);
}
const courses = [
  {
    courseCode: "CSE-215",
    courseTitle: "Computer Fundamental",
    instructor: "Hanif",
    time: 4000,
  },
  {
    courseCode: "CSE-315",
    courseTitle: "Operating System",
    instructor: "Joya",
    time: 2500,
  },
  {
    courseCode: "CSE-214",
    courseTitle: "Data Networking",
    instructor: "Dipa",
    time: 3000,
  },
];

/* processCourse(courses)
  .then((course) => {
    console.log("All course completed!");
    console.log(course);
  })
  .catch((error) => console.error(error)); */

processCourse(courses);
