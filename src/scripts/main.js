console.log("Hello World")

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
/*function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = buildMeUp + " " + sentence[i];
                    
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
//  addExcitement(sentence) */
//-----------------------------------------------------------
//Some words are more exciting than others


/*function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
         if ((i+1) % 3 === 0) {
               buildMeUp += theWordArray[i] + "!" ;
             } else {
                 buildMeUp += theWordArray[i] +  " "  ;
           }
             console.log(buildMeUp)
         }
     }

addExcitement(sentence) */

//-----------------------------------------------------------
// Function Arguments

/*function addExcitement (theWordArray, a) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
         if ((i+1) % 3 === 0) {
               buildMeUp += theWordArray[i] + a + " " ;
             } else {
                 buildMeUp += theWordArray[i] +  " "  ;
           }
             console.log(buildMeUp)
         }
     }

addExcitement(sentence, "?")   */

//---------------------------------------------------------
//Multiple Punctuation

/*function addExcitement (theWordArray, a, multi) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
         if ((i+1) % 3 === 0) {
               buildMeUp += theWordArray[i]
               for (let i = 0; i < multi; i++) {
               buildMeUp += a + " " ;
               }
             } else {
                 buildMeUp += theWordArray[i] +  " "  ;
           }
             console.log(buildMeUp)
         }
     }

addExcitement(sentence, "*", 4)*/

///---------------------------------------------------------
// Arrow Functions

const addExcitement = (theWordArray, a, multi) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
         if ((i+1) % 3 === 0) {
               buildMeUp += theWordArray[i]
               for (let i = 0; i < multi; i++) {
               buildMeUp += a + " " ;
               }
             } else {
                 buildMeUp += theWordArray[i] +  " "  ;
           }
             console.log(buildMeUp)
         }
     }

addExcitement(sentence, "*", 4)

// This hurt my brain, but hurt less along the way 

