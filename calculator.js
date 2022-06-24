function calculate(first_num, operator, second_num) {

    //validate first number
    if (isNaN(first_num)) {
        console.log("First number invalid, please input a valid number.")
        return;
    } else if (isNaN(second_num)) {
        console.log("Second number invalid, please input a valid number.");
        return;
    }

    // // operators that the calculator can accept 
    let operators = ["+", "-", "*", "/"];
    let result;


    //validate operator that a user selected
    let user_operator = operator;
    if (operators.includes(user_operator) === false) {
        console.log("invalid oprator");
        return;
    } else {
        console.log("calculaing")

        if (operator === "+") {
            result = first_num + second_num;
            // console.log(result);
            // return result;
        } else if (operator == "-") {
            result = first_num - second_num;
        } else if (operator == "*") {
            result = first_num * second_num;
        } else if (operator == "/") {
            result = first_num / second_num;
        }

        return result;

    }


}


// involke the function 
console.log(calculate(4, "*", 4));