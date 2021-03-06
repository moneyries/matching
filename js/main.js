//define variables (figure out what you want to keep track of)
var numMoves = 0;

function isMatch(c1, c2) {
	if(c1 == c2) {
		//console.log('cards are same');
		return true;
	} else {
		//console.log('cards are different');
		return false;
	}
}

$(function() {
	//this is the click listener
  $('.cards').click(function() {

  	if($('.selected').length == 2) {
  		$('.selected').removeClass('selected');
  	}

  	//this adds the class 'selected' to '.cards', changing its style
	$(this).addClass('selected');

	//this gets the length of the array/string thing
	if($('.selected').length == 2) {
		numMoves = numMoves + 1;

		//this is saying: give me the first selected card
		var card1 = $('.selected:eq(0)').attr('class');
		//this is saying: give me the second selected card
		var card2 = $('.selected:eq(1)').attr('class');

		//this changes the classes if there's a match between 2 cards
		if(isMatch(card1, card2)) {
			$('.selected').addClass('matched').removeClass('selected');
		}

	}

	//end game
	if($('.matched').length == 4) {
		alert('Game over! That took you ' + numMoves + ' moves.');
		$('.matched').removeClass('matched')

	}

	});

});