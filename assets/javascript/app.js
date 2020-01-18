$(document).ready(function() {
  //======variable=====
  let time = 30;
  let intervalId;
  let rights = 0;
  let wrong = 0;
  let unAnswered = 0;
  let backgrounMusic = new Audio('assets/audio/backgroundmusic.mp3');

  var answerTracker = [undefined, undefined, undefined, undefined, undefined];

  //========Question array======
  var questions = [
    {
      question: 'Farthest arrow shot using feet:',
      answerList: ['40ft, 4.64in', '50ft, 5.64in', '35ft, 2.36in']
    },
    {
      question: 'Most tattooed man:',
      answerList: [
        'Over 1,000 hours of body modification',
        '500 hours of body modification',
        '300 hours of body modification'
      ]
    },
    {
      question: 'Most toothpicks in a bread:',
      answerList: ['2,525', '3,500', '1,457']
    },
    {
      question: 'Longest hair on a teenager:',
      answerList: ['5ft, 7in', '4ft, 6in', '3ft, 7in']
    },
    {
      question: 'Largest table tennis/ping pong bat:',
      answerList: [
        '8ft, 8in tall and 5ft, 6in wide',
        '5ft, 6in tall and 6ft, 4in wide',
        '11ft, 7.8in tall and 6ft, 7.8in wide'
      ]
    }
  ];

  //=======================Timmer Function===================//

  //timer countdown
  function timerStart() {
    intervalId = setInterval(decrement, 1000);
    console.log(timerStart);
  }

  function decrement() {
    time--;
    //display timer
    $('.clock').html('Time Left: ' + time + ' seconds');

    if (time === 0) {
      stop();
      results();
    }
  }
  //stop timer
  function stop() {
    clearInterval(intervalId);
  }

  //=======Button click functions========
  //on click function to determine which answer was click
  $('button.answer-btn1').on('click', function(event) {
    var self = $(this);
    console.log(self);
    //set the correct answer to answerTracker array
    answerTracker[0] = self.hasClass('correct-answer');
  });

  $('button.answer-btn2').on('click', function(event) {
    var self = $(this);
    console.log(self);
    answerTracker[1] = self.hasClass('correct-answer');
  });

  $('button.answer-btn3').on('click', function(event) {
    var self = $(this);
    console.log(self);
    answerTracker[2] = self.hasClass('correct-answer');
  });

  $('button.answer-btn4').on('click', function(event) {
    var self = $(this);
    console.log(self);
    answerTracker[3] = self.hasClass('correct-answer');
  });

  $('button.answer-btn5').on('click', function(event) {
    var self = $(this);
    console.log(self);
    answerTracker[4] = self.hasClass('correct-answer');
  });

  //=====Result function and display to html======

  function results() {
    //loop through the answerTracker array to determine if choosen answer was correct, incorrect or unaswered
    for (var i = 0; i < answerTracker.length; i++) {
      if (answerTracker[i] == true) {
        rights++;
      }
      if (answerTracker[i] == false) {
        wrong++;
      }
      if (answerTracker[i] == undefined) {
        unAnswered++;
      }
    }

    //show result page and display results to result page
    $('#resultTitle').show();
    $('#carouselExampleFade').hide();
    $('#Correct').html('Correct: ' + rights);
    $('#Incorrect').html('Incorrect: ' + wrong);
    $('#Unanswered').html('Unanswered: ' + unAnswered);
  }

  //============================Game Start===========

  //hide the question slides and result page
  $('#carouselExampleFade').hide();
  $('#resultTitle').hide();

  //function to start game
  $('#butt22').click(function() {
    $('#startTitle').hide();
    backgrounMusic.play();
    $('#carouselExampleFade').show();
  });

  //display question and answer to html
  $('#ques1').text(questions[0].question);
  $('#butt1').text(questions[0].answerList[0]);
  $('#butt2').text(questions[0].answerList[1]);
  $('#butt3').text(questions[0].answerList[2]);

  $('#ques2').text(questions[1].question);
  $('#butt4').text(questions[1].answerList[0]);
  $('#butt5').text(questions[1].answerList[1]);
  $('#butt6').text(questions[1].answerList[2]);

  $('#ques3').text(questions[2].question);
  $('#butt7').text(questions[2].answerList[0]);
  $('#butt8').text(questions[2].answerList[1]);
  $('#butt9').text(questions[2].answerList[2]);

  $('#ques4').text(questions[3].question);
  $('#butt10').text(questions[3].answerList[0]);
  $('#butt11').text(questions[3].answerList[1]);
  $('#butt12').text(questions[3].answerList[2]);

  $('#ques5').text(questions[4].question);
  $('#butt13').text(questions[4].answerList[0]);
  $('#butt14').text(questions[4].answerList[1]);
  $('#butt15').text(questions[4].answerList[2]);

  //display timer
  $('.clock').html('Time Left: ' + time + ' seconds');

  //start timer
  timerStart();

  //when done button is click it provide the result
  $('.butt3').click(function() {
    stop();
    results();
  });
});
