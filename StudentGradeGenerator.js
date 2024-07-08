function generateStudentGrade() {
    try {
        let marks = parseFloat(prompt("Enter the student's marks (0-100):"));
        
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Marks should be between 0 and 100.");
            return;
        }
        
        let grade;
        
        if (marks >= 80) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        
        console.log(`The student's grade is: ${grade}`);
    
    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}
