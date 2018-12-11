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
		<button disabled class="dp-Button">Button</button>
		<button class="dp-Button">Button</button>
	</div>

	<!-- Button/outlined -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/outlined</div>
		<button disabled class="dp-Button Button--outlined">Button</button>
		<button class="dp-Button Button--outlined">Button</button>
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
			<button disabled class="dp-Button Button--small Button--outlined">Button</button>
		</div>
		<div class="dp-ButtonDescription">
			<button class="dp-Button Button--small Button--outlined">Button</button>
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
		<button class="dp-Button Button--more">
			<span class="dp-dots">...</span>
		</button>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/small-more</div>
		<button class="dp-Button Button--more Button--small">
			<span class="dp-dots">...</span>
		</button>
	</div>

	<!-- Button/label -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/label</div>
		<div class="dp-ButtonDescription">
			<button class="dp-Button Button--label">
				Button<span class="dp-Icon dp-IconPlusBtn"></span>
			</button>
		</div>
	</div>

	<!-- Button/add-round -->
	<div class="dp-ButtonItem dp-m-0">
		<div class="dp-ButtonTitle">Button/add-round</div>
		<button class="dp-Button Button--round">
			<span class="dp-Icon dp-add-round"></span>
		</button>
	</div>

	<!-- Button/add-round-small -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-round-small</div>
		<button class="dp-Button Button--link Button--small">
			<span class="dp-Icon dp-add_follower--primary"></span>
			<span id="text">Add</span>
		</button>
	</div>

	<!-- Button/add-square-large -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-square-large</div>
		<button class="dp-Button Button--large Button--square">
			<span class="dp-Icon dp-add_tab--netural"></span>
		</button>
	</div>

	<!-- Button/add-square -->
	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-square</div>
		<button class="dp-Button Button--small Button--square">
			<span class="dp-Icon dp-add-square"></span>
		</button>
	</div>

	<!-- Button/action -->
	<div class="dp-ButtonItem dp-m-0">
		<div class="dp-ButtonTitle">Button/action</div>

		<div class="dp-DropDownBar">
            <!-- <button class="dp-Button dp-ActionButton"> -->
            <button class="dp-Button Button--actions">
                <span class="dp-Icon dp-lock"></span>
                <span id="text">Button</span>
            </button>
       </div>

	</div>

</div>

```
