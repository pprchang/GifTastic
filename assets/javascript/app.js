//topics array
var topics = [
  'nissan gtr',
  'lamborghini',
  'ferrari',
  'mclaren',
  'bugatti',
  'porsche 911',
  'pagani'
];

//variables
var button;
var newSearch = '';

//function that create buttons for the elements in the topics array
function generateButton() {
  //empty previous array so it won't duplicate
  $('#buttonsLocation').empty();

  //loops through array to create buttons
  for (var i = 0; i < topics.length; i++) {
    //add class and attr to button
    button = $('<button type=' + 'button' + '>' + topics[i] + '</button>')
      .addClass('btn btn-info')
      .attr('data', topics[i]);
    //add and display button
    $('#buttonsLocation').append(button);
  }
}

//add click event listener to all buttons
//this generate gif when the generate button above is click
$('#buttonsLocation').on('click', '.btn', function() {
  //grab and storind data value from button
  var title = $(this).attr('data');

  //queryURL
  var queryURL =
    'https://api.giphy.com/v1/gifs/search?q=' +
    title +
    '&api_key=r0ot9LU3PQGn62ZfxATvuDF7B3RZpeP2';

  //ajax request
  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    //once data is loaded run this function
    .then(function(response) {
      console.log(queryURL);
      console.log(response);

      //data from ajax request is store in results variable
      var results = response.data;

      //loop through earch result item
      for (var i = 0; i < results.length; i++) {
        //creating div tag
        var carsDiv = $('<div>');

        //paragraph tag for rating
        var p = $('<p>').text('Rating: ' + results[i].rating);

        //image tag
        var carsImage = $('<img>');

        //setting attr of the image from the result
        carsImage.attr('src', results[i].images.fixed_height.url);
        carsImage.attr('data-still', results[i].images.fixed_height_still.url);
        carsImage.attr('data-animate', results[i].images.fixed_height.url);
        carsImage.attr('data-state', 'still');
        carsImage.addClass('gif');

        //appending paragraph and image tag to the carsDiv
        carsDiv.append(p);
        carsDiv.append(carsImage);

        //prepending carsDiv to HTML
        $('#gifsDisplay').prepend(carsDiv);
      }
    });
});

//Pause and Animate function
$('#gifsDisplay').on('click', '.gif', function(event) {
  //get the state of gif
  var state = $(this).attr('data-state');

  //base on the gif state...when click it toogle between animate and still
  if (state === 'still') {
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  } else {
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }
});

//search function...once a new search/topic is input and submit button is clicked..this function add it to the topics array and generate a button
$('.submit').on('click', function(event) {
  // get search input and set it to newSearch variable
  newSearch = $('#topicSearch').val();

  //push newSearch to topics array
  topics.push(newSearch);

  //call generateButton to generate a button for the new search input
  generateButton();
});

//call generateButton function to generate button for the topics array when page load
generateButton();
