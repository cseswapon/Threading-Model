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

async function processCourse(course) {
  await simulateAsyncCourse(
    course.courseCode,
    course.courseTitle,
    course.instructor,
    course.time
  );
  console.log(
    `Course Name is ${course.courseTitle}. Course Code ${course.courseCode} .Course Teacher Name ${course.courseInstructor} and Class Time ${course.time} Min`
  );
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

async function runCourse() {
  for (const course of courses) {
    await processCourse(course);
  }
  console.log("All Course completed!");
}

runCourse();
