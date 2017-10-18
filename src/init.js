$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor(Math.random() * (800 - 500) + 500),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    console.log(window.dancers, '@@@@@@@@@');
    
  });


  // $('.addRenButton').on('click', function(event) {
  //   var renMakerFunctionName = $(this).data('ren-maker-function-name');
  //   var renCreator = window[renMakerFunctionName];
  //   var bigRen = new renCreator(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000

  //   );

  //   $('body').append(bigRen.$node);
  //   window.dancers.push(bigRen);

  // });
  
  $('.lineUpButton').on('click', function(event) {
    // document.getElementsByClassName('dancer').addClass('lineUp');
    console.log('line up: ', window.dancers);
    window.dancers.forEach(function(el) {
      console.log(el);
      el.setPosition(700);
  
    });
    
    console.log('lined UP: ', window.dancers);

  });
  $('bigRen').addClass('animated bounceOutLeft');

});

// $('.addRenButton').on('click', function(event) {
//   var renMakerFunctionName = $(this).data('data-ren-maker-function-name');
//   var renCreator = window[renMakerFunctionName];
//   var bigRen = new renCreator(
//     $("body").height() * Math.random(),
//     $("body").width() * Math.random(),
//     Math.random() * 1000

//   );

//   $('body').append(bigRen.$node);
//   window.dancers.push(bigRen);


// });
// console.log(window.dancers);