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

  //Save the event in local storage when the save button is clicked in that timeblock.
  $(".time-block").each(function () {
    // References for textarea entry, data-hour value and save button
    var eventEntry = $(this).children().eq(1);
    var timeOfDay = eventEntry.attr("data-hour");
    var saveButton = $(this).children().eq(2);

    //Persist events between refreshes of a page
    eventEntry.val(localStorage.getItem(timeOfDay));

    // If savebtn is clicked
    saveButton.click(function (event) {
      // Store entry in localstorage
      if (eventEntry.val() == null) {
        return;
      } else {
        localStorage.setItem(timeOfDay, eventEntry.val());
      }
    });
  });
});
