---
title: Actions
---

<h4>buttons/actions</h4>
```html @preview
<div class="dp-MainWrapper" style="height: 200px;">
	<div class="dp-DropDownBar">

		<ul class="dp-DropDownList">
			<li class="dp-ActionButton is-active">
				<span class="dp-Icon dp-lock"></span>
				Lock
                <ul class="dp-ContextMenu dp-nowrap">
                    <li><a href="#"><span class="dp-MenuIcon dp-lock"></span>Lock</a></li>
                    <li><a href="#"><span class="dp-MenuIcon dp-iconGrayMin"></span>Put ticket on hold</a></li>
                    <li><a href="#"><span class="dp-MenuIcon dp-Bin"></span>Delete</a></li>
                </ul>
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconLink"></span>
				Link
				<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"><span class="dp-MenuIcon dp-lock"></span> Create linked ticket </a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-IconLink"></span> Link existing ticket </a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-IconSplit"></span> Split message to new ticket </a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-IconMerge"></span> Merge </a></li>
				</ul>
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPlusGrey"></span>
				New
				<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"><span class="dp-MenuIcon dp-IconArticle"></span> New pending article </a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-IconSnippet"></span> New Snippet </a></li>
				</ul>
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPrint"></span>
				Print
				<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"> <span class="dp-MenuIcon dp-IconPrint"></span> Print</a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-IconDownloadPDF"></span> Download PDF</a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-iconBugGray"></span> Download Debug File</a></li>
				</ul>
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-ban"></span>
				Ban
				<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"> <span class="dp-MenuIcon dp-ban"></span> Ban</a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-IconSpam"></span> Spam</a></li>
				</ul>
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-rocket"></span>
				Actions
				<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"> <span class="dp-MenuIcon dp-rocket"></span> Misc value</a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-rocket"></span> Misc value</a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-rocket"></span> Misc value</a></li>
				</ul>
			</li>
		</ul>

	</div>
</div>
```
