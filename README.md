## Project Title: AD 311 Tech Interview Prep: TextWise Solutions | Recursion
#### By: Amde Wubshet

### FAQ: 
- Time Complexity: O(n) (Linear Time). 
- Space Complexity: O(n) (Linear Time).
- #### How does the function work? 
    - The recursive function "reverseText(str)" requires a string input and returns that same string in reverse 
        - (i) The first block of code is an if statement that routinely checks if either the string is at a length of one character or if the string is empty. 
            - (ia) For that statement to be true the function would have to be at the "Base Case;" The simplest instance of a problem that can be solved directly without further recursive calls.
        - (ii) The else statement block of code is where the problem solving solving happens (recursive case). The function returns itself, and also concatnates the first character of the current string. Breaking down the operation is much eaiser to explain: 
            - (iia) reverseText(str.substring(1)) is where the function call happens again. The main difference is in the input, where .substring(1) extracts the string from the 1st index onwards. 
            - (iib) str.charAt(0) extracts the character from the 0th index (basically the first letter of the string). 
        - (iii) Each repeated call of the function decreases the characters in the string until the base case is reached. The Call Stack in Javascript keeps track of all the functions called, and when the base case is reached the latest function added to the call stack will be executed first. 
            - (iiia) The call stack works on a Last-In First-Out principle. This means that the last function to be added to the call stack will be the first to execute and pop off the stack.
        - (iv) The output of the function results in the reversing of text because the latest calls get executed first. Here's a text example of the call stack being executed using the string "hello" 
            - 5th call will return reverseString("") + "o" = "o"
            - 4th call will return reverseString("o") + "l" = "o" + "l"
            - 3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
            - 2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
            - 1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
        
### Test Cases: 
- str1 = "Hello" //Expected Output: olleH
- str2 = "Hello There"  //Expected Output: erehT olleH
- str3 = "racecartacocat" //Expected Output: tacocatracecar

### Edge Cases: 
- str4 = 1312432545 //Expected Output: error
- str5 = " Hello" //Expected Output: olleH
- str6 = "h" //Expected Output: h

### Flowchart
![alt text](https://github.com/amdemw206-coder/TextwiseRecursion_AD311/blob/main/Screenshots/TIP_W3_AD311.drawio.png)