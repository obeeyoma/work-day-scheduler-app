// The app should:

// * Display the current day at the top of the calender when a user opens the planner.
$( document ).ready(function() {

    // Display current day
    const currentDay = dayjs().format('dddd D, YYYY')
    $('#currentDay').text(currentDay);

    // * Present timeblocks for standard business hours when the user scrolls down.

    $('.time-block').hide();
    $(document).on('scroll', function () {  
   $( ".time-block" ).each(function() {
  $(this).show('slow')
});
})

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    const currentHour = dayjs().format('H'); // 0 - 23
    console.log(currentHour)

    //    console.log(first)
    $('.time-block').each(function () {
            // for each individual $('.time-block') element
     
            var indicatedHour = parseInt($(this).text())
            console.log(indicatedHour)
            // if elementHour < currentHour 
            if(indicatedHour < currentHour)
            //      this element is in the past
            {

                $(this).children().addClass('past')

                }
            // if elementHour == currentHour
        if (indicatedHour == currentHour) {
                
            //      this element is now
                 $(this).children().addClass('present')
            }

            // if elementHour > currentHour 
        if (indicatedHour > currentHour) {
                
            //   this element is in the future  
                $(this).children().addClass('future')
              }

        });
 

    
    // * Allow a user to enter an event when they click a timeblock
    
    
    // * Save the event in local storage when the save button is clicked in that timeblock.

    $('.saveBtn').click(function () {
var paren = $(this).parent(this)
            console.log(paren)  
        })

    //     const eventDataObject = {
    //         "day":$('#currentDay').text(),
    //         "time": $('.time-block').text(),
    //         "content":$('textarea').text()
    //     }
    //     console.log(eventDataObject)
    // })
})    
    //document ready function 

    
    
// * Persist events between refreshes of a page
    
    


 




