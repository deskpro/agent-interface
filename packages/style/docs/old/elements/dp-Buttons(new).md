---
title: Buttons New
---

```html @preview
<div class="dp-ButtonContainer">

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/large</div>
		<button class="dp-Button Button--large Button--in-active">Button in-active</button>
		<button class="dp-Button Button--large Button--active">Button active</button>
		<button class="dp-Button Button--large Button--rollover">Button rollover</button>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/small</div>
		<div class="dp-ButtonDescription"><button class="dp-Button Button--small Button--in-active">Button</button> <span class="dp-ButtonState">inactive</span></div>
		<div class="dp-ButtonDescription"><button class="dp-Button Button--small">Button</button> <span class="dp-ButtonState">active</span></div>
		<div class="dp-ButtonDescription"><button class="dp-Button Button--small Button--rollover">Button</button> <span class="dp-ButtonState">rollover</span></div>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/icon-text</div>
		<button class="dp-ActionButton Button--in-active"><span class="dp-Icon dp-IconArrowBtn"></span>Button</button>
		<button class="dp-ActionButton Button--active"><span class="dp-Icon dp-IconArrowBtn"></span>Button</button>
		<button class="dp-ActionButton Button--rollover"><span class="dp-Icon dp-IconArrowBtn"></span>Button</button>
	</div>




	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/more</div>
		<a href="#" class="dp-ExpandButton"><span class="dp-dots">…</span></a>
		<a href="#" class="dp-ExpandButton Button--in-active"><span class="dp-dots">…</span></a>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/more-small</div>
		<a href="#" class="dp-ExpandButton dp-ExpandButton-small"><span class="dp-dots">…</span></a>
		<a href="#" class="dp-ExpandButton dp-ExpandButton-small Button--in-active"><span class="dp-dots">…</span></a>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/label</div>
		<button class="dp-Button Button--small dp-ButtonPlus">Button<span class="dp-Icon dp-IconPlusBtn"></span></button>
		<button class="dp-Button Button--small dp-ButtonPlus dp-LabelRollover">Button<span class="dp-Icon dp-IconPlusBtn"></span></button>
	</div>



	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-round</div>
		<a href="#" class="dp-ExpandButton"><span class="dp-dots">…</span></a>
		<a href="#" class="dp-ExpandButton Button--in-active"><span class="dp-dots">…</span></a>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/add-round-small</div>
		<a href="#" class="dp-ExpandButton dp-ExpandButton-small"><span class="dp-dots">…</span></a>
		<a href="#" class="dp-ExpandButton dp-ExpandButton-small Button--in-active"><span class="dp-dots">…</span></a>
	</div>

	<div class="dp-ButtonItem">
		<div class="dp-ButtonTitle">Button/action</div>
		<button class="dp-Button Button--small dp-ButtonPlus">Button<span class="dp-Icon dp-IconPlusBtn"></span></button>
		<button class="dp-Button Button--small dp-ButtonPlus dp-LabelRollover">Button<span class="dp-Icon dp-IconPlusBtn"></span></button>
	</div>

</div>

```


# Rounded

```html @preview
<button class="dp-Button Button--rounded">Default</button>
<button class="dp-Button Button--primary Button--rounded">Primary</button>
<button class="dp-Button Button--secondary Button--rounded">Secondary</button>
<button class="dp-Button Button--success Button--rounded">Success</button>
<button class="dp-Button Button--info Button--rounded">Info</button>
<button class="dp-Button Button--warning Button--rounded">Warning</button>
<button class="dp-Button Button--danger Button--rounded">Danger</button>
```

# Sizes

```html @preview
<button class="dp-Button Button--small">Small</button>
<button class="dp-Button">Normal</button>
<button class="dp-Button Button--medium">Medium</button>
<button class="dp-Button Button--large">Large</button>
```

# Disabled

```html @preview
<button disabled class="dp-Button">Default</button>
<button disabled class="dp-Button Button--primary">Primary</button>
<button disabled class="dp-Button Button--secondary">Secondary</button>
<button disabled class="dp-Button Button--success">Success</button>
<button disabled class="dp-Button Button--info">Info</button>
<button disabled class="dp-Button Button--warning">Warning</button>
<button disabled class="dp-Button Button--danger">Danger</button>
```
