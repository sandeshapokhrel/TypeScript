
// here is how we can use function 
function calculate(income: number): number { //properly annotating function after
     // the small bracket close is important so that if i return string value it shows error to it.
    return 0;
}

function cal (income: number, tax:number): number {

    if (income<50_000)
        return income * 1.2;

//unused function
let x; // with the feature enable we will lnow if there is any unused function exisr or not
}

//functioin calll

calculate(10_000, 20_000);