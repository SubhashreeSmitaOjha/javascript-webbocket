const detailsOfCourse={
    courseName: "javascript",
    courseFee: 4000,
    poweredBy: "Web_Bocket",
    enrollmentStatus: "Active"
};
console.log(detailsOfCourse);
// Ex
    const {enrollmentStatus : es}=detailsOfCourse;
    const {courseName : cn}=detailsOfCourse;
    console.log(es);
    console.log(cn);
    console.log(detailsOfCourse.courseName);
