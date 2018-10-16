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

	<div style="height: 250px;">

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

	</div>
	
```

<h2>ActionButton and ContextMenu</h2>
```html @preview

	<div class="dp-dropdownContainer">
	    <button class="dp-ActionButton" type="button">
	        <span class="dp-Icon dp-iconRocketBlue"></span>
	        <span class="dp-Icon dp-iconRocketwhite"></span>
	        Actions
	    </button>

	    <ul class="dp-ContextMenu is-active">
	        <li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Change User</a></li>
			<li><a href="#">Another action</a></li>
			<li><a href="#">Something else here</a></li>
	    </ul>
	</div>

```