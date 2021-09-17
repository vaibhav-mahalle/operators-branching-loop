var input = document.querySelector("#input");

function checkOddEven(e)
{
    var val = parseInt(e.target.value);

    console.log(val);
    if(val%2===0)
    {
        console.log("even");
    }
    else
    {
        console.log("odd");
    }
}
input.addEventListener('change',checkOddEven);
