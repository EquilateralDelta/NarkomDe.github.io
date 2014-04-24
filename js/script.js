$(function(){
  // var t = new Trianglify({
  //   noiseIntensity: 0,
  //   cellsize: 90,
  //   x_gradient: colorbrewer.YlGnBu[20], 
  //   y_gradient: colorbrewer.RdPu[20]
  // });
  // var pattern = t.generate(2000, 2000);
  // document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
  
  $('.content.long').hide();

  $('.button').click(function(){
    next = $(this).next('.content.long')
    if(next.is(":visible")){
      $('.content.long').hide();
    } else {
      $('.content.long').hide();
      next.show();
    }
  })

})