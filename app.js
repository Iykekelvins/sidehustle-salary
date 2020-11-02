const form = document.getElementById('form');
const input = document.getElementById('input');
const salary = document.getElementById('salary');

form.addEventListener('submit', function(e){
    e.preventDefault();

    calculateSalary();
})

function calculateSalary(){
    let dailyPay = 1000;
    const hoursWorked = input.value;
    dailySalary = hoursWorked * dailyPay;

    if(hoursWorked <= 4) {
        salary.textContent = 'Your Salary: ' + dailySalary + ' Naira.';
    } 
 
    else{
        let extraHour = hoursWorked - 4;
        let extraPay = 200 * extraHour;
        let totalSalary = dailySalary + extraPay;

        salary.textContent = 'Your Salary: ' + totalSalary + ' Naira.';
    }
}
