function calculateGrade(score)
{
 switch(true)
 {
    case score>90:
        return "First Grade"
    case score>80:
        return "Second Grade"
    case score>70:
        return "Third grade"
    default:
        return "Retry"
 }
}

console.log(calculateGrade(91))
console.log(calculateGrade(85))
console.log(calculateGrade(75))
console.log(calculateGrade(55))