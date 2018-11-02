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
	
	$(document).on("click", ".dp-Template .dp-TasksItem.dp-DropMenuJs", function(){
		$(this).closest('.dp-MenuBarList').find('.dp-Tasks').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});


	$(document).on("click", ".dp-Template .dp-PropertiesItem.dp-DropMenuJs", function(){
		$(this).closest('.dp-MenuBarList').find('.dp-TicketProperties').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});

	$(document).on("click", ".dp-Template .dp-SubTitleListItem.dp-DropMenuJs", function(){
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


	$(document).on("click", ".dp-Template .dp-ModuleNavList.dp-DropMenuJs", function(){
		$(this).toggleClass('is-active');
	});

	//toggle is-active class for dp-FilterResultItem/ find checkbox and toggle checked
	$(document).on("click", ".dp-Template .dp-FilterResultItem", function(){
		$(this).toggleClass('is-active');
		if( $(this).hasClass('is-active') ){
			$(this).find('input[type=checkbox]').prop( "checked", true );
		} else {
			$(this).find('input[type=checkbox]').prop( "checked", false );
		}
	});

	// show menu after click right mouse button on dp-FilterResultItem
	$(function() {
		$("body").on("contextmenu", ".dp-Template .dp-FilterResultItem", function(e) {
			$('.dp-FilterResultMenu').removeClass('is-active');
			$(this).find('.dp-FilterResultMenu').addClass('is-active');
			return false;
		});
		$(document).on("click", function (e){
			var FilterResultMenu = $(".dp-FilterResultMenu");
			if (!FilterResultMenu.is(e.target) && FilterResultMenu.has(e.target).length === 0) {
				FilterResultMenu.removeClass('is-active');
			}
		});
	});


	


	$(document).on("click", ".dp-FilterControlsItem .dp-DropMenuJs", function(){
		$('.dp-ContextMenu').removeClass('is-active');
		$(this).closest('.dp-FilterControlsItem').find('.dp-ContextMenu').addClass('is-active');
		// $(this).closest('.dp-FilterControlsItem').toggleClass('is-active');
	});

	$(document).on("click", ".dp-FilterControlsItem .dp-ContextMenu a", function(e){
		e.preventDefault();
		var thisVal = $(this).text();
		var itemVal = $(this).closest('.dp-FilterControlsItem').find('.jsContextItem');
		itemVal.text(thisVal);

		$(this).closest('.dp-FilterControlsItem').find('.dp-ContextMenu').removeClass('is-active');
	});


})