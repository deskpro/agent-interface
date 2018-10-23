$(document).ready(function(){

	$(document).on("click", ".dp-IconPanelList .dp-DropMenuJs", function(){
		$(this).find('.dp-YourAccount').toggleClass('is-active');
	});

	$(document).on("click", ".dp-Tickets .dp-DropMenuJs", function(){
		$('.dp-TicketMenu').toggleClass('is-active');
		$(this).closest('.dp-Title').toggleClass('is-active');
	});

	$(document).on("click", ".dp-TemplateMainBarContainer .dp-DropMenuJs", function(){
		$(this).closest('.dp-TemplateMainBarContainer').find('.dp-ContextMenu').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});
	
	$(document).on("click", ".dp-MenuBarList .dp-DropMenuJs", function(){
		$(this).closest('.dp-MenuBarList').find('.dp-Tasks').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});


	$(document).on("click", ".dp-UserOverlay .dp-DropMenuJs", function(){
		$('.dp-OverlayWrapp').toggleClass('is-active');
	});
	
})