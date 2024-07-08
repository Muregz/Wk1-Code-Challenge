function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const kmAboveLimit = speed - speedLimit;     

        const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint);       
    
        console.log(`Demerit points: ${demeritPoints}`);
        }
}
calculateDemeritPoints(80); 
calculateDemeritPoints(65); 
calculateDemeritPoints(95);  
