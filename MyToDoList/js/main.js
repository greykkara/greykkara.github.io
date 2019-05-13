$(document).ready(function () {
	var $btn = $(".btn");
	// $("html,body").css("overflow","hidden");

	//Btn, input areas
	$btn.click(function (event) {
		event.preventDefault();
		var toAdd = $('input[name=todo__text]').val();
		var Description = $('input[name=todo__description]').val();
		if (toAdd === '') return;
		if (Description === '') return;
		$("ul").append("<li class='new__list'>" + toAdd + "<span class='close'><i class='fas fa-times'></i></span><span class='expand arrow'><i class='fas fa-angle-down'></i></span><div class='slide'><p>" + Description + "</p></div></li>");
		$('input[name="todo__text"]').val('');
		$('input[name="todo__description"]').val('');
		$(".todo__empty").hide();
	});

	$('input[name="todo__text"]').keypress(function (e) {
		if (e.which == 13) {
			$('.btn').click();
			e.preventDefault();
		}
	});

	$('input[name="todo__description"]').keypress(function (e) {
		if (e.which == 13) {
			$('.btn').click();
			e.preventDefault();
		}
	});

	//Check of specific Todo by clicking
	$("ul").on("click", "li", function () {
		$(this).toggleClass("completed");
	});

	//click on X to delete li
	$("ul").on("click", ".close", function (event) {
		$(this).parent().fadeOut(500, function () {
			$(this).remove();
			event.stopPropagation();
			var divs = $('.todo__empty');

			if($(".new__list").length == 0) {
				divs.show();
			}
		});
	});

	// click on arrow to hide or expand li
	$("ul").on("click", ".arrow", function (event) {
		$(this).siblings('.slide').slideToggle('fast');
		e.preventDefault();
		event.stopPropagation();
			$(this).toggleClass("expand__rotate");
	});

});