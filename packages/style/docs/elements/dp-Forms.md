---
title: Forms
---

<h4>Forms/select-text</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-TicketSelect dp-TicketSmall">
        <button class="dp-ActionButton ActionButton--Xlarge" type="button">
            <span class="dp-title-item">
                Select
            </span>
        </button>
    </div>
</div>
```

<h4>Forms/select-icon-text</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-TicketSelect dp-TicketSmall">
        <button class="dp-ActionButton ActionButton--Xlarge" type="button">
            <span class="dp-title-item">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                Select
            </span>
        </button>
    </div>
</div>
```

<h4>Forms/checkbox</h4>
```html @preview
<div class="dp-MainWrapper">
	<span class="dp-CustomCheckbox">
		<input type="checkbox" class="dp-ControlInput" id="DemoCheckbox-01">
		<label for="DemoCheckbox-01">text</label>
	</span>
</div>
```

<h4>Forms/radiobutton</h4>
```html @preview
<div class="dp-MainWrapper">

	<form action="#" class="dp-RadioWrapper">
		<div class="dp-RadioItem">
			<input type="radio" id="test1" name="radio-group" checked>
			<label for="test1">Single-line item</label>
		</div>
		<div class="dp-RadioItem">
			<input type="radio" id="test2" name="radio-group">
			<label for="test2">Single-line item</label>
		</div>
	</form>

</div>
```

<h4>fields/text</h4>
```html @preview
<div class="dp-MainWrapper">

	<form action="#" class="dp-Form dp-FieldText">
		<input type="text" class="dp-Fields" value="Support">
	</form>

</div>
```

<h4>fields/icon-text</h4>
```html @preview
<div class="dp-MainWrapper">
	<form action="#" class="dp-Form dp-FieldText">
		<span class="dp-Icon dp-IconSupport Icon-grey-darkest"></span>
		<input type="text" class="dp-Fields" value="Support">
	</form>
</div>
```

<h4>fields/text-menu</h4>
```html @preview
<div class="dp-MainWrapper">
    <form action="#" class="dp-Form dp-TicketSelect dp-FieldMenu">
        <button type="button" class="dp-ActionButton ActionButton--Xlarge">
            <span class="dp-title-item">
                <span class="dp-Fields"> Support </span>
            </span>
        </button>
    </form>
</div>
```

<h4>fields/icon-text-menu</h4>
```html @preview
<div class="dp-MainWrapper">
    <form action="#" class="dp-Form dp-TicketSelect dp-FieldMenu">
        <button type="button" class="dp-ActionButton ActionButton--Xlarge">
            <span class="dp-title-item">
                <span class="dp-Icon dp-IconSupport Icon-grey-darkest"></span>
                <span class="dp-Fields"> Support </span>
            </span>
        </button>
    </form>
</div>
```

<!-- Validation -->

<h4>fields/text-validation</h4>
```html @preview
<div class="dp-MainWrapper">

    <form action="#" class="dp-Form dp-TicketSelect dp-FieldMenu">
        <button type="button" class="dp-ActionButton ActionButton--Xlarge dp-Valid">
            <span class="dp-title-item">
                <span class="dp-Fields"> Support </span>
            </span>

            <span class="dp-TextValid">Required field</span>
        </button>
    </form>

</div>
```

<h4>fields/icon-text-validation</h4>
```html @preview
<div class="dp-MainWrapper">

    <form action="#" class="dp-Form dp-TicketSelect dp-FieldMenu">
        <button type="button" class="dp-ActionButton ActionButton--Xlarge dp-Valid">
            <span class="dp-title-item">
                <span class="dp-Icon dp-IconSupport Icon-grey-darkest"></span>
                <span class="dp-Fields"> Support </span>
            </span>
            <span class="dp-TextValid">Required field</span>
        </button>
    </form>

</div>
```