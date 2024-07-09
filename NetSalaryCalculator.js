function calculateNetSalary(basicSalary, benefits) {
      const TAX_BANDS = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 15 },
        { min: 32334, max: 40333, rate: 20 },
        { min: 40334, max: 48333, rate: 25 },
        { min: 48334, max: Infinity, rate: 30 }
    ];
        const NHIF_RATES = [
        { min: 0, max: 5999, rate: 150 },
        { min: 6000, max: 7999, rate: 300 },
        { min: 8000, max: 11999, rate: 400 },
        { min: 12000, max: 14999, rate: 500 },
        { min: 15000, max: 19999, rate: 600 },
        { min: 20000, max: 24999, rate: 750 },
        { min: 25000, max: 29999, rate: 850 },
        { min: 30000, max: 34999, rate: 900 },
        { min: 35000, max: 39999, rate: 1000 },
        { min: 40000, max: 44999, rate: 1100 },
        { min: 45000, max: 49999, rate: 1200 },
        { min: 50000, max: 59999, rate: 1300 },
        { min: 60000, max: 69999, rate: 1400 },
        { min: 70000, max: 79999, rate: 1500 },
        { min: 80000, max: 89999, rate: 1600 },
        { min: 90000, max: 99999, rate: 1700 },
        { min: 100000, max: Infinity, rate: 1800 }
    ];
    const NSSF_RATE_EMPLOYEE = 6;
    const grossSalary = basicSalary + benefits;  
    let nhifDeduction = 0;
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (grossSalary >= NHIF_RATES[i].min && grossSalary <= NHIF_RATES[i].max) {
            nhifDeduction = NHIF_RATES[i].rate;
            break;
        }
    }
    const nssfDeduction = (basicSalary * NSSF_RATE_EMPLOYEE) / 100;
    const taxableIncome = grossSalary - nhifDeduction - nssfDeduction;
    let payee = 0;
    for (let i = 0; i < TAX_BANDS.length; i++) {
        if (taxableIncome > TAX_BANDS[i].min && taxableIncome <= TAX_BANDS[i].max) {
            payee = (taxableIncome - TAX_BANDS[i].min) * (TAX_BANDS[i].rate / 100);
            break;
        }
    }
   const netSalary = grossSalary - nhifDeduction - nssfDeduction - payee;
    return {
        grossSalary: grossSalary,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        payee: payee,
        netSalary: netSalary
    };
}
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);




console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("Net Salary:", salaryDetails.netSalary);
