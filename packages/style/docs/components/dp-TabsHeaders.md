---
title: Tabs & Headers
---

<h2>Tabs/generalsingle</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs Tabs--general">
        <li class="dp-Tabs-item Tabs-item--button">
            <button class="dp-Button Button--large Button--square">
                <span class="dp-Icon dp-add_tab Icon-success"></span>
            </button>
        </li>
        <li class="dp-Tabs-item">
            <span class="dp-TabInfoItem">
                <span class="Tabs-item--row">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-Title">Single-line-item</span>
                </span>
                <span class="Tabs-item--row">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Subtitle">Single-line-item</span>
                </span>
            </span>
            <span class="dp-CloseBtn">
                <span class="dp-Icon dp-close"></span>
            </span>
        </li>
    </ul>
</div>
```

<h2>Tabs/general</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs Tabs--general">

        <li class="dp-Tabs-item Tabs-item--button">
            <button class="dp-Button Button--large Button--square">
                <span class="dp-Icon dp-add_tab Icon-success"></span>
            </button>
        </li>

        <li class="dp-Tabs-item">
            <span class="dp-TabInfoItem">
                <span class="Tabs-item--row">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-Title">Single-line-item</span>
                </span>
                <span class="Tabs-item--row">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Subtitle">Single-line-item</span>
                </span>
            </span>
            <span class="dp-CloseBtn">
                <span class="dp-Icon dp-close"></span>
            </span>
        </li>

        <li class="dp-Tabs-item">
            <span class="dp-TabInfoItem">
                <span class="Tabs-item--row">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-Title">Single-line-item</span>
                </span>
                <span class="Tabs-item--row">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Subtitle">Single-line-item</span>
                </span>
            </span>
            <span class="dp-CloseBtn">
                <span class="dp-Icon dp-close"></span>
            </span>
        </li>


        <li class="dp-Tabs-item">
            <span class="dp-TabInfoItem">
                <span class="Tabs-item--row">
                    <span class="dp-Icon dp-iconOrganisationl"></span>
                    <span class="dp-Title">Single-line-item</span>
                </span>
                <span class="Tabs-item--row">
                    <span class="dp-Subtitle">Single-line-item</span>
                </span>
            </span>
            <span class="dp-CloseBtn">
                <span class="dp-Icon dp-close"></span>
            </span>
        </li>

    </ul>
</div>
```

<h2>Tabs</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs">
        <li class="dp-Tabs-item is-expanded">MESSAGES AND NOTES</li>
        <li class="dp-Tabs-item">FULL LOG</li>
    </ul>

    <ul class="dp-Tabs">
        <li class="dp-Tabs-item">MESSAGES AND NOTES</li>
        <li class="dp-Tabs-item is-expanded">FULL LOG</li>
    </ul>
</div>
```

<h2>Tabs/dropdowns</h2>
```html @preview
<div class="dp-MainWrapper demo-cog demo-menu" style="height: 100px">
    
    <ul class="dp-Tabs">
        <li class="dp-Tabs-item is-expanded">
            Reply
            <button class="dp-Arrow"></button>
            <ul class="dp-Menu">
                <li class="dp-Menu-linkItem">
                    <a href="#" class="dp-Menu-link">Reply</a>
                </li>
                <li class="dp-Menu-linkItem">
                    <a href="#" class="dp-Menu-link">Forward</a>
                </li>
            </ul>
        </li>

        <li class="dp-Tabs-item">
            Add Note
        </li>

        <li class="dp-Tabs-item is-expanded">
            Macros
            <button class="dp-Arrow"></button>
            <ul class="dp-Menu">
                <li class="dp-Menu-search">
                    <form>
                        <span class="dp-Icon dp-IconSearch"></span>
                        <input type="text" class="dp-Input Input--search">
                    </form>
                </li>

                <li class="dp-Menu-linkItem">
                    <a href="#" class="dp-Menu-link">Macro 1</a>
                </li>

                <li class="dp-Menu-linkItem">
                    <a href="#" class="dp-Menu-link">Macro 2</a>
                </li>
            </ul>
        </li>
    </ul>
</div>
```

<h2>header</h2>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SectionTitle">
        <div class="dp-TitleControls">Header</div>
    </div>
</div>
```

<h2>Tabs/apps</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs Tabs--apps">
        <li class="dp-Tabs-item">
            <span class="dp-Icon Icon--document"></span>
            <span class="dp-Title">Text</span>
            <button class="dp-Arrow"></button>
        </li>
        <li class="dp-Tabs-item is-active">
            <span class="dp-Icon Icon--document"></span>
            <span class="dp-Title">Text</span>
            <button class="dp-Arrow"></button>
        </li>
    </ul>
</div>
```

<h2>Tabs/icon</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs Tabs--icons">
        <li class="dp-Tabs-item is-active"><a href="#" class="dp-Icon Icon--email"></a></li>
        <li class="dp-Tabs-item"><a href="#" class="dp-Icon Icon--user"></a></li>
        <li class="dp-Tabs-item"><a href="#" class="dp-Icon Icon--organisation"></a></li>
    </ul>
</div>
```
