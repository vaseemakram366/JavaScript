let marks_class_12 = [91, 82, 63, 84, false, "Not present"]
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
marks_class_12[6] = 89
console.log(marks_class_12[6]);// will be undefined because index 6 does not exist
marks_class_12[0] = 96
console.log("The length of marks_class_12 is",marks_class_12.length);

console.log(marks_class_12);
console.log(typeof marks_class_12);