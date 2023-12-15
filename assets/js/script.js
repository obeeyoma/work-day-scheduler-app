// The app should:

// * Display the current day at the top of the calender when a user opens the planner.
$( document ).ready(function() {

    // Display current day
    const currentDay = dayjs().format('dddd D, YYYY')
    $('#currentDay').text(currentDay);

    // * Present timeblocks for standard business hours when the user scrolls down.

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    const currentHour = dayjs().format('H'); // 0 - 23


    //    console.log(first)
    $('.time-block').each(function () {
            // for each individual $('.time-block') element
     
            var indicatedHour = parseInt($(this).text())

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
    
    $('.textarea').addClass('description')

    // * Save the event in local storage when the save button is clicked in that timeblock.

    $('.time-block').on('click', "button" ,function (event) {
        
        var temp = $(this).prev()
        var eventEntry = temp.val()
        var timeOfDay = temp.attr('data-hour')
       console.log(eventEntry) 
        const eventEntryObject = {

            "day": currentDay,
            "content":eventEntry
        }
        console.log(eventEntryObject)
        localStorage.setItem(timeOfDay, JSON.stringify(eventEntryObject))
    
    })  
// localStorage.clear()

    }) 
    //document ready function 

// * Persist events between refreshes of a page




