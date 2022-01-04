let clicked = false
let blocks = $('.tic-tack-toe-block')
let xId = []
let oId = []
let xTotal=0
let oTotal=0
$(document).ready(()=>{
	$('#refresh').click(()=>{
		location.reload()
	})
	$('.tic-tack-toe-block').click((e)=>{
		if(!clicked){
			$(e.target.children[0]).addClass('show-x')
			$(e.target).addClass('block-event')
			$(e.target.children[1]).remove()
			clicked=true
			$('#refresh').addClass('displeyed-refresh')
			xId.push(e.target.id)		
			if(xId.includes('1') && xId.includes('2') && xId.includes('3')){
				$('.line-hor-top').addClass('line-hor-top-block')
				$(blocks).addClass('block-event')
				$('#x-total').text(xTotal)
				let total = Number(localStorage.getItem('x-total'))
				let addTotal = total+1
				xTotal=addTotal
				$('#x-total').text(xTotal)
				localStorage.setItem('x-total',addTotal)
			}	
			if(xId.includes('4') && xId.includes('5') && xId.includes('6')){
				$('.line-hor-between').addClass('line-hor-between-block')
				$(blocks).addClass('block-event')
				let total = Number(localStorage.getItem('x-total'))
				let addTotal = total+1
				xTotal=addTotal
				$('#x-total').text(xTotal)
				localStorage.setItem('x-total',addTotal)
			}
			if(xId.includes('7') && xId.includes('8') && xId.includes('9')){
				$('.line-hor-last').addClass('line-hor-last-block')
				$(blocks).addClass('block-event')
				let total = Number(localStorage.getItem('x-total'))
				let addTotal = total+1
				xTotal=addTotal
				$('#x-total').text(xTotal)
				localStorage.setItem('x-total',addTotal)
			}
			if(xId.includes('1') && xId.includes('4') && xId.includes('7')){
				$('.line-vertical-left').addClass('line-vertical-left-block')
				$(blocks).addClass('block-event')
				let total = Number(localStorage.getItem('x-total'))
				let addTotal = total+1
				xTotal=addTotal
				$('#x-total').text(xTotal)
				localStorage.setItem('x-total',addTotal)
			}
			if(xId.includes('2') && xId.includes('5') && xId.includes('8')){
				$('.line-vertical-betw').addClass('line-vertical-betw-block')
				$(blocks).addClass('block-event')
				let total = Number(localStorage.getItem('x-total'))
				let addTotal = total+1
				xTotal=addTotal
				$('#x-total').text(xTotal)
				localStorage.setItem('x-total',addTotal)
			}
			if(xId.includes('3') && xId.includes('6') && xId.includes('9')){
				$('.line-vertical-right').addClass('line-vertical-right-block')
				$(blocks).addClass('block-event')
				let total = Number(localStorage.getItem('x-total'))
				let addTotal = total+1
				xTotal=addTotal
				$('#x-total').text(xTotal)
				localStorage.setItem('x-total',addTotal)
			}
			if(xId.includes('1') && xId.includes('5') && xId.includes('9')){
			  $('.angle-line-right').addClass('angle-line-right-block')
			  $(blocks).addClass('block-event')
			  let total = Number(localStorage.getItem('x-total'))
			  let addTotal = total+1
			  xTotal=addTotal
			  $('#x-total').text(xTotal)
			  localStorage.setItem('x-total',addTotal)
			}
			if(xId.includes('3') && xId.includes('5') && xId.includes('7')){
				$('.angle-line-left').addClass('angle-line-left-block')
				$(blocks).addClass('block-event')
				let total = Number(localStorage.getItem('x-total'))
				let addTotal = total+1
				xTotal=addTotal
				$('#x-total').text(xTotal)
				localStorage.setItem('x-total',addTotal)
			  
			}
			return
		}
		if(clicked){
			$(e.target.children[1]).addClass('show-o')
			$(e.target).addClass('block-event')
			$(e.target.children[0]).remove()
			clicked=false
			oId.push(e.target.id)	
			if(oId.includes('1') && oId.includes('2') && oId.includes('3')){
				$('.line-hor-top').addClass('line-hor-top-block')
				$(blocks).addClass('block-event')
			}	
			if(oId.includes('4') && oId.includes('5') && oId.includes('6')){
				$('.line-hor-between').addClass('line-hor-between-block')
				$(blocks).addClass('block-event')
			}
			if(oId.includes('7') && oId.includes('8') && oId.includes('9')){
				$('.line-hor-last').addClass('line-hor-last-block')
				$(blocks).addClass('block-event')
			}
			if(oId.includes('1') && oId.includes('4') && oId.includes('7')){
				$('.line-vertical-left').addClass('line-vertical-left-block')
				$(blocks).addClass('block-event')
			}
			if(oId.includes('2') && oId.includes('5') && oId.includes('8')){
				$('.line-vertical-betw').addClass('line-vertical-betw-block')
				$(blocks).addClass('block-event')
			}
			if(oId.includes('3') && oId.includes('6') && oId.includes('9')){
				$('.line-vertical-right').addClass('line-vertical-right-block')
				$(blocks).addClass('block-event')
			}
			if(oId.includes('1') && oId.includes('5') && oId.includes('9')){
			 $('.angle-line-right').addClass('angle-line-right-block')
			 $(blocks).addClass('block-event')
			}
			if(oId.includes('3') && oId.includes('5') && oId.includes('7')){
			 $('.angle-line-left').addClass('angle-line-left-block')
			 $(blocks).addClass('block-event')
			}
			return
		}

		
	})
	$('#apply-x').click(()=>{
		let xName=$('#x-player').val();
		localStorage.setItem('x-name',xName)
		$('#x-player-name').text(xName)
		$('#x-player').val('');
	})
	$('#apply-o').click(()=>{
		let oName=$('#o-player').val();
		localStorage.setItem('o-name',oName)
		$('#o-player-name').text(oName)
		$('#o-player').val('');

	})
	$('#remove-users-btn').click(()=>{
		localStorage.clear()
		$('#x-player-name').text('Player')
		$('#o-player-name').text('Player')
		$('#o-player').val('');
		$('#x-player').val('');
		$('#x-total').text(0)
		$('#o-total').text(0)
	})
	if(localStorage.getItem('x-name') || localStorage.getItem('o-name')){
	$('#x-player-name').text(localStorage.getItem('x-name'))
	$('#o-player-name').text(localStorage.getItem('o-name'))
	}
	$('#x-total').text(xTotal)
	$('#o-total').text(oTotal)
	if(localStorage.getItem('x-total')){
		$('#x-total').text(localStorage.getItem('x-total'))
		$('#o-total').text('0')
	}else if(localStorage.getItem('o-total')){
		$('#o-total').text(localStorage.getItem('o-total'))
		$('#x-total').text('0')
	}

})
