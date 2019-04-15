---
title: Header
---

<h2>header/general</h2>
```html @preview
<div class="dp-MainWrapper demo-menu">
    <div class="dp-Header">

        <div class="dp-SearchBox">
            <form class="dp-SearchForm">
                <input type="" placeholder="Search ..."></input>
                <span class="dp-Icon dp-find"></span>
                <!-- animation -->
                <ul class="dp-IconPanelList">
                    <li class="dp-MenuBarItem">
                        <span class="dp-Icon dp-IconStarSearch"></span>
                    </li>
                    <li class="dp-MenuBarItem dp-Close">
                        <span class="dp-Icon dp-close-darkest"></span>
                    </li>
                </ul>
            </form>
        </div>

        <div class="dp-HeaderControls">
            <div class="dp-Recent"><span class="dp-Icon dp-history"></span></div>
            <ul class="dp-Agent-IM">
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <img class="Icon--Avatar" src="/agent-interface/style/img/docs/avatar.png" alt="">
                        <span class="dp-Badge Badge--round Badge--top Badge--danger">3</span>
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--top Badge--danger">1</span>
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-add_im"></span>
                </li>
            </ul>
        </div>

        <div class="dp-HeaderControls is-right">
            <div class="dp-Notifications">
                <span class="dp-Icon dp-notifications"></span>
            </div>
            <ul class="dp-Agent-Status">
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-voice Icon-success"></span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-chat"></span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter" alt=""></span>
                    <button class="dp-Arrow"></button>
                </li>
            </ul>

            <span class="dp-Account">
                <span class="dp-Icon dp-IconPlane dp-ActionDropDown"></span><button class="dp-Arrow"></button>
                <!-- drop down -->
                <ul class="dp-Menu Menu--tick dp-YourAccount">
                    <li class="dp-Menu-title">Your account</li>
                    <li class="dp-Menu-linkItem is-active">
                        <span class="dp-Icon dp-IconPlane"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Raven Paper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconPlaneOrange"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Raven Paper Crafts</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconPlaneViolet"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">
                            <span>RP Europe (Demo)</span>
                            <span class="dp-BuyNow">12 days left | By now</span>
                        </a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-add_tab"></span>
                        <a href="#" class="dp-Menu-link dp-listItem dp-Add-btn">Add new</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconNoteGray"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Knowledgebase article</a>
                    </li>
                </ul>
            </span>

        </div>
    </div>
</div>
```

<h2>header/search</h2>
```html @preview
<div class="dp-MainWrapper demo-menu">
    <div class="dp-Header">
        <div class="dp-SearchBox search-enter">
            <form class="dp-SearchForm">
                <input type="" placeholder="Search ..." value="Pricing"></input>
                <span class="dp-Icon dp-find"></span>
                <!-- animation -->
                <ul class="dp-IconPanelList">
                    <li class="dp-MenuBarItem">
                        <span class="dp-Icon dp-IconStarSearch"></span>
                    </li>
                    <li class="dp-MenuBarItem dp-Close">
                        <span class="dp-Icon dp-close-darkest"></span>
                    </li>
                </ul>
            </form>
        </div>

        <div class="dp-HeaderControls fade-exit">
            <div class="dp-Recent"><span class="dp-Icon dp-history"></span></div>
            <ul class="dp-Agent-IM">
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--top Badge--danger">3</span>
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--top Badge--danger">1</span>
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-add_im"></span>
                </li>
            </ul>
        </div>

        <div class="dp-HeaderControls is-right">
            <div class="dp-Notifications">
                <span class="dp-Icon dp-notifications"></span>
            </div>
            <ul class="dp-Agent-Status">
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-voice Icon-success"></span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-chat"></span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter" alt=""></span>
                    <button class="dp-Arrow"></button>
                </li>
            </ul>

            <span class="dp-Account">
                <span class="dp-Icon dp-IconPlane dp-ActionDropDown"></span><button class="dp-Arrow"></button>
                <!-- drop down -->
                <ul class="dp-Menu Menu--tick dp-YourAccount">
                    <li class="dp-Menu-title">Your account</li>
                    <li class="dp-Menu-linkItem is-active">
                        <span class="dp-Icon dp-IconPlane"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Raven Paper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconPlaneOrange"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Raven Paper Crafts</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconPlaneViolet"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">
                            <span>RP Europe (Demo)</span>
                            <span class="dp-BuyNow">12 days left | By now</span>
                        </a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-add_tab"></span>
                        <a href="#" class="dp-Menu-link dp-listItem dp-Add-btn">Add new</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconNoteGray"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Knowledgebase article</a>
                    </li>
                </ul>
            </span>
        </div>
    </div>
</div>
```

