$(document).ready(function () {
  // Formatted current day date at top calender
  const currentDay = dayjs().format("dddd D, YYYY");
  $("#currentDay").text(currentDay);

  // Formatted current hour
  const currentHour = dayjs().format("H"); // 0 - 23

  // For each individual timeblock element
  $(".time-block").each(function () {
    // Get text content of timeblock element
    var timeblockHour = parseInt($(this).text());

    //Color-code each timeblock based on past, present, and future

    // If timeblockHour less than currentHour
    if (timeblockHour < currentHour) {
      // this element is in the past
      $(this).children().eq(1).addClass("past");
    }
    // If timeblockHour equal to currentHour
    if (timeblockHour == currentHour) {
      // this element is now
      $(this).children().eq(1).addClass("present");
    }

    // If timeblockHour greater than currentHour
    if (timeblockHour > currentHour) {
      // this element is in the future
      $(this).children().eq(1).addClass("future");
    }
  });

  $(this).children().eq(1).addClass("description");

  // * Save the event in local storage when the save button is clicked in that timeblock.

  $("button").on("click", function (event) {
    event.preventDefault();
    var eventEntry;
    var temp = $(this).prev();
    // if textarea is empty
    if (temp.val() === "") {
      return;
    } else {
      // if textarea is not empty
      eventEntry = temp.val();
    }

    var timeOfDay = temp.attr("data-hour");

    const eventEntryObject = {
      day: currentDay,
      content: eventEntry,
    };

    localStorage.setItem(timeOfDay, JSON.stringify(eventEntryObject));

    // * Persist events between refreshes of a page
  });
});
//document ready function
