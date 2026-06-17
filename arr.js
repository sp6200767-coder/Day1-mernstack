const courses = ["react", "node"];

function x(course){

    courses.push(course);
    return courses;
}

function sc(course){

   return courses.includes(course);
}

module.exports = {x,sc};