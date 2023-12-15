let payment = true;

async function coursePayment(courses) {
  for (const course of courses) {
    await courseEnrolled(payment, course);
  }
  courseStarted();
}

function courseEnrolled(paymentStatus, { courseTitle, instructor, time }) {
  return new Promise((resolve, reject) => {
    if (!paymentStatus) {
      reject(new Error("Payment Filed Please Firstly Payment"));
    } else {
      setTimeout(() => {
        console.log(
          `Course Name is ${courseTitle}. Course Teacher Name ${instructor} and Class Time ${time} Min`
        );
        resolve(courseTitle);
      }, time);
    }
  });
}

function courseStarted() {
  console.log("<---- So Let's Course Started --->");
}

const course = [
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

coursePayment(course).catch((err) => console.error(err.message));
console.log("<---- Course Start Now ---->");
