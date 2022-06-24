function calculate(first_num, second_num, operator) {

    //validate first number
    if (isNaN(first_num)) {
        console.log("First number invalid, please input a valid number.")
    } else if (isNaN(second_num)) {
        console.log("Second number invalid, please input a valid number.")
    }

    // operators that the calculator can accept 
    let operators = ["+", "-", "*", "/"];
    //validate operator that a user selected
    operators.forEach((operator) => {
        console.log(operator)

    })

    let result = first_num + second_num;
    console.log(result);
    return result;
}


calculate(4, 5);