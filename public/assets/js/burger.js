

//Click handler for devour it button
$(document).on('click', '.eat-burger', function(){
    console.log("button eat clicked");
})


//Button click to add a new burger 
$(document).on('click', '.new-burger', function(){
    console.log("new burger button clicked");
    console.log($('#new-burger').val());


    //Grab the text from the input field
    let newBurger = $('#new-burger').val().trim();
    console.log(newBurger);

    $.ajax("/api/burger",
        {
            type: 'POST',
            data: 
            {
                name: newBurger
            }
        }).then(
            function(){
                console.log("Created the new burger");
                location.reload();
            }
        )


    //Create a new burger in the DB
    //Clear out the form
})
