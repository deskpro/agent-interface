---
title: ActionButton and ContextMenu
---

<h2>ActionButton</h2>
```html @preview
	<button class="dp-ActionButton" type="button">
		<span class="dp-Icon dp-iconRocketBlue"></span>
		<span class="dp-Icon dp-iconRocketwhite"></span>
		Actions
	</button>

	<button class="dp-ActionButton is-active" type="button">
		<span class="dp-Icon dp-iconRocketBlue"></span>
		<span class="dp-Icon dp-iconRocketWhite"></span>
		Actions
	</button>
```

<h2>ContextMenu</h2>
```html @preview

	<div style="height: 450px;">

		<ul class="dp-ContextMenu is-active" style="top: 10px; left: 10px;">
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Another action</a></li>
			<li><a href="#">Something else here</a></li>
		</ul>

		<ul class="dp-ContextMenu is-active" style="top: 10px; left: 200px;">
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
	
```

<h2>ActionButton and ContextMenu</h2>
```html @preview

	<div style="height: 450px;">

		<div class="dp-dropdownContainer">
			<button class="dp-ActionButton" type="button">
			    <span class="dp-Icon dp-iconRocketBlue"></span>
			    <span class="dp-Icon dp-iconRocketwhite"></span>
			    Actions
			</button>

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