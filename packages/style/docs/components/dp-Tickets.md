---
title: Tickets
---

<h2>Tickets button</h2>

```html @preview
	<div class="dp-Tickets">
		<span class="dp-Icon dp-iconTickets"></span>
		<span class="dp-Icon dp-iconTickets2"></span>
		<span class="dp-Icon dp-iconTickets3"></span>
		<span class="dp-Icon dp-iconTickets2 is-active"></span>
		<span class="dp-Icon dp-iconTickets3 is-active"></span>
	</div>
```

<h2>Tickets</h2>

```html @preview
	<div class="dp-Tickets" style="height: 450px;">

		<div class="dp-dropdownContainer">
			<div class="dp-Title">
			    <div>
					<span class="dp-Icon dp-iconTickets"></span>
					All tickets <span>(90)</span>
					<span class="dp-Icon dp-iconArrowDown"></span>
				</div>
				<div class="dp-TicketsThumb">
					<span class="dp-Icon dp-iconTickets2 is-active"></span>
					<span class="dp-Icon dp-iconTickets2"></span>
					<span class="dp-Icon dp-iconTickets3"></span>
				</div>
			</div>

		    <ul class="dp-ContextMenu is-active">
				<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-iconLockGray"></span> Lock (permission required)</a></li>
				<li><a href="#"><span class="dp-MenuIcon dp-iconGrayMin"></span> Put ticket on hold</a></li>
				<li class="dp-disabledItem"><a href="#">  <span class="dp-MenuIcon dp-IconDelete"></span>   Delete (permission required)</a></li>
				<li class="dp-DropdownDivider"></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconSplit"></span>  Split message to new ticket</a></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconMerge"></span>  Merge</a></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-iconEmail"></span>  Create linked ticket</a></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconLink"></span>  Link existing ticket</a></li>
				<li class="dp-DropdownDivider"></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconArticle"></span>  Create new pending article</a></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconSnippet"></span>  Create new snippet</a></li>
				<li class="dp-DropdownDivider"></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconPrint"></span>  Print</a></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconDownloadPDF"></span>  Download PDF</a></li>
				<li><a href="#"><span class="dp-MenuIcon dp-iconBugGray"></span>Download Debug File</a></li>
				<li class="dp-DropdownDivider"></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconSpam"></span>  Spam</a></li>
				<li><a href="#"> <span class="dp-MenuIcon dp-IconBan"></span>  Ban</a></li>
			</ul>
		</div>

	</div>
```