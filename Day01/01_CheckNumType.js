function checkNumberType(num) {
    if(num>0)
    {
        return "Greater than Zero"
    }
    else if(num<0)
    {
        return "Less than Zero"
    }
    else
    {
        return "Zero"
    }
}

console.log(checkNumberType(9));
console.log(checkNumberType(-1));
console.log(checkNumberType(0));