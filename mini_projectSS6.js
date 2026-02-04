let studentName = ["Quý", "Nam", "Lan", "Hùng", "Nam"];
let money = [100, 200, 300, 400];
let findStudent;
let studentPosition;


//Câu 1
console.log(`--- CÂU 1 ---`);
//NV2
studentName.reverse();
for (let index in studentName) {
    console.log(`Vị trí index [${index}]: ${studentName[index]}`);
}
//NV3
findStudent = "Lan";
studentPosition = studentName.includes(findStudent);
if (!studentPosition) {
    console.log(`Tên Lan không tồn tại trong mảng`);
} else {
    console.log(`Tên Lan tồn tại trong mảng`);
}
//NV4
findStudent = "Nam";
studentPosition = studentName.indexOf(findStudent);
if (studentPosition !== -1) {
    console.log(`Tên Nam tồn tại trong mảng`);
    console.log(`Vị trí của Nam là ${studentPosition}`);
} else {
    console.log(`Tên Nam không tồn tại trong mảng`);
}
//Câu 2
console.log(`--- CÂU 2 ---`);
//NV2
for (let index in studentName) {
    console.log(`Vị trí index [${index}]: ${studentName[index]}`);
}
//NV1
for (let element of studentName) {
    console.log(`Vị trí index [${index}]: ${studentName[index]}`);
}
