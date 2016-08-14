new Vivus('vanguard-svg', {
    type: 'async',
    duration: 100,
    animTimingFunction: Vivus.EASE
}, function(){
  console.log("vanguard animation done");
  $(".wrapper").css("background-color", "#222");
});
