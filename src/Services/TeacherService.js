module.exports = class TeacherService {
    constructor(studentDataReader, teacherDataReader) {
        this.studentDataReader = studentDataReader;
        this.teacherDataReader = teacherDataReader;
    }

    getTeacher(id) {
        return this.TeacherDataReader.getTeachert(id);  // refers to getTeacher method and will retrieve teachers
    }

    deleteTeacher(id) {
        let teacher = this.getTeacher(id);
        if (!teacher) {
            console.log("Error: No Matching Teacher Found");
        } else {
            this.TeacherDataReader.deleteTeacher(id);
        }
    }

    updateTeacher(teacher) {
        let dataTeacher = this.getTeacher(teacher.id);
        if (!dataTeacher) {
            console.log("Error: No Matching Teacher Found");
        } else if (this.validateTeacher(teacher)) {
            this.teacherDataReader.updateTeacher(teacher);
        } else {
            console.log("Error: Teacher object was invalid");
        }
    }

    addTeacher(student) {
        let dataTeacher = this.getTeacher(teacher.id);
        if (dataTeacher) {
            console.log("Error: Teacher Already Found With id: " + teacher.id);
        } else if (this.validateTeacher(teacher)) {
            this.teacherDataReader.addTeacher(teacher);
        } else {
            console.log("Error: Teacher object was invalid");
        }
    }

    searchByName(searchTerm) {
        let teacherData = this.teacherDataReader.getArrayFromFile();
        let matchingNames = [];
        for (let i = 0; i < teacherData.length; i++) {
            const teacher = teacherData[i];
            let teacherFullName = `${teacher.firstName} ${teacher.lastName}`.toLowerCase();
            if(teacherFullName.includes(searchTerm.toLowerCase())) {
                matchingNames.push(teacher);
            }
        }
        return matchingNames;


        // return this.studentDataReader.getArrayFromFile()
        //     .filter(student => `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm));
    }

    // doesTeacherExist(id) {
    //     let teacher = this.teacherDataReader.getTeacher(id);
    //     if (teacher) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // validateStudent(student) {
    //     if (!this.doesTeacherExist(student.teacherId)) {
    //         console.log("Error: Could not find matching teacher for given teacherId")
    //         return false;
    //     }
    //     if (isNaN(student.age)) {
    //         return false;
    //     }
    //     for (let i = 0; i < student.grades.length; i++) {
    //         const grade = student.grades[i];
    //         if (isNaN(grade)) {
    //             console.log("Error: One or more of the entered grades was invalid")
    //             return false;
    //         }
    //     }
    //     return true;
    // }
}