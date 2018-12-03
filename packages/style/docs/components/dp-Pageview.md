---
title: Page View (developing)
---

<h4>buttons/actions</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-DropDownBar">
		<ul class="dp-DropDownList">
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-lock"></span>
				Lock
			</li>
			<li class="dp-ActionButton is-disabled">
				<span class="dp-Icon dp-IconLink"></span>
				Link
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPlusGrey"></span>
				New
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPrint"></span>
				Print
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-ban"></span>
				Ban
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-iconRocketGray"></span>
				Actions
			</li>
		</ul>
	</div>
</div>
```

```html @preview
<div class="dp-MainWrapper" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-DropDownList">
			<li class="dp-ActionButton is-active">
				<span class="dp-Icon dp-lock"></span>
				Lock
                <ul class="dp-ContextMenu">
                    <li><a href="#"><span class="dp-Icon dp-lock"></span>Lock</a></li>
                    <li><a href="#"><span class="dp-Icon dp-iconGrayMin"></span>Put ticket on hold</a></li>
                    <li><a href="#"><span class="dp-Icon dp-Bin"></span>Delete</a></li>
                </ul>
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconLink"></span>
				Link
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPlusGrey"></span>
				New
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPrint"></span>
				Print
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-ban"></span>
				Ban
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-iconRocketGray"></span>
				Actions
			</li>
		</ul>

	</div>
</div>
```

```html @preview
<div class="dp-MainWrapper" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-DropDownList">
			<li class="dp-ActionButton is-active">
				<span class="dp-Icon dp-lock"></span>
				Lock
                <ul class="dp-ContextMenu">
                    <li><a href="#"><span class="dp-Icon dp-lock"></span>Lock</a></li>
                    <li><a href="#"><span class="dp-Icon dp-iconGrayMin"></span>Put ticket on hold</a></li>
                    <li><a href="#"><span class="dp-Icon dp-Bin"></span>Delete</a></li>
                </ul>
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconLink"></span>
				Link
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPlusGrey"></span>
				New
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPrint"></span>
				Print
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-ban"></span>
				Ban
			</li>
			<li class="dp-ActionButton">
				<span class="dp-Icon dp-iconRocketGray"></span>
				Actions
			</li>
		</ul>

	</div>
</div>
```





<h2>Lock Drpodown</h2>
```html @preview
<div style="height: 100px;">
	<ul class="dp-ContextMenu is-active" style="top: 10px; left: 10px;">
		<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-lock"></span> Lock</a></li>
		<li><a href="#"><span class="dp-MenuIcon dp-iconGrayMin"></span> Put ticket on hold</a></li>
		<li class="dp-disabledItem"><a href="#">  <span class="dp-MenuIcon dp-Bin"></span> Delete </a></li>
	</ul>
</div>
```

<h2>Link Dropdown</h2>

```html @preview
<div style="height: 100px;">
	<ul class="dp-ContextMenu is-active" style="top: 10px; left: 10px;">
		<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-iconEmail"></span> Create linked ticket </a></li>
		<li><a href="#"><span class="dp-MenuIcon dp-IconLink"></span> Link existing ticket </a></li>
		<li class="dp-disabledItem"><a href="#">  <span class="dp-MenuIcon dp-IconSplit"></span> Split message to new ticket </a></li>
		<li class="dp-disabledItem"><a href="#">  <span class="dp-MenuIcon dp-IconMerge"></span> Merge </a></li>
	</ul>
</div>
```

<h2>New Dropdown</h2>

```html @preview
<div style="height: 100px;">
	<ul class="dp-ContextMenu is-active" style="top: 10px; left: 10px;">
		<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-IconArticle"></span> New pending article </a></li>
		<li><a href="#"><span class="dp-MenuIcon dp-IconSnippet"></span> New Snippet </a></li>
	</ul>
</div>
```

<h2>Print Dropdown</h2>

```html @preview
<div style="height: 100px;">
	<ul class="dp-ContextMenu is-active" style="top: 10px; left: 10px;">
		<li><a href="#"> <span class="dp-MenuIcon dp-IconPrint"></span> Print</a></li>
		<li><a href="#"> <span class="dp-MenuIcon dp-IconDownloadPDF"></span> Download PDF</a></li>
		<li><a href="#"><span class="dp-MenuIcon dp-iconBugGray"></span> Download Debug File</a></li>
	</ul>
