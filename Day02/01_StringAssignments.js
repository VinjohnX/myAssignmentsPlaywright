//Code to find lastWordLength
function lastWordLength(s)
{
    let chars = s.trim().split(" ")
   return chars[chars.length -1].length
   
}


console.log(lastWordLength(" He is a nice person "))


//Code to find Anagram
function isAnagram(s1,s2)
{
    if(s1.length != s2.length)
    {
        return false
    }
    for(let i=0;i<s1.length;i++)
    {
        if(!s2.includes(s1.charAt(i)))
        {
            return false
        }
    }
    return true
}

console.log(isAnagram("Vin","Bin"))