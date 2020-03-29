//HOW CAN MAKE A EMPTY CLASS

//class Student{
    

//}
//const student1 = new Student();
//const student2 = new Student();
//console.log(student1, student2);

//HOW CAN GIVE PROPERTY INSIDE CLASS 
//class Student {
    //constructor(){
       // this.id = 1;
        //this.id = "mahi";
    //}

//}
//const student1 = new Student();
//const student2 = new Student();
//console.log(student1, student2);


class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kaligonj school"
    }

}
const student1 = new Student(12, "shubo");
const student2 = new Student(13, "nehal");
const student3 = new Student(14, "sumon");//add new student 
console.log(student1, student2);
console.log(student3);//add new student 