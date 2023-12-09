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
    

    
// * Allow a user to enter an event when they click a timeblock
    

    
// * Save the event in local storage when the save button is clicked in that timeblock.    
    
    
    
    
// * Persist events between refreshes of a page
    
    
});


 




