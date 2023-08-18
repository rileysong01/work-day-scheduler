$(function () {
  //saves user input in local storage
  $('button').click(function () {
    var dataType = $(this).closest('[data-type]').data('type');
    var userInput = $(this).closest('[data-type]').find('textarea').val();

    localStorage.setItem(dataType, userInput);
  })



  // changes class of divs based on current time
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


  //gets user input from local storage and put into each textarea
  $.each(localStorage, function (key, value) {
    var selectDiv = $('[data-type="' + key + '"]')
    selectDiv.find('textarea').val(value);
  });


  //display current date 

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
