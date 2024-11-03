function calculateTax(){
        /***********************************************************************************************  
        *   Purpose of the calculateTax method:  
        *   This method is executed when the 'Calculate Tax' button is clicked.  This method 
        *   gets the values the user enters into the textfield and dropdown menu using the 
        *   document.getElementById().value method, calculates the tax amount and tax rate (bracket)
        *   and displays the calculations in the HTML document using the getElementById() method.
        ***********************************************************************************************/
        
         var tax; //the tax calculated based on the filing status and income
         var taxRate; //the tax rate (bracket) based on the filing status and income
         
         //Retrieve the values the user enters and selects on the form
         var income = document.getElementById("incomeInput").value;
         var status = document.getElementById("filingStatus").value;
         
         
         //Calculate the tax amount and tax rate based on the filing status and income
         //0-Single, 1-Married Jointly, 2-Married Separately, and 3-Head of Household

        if (status == 0) { 
             
             // Compute tax for single filers
               if (income <= 9525){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 38700) {
                 tax = 9525 * 0.10 + (income - 9525) * 0.12;
                 taxRate = 12;
               }//end of else if
               else if (income <= 82500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 + (income - 38700) * 0.22;
                 taxRate = 22;
               } //end of else if
               else if (income <= 157500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (income - 82500) * 0.24;
                 taxRate = 24;
               }//end of else if
               else if (income <= 200000) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                       (income - 157500) * 0.32;
                 taxRate = 32;
               }//end of else if
               else if (income <= 500000) {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (income - 200000) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (500000 - 200000 ) * 0.35 + (income - 500000) * .37;
                  taxRate = 37;
               }//end of nested if
          }//end of single filer calculation
          
        
        
        
          /*******************************************************************************
             * Task 1:  Compute the tax for users' who file as "Married Jointly".  Also,
             *          set (or initialize) the tax rate for each bracket.  Refer 
             *          to the above example (single filer) and the assignment description
             *          to write the correct equation for this filing status.
             * 
             * HINT:    If the "status" is equivalent to the value '1', the user is filing 
             *          as "Married filing jointly or qualifying widow(er)".  
             * 
             *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
           
           
           
          else if(status == 1) {
                //INSERT YOUR CODE BELOW
                // Compute tax for Married filing jointly or qualifying widow(er)
                   if (income <= 19050){
                     tax = income * 0.10;
                     taxRate = 10;
                   }//end of nested if
                   else if (income <= 77400) {
                     tax = 19050 * 0.10 + (income - 19050) * 0.12;
                     taxRate = 12;
                   }//end of else if
                   else if (income <= 165000) {
                     tax = 19050 * 0.10 + (77400 - 19050) * 0.12 + (income - 77400) * 0.22;
                     taxRate = 22;
                   } //end of else if
                   else if (income <= 315000) {
                     tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                           (165000 - 77400) * 0.22 + (income - 165000) * 0.24;
                     taxRate = 24;
                   }//end of else if
                   else if (income <= 400000) {
                     tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                           (165000 - 77400) * 0.22 + (315000 - 165000) * 0.24 +
                           (income - 315000) * 0.32;
                     taxRate = 32;
                   }//end of else if
                   else if (income <= 600000) {
                      tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                            (165000 - 77400) * 0.22 + (315000 - 165000) * 0.24 +
                            (400000 - 315000) * 0.32 + (income - 400000) * 0.35;
                      taxRate = 35;
                   }//end of else if
                   else {
                      tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                            (165000 - 77400) * 0.22 + (315000 - 165000) * 0.24 +
                            (400000 - 315000) * 0.32 + (600000 - 400000 ) * 0.35 + (income - 600000) * .37;
                      taxRate = 37;
                   }//end of nested if
          }//end of married file jointly calculation
          
          
          
          
          /*******************************************************************************
            * Task 2:  Compute the tax for users' who file as "Married Separately".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '2', the user is filing 
            *          as "Married filing separately."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
                 
                 
                 
          else if(status == 2) {
                //INSERT YOUR CODE BELOW
                // Compute tax for married file separately
               if (income <= 9525){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 38700) {
                 tax = 9525 * 0.10 + (income - 9525) * 0.12;
                 taxRate = 12;
               }//end of else if
               else if (income <= 82500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 + (income - 38700) * 0.22;
                 taxRate = 22;
               } //end of else if
               else if (income <= 157500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (income - 82500) * 0.24;
                 taxRate = 24;
               }//end of else if
               else if (income <= 200000) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                       (income - 157500) * 0.32;
                 taxRate = 32;
               }//end of else if
               else if (income <= 300000) {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (income - 200000) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (300000 - 200000 ) * 0.35 + (income - 300000) * .37;
                  taxRate = 37;
               }//end of nested if
          }//end of married file separately calculation
        
        
        
        
          /*******************************************************************************
            * Task 3:  Compute the tax for users' who file as "Head of Household".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '3', the user is filing 
            *          as "Head of Household."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
          
          
          
          else if(status == 3) {
                //INSERT YOUR CODE BELOW
                // Compute tax for head of household
               if (income <= 13600){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 51800) {
                 tax = 13600 * 0.10 + (income - 13600) * 0.12;
                 taxRate = 12;
               }//end of else if
               else if (income <= 82500) {
                 tax = 13600 * 0.10 + (51800 - 13600) * 0.12 + (income - 51800) * 0.22;
                 taxRate = 22;
               } //end of else if
               else if (income <= 157500) {
                 tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                       (82500 - 51800) * 0.22 + (income - 82500) * 0.24;
                 taxRate = 24;
               }//end of else if
               else if (income <= 200000) {
                 tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                       (82500 - 51800) * 0.22 + (157500 - 82500) * 0.24 +
                       (income - 157500) * 0.32;
                 taxRate = 32;
               }//end of else if
               else if (income <= 500000) {
                  tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                        (82500 - 51800) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (income - 200000) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                        (82500 - 51800) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (500000 - 200000 ) * 0.35 + (income - 500000) * .37;
                  taxRate = 37;
               }//end of nested if
          }//end of head of household calculation
          
          
          
          
          
          /***************************************************************************************
           * Explanation of Code:
           *                This section of the code displays the result for the taxes calculated
           *                and the tax bracket the user falls in based on their income.
           * 
           *                The document.getElementById() method is used to identify the place in
           *                the HTML document the calculation result and the tax bracket will be 
           *                placed.  It uses the specific ids (taxEstimate, taxBracket), which 
           *                were defined above.  The toFixed() method is used to ensure a specified 
           *                number of digits appear after the decimal place for the value.
           *
           *                The innerHTML property used with the document.getElementById() sets or
           *                returns the HTML content (inner HTML) of an element.
           * ************************************************************************************/
           
           
          document.getElementById("taxEstimate").innerHTML = "Tax:  <b>$" + tax.toFixed(2) + "<b></br><br>";
          
          document.getElementById("taxBracket").innerHTML = "Tax Bracket: <b>" + taxRate + "</b>%";
          
      
      
}//end of calculateTax function  
      

          
          
          
          
/***********************************************************************************************  
*   Purpose of the clearButton method:  
*   This method is executed when the 'Clear Calculator' button is clicked.  It removes the tax 
*   calculations and the values the user typed in the form.  It also resets the filing status 
*   back to 'Single' filing status.
***********************************************************************************************/             

         
          /*************************************************************************************************************
            * Task 4:  Add the additional code needed to remove the calculation results displayed in the HTML page.
            *          Use the code below and the code from Lesson 4 Assignment for guidance on how to 
            *          complete this section.  
            * 
            * Explanation of Code:  
            *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
            *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
            *          the specified id and overwrite the existing values with the empty string or a set value.  
            *          This clears out the results.
          *************************************************************************************************************/  
             
function clearButton () {
    
              //This code removes the taxable income the user entered in the textfield.
              document.getElementById("incomeInput").value = "";
              
              //This code resets the dropdown box to the "Single" filer status.
              document.getElementById("filingStatus").selectedIndex = 0;
              
             //INSERT YOUR CODE BELOW
                document.getElementById("taxEstimate").innerHTML = ""; 
                document.getElementById("taxBracket").innerHTML = ""; 
}//end of clearButton function
      
