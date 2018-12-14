---
title: Tabs & Headers
---

<h2>Tabs/general</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-TabBarList dp-Selected">

        <li class="dp-AddTabButton">
            <span class="dp-Icon dp-add_tab--neutral"></span>
        </li>

        <li class="dp-TabBarItem">
            <span class="dp-Flex">
                <span class="dp-Icon dp-email_small"></span>
                <span class="dp-Title">Single-line-item</span>
            </span>
            <span class="dp-Flex">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                <span class="dp-Subtitle">Single-line-item</span>
            </span>
        </li>

        <li class="dp-TabBarItem is-active">
            <span class="dp-Flex">
                <span class="dp-Icon dp-email_small"></span>
                <span class="dp-Title">Single-line-item</span>
            </span>
            <span class="dp-Flex">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                <span class="dp-Subtitle">Single-line-item</span>
            </span>
        </li>

        <li class="dp-TabBarItem">
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
    <ul class="dp-TabBarList">
        <li class="dp-AddTabButton">
            <span class="dp-Icon dp-add_tab--neutral"></span>
        </li>
        <li class="dp-TabBarItem">
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
<!-- Table -->
<ul class="dp-ActionsItems dp-BorderBottom">
    <li class="dp-ActionsItem dp-MenuBarItem is-active">MESSAGES AND NOTES</li>
    <li class="dp-ActionsItem dp-MenuBarItem">FULL LOG</li>
</ul>

<ul class="dp-ActionsItems dp-BorderBottom">
    <li class="dp-ActionsItem dp-MenuBarItem">MESSAGES AND NOTES</li>
    <li class="dp-ActionsItem dp-MenuBarItem is-active">FULL LOG</li>
</ul>
```

<h2>Tabs/dropdowns</h2>
```html @preview
<div style="height: 100px">
    <div class="dp-Actions">
        <ul class="dp-ActionsItems dp-BorderBottom">
            <li class="dp-ActionsItem dp-MenuBarItem is-active">
                Reply
                <span class="dp-Arrow"></span>

                <ul class="dp-ContextMenu">
                    <li><a href="#">Reply</a></li>
                    <li><a href="#">Forward</a></li>
                </ul>

            </li>
            <li class="dp-ActionsItem dp-MenuBarItem">Add Note</li>
            <li class="dp-ActionsItem dp-MenuBarItem dp-Macros is-active">
                Macros
                <span class="dp-Arrow"></span>

               <ul class="dp-ContextMenu">
                    <li>
                        <form class="dp-SearchForm">
                            <button type="submit" class="dp-Icon dp-IconSearch"></button>
                            <input type="text" class="dp-SearchInput"></input>
                        </form>
                    </li>
                    <li><a href="#">Macro 1</a></li>
                    <li><a href="#">Macro 2</a></li>
                </ul>
            </li>
        </ul>
    </div>
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
    <ul class="dp-MenuBarList">

        <li class="dp-MenuBarItem">
            <span class="dp-Icon dp-billing"></span>
            <span class="dp-Title">Text<span class="dp-Arrow"></span></span>
        </li>

    </ul>
</div>
```

<h2>Tabs/icon</h2>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
            </ul>
        </div>
    </div>
</div>
```