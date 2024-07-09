# Wk1-Code-Challenge

## Challenge 1: StudentGradeGenerator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

   1. Define the function calculateGrade(mark) { } which will be the main function in which we calculate the final Grade.

   2. Declare the variable let grade; which will be our output.

   3. We open our switch statement  (true) {}

   4. Inside our statement we define the range of marks and their grading
   using case break 
        case (mark > 79):
            grade = 'A';
            break;

   5. give a return statement for the output 
       return `Your grade is: ${grade}`;

   6. give our input mark = 79

   7.If you run the code the output is"B"


   ##  Challenge 2: Speed Detector (Toy Problem)   
       
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/h above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
       
1. Declare the function speed
       function calculateDemeritPoints(speed) {}

2. Declare the constant speed limit
    const speedLimit = 70;

 3. Declare the demerit speed which is 1 point for every 5km/h     
     const kmPerDemeritPoint = 5;

 4.  Start with an if statement to determine if the driver is driving below the speed limit. If the driver has not broken the spoeed limit the output will  be OK.
      if (speed <= speedLimit) {}

 5. else if the Driver is 12 Demerit points in the License will be suspended until further notice.

      else if (speed > 130){
        console.log("License suspended")
    }  

6. else if the drivers speed is more than the speed limit the driver is awarded  1 point for every 5km/h above speed limit as given by the examples.

          calculateDemeritPoints(80); 
          calculateDemeritPoints(65); 
          calculateDemeritPoints(95);  
          calculateDemeritPoints(135);

which output as follows:
          Demerit points: 2
          Ok
          Demerit points: 5
          License suspended


 ##   Challenge 3: Net Salary Calculator (Toy Problem)       
 Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

1. 