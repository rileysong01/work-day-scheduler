// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //set up a key for each time loal storage
  $('button').click(function () {
    var dataType = $(this).closest('[data-type]').data('type');
    var userInput = $(this).closest('[data-type]').find('textarea').val();

    localStorage.setItem(dataType, userInput);
  })



  // DONE
  var currentHour = dayjs().hour()
  $('[data-type]').each(function () {
    var dataTypeValue = parseInt($(this).attr('data-type'), 10)

    if (dataTypeValue < currentHour) {
      $(this).addClass('past')
    }

    if (dataTypeValue == currentHour) {
      $(this).addClass('present')
    }

    if (dataTypeValue > currentHour) {
      $(this).addClass('future')
    }
  })


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $.each(localStorage, function (key, value) {
    var selectDiv = $('[data-type="' + key + '"]')
    selectDiv.find('textarea').val(value);
  });


  // DONE

  var suffix;
  console.log(dayjs().date(), typeof dayjs().date())

  if (dayjs().date() === 1) {
    suffix = "st"
  } else if (dayjs().date() === 2) {
    suffix = "nd"
  } else if (dayjs().date() === 3) {
    suffix = "rd"
  } else {
    suffix = "th"
  }

  $('#currentDay').text(dayjs().format('dddd, MMM D') + suffix)

});
