/* global $*/

$(document).ready(function(){
    $(':button').click(function(){
        
            //Retrieve the value from the textfield
            var query = "query=" + $("#movieName").val();
            
            /***********************************************************************************************
                The code segment below uses the jQuery $.ajax() method.   AJAX is the art of exchanging data 
                with a server, and updates part of the web page - without reloading the whole page.  The $.ajax() 
                method performs an asynchronous HTTP request. The function is a behind the scene function.
                
                url -   A string containing the URL to which the request is sent.  
	                    (ex. https://api.themoviedb.org/3/search/movie This URL is required and is given to 
                        developers by the API providers in the documentation for the service.)

                data -  The data to send to the server when performing the AJAX request.
                        For example, the TheMovieDB API requires the query parameter to be included, which 
                        is assigned to the name of the movie the user is searching for.  The query parameter 
                        will be the name of the movie the user enters into the textfield.

                Example Request URL:
                        https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=big
                        
                TASK #1:
                        Insert YOUR API Key after the '=' inside of the single quotes.
                        
                HINT:  Replace the text "INSERT-HERE" with your API Key.

            ************************************************************************************************/

            $.ajax({
                //Insert YOUR API Key after the '=' inside the single quotes.
                url:'https://api.themoviedb.org/3/search/movie?api_key=INSERT-HERE',
                data: query
            })
            
            .done(function(json){
                

                //The following code retrieves the movie title from JSON object retrieved from the TMDB Server
                //and places the title on the HTML page, where the id="original_title".
                
                $("#original_title").html(json.results[0].original_title);
                

                /***********************Retrieve Movie Plot from Server & Add to HTML Document******************
                 TASK #6:  
                 1.  Include the jQuery code below that will retrieve the movie plot or overview from JSON object
                     and place on the HTML page.
                 
                 HINT:  
                 1.  Retrieve the value by using the key/name as follows:  json.results[0].overview
                 2.  Use as the DOM name where the id is "#overview"
                 3.  Use the example above where the Movie Title was retrieved to complete this step!
                 
                 *********************************Insert Code Below********************************************/                
                
                
                

                /***********************Retrieve Movie Release Date from Server & Add to HTML Document***********
                 TASK #7:  
                 1.  Include the jQuery code below that will retrieve the movie release date from JSON object
                     and place on the HTML page.
                 
                 HINT:  
                 1.  Retrieve the value by using the key/name as follows:  json.results[0].release_date
                 2.  Use as the DOM name where the id is "#release_date"
                 3.  Use the example above where the Movie Title was retrieved to complete this step!
                 
                 *********************************Insert Code Below********************************************/               




                 /***********************Retrieve Movie Popularity Rate from Server & Add to HTML Document******
                 TASK #8:  
                 1.  Include the jQuery code below that will retrieve the movie popularity rate from JSON object
                     and place on the HTML page.
                 
                 HINT:  
                 1.  Retrieve the value by using the key/name as follows:  json.results[0].popularity
                 2.  Use as the DOM name where the id is "#popularity"
                 3.  Use the example above where the Movie Title was retrieved to complete this step!
                 
                 *********************************Insert Code Below********************************************/   

  

                
                 /*****************Retrieve Movie Original Language from Server & Add to HTML Document***********
                 TASK #9:  
                 1.  Include the jQuery code below that will retrieve the movie language from JSON object
                     and place on the HTML page.
                 
                 HINT:  
                 1.  Retrieve the value by using the key/name as follows:  json.results[0].original_language
                 2.  Use as the DOM name where the id is "#original_language"
                 3.  Use the example above where the Movie Title was retrieved to complete this step!
                 
                 *********************************Insert Code Below********************************************/                 



                //The following code retrieves the movie poster path from the JSON object retrieved from the TMDB 
                //Server and places the poster image on the HTML page, where the id="poster_path".  It took TWO
                //step to complete this step.
        
                //Step 1:  Build the URL to send request to TMDB server with this movie's poster path
                var posterURL = "https://image.tmdb.org/t/p/w500" + json.results[0].poster_path;
                
                //Step 2:  Add the value for the img src attribute to point to the poster's URL
                $("#poster_path").attr('src', posterURL);

            }) //end of done
            .fail(function() {
                alert("Posting failed.");              
            });         
        return false;
    });//end of click method
});//end of ready method     

