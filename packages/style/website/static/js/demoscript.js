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


	$(document).on("click", ".dp-SidebarWrapper .dp-SectionBody-item.dp-DropMenuJs", function(){
		$('.dp-OverlayWrapp').toggleClass('is-active');
	});

	$(document).on("click", ".dp-OverlayWrapp .dp-IconCloseBlue.dp-DropMenuJs", function(){
		$('.dp-OverlayWrapp').removeClass('is-active');
	});


	$(document).on("click", ".dp-Template .dp-OverlayWrapp .ButtonTabs-arrow.dp-DropMenuJs", function(){
		$('.dp-Template .dp-OverlayWrapp .dpApps-AppPanel').toggleClass('is-active');
	});

	$(document).on("click", ".dp-TemplateMainContentRight .ButtonTabs-arrow", function(){
		$('.dp-TemplateMainContentRight .dpApps-AppPanel').toggleClass('is-active');
	});


	$(document).on("click", ".dp-SidebarWrapper .dp-SectionBody-item.dp-DropMenuJs", function(){
		$('.dp-TemplateInnerContentLeft .dp-PageSidebar.dp-UserActivSidebar').toggleClass('is-active');
	});
	

	$(document).on("click", ".dp-TicketMenuItem.dp-DropMenuJs", function(){
		$(this).toggleClass('is-active');
	});

})