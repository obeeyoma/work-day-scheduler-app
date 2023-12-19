// The app should:

// * Display the current day at the top of the calender when a user opens the planner.
$( document ).ready(function() {

    // Display current day
    const currentDay = dayjs().format('dddd D, YYYY')
    $('#currentDay').text(currentDay);

    // * Present timeblocks for standard business hours when the user scrolls down.

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    const currentHour = dayjs().format('H'); // 0 - 23



    $('.time-block').each(function () {
            // for each individual $('.time-block') element
     
            var indicatedHour = parseInt($(this).text())

            // if elementHour < currentHour 
            if(indicatedHour < currentHour)
            //      this element is in the past
            {

                $(this).children().eq(1).addClass('past')

                }
            // if elementHour == currentHour
        if (indicatedHour == currentHour) {
                
            //      this element is now
                 $(this).children().eq(1).addClass('present')
            }

            // if elementHour > currentHour 
        if (indicatedHour > currentHour) {
                
            //   this element is in the future  
                $(this).children().eq(1).addClass('future')
              }

        });
    
    // * Allow a user to enter an event when they click a timeblock
    
    $('.textarea').addClass('description')

    // * Save the event in local storage when the save button is clicked in that timeblock.

    $('button').on('click',function (event) {
        event.preventDefault()
        var eventEntry;
        var temp = $(this).prev()
        // if textarea is empty
        if (temp.val() === "") {
            return
        } else {
            // if textarea is not empty
            eventEntry = temp.val()
        }

        var timeOfDay = temp.attr('data-hour')
 
        const eventEntryObject = {

            "day": currentDay,
            "content":eventEntry
        }

        localStorage.setItem(timeOfDay, JSON.stringify(eventEntryObject))

    
        // * Persist events between refreshes of a page
        // every time user refreshes a page
        // if saveddate variable is not null
        // get from local storage each item that has the saveddate
        // add each item to the textarea
        // else do nothing


    })  
// localStorage.clear()

    }) 
    //document ready function 

// * Persist events between refreshes of a page




