---
title: Tabs & Headers
---

<h2>Tabs/general</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs Tabs-General dp-Selected">

        <li class="dp-Tabs-item Tabs--button">
            <span class="dp-Icon"></span>
        </li>

        <li class="dp-Tabs-item">
            <span class="dp-Flex">
                <span class="dp-Icon dp-email_small"></span>
                <span class="dp-Title">Single-line-item</span>
            </span>
            <span class="dp-Flex">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                <span class="dp-Subtitle">Single-line-item</span>
            </span>
        </li>

        <li class="dp-Tabs-item Tabs--primary">
            <span class="dp-Flex">
                <span class="dp-Icon dp-email_small"></span>
                <span class="dp-Title">Single-line-item</span>
            </span>
            <span class="dp-Flex">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                <span class="dp-Subtitle">Single-line-item</span>
            </span>
        </li>

        <li class="dp-Tabs-item">
            <a href="#">
                <span class="dp-Flex">
                    <span class="dp-Icon dp-iconOrganisation"></span>
                    <span class="dp-Title">Single-line-item</span>
                </span>
                <span class="dp-Flex">
                    <span class="dp-Icon"></span>
                    <span class="dp-Subtitle">Single-line-item</span>
                </span>
            </a>
        </li>

    </ul>
</div>
```

<h2>Tabs/generalsingle</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs Tabs-General">
        <li class="dp-Tabs-item Tabs--button">
            <span class="dp-Icon"></span>
        </li>
        <li class="dp-Tabs-item">
            <span class="dp-Flex">
                <span class="dp-Icon dp-email_small"></span>
                <span class="dp-Title">Single-line-item</span>
            </span>
            <span class="dp-Flex">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                <span class="dp-Subtitle">Single-line-item</span>
            </span>
        </li>
    </ul>
</div>
```

<h2>Tabs</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-Tabs Tabs--single">
        <li class="dp-Tabs-item Tabs--primary">MESSAGES AND NOTES</li>
        <li class="dp-Tabs-item">FULL LOG</li>
    </ul>

    <ul class="dp-Tabs Tabs--single">
        <li class="dp-Tabs-item">MESSAGES AND NOTES</li>
        <li class="dp-Tabs-item Tabs--primary">FULL LOG</li>
    </ul>
</div>
```

<h2>Tabs/dropdowns</h2>
```html @preview
<div class="dp-MainWrapper" style="height: 100px">
    <ul class="dp-Tabs Tabs--single">
        <li class="dp-Tabs-item Tabs--primary is-expandable is-visible">
            Reply
            <span class="dp-Arrow"></span>
            <ul class="dp-Menu is-visible">
                <li class="dp-Menu-linkItem">
                    <a href="#" class="dp-Menu-link">Reply</a>
                </li>
                <li class="dp-Menu-linkItem">
                    <a href="#" class="dp-Menu-link">Forward</a>
                </li>
            </ul>
        </li>
        <li class="dp-Tabs-item is-expandable">
            Add Note
        </li>
        <li class="dp-Tabs-item Tabs--primary is-expandable is-visible">
            Macros
            <span class="dp-Arrow"></span>
            <ul class="dp-Menu dp-Menu-search is-visible">
                <li class="dp-Menu-linkItem dp-Form">
                    <form>
                        <div class="dp-Form ">
                            <span class="dp-Icon dp-IconSearch"></span>
                            <input type="text" class="dp-Input Input--search">
                        </div>
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
    <ul class="dp-Tabs is-vertical">
        <li class="dp-Tabs-item is-expandable">
            <span class="dp-Icon dp-billing"></span>
            <span class="dp-Title dp-Arrow">Text</span>
        </li>
        <li class="dp-Tabs-item is-expandable Tabs--primary">
            <span class="dp-Icon dp-billing"></span>
            <span class="dp-Title dp-Arrow">Text</span>
        </li>
    </ul>
</div>
```

<h2>Tabs/icon</h2>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-Tabs Tabs--icons">
                <li class="dp-Tabs-item Tabs--primary"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-Tabs-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                <li class="dp-Tabs-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
            </ul>
        </div>
    </div>
</div>
```