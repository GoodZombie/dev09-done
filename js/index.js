$(function(){
  
  $('#userSignInput').on('keyup', function(e) {
  
    var inputLength = $(this).val().Length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);
    
  })
  
  $('#userFontInput').on('click', function(e) { 
  
var inputFont = $(this).is(':checked');
  })
  
    $('#confirmOrder').on('click', function(e) { 
    event.preventDefault();
    $('#slideAd').animate({ 'right': '0px' }, 250);
  })
function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;
  
  if(fontUpgrade) { costPerTile = 6;}
  else { costPerTile = 5;}
}
  var subTotal = signLength * costPerTile;
  var shipping = 7;
    if(signLength != 0) { shipping = 7}
  else { shipping= 0;
  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'=grandTotal);
  
  return grandTotal;
}
})