---
title: Buttons
---

```html @preview
<div class="dp-ButtonContainer">

	<!-- demonstration text -->
	<div class="dp-StateWrapper">
		<span class="dp-ButtonState">inactive</span>
		<span class="dp-ButtonState">active</span>
	</div>

	<!-- Button/contained -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/contained</div>
		<button disabled class="dp-Button Button--large">Button</button>
		<button class="dp-Button Button--large">Button</button>
	</div>

	<!-- Button/outlined -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/outlined</div>
		<button disabled class="dp-Button Button--large dp-Outlined">Button</button>
		<button class="dp-Button Button--large dp-Outlined">Button</button>
	</div>

	<!-- Button/small-contained  -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/small</div>
		<div class="dp-ButtonDescription">
			<button disabled class="dp-Button Button--small">Button</button>
		</div>
		<div class="dp-ButtonDescription">
			<button class="dp-Button Button--small">Button</button>
		</div>
	</div>

	<!-- Button/small-outlined  -->
	<div class="dp-ButtonItem dp-m-0">
		<div class="dp-ButtonTitle">Button/small</div>
		<div class="dp-ButtonDescription">
			<button disabled class="dp-Button Button--small dp-Outlined">Button</button>
		</div>
		<div class="dp-ButtonDescription">
			<button class="dp-Button Button--small dp-Outlined">Button</button>
		</div>
	</div>

	<!-- demonstration text -->
	<div class="dp-StateWrapper">
		<span class="dp-ButtonState">inactive</span>
		<span class="dp-ButtonState">active</span>
	</div>

	<!-- Button/icon-text -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/icon-text</div>
		<button disabled class="dp-Button dp-IconTextButton"><span class="dp-Icon dp-transfer"></span>Button</button>
		<button class="dp-Button dp-IconTextButton"><span class="dp-Icon dp-transfer"></span>Button</button>
	</div>

</div>

<div class="dp-ButtonContainer">

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/more</div>
		<button class="dp-Button dp-ExpandButton">
			<span class="dp-dots">...</span>
		</button>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/small-more</div>
		<button class="dp-Button dp-ExpandButton dp-ExpandButton-small"><span class="dp-dots">...</span></button>
	</div>

	<!-- Button/label -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/label</div>
		<div class="dp-ButtonDescription">
			<button class="dp-Button Button--small Button-label dp-Outlined">Button<span class="dp-Icon dp-IconPlusBtn"></span></button>
		</div>
	</div>

	<!-- Button/add-round -->
	<div class="dp-ButtonItem dp-m-0">
		<div class="dp-ButtonTitle">Button/add-round</div>
		<button class="dp-Button dp-Icon dp-add-round"></button>
	</div>

	<!-- Button/add-round-small -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-round-small</div>
		<span class="dp-AddRoundSmall">
	        <button class="dp-Button dp-Icon dp-add_follower--primary"><span class="dp-txtBtn"> Add </span></button>
	    </span>
	</div>

	<!-- Button/add-square-large -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-square-large</div>
		<button class="dp-Button dp-Icon dp-add_tab--netural"></button>
	</div>

	<!-- Button/add-square -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-square</div>
		<button class="dp-Button dp-Icon dp-add_tab--reverse"></button>
	</div>

	<!-- Button/action -->
	<div class="dp-ButtonItem dp-m-0">
		<div class="dp-ButtonTitle">Button/action</div>

		<div class="dp-DropDownBar">
            <button class="dp-Button dp-ActionButton dp-Button">
                <span class="dp-Icon dp-lock"></span>
                Button
            </button>
       </div>

	</div>

</div>

```
