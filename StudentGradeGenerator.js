function calculateGrade(mark) {    
      let grade;      
    switch (true) {
        case (mark > 79):
            grade = 'A';
            break;
        case (mark >= 60):
            grade = 'B';
            break;
        case (mark >= 50):
            grade = 'C';
            break;
        case (mark >= 40):
            grade = 'D';
            break;
        default:
            grade = 'E';
    }
    return `Your grade is: ${grade}`;
}

let markInput = 79;
console.log(calculateGrade(markInput));