</div>
```

<h2>Ban Dropdown</h2>

```html @preview
<div style="height: 100px;">
	<ul class="dp-ContextMenu is-active" style="top: 10px; left: 10px;">
		<li><a href="#"> <span class="dp-MenuIcon dp-IconBan"></span> Ban</a></li>
		<li><a href="#"> <span class="dp-MenuIcon dp-IconSpam"></span> Spam</a></li>
	</ul>
</div>
```

<h2>Actions Dropdown</h2>

```html @preview
<div style="height: 100px;">
	<ul class="dp-ContextMenu is-active" style="top: 10px; left: 10px;">
		<li><a href="#"> <span class="dp-MenuIcon dp-iconRocketGray"></span> Misc value</a></li>
		<li><a href="#"> <span class="dp-MenuIcon dp-iconRocketGray"></span> Misc value</a></li>
		<li><a href="#"> <span class="dp-MenuIcon dp-iconRocketGray"></span> Misc value</a></li>
	</ul>
</div>
```


```html @preview
<div style="height: 200px;">
	<div class="dp-DropDownBar">

		<ul class="dp-DropDownList">
			<li class="dp-ActionButton is-active">
				<span class="dp-Icon dp-lock Icon--Gray"></span>
				<span class="dp-Icon dp-iconLockWhite Icon--White"></span>
				Lock
				<ul class="dp-ContextMenu dp-nowrap">
					<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-lock"></span> Lock </a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-iconGrayMin"></span> Put ticket on hold </a></li>
					<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-Bin"></span> Delete </a></li>
				</ul>
	        </li>

	        <li class="dp-ActionButton">
				<span class="dp-Icon dp-IconLink Icon--Gray"></span>
				<span class="dp-Icon dp-IconLinkWhite Icon--White"></span>
				Link
				<ul class="dp-ContextMenu dp-nowrap">
					<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-iconEmail"></span> Create linked ticket </a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-IconLink"></span> Link existing ticket </a></li>
					<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-IconSplit"></span> Split message to new ticket </a></li>
					<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-IconMerge"></span> Merge </a></li>
				</ul>
			</li>

	        <li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPlusGrey Icon--Gray"></span>
				<span class="dp-Icon dp-IconPlusWhite Icon--White"></span>
	        	New
				<ul class="dp-ContextMenu dp-nowrap">
					<li class="dp-disabledItem"><a href="#"><span class="dp-MenuIcon dp-IconArticle"></span> New pending article </a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-IconSnippet"></span> New Snippet </a></li>
				</ul>
	        </li>

	        <li class="dp-ActionButton">
				<span class="dp-Icon dp-IconPrint Icon--Gray"></span>
				<span class="dp-Icon dp-IconPrintWhite Icon--White"></span>
	        	Print
				<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"> <span class="dp-MenuIcon dp-IconPrint"></span> Print</a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-IconDownloadPDF"></span> Download PDF</a></li>
					<li><a href="#"><span class="dp-MenuIcon dp-iconBugGray"></span> Download Debug File</a></li>
				</ul>
	        </li>

	        <li class="dp-ActionButton">
				<span class="dp-Icon dp-IconBan Icon--Gray"></span>
				<span class="dp-Icon dp-IconBanWhite Icon--White"></span>
	        	Ban
				<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"> <span class="dp-MenuIcon dp-IconBan"></span> Ban</a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-IconSpam"></span> Spam</a></li>
				</ul>
	        </li>

	        <li class="dp-ActionButton">
				<span class="dp-Icon dp-iconRocketGray Icon--Gray"></span>
				<span class="dp-Icon dp-iconRocketwhite Icon--White"></span>
	        	Actions
	        	<ul class="dp-ContextMenu dp-nowrap">
					<li><a href="#"> <span class="dp-MenuIcon dp-iconRocketGray"></span> Misc value </a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-iconRocketGray"></span> Misc value </a></li>
					<li><a href="#"> <span class="dp-MenuIcon dp-iconRocketGray"></span> Misc value </a></li>
				</ul>
	    	</li>
	    </ul>

	</div>
</div>
```