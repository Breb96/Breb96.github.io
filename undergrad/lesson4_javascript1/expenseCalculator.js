        /************************************************************************************************ 
          Course:  Web Application Development
          Assignment:  Lesson 4 (JavaScript 1)
          Author: Breanna Bush 
          Date: February 13, 2018  
          Filename: expenseCalculator.js
        *************************************************************************************************/
     
         function calculatePercentages() {
            
                  /***********************************************************************************************  
                  *   Purpose of the calculatePercentages method:  
                  *   This method is executed when the 'Convert Expense $ to %' button is clicked.  This method 
                  *   gets the values the users enters into the textfields using the document.getElementById().value 
                  *   method, calculates the total expenses, calculates the percentages for each category, and displays 
                  *   the calculations in the HTML document using the getElementById() method.
                  ***********************************************************************************************/


                  /*************************************************************************************************
                   * Task 2:  Add the additional code needed to get the values (expense amounts) for the NEW categories 
                   *          you've added in Task 1 and assign those values to three NEW variables that you define.  Use good 
                   *          naming conventions for the variable names.  
                   * 
                   * Explanation of Code:  
                   *          This section of the code gets the values the users enter into the textfields for each
                   *          category and assigns those values to each specified variable.  Pay attention to the
                   *          variable names and the naming conventions demonstrated.  The document.getElementById().value 
                   *          method is used to access the expense amount the user typed in for each expense.
                   * 
                   *          The document.getElementById() method accesses the first element in the HTML document with
                   *          the specified id.  
                   *
                   * HINT:  Use the following variable names:  householdAmt, miscellaneousAmt, transportationAmt
                  **************************************************************************************************/

                  var shelterAmt = document.getElementById("shelterInput").value;
                  var foodAmt = document.getElementById("foodInput").value;
                  var householdAmt = document.getElementById("householdInput").value;
                  var transportationAmt = document.getElementById("transportationInput").value;
                  var miscellaneousAmt = document.getElementById("miscellaneousInput").value;

                  /*************************************************************************************************
                   * Task 3:  Add the additional code needed that will convert the user's inputs, which are Strings 
                   *          to Floats using the parseFloat() function.  This must be done for ALL of the NEW
                   *          categories you've added (Household, Transportation, and Miscellaneous). 
                   *          Use the code below as an example.  
                   * 
                   * Explanation of Code:  
                   *          This section of the code takes the value the user entered into the textfield, which
                   *          is recognized as a String and converts that value into a Float for each of the following 
                   *          categories:  Shelter, Food, Household (you must add), Transportation (you must add), 
                   *          and Miscellaneous (you must add). In order to perform calculations below, we need a numeric
                   *          value (float).  Use good naming conventions for the variable names.    
                   * 
                   *          The parseFloat() method is used to convert a String to a Float.
                  **************************************************************************************************/  

                  shelterAmt = parseFloat(shelterAmt);
                  foodAmt = parseFloat(foodAmt);
                  householdAmt = parseFloat(householdAmt);
                  transportationAmt = parseFloat(transportationAmt);
                  miscellaneousAmt= parseFloat(miscellaneousAmt);
                  /******************************************************************************************************
                   * Task 4:  Add the additional code needed to declare variables that will store the calculation
                   *          results for the NEW categories you've added (Household, Transportation, and Miscellaneous). 
                   *          Use the code below as an example.  
                   * 
                   * Explanation of Code:  
                   *          This section of the code creates variables that will store the result of calculating the 
                   *          total expenses and the percentages for each of the following categories:  Shelter, Food, 
                   *          Household (you must add), Transportation (you must add), and Miscellaneous (you must add). 
                   *          Use good naming conventions for the variable names.    
                   * 
                   * HINT:  Use the following variable names:  householdPct, miscellaneousPct, transportationPct
                  *******************************************************************************************************/              

                  var totalExpenses; //total expenses for the user
                  var shelterPct; //shelter category percentage
                  var foodPct;  //food category percentage
                  var householdPct; //household category percentage
                  var transportationPct; //transportation category percentage
                  var miscellaneousPct; //miscellaneous category percentage

                  /******************************************************************************************************
                   * Task 5:  Add the additional code needed to calcuate the total expense and the percentages for each 
                   *          of the NEW categories you've added (Household, Transportation, and Miscellaneous). 
                   *          Use the code below as an example.  The totalExpenses is calculated by adding all the categories
                   *          together using the variables initalized in Task 3.  
                   *
                   *
                   *          IMPORTANT STEP BELOW!  PLEASE ADD THIS STATEMENT BEFORE YOU CALCULATE THE CATEGORIES!
                   *                                 THE totalExpenses MUST BE CALCULATED BEFORE YOU CAN CALCULATE THE
                   *                                 THE PERCENTAGES FOR THE CATEGORY!!!!!!!
                   *
                   *
                   *          Ex.  totalExpenses = shelterAmt + foodAmt + YourVariable + YourVariable + YourVariable;
                   *
                   * 
                   * Explanation of Code:  
                   *          This section of the code calculates the total expenses of all the categories and calculates 
                   *          the percentage of the total expenses spent on that category (Shelter percentage, Food percentage, 
                   *          Household percentage (you must add), Transportation percentage (you must add), and 
                   *          Miscellaneous percentage (you must add). The result of the calculations are assigned to the 
                   *          variables declared in Task 4.  
                  *******************************************************************************************************/   
                    
                  totalExpenses = shelterAmt + foodAmt + householdAmt + transportationAmt + miscellaneousAmt;
                  shelterPct = 100 * (shelterAmt / totalExpenses);
                  foodPct = 100 * (foodAmt / totalExpenses);
                  householdPct = 100 * (householdAmt / totalExpenses);
                  transportationPct = 100 * (transportationAmt / totalExpenses);
                  miscellaneousPct = 100 * (miscellaneousAmt / totalExpenses);

                  /******************************************************************************************************
                   * Task 6:  Add the additional code needed to display the total expenses and the percentages for each 
                   *          category.  You must add the code to display the NEW categories you've added (Household, 
                   *          Transportation, and Miscellaneous). Use the code below as an example.  
                   * 
                   * Explanation of Code:  
                   *          This section of the code displays the total expenses and the percentages for each category.
                   *          The getElementById() method is used to identify the place on the HTML page the calculation
                   *          result will be placed.  It uses the specific id's, which were defined above.  The id names
                   *          are given to you!!!!  
                   *
                   *          The toFixed() method is used to ensure a specified number of digits appear after the decimal
                   *          place for the value.
                   * 
                   *          HINT:  Use the following variable names:  householdPercentage, transportationPercentage, and 	       
                   *          miscellaneousPercentage.  It is case sensitive!!!
                   *
                   *          The innerHTML property used with the document.getElementById() sets or returns the HTML
                   *          content (inner HTML) of an element.
                  *******************************************************************************************************/  

                  document.getElementById("totalExpenses").innerHTML = "<b>Total Expenses:     $</b> " + totalExpenses.toFixed(2);
                  document.getElementById("shelterPercentage").innerHTML = "% for <b>shelter</b>:      " + shelterPct.toFixed(1);      
                  document.getElementById("foodPercentage").innerHTML = "% for <b>food:</b>      " + foodPct.toFixed(1);
                  document.getElementById("householdPercentage").innerHTML = "% for <b>household:</b>      " + householdPct.toFixed(1);
                  document.getElementById("transportationPercentage").innerHTML = "% for <b>transportation:</b>      " + transportationPct.toFixed(1);
                  document.getElementById("miscellaneousPercentage").innerHTML = "% for <b>miscellaneous:</b>      " + miscellaneousPct.toFixed(1);

         } //end of calculatePercentages function

         function clearForm (){

                  /***********************************************************************************************  
                  *   Purpose of the clearForm method:  
                  *   This method is executed when the 'Clear Form' button is clicked.  It removes the expense 
                  *   values the user typed in the form and the calculation results from the HTML page.
                  ***********************************************************************************************/             


                  //This code remove ALL of the expense values the user types into the form (textfields)
                  document.getElementById("expenseCalculator").reset();


                  /*************************************************************************************************************
                   * Task 7:  Add the additional code needed to remove the expense percentage results displayed in the HTML page
                   *          for each category.  You must add the code to remove the NEW categories you've added (Household, 
                   *          Transportation, and Miscellaneous). Use the code below as an example.  
                   * 
                   * Explanation of Code:  
                   *          This section of the code removes the results from the HTML page when the 'Clear Form' button
                   *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
                   *          the specified id and overwrite the existing values with the empty string.  This clears out the 
                   *          results.

                  *************************************************************************************************************/                

                  document.getElementById("totalExpenses").innerHTML = ""; 
                  document.getElementById("shelterPercentage").innerHTML = "";      
                  document.getElementById("foodPercentage").innerHTML  = "";
                  document.getElementById("householdPercentage").innerHTML  = "";
                  document.getElementById("transportationPercentage").innerHTML  = "";
                  document.getElementById("miscellaneousPercentage").innerHTML  = "";
              
         }//end of clearForm function


