//Function Definition
function reverseText(str){
    // Base Case
    if ( str === ""){
        return str
    }else{
        // Recursive Case 
        // console.log(str)
        return (reverseText(str.substring(1)) + str.charAt(0));            
    }
}

console.log(reverseText("Hello"))