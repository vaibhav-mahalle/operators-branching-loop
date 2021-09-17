var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");

function DaysInMonth() {
    if (Number(input.value) < 1 || Number(input.value) > 12) {
        output.innerText = "Please enter valid input."
    } 
    else {
        var months = [1, 3, 5, 7, 8, 10, 12];
        var flag = 0;
        for (const i of months) {
            if (i === Number(input.value)) {
                flag = 1;
                output.innerText = " Entered month has 31 days";
                break;
            }
        }
        if (flag === 0) {
            output.innerText = " Entered month does not have 31 days";
        }

    }


}


button.addEventListener("click", DaysInMonth)