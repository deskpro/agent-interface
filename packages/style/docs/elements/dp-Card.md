---
title: Card
---

<h2>Cards/listview</h2>

<h4>Static state</h4>

```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card dp-Level">

                <span class="dp-LevelItem dp-LevelCol dp-LevelTop">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox0-0"></input>
                        <label for="customCheckbox0-0" class="dp-Card-title"></label>
                    </span>
                </span>

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Single-line item</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Selected state</h4>
```html @preview

<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-selected is-active dp-Level">

                <span class="dp-LevelItem dp-LevelCol dp-LevelTop">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-0"></input>
                        <label for="customCheckbox1-0" class="dp-Card-title"></label>
                    </span>
                </span>

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Single-line item</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Selected state other items</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-selected dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-1"></input>
                        <label for="customCheckbox1-1" class="dp-Card-title"></label>
                    </span>
                </span>

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Single-line item</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Checked state</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" checked="checked" class="dp-ControlInput" id="customCheckbox1-2"></input>
                        <label for="customCheckbox1-2" class="dp-Card-title"></label>
                    </span>
                </span>

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Single-line item</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Draggable card</h4>
```html @preview

<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-dragging dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-3"></input>
                        <label for="customCheckbox1-3" class="dp-Card-title"></label>
                    </span>
                </span>

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Single-line item</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```


<h2>Cards/listview-nocheck</h2>

<h4>Static state</h4>

```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Mark Jarvis</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Selected state</h4>
```html @preview

<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-selected is-active dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Mark Jarvis</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Selected state other items</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-selected dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Mark Jarvis</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Checked state</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Mark Jarvis</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```

<h4>Draggable card</h4>
```html @preview

<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-dragging dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-Card-title">Card title here</span>

                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Mark Jarvis</span>
                    </span>
                </span>

                <span class="dp-LevelCol dp-LevelRight">
                    <span class="dp-IconGroup">
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                    </span>
                </span>

            </li>
        </ul>
    </form>
</div>
```