<h2>header/your-account</h2>
```html @preview
<div class="dp-MainWrapper demo-menu" style="height:340px;align-items:flex-start;">
    <div class="dp-Header">

        <div class="dp-SearchBox">
            <form class="dp-SearchForm">
                <input type="" placeholder="Search ..."></input>
                <span class="dp-Icon dp-find"></span>
                <!-- animation -->
                <ul class="dp-IconPanelList">
                    <li class="dp-MenuBarItem">
                        <span class="dp-Icon dp-IconStarSearch"></span>
                    </li>
                    <li class="dp-MenuBarItem dp-Close">
                        <span class="dp-Icon dp-close-darkest"></span>
                    </li>
                </ul>
            </form>
        </div>

        <div class="dp-HeaderControls">
            <div class="dp-Recent"><span class="dp-Icon dp-history"></span></div>

            <ul class="dp-Agent-IM">
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--top Badge--danger">3</span>
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter">
                        <span class="dp-Badge Badge--round Badge--top Badge--danger">1</span>
                        <span class="dp-Badge Badge--round Badge--bottom Badge--success"></span>
                    </span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-add_im"></span>
                </li>
            </ul>
        </div>

        <div class="dp-HeaderControls is-right">
            <div class="dp-Notifications">
                <span class="dp-Icon dp-notifications"></span>
            </div>
            <ul class="dp-Agent-Status">
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-voice Icon-success"></span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Icon dp-chat"></span>
                </li>
                <li class="dp-MenuBarItem">
                    <span class="dp-Badge Badge--round Badge--grey-lighter" alt=""></span>
                    <button class="dp-Arrow"></button>
                </li>
            </ul>

            <span class="dp-Account is-active">
                <span class="dp-Icon dp-IconPlane dp-ActionDropDown"></span><button class="dp-Arrow"></button>
                <!-- drop down -->
                <ul class="dp-Menu Menu--tick dp-YourAccount">
                    <li class="dp-Menu-title">Your account</li>
                    <li class="dp-Menu-linkItem is-active">
                        <span class="dp-Icon dp-IconPlane"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Raven Paper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconPlaneOrange"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Raven Paper Crafts</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconPlaneViolet"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">
                            <span>RP Europe (Demo)</span>
                            <span class="dp-BuyNow">12 days left | By now</span>
                        </a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-add_tab"></span>
                        <a href="#" class="dp-Menu-link dp-listItem dp-Add-btn">Add new</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-IconNoteGray"></span>
                        <a href="#" class="dp-Menu-link dp-listItem">Knowledgebase article</a>
                    </li>
                </ul>
            </span>

        </div>
    </div>
</div>
```

<h2>Icon rollovers and active states</h2>
```html @preview
<div class="dp-MainWrapper">
    <ul class="dp-IconHeader dp-MenuBarItem ">
        <li>
            <span class="dp-Icon dp-find"></span>
            <span class="dp-Icon dp-find is-active"></span>
        </li>
        <li>
            <span class="dp-Icon dp-history"></span>
            <span class="dp-Icon dp-history is-active"></span>
        </li>
        <li>
            <span class="dp-Icon dp-add_im"></span>
            <span class="dp-Icon dp-add_im is-active"></span>
        </li>
        <li>
            <span disabled class="dp-Icon dp-notifications"></span>
            <span class="dp-Icon dp-notifications">
                <span class="dp-Badge Badge--round Badge--top Badge--danger">5</span>
            </span>

            <span class="dp-Icon dp-notifications is-active">
                <span class="dp-Badge Badge--round Badge--top Badge--danger">5</span>
            </span>
        </li>
        <li>
            <span class="dp-Icon dp-voice"></span>
            <span class="dp-Icon dp-voice Icon-success"></span>
        </li>
        <li>
            <span disabled class="dp-Icon dp-chat"></span>
            <span class="dp-Icon dp-chat">
                <span class="dp-Badge Badge--round Badge--top Badge--danger">5</span>
            </span>
            <span class="dp-Icon dp-chat Icon-danger"></span>
            <span class="dp-Icon dp-chat is-active">
                <span class="dp-Badge Badge--round Badge--top Badge--danger">1</span>
            </span>
        </li>
    </ul>
</div>
```
