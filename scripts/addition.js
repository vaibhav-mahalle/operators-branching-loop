var num = [5, 13, 7, 21, 48];


function maximum() {
    var greatest = 0;
    var i = 0;
    while (i < 5) {
        if (num[i] > greatest) {
            greatest = num[i];
        }
        i++;
    }
    console.log("The maximum number is : "+ greatest);
}

function addition() {
    var sum = num[0] + num[1] + num[2] + num[3] + num[4];
    console.log(sum);
    maximum();
}