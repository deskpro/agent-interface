---
title: Sort and Re-order
---

<h4>Sort and Re-order and rollover/selected folder</h4>
```html @preview
<div class="dp-MainWrapper dp-Filters-demo">

    <div class="dp-GuidesDirectory dp-Knowledgebase">
        <div class="dp-Filters is-active">

            <div class="dp-Filters-bar dp-Level Level-justify-between">
                <span class="dp-Filters-header is-opened">
                    <span class="dp-Icon Icon--menu"></span>
                    <span class="dp-Filters-title">
                        Publish
                    </span>
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </span>
            </div>

            <ul class="dp-Filters-panel">
                <!-- Pending -->
                <li class="dp-TicketMenuItem dp-MenuBarItem">
                    <span class="dp-TitleMenu">
                        <span>Pending</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <ul class="dp-SubMenu">
                        <li class="dp-SubMenuItem">
                            <span>My tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">1</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Tickets I follow<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Unassigned tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem is-active">
                            <span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span>
                        </li>
                    </ul>
                </li>
                <!-- Knowledgebase -->
                <li class="dp-TicketMenuItem dp-MenuBarItem is-selected">
                    <span class="dp-TitleMenu">
                        <span>Knowledgebase</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <ul class="dp-SubMenu">
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                    </ul>
                </li>
                <!-- News -->
                <li class="dp-TicketMenuItem dp-MenuBarItem">
                    <span class="dp-TitleMenu">
                        <span>News</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <ul class="dp-SubMenu">
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                    </ul>
                </li>
                <!-- Downloads -->
                <li class="dp-TicketMenuItem dp-MenuBarItem dp-SavedSearches">
                    <span class="dp-TitleMenu">
                        <span>Downloads</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <ul class="dp-SubMenu">
                        <li>
                            <span>KB Articles older than 4 week</span>
                        </li>
                        <li>
                            <span>Articles by Agent X</span>
                        </li>
                        <li>
                            <span>News articles in August</span>
                        </li>
                        <li>
                            <span>Feature requests feedback articles </span>
                        </li>
                    </ul>
                </li>
                <!-- Guides -->
                <li class="dp-TicketMenuItem dp-MenuBarItem">
                    <span class="dp-TitleMenu">
                        <span>Guides</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <ul class="dp-SubMenu">
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                    </ul>
                </li>
                <!-- Comments -->
                <li class="dp-TicketMenuItem dp-MenuBarItem">
                    <span class="dp-TitleMenu">
                        <span>Comments</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <ul class="dp-SubMenu">
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                    </ul>
                </li>
                <!-- Glossary -->
                <li class="dp-TicketMenuItem dp-MenuBarItem">
                    <span class="dp-TitleMenu">
                        <span>Glossary</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <ul class="dp-SubMenu">
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                        <li class="dp-SubMenuItem">
                            <span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>

</div>
```

<h4>Sort and Re-order/Selected catergory with Articles</h4>
```html @preview
<form class="dp-MainWrapper demo-cog demo-menu demo-tooltip">
    <!-- <ul class="dp-CardList dp-GuidesDirectory dp-Knowledgebase"> -->
    <div class="dp-GuidesDirectory dp-Knowledgebase">

        <div class="dp-Filters">
            <div class="dp-Filters-bar dp-Level Level-justify-between">
                <div class="dp-Filters-header">
                    <span class="dp-Icon Icon--menu"></span>
                    <span class="dp-Filters-title">Knowledgebase</span>
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </div>
                <ul class="dp-ViewModes">
                    <li class="dp-ViewModes-item is-active"><span class="dp-Icon dp-list_view"></span></li>
                    <li class="dp-ViewModes-item"><span class="dp-Icon dp-table_view"></span></li>
                    <li class="dp-ViewModes-item"><span class="dp-Icon dp-kanban_view"></span></li>
                </ul>
            </div>
        </div>

        <!-- breadcrumbs -->
        <ul class="dp-Guides-breadcrumbs">
            <li class="dp-Breadcrumb-item">
                <a class="dp-Breadcrumb-link">
                    <span class="dp-Icon Icon--home"></span>
                </a>
            </li>
        </ul>

        <button type="button" class="dp-Categories dp-Add-task dp-Tasks-list">
            <span class="dp-Categories-title">Categories</span>
            <span class="dp-Categories-add">
                <span class="dp-Icon dp-add_follower"></span>
                New
            </span>
        </button>


        <div class="dp-OrderingBar">
                <div class="dp-OrderingBar-item">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="ordering-1"></input>
                        <label for="ordering-1"></label>
                    </span>
                </div>

                <div class="dp-OrderingBar-item">
                    <span class="dp-Icon dp-grouped_by"></span>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Grouped by</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">Department</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu Menu--tick Menu--tick-left Menu-grouped">
                        <li class="dp-Menu-linkItem is-active">
                            <a href="" class="dp-listItem">Department (DSC)<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Product<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Workflow<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Organization<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Person<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Language<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent team<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Waiting time<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">All waiting time<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Helpdesk team size<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Hubspot deal<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <!-- 2 -->
                <div class="dp-OrderingBar-item">
                    <div class="dp-SortIconDescription">
                        <span class="dp-Icon dp-sort"></span>
                    </div>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Sort by</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">Date created</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu Menu--tick">

                        <li class="dp-Menu-linkItem dp-SortOrder">
                            <span class="dp-RadioWrapper">
                                <span class="dp-RadioItem">
                                    <input type="radio" class="dp-Input Input--radio" id="radio-one" value="radio-one" name="radio-one">
                                    <label for="radio-one">Display order</label>
                                </span>
                            </span>
                            <span class="dp-Subtitle">The order shown in the portal</span>
                            <a href="" class="dp-Order-btn">
                                <span class="dp-Icon dp-sort"></span>
                                Set as Display Order
                                <span class="dp-Tooltip">Set the currently selected Sort by as Display Order.</span>
                            </a>
                        </li>

                        <li class="dp-Menu-linkItem dp-SortList">
                            <ul>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-RadioWrapper">
                                        <span class="dp-RadioItem">
                                            <input type="radio" class="dp-Input Input--radio" id="radiosort-1" value="radiosort-1" name="radio-one">
                                            <label for="radiosort-1">Sort by</label>
                                        </span>
                                    </span>
                                </li>

                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">
                                        Urgency
                                    </a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Date crated</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Date published (DSC)</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Date of last agent reply</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Date of last user reply</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Widget type</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Widget description</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Desired sizes</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Manufacturing date</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Reason for cancellation</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Reason for complaint</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="" class="dp-listItem">Suggested actions</a>
                                    <!-- Icon hover -->
                                    <span class="dp-Cog">
                                        <span class="dp-Icon dp-settings"></span>
                                        <ul class="dp-Menu Menu--tick">
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Ascending
                                                </a>
                                            </li>
                                            <li class="dp-Menu-linkItem">
                                                <a href="#" class="dp-listItem">
                                                    Descending
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>

                <!-- 3 -->
                <div class="dp-OrderingBar-item">
                    <span class="dp-Icon dp-faceted_by"></span>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Faceted by</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">3 Agents</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu Menu--tick">
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Department <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1"></input>
                                        <label for="Faceting-3-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2"></input>
                                        <label for="Faceting-3-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3"></input>
                                        <label for="Faceting-3-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4"></input>
                                        <label for="Faceting-3-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5"></input>
                                        <label for="Faceting-3-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6"></input>
                                        <label for="Faceting-3-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7"></input>
                                        <label for="Faceting-3-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8"></input>
                                        <label for="Faceting-3-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9"></input>
                                        <label for="Faceting-3-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10"></input>
                                        <label for="Faceting-3-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent (3)<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-1"></input>
                                        <label for="Faceting-3-1-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-1"></input>
                                        <label for="Faceting-3-2-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-1"></input>
                                        <label for="Faceting-3-3-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-1"></input>
                                        <label for="Faceting-3-4-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-1"></input>
                                        <label for="Faceting-3-5-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-1"></input>
                                        <label for="Faceting-3-6-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-1"></input>
                                        <label for="Faceting-3-7-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-1"></input>
                                        <label for="Faceting-3-8-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-1"></input>
                                        <label for="Faceting-3-9-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-1"></input>
                                        <label for="Faceting-3-10-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Person <span class="dp-Arrow"></span></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-2"></input>
                                        <label for="Faceting-3-1-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-2"></input>
                                        <label for="Faceting-3-2-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-2"></input>
                                        <label for="Faceting-3-3-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-2"></input>
                                        <label for="Faceting-3-4-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-2"></input>
                                        <label for="Faceting-3-5-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-2"></input>
                                        <label for="Faceting-3-6-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-2"></input>
                                        <label for="Faceting-3-7-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-2"></input>
                                        <label for="Faceting-3-8-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-2"></input>
                                        <label for="Faceting-3-9-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-2"></input>
                                        <label for="Faceting-3-10-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent team <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-3"></input>
                                        <label for="Faceting-3-1-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-3"></input>
                                        <label for="Faceting-3-2-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-3"></input>
                                        <label for="Faceting-3-3-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-3"></input>
                                        <label for="Faceting-3-4-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-3"></input>
                                        <label for="Faceting-3-5-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-3"></input>
                                        <label for="Faceting-3-6-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-3"></input>
                                        <label for="Faceting-3-7-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-3"></input>
                                        <label for="Faceting-3-8-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-3"></input>
                                        <label for="Faceting-3-9-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-3"></input>
                                        <label for="Faceting-3-10-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Organization <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-4"></input>
                                        <label for="Faceting-3-1-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-4"></input>
                                        <label for="Faceting-3-2-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-4"></input>
                                        <label for="Faceting-3-3-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-4"></input>
                                        <label for="Faceting-3-4-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-4"></input>
                                        <label for="Faceting-3-5-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-4"></input>
                                        <label for="Faceting-3-6-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-4"></input>
                                        <label for="Faceting-3-7-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-4"></input>
                                        <label for="Faceting-3-8-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-4"></input>
                                        <label for="Faceting-3-9-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-4"></input>
                                        <label for="Faceting-3-10-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Language <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-5"></input>
                                        <label for="Faceting-3-1-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-5"></input>
                                        <label for="Faceting-3-2-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-5"></input>
                                        <label for="Faceting-3-3-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-5"></input>
                                        <label for="Faceting-4-4-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-5"></input>
                                        <label for="Faceting-3-5-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-5"></input>
                                        <label for="Faceting-3-6-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-5"></input>
                                        <label for="Faceting-3-7-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-5"></input>
                                        <label for="Faceting-3-8-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-5"></input>
                                        <label for="Faceting-3-9-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-5"></input>
                                        <label for="Faceting-3-10-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Workflow <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-6"></input>
                                        <label for="Faceting-3-1-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-6"></input>
                                        <label for="Faceting-3-2-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-6"></input>
                                        <label for="Faceting-3-3-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-6"></input>
                                        <label for="Faceting-3-4-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-6"></input>
                                        <label for="Faceting-3-5-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-6"></input>
                                        <label for="Faceting-3-6-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-6"></input>
                                        <label for="Faceting-3-7-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-6"></input>
                                        <label for="Faceting-3-8-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-6"></input>
                                        <label for="Faceting-3-9-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-6"></input>
                                        <label for="Faceting-3-10-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Product <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-7"></input>
                                        <label for="Faceting-3-1-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-7"></input>
                                        <label for="Faceting-3-2-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-7"></input>
                                        <label for="Faceting-3-3-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-7"></input>
                                        <label for="Faceting-3-4-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-7"></input>
                                        <label for="Faceting-3-5-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-7"></input>
                                        <label for="Faceting-3-6-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-7"></input>
                                        <label for="Faceting-3-7-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-7"></input>
                                        <label for="Faceting-3-8-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-7"></input>
                                        <label for="Faceting-3-9-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-7"></input>
                                        <label for="Faceting-3-10-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">SLAs<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-8"></input>
                                        <label for="Faceting-3-1-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-8"></input>
                                        <label for="Faceting-3-2-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-8"></input>
                                        <label for="Faceting-3-3-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-8"></input>
                                        <label for="Faceting-3-4-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-8"></input>
                                        <label for="Faceting-3-5-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-8"></input>
                                        <label for="Faceting-3-6-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-8"></input>
                                        <label for="Faceting-3-7-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-8"></input>
                                        <label for="Faceting-3-8-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-8"></input>
                                        <label for="Faceting-3-9-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-8"></input>
                                        <label for="Faceting-3-10-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Problem<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-9"></input>
                                        <label for="Faceting-3-1-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-9"></input>
                                        <label for="Faceting-3-2-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-9"></input>
                                        <label for="Faceting-3-3-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-9"></input>
                                        <label for="Faceting-3-4-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-9"></input>
                                        <label for="Faceting-3-5-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-9"></input>
                                        <label for="Faceting-3-6-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-9"></input>
                                        <label for="Faceting-3-7-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-9"></input>
                                        <label for="Faceting-3-8-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-9"></input>
                                        <label for="Faceting-3-9-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-9"></input>
                                        <label for="Faceting-3-10-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Helpdesk team size<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-10"></input>
                                        <label for="Faceting-3-1-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-10"></input>
                                        <label for="Faceting-3-2-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-10"></input>
                                        <label for="Faceting-3-3-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-10"></input>
                                        <label for="Faceting-3-4-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-10"></input>
                                        <label for="Faceting-3-5-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-10"></input>
                                        <label for="Faceting-3-6-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-10"></input>
                                        <label for="Faceting-3-7-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-10"></input>
                                        <label for="Faceting-3-8-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-10"></input>
                                        <label for="Faceting-3-9-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-10"></input>
                                        <label for="Faceting-3-10-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Hubspot deal<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-11"></input>
                                        <label for="Faceting-3-1-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-11"></input>
                                        <label for="Faceting-3-2-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-11"></input>
                                        <label for="Faceting-3-3-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-11"></input>
                                        <label for="Faceting-3-4-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-11"></input>
                                        <label for="Faceting-3-5-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-11"></input>
                                        <label for="Faceting-3-6-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-11"></input>
                                        <label for="Faceting-3-7-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-11"></input>
                                        <label for="Faceting-3-8-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-11"></input>
                                        <label for="Faceting-3-9-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-11"></input>
                                        <label for="Faceting-3-10-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <!-- 4 -->
                <div class="dp-OrderingBar-item">
                    <span class="dp-Icon Icon--view"></span>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Fields</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">8 fields</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu dp-OptionList">
                        <li class="dp-Menu-title">
                            <ul>
                                <li class="dp-Menu-titleItem is-active"><span class="dp-Icon dp-list_view"></span><span>(8)</span></li>
                                <li class="dp-Menu-titleItem"><span class="dp-Icon dp-table_view"></span><span>(5)</span></li>
                                <li class="dp-Menu-titleItem"><span class="dp-Icon dp-kanban_view"></span><span>(9)</span></li>
                            </ul>
                        </li>
                        <li class="dp-Menu-subtitle">
                            <span class="">Fields</span>
                            <span><span class="dp-Meta is-active">view default</span><span class="dp-Meta">reset to default</span></span>
                        </li>
                        <li class="dp-Menu-linkItem dp-Uneditable">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-01"></input>
                                <label for="fields-01">Agent</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem dp-Uneditable">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-02"></input>
                                <label for="fields-02">Title</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem dp-Uneditable">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-03"></input>
                                <label for="fields-03">User</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-04"></input>
                                <label for="fields-04">Agent team</label>
                            </span>            
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-05"></input>
                                <label for="fields-05">Labels</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-06"></input>
                                <label for="fields-06">ID</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-07"></input>
                                <label for="fields-07">Status</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-08"></input>
                                <label for="fields-08">Language</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-09"></input>
                                <label for="fields-09">Department</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-10"></input>
                                <label for="fields-10">Product</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-11"></input>
                                <label for="fields-11">Organization</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-12"></input>
                                <label for="fields-12">SLAs</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-13"></input>
                                <label for="fields-13">User waiting</label>
                            </span>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-14"></input>
                                <label for="fields-14">Date created</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-15"></input>
                                <label for="fields-15">All waiting time</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-16"></input>
                                <label for="fields-16">Date of last reply</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-17"></input>
                                <label for="fields-17">Date of last user reply</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-18"></input>
                                <label for="fields-18">Date of last agent reply</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-19"></input>
                                <label for="fields-19">Date resolved</label>
                            </span>
                            <span class="dp-Icon dp-settings is-active"></span>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem is-active">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-20"></input>
                                <label for="fields-20">Problem</label>
                            </span>
                        </li>

                        <li class="dp-DropdownDivider"></li>

                        <li class="dp-Menu-linkItem dp-ButtonWrapper">
                            <button class="dp-Button" type="button">Apply changes</button>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-21"></input>
                                <label for="fields-21">all filters</label>
                            </span>
                        </li>

                    </ul>
                </div>
        </div>

        <div class="dp-Guides-list is-hoverable">

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-1">
                        <label for="knowledgebase-1"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Getting started <span class="dp-qt">(16)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2">
                        <label for="knowledgebase-2"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Sales, Billing & Legal <span class="dp-qt">(30)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-3">
                        <label for="knowledgebase-3"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Using Deskpro <span class="dp-qt">(234)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-4">
                        <label for="knowledgebase-4"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Guides to getting started <span class="dp-qt">(34)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-5">
                        <label for="knowledgebase-5"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Addition services <span class="dp-qt">(14)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-6">
                        <label for="knowledgebase-6"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Developer & Reporting <span class="dp-qt">(80)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between is-selected">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-7">
                        <label for="knowledgebase-7"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Managing Deskpro On-Premise <span class="dp-qt">(125)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

        </div>

    </div>
</form>
```

<h4>Sort and Re-order/Show present order of categories in drop down</h4>
```html @preview
<form class="dp-MainWrapper demo-cog demo-menu demo-tooltip">
    <div class="dp-GuidesDirectory dp-Knowledgebase">

        <div class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
            <span class="dp-LevelCol dp-ListName">
                <span class="dp-Icon Icon--menu"></span>
                <span class="dp-Card-title">Managing Deskpro On-pr ... <span class="dp-qt">(125)</span></span>
                <span class="dp-Icon Icon--down-caret Icon--primary"></span>
            </span>

            <ul class="View-group">
                <li class="dp-Icon dp-list_view is-active"></li>
                <li class="dp-Icon dp-table_view"></li>
                <li class="dp-Icon dp-kanban_view"></li>
            </ul>
        </div>

        <ul class="dp-Guides-breadcrumbs">
            <li class="dp-Breadcrumb-item">
                <a class="dp-Breadcrumb-link">
                    <span class="dp-Icon Icon--home"></span>
                </a>
            </li>
            <li class="dp-Breadcrumb-item is-current">
                <a class="dp-Breadcrumb-link">
                    Managing Deskpro On-Premis
                </a>
            </li>
        </ul>

        <button type="button" class="dp-Categories dp-Add-task dp-Tasks-list">
            <span class="dp-Categories-title">Categories</span>
            <span class="dp-Categories-add">
                <span class="dp-Icon dp-add_follower"></span>
                New
            </span>
        </button>

        <li class="dp-OrderingBar">

            <div class="dp-OrderingBar-item">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="ordering-2-1"></input>
                    <label for="ordering-2-1"></label>
                </span>
            </div>

            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-grouped_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Grouped by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Department</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick Menu-grouped">
                    <li class="dp-Menu-linkItem is-active">
                        <a href="" class="dp-listItem">Department (DSC)<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">All waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Helpdesk team size<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 2 -->
            <div class="dp-OrderingBar-item is-active">
                <div class="dp-SortIconDescription">
                    <span class="dp-Icon dp-sort"></span>
                </div>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Sort by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Date created</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">

                    <li class="dp-Menu-linkItem dp-SortOrder">
                        <span class="dp-RadioWrapper">
                            <span class="dp-RadioItem">
                                <input type="radio" class="dp-Input Input--radio" id="radio-two" value="radio-two" name="radio-two">
                                <label for="radio-two">Display order </label>
                            </span>
                        </span>
                        <span class="dp-Subtitle">The order shown in the portal</span>
                        <a href="" class="dp-Order-btn">
                            <span class="dp-Icon dp-sort"></span>
                            Set as Display Order
                            <span class="dp-Tooltip">Set the currently selected Sort by as Display Order.</span>
                        </a>
                    </li>

                    <li class="dp-Menu-linkItem dp-SortList">
                        <ul>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-RadioWrapper">
                                    <span class="dp-RadioItem">
                                        <input type="radio" class="dp-Input Input--radio" id="radiosort-2" value="radiosort-2" name="radio-two">
                                        <label for="radiosort-2">Sort by</label>
                                    </span>
                                </span>
                            </li>

                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">
                                    Urgency
                                </a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date crated</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date published (DSC)</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last agent reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last user reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget type</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget description</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Desired sizes</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Manufacturing date</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for cancellation</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for complaint</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Suggested actions</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

            <!-- 3 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-faceted_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Faceted by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">3 Agents</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Department <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1"></input>
                                    <label for="Faceting-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2"></input>
                                    <label for="Faceting-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3"></input>
                                    <label for="Faceting-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4"></input>
                                    <label for="Faceting-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5"></input>
                                    <label for="Faceting-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6"></input>
                                    <label for="Faceting-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7"></input>
                                    <label for="Faceting-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8"></input>
                                    <label for="Faceting-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9"></input>
                                    <label for="Faceting-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10"></input>
                                    <label for="Faceting-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent (3)<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-1"></input>
                                    <label for="Faceting-3-1-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-1"></input>
                                    <label for="Faceting-3-2-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-1"></input>
                                    <label for="Faceting-3-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-1"></input>
                                    <label for="Faceting-3-4-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-1"></input>
                                    <label for="Faceting-3-5-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-1"></input>
                                    <label for="Faceting-3-6-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-1"></input>
                                    <label for="Faceting-3-7-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-1"></input>
                                    <label for="Faceting-3-8-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-1"></input>
                                    <label for="Faceting-3-9-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-1"></input>
                                    <label for="Faceting-3-10-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person <span class="dp-Arrow"></span></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-2"></input>
                                    <label for="Faceting-3-1-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-2"></input>
                                    <label for="Faceting-3-2-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-2"></input>
                                    <label for="Faceting-3-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-2"></input>
                                    <label for="Faceting-3-4-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-2"></input>
                                    <label for="Faceting-3-5-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-2"></input>
                                    <label for="Faceting-3-6-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-2"></input>
                                    <label for="Faceting-3-7-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-2"></input>
                                    <label for="Faceting-3-8-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-2"></input>
                                    <label for="Faceting-3-9-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-2"></input>
                                    <label for="Faceting-3-10-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-3"></input>
                                    <label for="Faceting-3-1-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-3"></input>
                                    <label for="Faceting-3-2-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-3"></input>
                                    <label for="Faceting-3-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-3"></input>
                                    <label for="Faceting-3-4-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-3"></input>
                                    <label for="Faceting-3-5-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-3"></input>
                                    <label for="Faceting-3-6-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-3"></input>
                                    <label for="Faceting-3-7-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-3"></input>
                                    <label for="Faceting-3-8-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-3"></input>
                                    <label for="Faceting-3-9-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-3"></input>
                                    <label for="Faceting-3-10-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-4"></input>
                                    <label for="Faceting-3-1-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-4"></input>
                                    <label for="Faceting-3-2-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-4"></input>
                                    <label for="Faceting-3-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-4"></input>
                                    <label for="Faceting-3-4-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-4"></input>
                                    <label for="Faceting-3-5-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-4"></input>
                                    <label for="Faceting-3-6-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-4"></input>
                                    <label for="Faceting-3-7-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-4"></input>
                                    <label for="Faceting-3-8-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-4"></input>
                                    <label for="Faceting-3-9-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-4"></input>
                                    <label for="Faceting-3-10-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-5"></input>
                                    <label for="Faceting-3-1-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-5"></input>
                                    <label for="Faceting-3-2-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-5"></input>
                                    <label for="Faceting-3-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-5"></input>
                                    <label for="Faceting-4-4-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-5"></input>
                                    <label for="Faceting-3-5-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-5"></input>
                                    <label for="Faceting-3-6-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-5"></input>
                                    <label for="Faceting-3-7-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-5"></input>
                                    <label for="Faceting-3-8-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-5"></input>
                                    <label for="Faceting-3-9-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-5"></input>
                                    <label for="Faceting-3-10-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-6"></input>
                                    <label for="Faceting-3-1-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-6"></input>
                                    <label for="Faceting-3-2-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-6"></input>
                                    <label for="Faceting-3-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-6"></input>
                                    <label for="Faceting-3-4-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-6"></input>
                                    <label for="Faceting-3-5-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-6"></input>
                                    <label for="Faceting-3-6-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-6"></input>
                                    <label for="Faceting-3-7-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-6"></input>
                                    <label for="Faceting-3-8-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-6"></input>
                                    <label for="Faceting-3-9-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-6"></input>
                                    <label for="Faceting-3-10-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-7"></input>
                                    <label for="Faceting-3-1-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-7"></input>
                                    <label for="Faceting-3-2-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-7"></input>
                                    <label for="Faceting-3-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-7"></input>
                                    <label for="Faceting-3-4-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-7"></input>
                                    <label for="Faceting-3-5-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-7"></input>
                                    <label for="Faceting-3-6-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-7"></input>
                                    <label for="Faceting-3-7-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-7"></input>
                                    <label for="Faceting-3-8-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-7"></input>
                                    <label for="Faceting-3-9-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-7"></input>
                                    <label for="Faceting-3-10-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">SLAs<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-8"></input>
                                    <label for="Faceting-3-1-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-8"></input>
                                    <label for="Faceting-3-2-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-8"></input>
                                    <label for="Faceting-3-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-8"></input>
                                    <label for="Faceting-3-4-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-8"></input>
                                    <label for="Faceting-3-5-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-8"></input>
                                    <label for="Faceting-3-6-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-8"></input>
                                    <label for="Faceting-3-7-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-8"></input>
                                    <label for="Faceting-3-8-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-8"></input>
                                    <label for="Faceting-3-9-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-8"></input>
                                    <label for="Faceting-3-10-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Problem<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-9"></input>
                                    <label for="Faceting-3-1-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-9"></input>
                                    <label for="Faceting-3-2-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-9"></input>
                                    <label for="Faceting-3-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-9"></input>
                                    <label for="Faceting-3-4-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-9"></input>
                                    <label for="Faceting-3-5-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-9"></input>
                                    <label for="Faceting-3-6-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-9"></input>
                                    <label for="Faceting-3-7-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-9"></input>
                                    <label for="Faceting-3-8-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-9"></input>
                                    <label for="Faceting-3-9-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-9"></input>
                                    <label for="Faceting-3-10-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Helpdesk team size<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-10"></input>
                                    <label for="Faceting-3-1-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-10"></input>
                                    <label for="Faceting-3-2-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-10"></input>
                                    <label for="Faceting-3-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-10"></input>
                                    <label for="Faceting-3-4-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-10"></input>
                                    <label for="Faceting-3-5-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-10"></input>
                                    <label for="Faceting-3-6-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-10"></input>
                                    <label for="Faceting-3-7-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-10"></input>
                                    <label for="Faceting-3-8-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-10"></input>
                                    <label for="Faceting-3-9-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-10"></input>
                                    <label for="Faceting-3-10-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-11"></input>
                                    <label for="Faceting-3-1-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-11"></input>
                                    <label for="Faceting-3-2-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-11"></input>
                                    <label for="Faceting-3-3-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-11"></input>
                                    <label for="Faceting-3-4-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-11"></input>
                                    <label for="Faceting-3-5-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-11"></input>
                                    <label for="Faceting-3-6-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-11"></input>
                                    <label for="Faceting-3-7-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-11"></input>
                                    <label for="Faceting-3-8-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-11"></input>
                                    <label for="Faceting-3-9-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-11"></input>
                                    <label for="Faceting-3-10-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 4 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon Icon--view"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Fields</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">8 fields</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu dp-OptionList">
                    <li class="dp-Menu-title">
                        <ul>
                            <li class="dp-Menu-titleItem is-active"><span class="dp-Icon dp-list_view"></span><span>(8)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-table_view"></span><span>(5)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-kanban_view"></span><span>(9)</span></li>
                        </ul>
                    </li>
                    <li class="dp-Menu-subtitle">
                        <span class="">Fields</span>
                        <span><span class="dp-Meta is-active">view default</span><span class="dp-Meta">reset to default</span></span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-01"></input>
                            <label for="fields-01">Agent</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-02"></input>
                            <label for="fields-02">Title</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-03"></input>
                            <label for="fields-03">User</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-04"></input>
                            <label for="fields-04">Agent team</label>
                        </span>            
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-05"></input>
                            <label for="fields-05">Labels</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-06"></input>
                            <label for="fields-06">ID</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-07"></input>
                            <label for="fields-07">Status</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-08"></input>
                            <label for="fields-08">Language</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-09"></input>
                            <label for="fields-09">Department</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-10"></input>
                            <label for="fields-10">Product</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-11"></input>
                            <label for="fields-11">Organization</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-12"></input>
                            <label for="fields-12">SLAs</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-13"></input>
                            <label for="fields-13">User waiting</label>
                        </span>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-14"></input>
                            <label for="fields-14">Date created</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-15"></input>
                            <label for="fields-15">All waiting time</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-16"></input>
                            <label for="fields-16">Date of last reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-17"></input>
                            <label for="fields-17">Date of last user reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-18"></input>
                            <label for="fields-18">Date of last agent reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-19"></input>
                            <label for="fields-19">Date resolved</label>
                        </span>
                        <span class="dp-Icon dp-settings is-active"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem is-active">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-20"></input>
                            <label for="fields-20">Problem</label>
                        </span>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem dp-ButtonWrapper">
                        <button class="dp-Button" type="button">Apply changes</button>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-21"></input>
                            <label for="fields-21">all filters</label>
                        </span>
                    </li>

                </ul>
            </div>
        </li>

        <div class="dp-Guides-list is-hoverable">

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2-1">
                        <label for="knowledgebase-2-1"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Getting started <span class="dp-qt">(16)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2-2">
                        <label for="knowledgebase-2-2"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Sales, Billing & Legal <span class="dp-qt">(30)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2-3">
                        <label for="knowledgebase-2-3"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Using Deskpro <span class="dp-qt">(234)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2-4">
                        <label for="knowledgebase-2-4"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Guides to getting started <span class="dp-qt">(34)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2-5">
                        <label for="knowledgebase-2-5"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Addition services <span class="dp-qt">(14)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2-6">
                        <label for="knowledgebase-2-6"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Developer & Reporting <span class="dp-qt">(80)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="knowledgebase-2-7">
                        <label for="knowledgebase-2-7"></label>
                    </span>

                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Managing Deskpro On-Premise <span class="dp-qt">(125)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>
        </div>

        <button type="button" class="dp-Categories dp-Add-task dp-Tasks-list">
            <span class="dp-Categories-title">Articles</span>
            <span class="dp-Categories-add">
                <span class="dp-Icon dp-add_follower"></span>
                New
            </span>
        </button>

        <!-- 3 - Sorting -->

        <li class="dp-OrderingBar">

            <div class="dp-OrderingBar-item">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="ordering-2-2"></input>
                    <label for="ordering-2-2"></label>
                </span>
            </div>

            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-grouped_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Grouped by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Department</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick Menu-grouped">
                    <li class="dp-Menu-linkItem is-active">
                        <a href="" class="dp-listItem">Department (DSC)<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">All waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Helpdesk team size<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 2 -->
            <div class="dp-OrderingBar-item">
                <div class="dp-SortIconDescription">
                    <span class="dp-Icon dp-sort"></span>
                </div>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Sort by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Date created</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">

                    <li class="dp-Menu-linkItem dp-SortOrder">
                        <span class="dp-RadioWrapper">
                            <span class="dp-RadioItem">
                                <input type="radio" class="dp-Input Input--radio" id="radioone" value="radioone">
                                <label for="radioone">Display order</label>
                            </span>
                        </span>
                        <span class="dp-Subtitle">The order shown in the portal</span>
                        <a href="" class="dp-Order-btn">
                            <span class="dp-Icon dp-sort"></span>
                            Set as Display Order
                            <span class="dp-Tooltip">Set the currently selected Sort by as Display Order.</span>
                        </a>
                    </li>

                    <li class="dp-Menu-linkItem dp-SortList">
                        <ul>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-RadioWrapper">
                                    <span class="dp-RadioItem">
                                        <input type="radio" class="dp-Input Input--radio" id="radiosort-3" value="radiosort-3">
                                        <label for="radiosort-3">Sort by</label>
                                    </span>
                                </span>
                            </li>

                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">
                                    Urgency
                                </a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date crated</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date published (DSC)</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last agent reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last user reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget type</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget description</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Desired sizes</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Manufacturing date</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for cancellation</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for complaint</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Suggested actions</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

            <!-- 3 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-faceted_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Faceted by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">3 Agents</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Department <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1"></input>
                                    <label for="Faceting-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2"></input>
                                    <label for="Faceting-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3"></input>
                                    <label for="Faceting-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4"></input>
                                    <label for="Faceting-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5"></input>
                                    <label for="Faceting-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6"></input>
                                    <label for="Faceting-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7"></input>
                                    <label for="Faceting-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8"></input>
                                    <label for="Faceting-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9"></input>
                                    <label for="Faceting-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10"></input>
                                    <label for="Faceting-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent (3)<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-1"></input>
                                    <label for="Faceting-3-1-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-1"></input>
                                    <label for="Faceting-3-2-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-1"></input>
                                    <label for="Faceting-3-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-1"></input>
                                    <label for="Faceting-3-4-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-1"></input>
                                    <label for="Faceting-3-5-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-1"></input>
                                    <label for="Faceting-3-6-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-1"></input>
                                    <label for="Faceting-3-7-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-1"></input>
                                    <label for="Faceting-3-8-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-1"></input>
                                    <label for="Faceting-3-9-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-1"></input>
                                    <label for="Faceting-3-10-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person <span class="dp-Arrow"></span></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-2"></input>
                                    <label for="Faceting-3-1-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-2"></input>
                                    <label for="Faceting-3-2-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-2"></input>
                                    <label for="Faceting-3-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-2"></input>
                                    <label for="Faceting-3-4-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-2"></input>
                                    <label for="Faceting-3-5-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-2"></input>
                                    <label for="Faceting-3-6-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-2"></input>
                                    <label for="Faceting-3-7-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-2"></input>
                                    <label for="Faceting-3-8-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-2"></input>
                                    <label for="Faceting-3-9-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-2"></input>
                                    <label for="Faceting-3-10-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-3"></input>
                                    <label for="Faceting-3-1-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-3"></input>
                                    <label for="Faceting-3-2-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-3"></input>
                                    <label for="Faceting-3-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-3"></input>
                                    <label for="Faceting-3-4-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-3"></input>
                                    <label for="Faceting-3-5-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-3"></input>
                                    <label for="Faceting-3-6-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-3"></input>
                                    <label for="Faceting-3-7-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-3"></input>
                                    <label for="Faceting-3-8-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-3"></input>
                                    <label for="Faceting-3-9-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-3"></input>
                                    <label for="Faceting-3-10-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-4"></input>
                                    <label for="Faceting-3-1-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-4"></input>
                                    <label for="Faceting-3-2-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-4"></input>
                                    <label for="Faceting-3-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-4"></input>
                                    <label for="Faceting-3-4-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-4"></input>
                                    <label for="Faceting-3-5-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-4"></input>
                                    <label for="Faceting-3-6-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-4"></input>
                                    <label for="Faceting-3-7-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-4"></input>
                                    <label for="Faceting-3-8-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-4"></input>
                                    <label for="Faceting-3-9-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-4"></input>
                                    <label for="Faceting-3-10-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-5"></input>
                                    <label for="Faceting-3-1-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-5"></input>
                                    <label for="Faceting-3-2-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-5"></input>
                                    <label for="Faceting-3-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-5"></input>
                                    <label for="Faceting-4-4-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-5"></input>
                                    <label for="Faceting-3-5-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-5"></input>
                                    <label for="Faceting-3-6-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-5"></input>
                                    <label for="Faceting-3-7-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-5"></input>
                                    <label for="Faceting-3-8-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-5"></input>
                                    <label for="Faceting-3-9-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-5"></input>
                                    <label for="Faceting-3-10-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-6"></input>
                                    <label for="Faceting-3-1-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-6"></input>
                                    <label for="Faceting-3-2-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-6"></input>
                                    <label for="Faceting-3-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-6"></input>
                                    <label for="Faceting-3-4-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-6"></input>
                                    <label for="Faceting-3-5-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-6"></input>
                                    <label for="Faceting-3-6-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-6"></input>
                                    <label for="Faceting-3-7-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-6"></input>
                                    <label for="Faceting-3-8-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-6"></input>
                                    <label for="Faceting-3-9-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-6"></input>
                                    <label for="Faceting-3-10-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-7"></input>
                                    <label for="Faceting-3-1-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-7"></input>
                                    <label for="Faceting-3-2-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-7"></input>
                                    <label for="Faceting-3-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-7"></input>
                                    <label for="Faceting-3-4-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-7"></input>
                                    <label for="Faceting-3-5-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-7"></input>
                                    <label for="Faceting-3-6-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-7"></input>
                                    <label for="Faceting-3-7-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-7"></input>
                                    <label for="Faceting-3-8-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-7"></input>
                                    <label for="Faceting-3-9-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-7"></input>
                                    <label for="Faceting-3-10-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">SLAs<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-8"></input>
                                    <label for="Faceting-3-1-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-8"></input>
                                    <label for="Faceting-3-2-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-8"></input>
                                    <label for="Faceting-3-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-8"></input>
                                    <label for="Faceting-3-4-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-8"></input>
                                    <label for="Faceting-3-5-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-8"></input>
                                    <label for="Faceting-3-6-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-8"></input>
                                    <label for="Faceting-3-7-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-8"></input>
                                    <label for="Faceting-3-8-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-8"></input>
                                    <label for="Faceting-3-9-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-8"></input>
                                    <label for="Faceting-3-10-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Problem<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-9"></input>
                                    <label for="Faceting-3-1-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-9"></input>
                                    <label for="Faceting-3-2-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-9"></input>
                                    <label for="Faceting-3-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-9"></input>
                                    <label for="Faceting-3-4-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-9"></input>
                                    <label for="Faceting-3-5-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-9"></input>
                                    <label for="Faceting-3-6-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-9"></input>
                                    <label for="Faceting-3-7-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-9"></input>
                                    <label for="Faceting-3-8-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-9"></input>
                                    <label for="Faceting-3-9-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-9"></input>
                                    <label for="Faceting-3-10-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Helpdesk team size<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-10"></input>
                                    <label for="Faceting-3-1-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-10"></input>
                                    <label for="Faceting-3-2-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-10"></input>
                                    <label for="Faceting-3-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-10"></input>
                                    <label for="Faceting-3-4-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-10"></input>
                                    <label for="Faceting-3-5-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-10"></input>
                                    <label for="Faceting-3-6-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-10"></input>
                                    <label for="Faceting-3-7-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-10"></input>
                                    <label for="Faceting-3-8-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-10"></input>
                                    <label for="Faceting-3-9-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-10"></input>
                                    <label for="Faceting-3-10-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-11"></input>
                                    <label for="Faceting-3-1-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-11"></input>
                                    <label for="Faceting-3-2-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-11"></input>
                                    <label for="Faceting-3-3-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-11"></input>
                                    <label for="Faceting-3-4-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-11"></input>
                                    <label for="Faceting-3-5-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-11"></input>
                                    <label for="Faceting-3-6-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-11"></input>
                                    <label for="Faceting-3-7-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-11"></input>
                                    <label for="Faceting-3-8-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-11"></input>
                                    <label for="Faceting-3-9-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-11"></input>
                                    <label for="Faceting-3-10-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 4 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon Icon--view"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Fields</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">8 fields</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu dp-OptionList">
                    <li class="dp-Menu-title">
                        <ul>
                            <li class="dp-Menu-titleItem is-active"><span class="dp-Icon dp-list_view"></span><span>(8)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-table_view"></span><span>(5)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-kanban_view"></span><span>(9)</span></li>
                        </ul>
                    </li>
                    <li class="dp-Menu-subtitle">
                        <span class="">Fields</span>
                        <span><span class="dp-Meta is-active">view default</span><span class="dp-Meta">reset to default</span></span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-01"></input>
                            <label for="fields-01">Agent</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-02"></input>
                            <label for="fields-02">Title</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-03"></input>
                            <label for="fields-03">User</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-04"></input>
                            <label for="fields-04">Agent team</label>
                        </span>            
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-05"></input>
                            <label for="fields-05">Labels</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-06"></input>
                            <label for="fields-06">ID</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-07"></input>
                            <label for="fields-07">Status</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-08"></input>
                            <label for="fields-08">Language</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-09"></input>
                            <label for="fields-09">Department</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-10"></input>
                            <label for="fields-10">Product</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-11"></input>
                            <label for="fields-11">Organization</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-12"></input>
                            <label for="fields-12">SLAs</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-13"></input>
                            <label for="fields-13">User waiting</label>
                        </span>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-14"></input>
                            <label for="fields-14">Date created</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-15"></input>
                            <label for="fields-15">All waiting time</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-16"></input>
                            <label for="fields-16">Date of last reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-17"></input>
                            <label for="fields-17">Date of last user reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-18"></input>
                            <label for="fields-18">Date of last agent reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-19"></input>
                            <label for="fields-19">Date resolved</label>
                        </span>
                        <span class="dp-Icon dp-settings is-active"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem is-active">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-20"></input>
                            <label for="fields-20">Problem</label>
                        </span>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem dp-ButtonWrapper">
                        <button class="dp-Button" type="button">Apply changes</button>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-21"></input>
                            <label for="fields-21">all filters</label>
                        </span>
                    </li>

                </ul>
            </div>
        </li>

        <li class="dp-Articles-group">
            <ul>
                <!-- 1 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-1">
                            <label for="Articles-2-1"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Creating effective new ticket contact forms</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">14/7/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 2 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-2">
                            <label for="Articles-2-2"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Setting up Departments</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">14/7/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 3 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-3">
                            <label for="Articles-2-3"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">How do I get started with Deskpro?</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">14/7/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 4 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-4">
                            <label for="Articles-2-4"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">What documentation is available for Deskpro?</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">7/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 5 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-5">
                            <label for="Articles-2-5"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Setting up a Custom Email Address with Deskpro</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">28/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 6 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-6">
                            <label for="Articles-2-6"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Creating effective new ticket contact forms</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">30/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 7 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-6">
                            <label for="Articles-2-6"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Setting up Departments</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">5/9/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 8 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-6">
                            <label for="Articles-2-6"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">How do I get started with Deskpro?</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">18/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

            </ul>
        </li>

    </div>
</form>
```

<h4>Sort and Re-order/Select Display Order and then enable drag and drop</h4>
```html @preview
<form class="dp-MainWrapper demo-cog demo-menu demo-tooltip">
    <!-- <ul class="dp-CardList dp-GuidesDirectory dp-Knowledgebase"> -->
    <div class="dp-GuidesDirectory dp-Knowledgebase">

        <div class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
            <span class="dp-LevelCol dp-ListName">
                <span class="dp-Icon Icon--menu"></span>
                <span class="dp-Card-title">Managing Deskpro On-pr ... <span class="dp-qt">(125)</span></span>
                <span class="dp-Icon Icon--down-caret Icon--primary"></span>
            </span>

            <ul class="View-group">
                <li class="dp-Icon dp-list_view is-active"></li>
                <li class="dp-Icon dp-table_view"></li>
                <li class="dp-Icon dp-kanban_view"></li>
            </ul>
        </div>

        <ul class="dp-Guides-breadcrumbs">
            <li class="dp-Breadcrumb-item">
                <a class="dp-Breadcrumb-link">
                    <span class="dp-Icon Icon--home"></span>
                </a>
            </li>
            <li class="dp-Breadcrumb-item is-current">
                <a class="dp-Breadcrumb-link">
                    Managing Deskpro On-Premise
                </a>
            </li>
        </ul>

        <button type="button" class="dp-Categories dp-Add-task dp-Tasks-list">
            <span class="dp-Categories-title">Categories</span>
            <span class="dp-Categories-add">
                <span class="dp-Icon dp-add_follower"></span>
                New
            </span>
        </button>

        <div class="dp-OrderingBar">

            <div class="dp-OrderingBar-item"></div>

            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-grouped_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Grouped by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Department</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick Menu-grouped">
                    <li class="dp-Menu-linkItem is-active">
                        <a href="" class="dp-listItem">Department (DSC)<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">All waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Helpdesk team size<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 2 -->
            <div class="dp-OrderingBar-item">
                <div class="dp-SortIconDescription">
                    <span class="dp-Icon dp-sort"></span>
                </div>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Sort by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Date created</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">

                    <li class="dp-Menu-linkItem dp-SortOrder">
                        <span class="dp-RadioWrapper">
                            <span class="dp-RadioItem">
                                <input type="radio" class="dp-Input Input--radio" id="radio-three" value="radio-three" name="radio-three">
                                <label for="radio-three">Display order</label>
                            </span>
                        </span>
                        <span class="dp-Subtitle">The order shown in the portal</span>
                        <!-- checkbox -->
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="comment-001"></input>
                            <label for="comment-001">Enable drag and drop</br> re-ordering</label>
                        </span>

                    </li>

                    <li class="dp-Menu-linkItem dp-SortList">
                        <ul>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-RadioWrapper">
                                    <span class="dp-RadioItem">
                                        <input type="radio" class="dp-Input Input--radio" id="radiosort-4" value="radiosort-4" name="radio-three">
                                        <label for="radiosort-4">Sort by</label>
                                    </span>
                                </span>
                            </li>

                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">
                                    Urgency
                                </a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date crated</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date published (DSC)</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last agent reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last user reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget type</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget description</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Desired sizes</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Manufacturing date</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for cancellation</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for complaint</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Suggested actions</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

            <!-- 3 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-faceted_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Faceted by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">3 Agents</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Department <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1"></input>
                                    <label for="Faceting-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2"></input>
                                    <label for="Faceting-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3"></input>
                                    <label for="Faceting-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4"></input>
                                    <label for="Faceting-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5"></input>
                                    <label for="Faceting-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6"></input>
                                    <label for="Faceting-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7"></input>
                                    <label for="Faceting-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8"></input>
                                    <label for="Faceting-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9"></input>
                                    <label for="Faceting-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10"></input>
                                    <label for="Faceting-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent (3)<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-1"></input>
                                    <label for="Faceting-3-1-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-1"></input>
                                    <label for="Faceting-3-2-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-1"></input>
                                    <label for="Faceting-3-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-1"></input>
                                    <label for="Faceting-3-4-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-1"></input>
                                    <label for="Faceting-3-5-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-1"></input>
                                    <label for="Faceting-3-6-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-1"></input>
                                    <label for="Faceting-3-7-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-1"></input>
                                    <label for="Faceting-3-8-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-1"></input>
                                    <label for="Faceting-3-9-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-1"></input>
                                    <label for="Faceting-3-10-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person <span class="dp-Arrow"></span></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-2"></input>
                                    <label for="Faceting-3-1-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-2"></input>
                                    <label for="Faceting-3-2-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-2"></input>
                                    <label for="Faceting-3-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-2"></input>
                                    <label for="Faceting-3-4-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-2"></input>
                                    <label for="Faceting-3-5-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-2"></input>
                                    <label for="Faceting-3-6-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-2"></input>
                                    <label for="Faceting-3-7-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-2"></input>
                                    <label for="Faceting-3-8-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-2"></input>
                                    <label for="Faceting-3-9-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-2"></input>
                                    <label for="Faceting-3-10-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-3"></input>
                                    <label for="Faceting-3-1-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-3"></input>
                                    <label for="Faceting-3-2-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-3"></input>
                                    <label for="Faceting-3-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-3"></input>
                                    <label for="Faceting-3-4-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-3"></input>
                                    <label for="Faceting-3-5-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-3"></input>
                                    <label for="Faceting-3-6-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-3"></input>
                                    <label for="Faceting-3-7-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-3"></input>
                                    <label for="Faceting-3-8-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-3"></input>
                                    <label for="Faceting-3-9-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-3"></input>
                                    <label for="Faceting-3-10-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-4"></input>
                                    <label for="Faceting-3-1-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-4"></input>
                                    <label for="Faceting-3-2-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-4"></input>
                                    <label for="Faceting-3-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-4"></input>
                                    <label for="Faceting-3-4-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-4"></input>
                                    <label for="Faceting-3-5-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-4"></input>
                                    <label for="Faceting-3-6-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-4"></input>
                                    <label for="Faceting-3-7-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-4"></input>
                                    <label for="Faceting-3-8-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-4"></input>
                                    <label for="Faceting-3-9-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-4"></input>
                                    <label for="Faceting-3-10-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-5"></input>
                                    <label for="Faceting-3-1-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-5"></input>
                                    <label for="Faceting-3-2-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-5"></input>
                                    <label for="Faceting-3-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-5"></input>
                                    <label for="Faceting-4-4-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-5"></input>
                                    <label for="Faceting-3-5-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-5"></input>
                                    <label for="Faceting-3-6-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-5"></input>
                                    <label for="Faceting-3-7-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-5"></input>
                                    <label for="Faceting-3-8-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-5"></input>
                                    <label for="Faceting-3-9-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-5"></input>
                                    <label for="Faceting-3-10-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-6"></input>
                                    <label for="Faceting-3-1-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-6"></input>
                                    <label for="Faceting-3-2-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-6"></input>
                                    <label for="Faceting-3-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-6"></input>
                                    <label for="Faceting-3-4-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-6"></input>
                                    <label for="Faceting-3-5-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-6"></input>
                                    <label for="Faceting-3-6-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-6"></input>
                                    <label for="Faceting-3-7-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-6"></input>
                                    <label for="Faceting-3-8-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-6"></input>
                                    <label for="Faceting-3-9-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-6"></input>
                                    <label for="Faceting-3-10-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-7"></input>
                                    <label for="Faceting-3-1-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-7"></input>
                                    <label for="Faceting-3-2-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-7"></input>
                                    <label for="Faceting-3-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-7"></input>
                                    <label for="Faceting-3-4-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-7"></input>
                                    <label for="Faceting-3-5-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-7"></input>
                                    <label for="Faceting-3-6-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-7"></input>
                                    <label for="Faceting-3-7-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-7"></input>
                                    <label for="Faceting-3-8-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-7"></input>
                                    <label for="Faceting-3-9-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-7"></input>
                                    <label for="Faceting-3-10-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">SLAs<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-8"></input>
                                    <label for="Faceting-3-1-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-8"></input>
                                    <label for="Faceting-3-2-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-8"></input>
                                    <label for="Faceting-3-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-8"></input>
                                    <label for="Faceting-3-4-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-8"></input>
                                    <label for="Faceting-3-5-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-8"></input>
                                    <label for="Faceting-3-6-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-8"></input>
                                    <label for="Faceting-3-7-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-8"></input>
                                    <label for="Faceting-3-8-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-8"></input>
                                    <label for="Faceting-3-9-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-8"></input>
                                    <label for="Faceting-3-10-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Problem<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-9"></input>
                                    <label for="Faceting-3-1-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-9"></input>
                                    <label for="Faceting-3-2-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-9"></input>
                                    <label for="Faceting-3-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-9"></input>
                                    <label for="Faceting-3-4-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-9"></input>
                                    <label for="Faceting-3-5-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-9"></input>
                                    <label for="Faceting-3-6-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-9"></input>
                                    <label for="Faceting-3-7-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-9"></input>
                                    <label for="Faceting-3-8-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-9"></input>
                                    <label for="Faceting-3-9-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-9"></input>
                                    <label for="Faceting-3-10-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Helpdesk team size<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-10"></input>
                                    <label for="Faceting-3-1-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-10"></input>
                                    <label for="Faceting-3-2-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-10"></input>
                                    <label for="Faceting-3-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-10"></input>
                                    <label for="Faceting-3-4-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-10"></input>
                                    <label for="Faceting-3-5-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-10"></input>
                                    <label for="Faceting-3-6-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-10"></input>
                                    <label for="Faceting-3-7-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-10"></input>
                                    <label for="Faceting-3-8-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-10"></input>
                                    <label for="Faceting-3-9-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-10"></input>
                                    <label for="Faceting-3-10-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-11"></input>
                                    <label for="Faceting-3-1-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-11"></input>
                                    <label for="Faceting-3-2-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-11"></input>
                                    <label for="Faceting-3-3-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-11"></input>
                                    <label for="Faceting-3-4-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-11"></input>
                                    <label for="Faceting-3-5-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-11"></input>
                                    <label for="Faceting-3-6-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-11"></input>
                                    <label for="Faceting-3-7-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-11"></input>
                                    <label for="Faceting-3-8-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-11"></input>
                                    <label for="Faceting-3-9-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-11"></input>
                                    <label for="Faceting-3-10-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 4 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon Icon--view"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Fields</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">8 fields</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu dp-OptionList">
                    <li class="dp-Menu-title">
                        <ul>
                            <li class="dp-Menu-titleItem is-active"><span class="dp-Icon dp-list_view"></span><span>(8)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-table_view"></span><span>(5)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-kanban_view"></span><span>(9)</span></li>
                        </ul>
                    </li>
                    <li class="dp-Menu-subtitle">
                        <span class="">Fields</span>
                        <span><span class="dp-Meta is-active">view default</span><span class="dp-Meta">reset to default</span></span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-01"></input>
                            <label for="fields-01">Agent</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-02"></input>
                            <label for="fields-02">Title</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-03"></input>
                            <label for="fields-03">User</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-04"></input>
                            <label for="fields-04">Agent team</label>
                        </span>            
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-05"></input>
                            <label for="fields-05">Labels</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-06"></input>
                            <label for="fields-06">ID</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-07"></input>
                            <label for="fields-07">Status</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-08"></input>
                            <label for="fields-08">Language</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-09"></input>
                            <label for="fields-09">Department</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-10"></input>
                            <label for="fields-10">Product</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-11"></input>
                            <label for="fields-11">Organization</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-12"></input>
                            <label for="fields-12">SLAs</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-13"></input>
                            <label for="fields-13">User waiting</label>
                        </span>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-14"></input>
                            <label for="fields-14">Date created</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-15"></input>
                            <label for="fields-15">All waiting time</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-16"></input>
                            <label for="fields-16">Date of last reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-17"></input>
                            <label for="fields-17">Date of last user reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-18"></input>
                            <label for="fields-18">Date of last agent reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-19"></input>
                            <label for="fields-19">Date resolved</label>
                        </span>
                        <span class="dp-Icon dp-settings is-active"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem is-active">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-20"></input>
                            <label for="fields-20">Problem</label>
                        </span>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem dp-ButtonWrapper">
                        <button class="dp-Button" type="button">Apply changes</button>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-21"></input>
                            <label for="fields-21">all filters</label>
                        </span>
                    </li>

                </ul>
            </div>
        </div>

        <div class="dp-Guides-list is-hoverable">
            <div class="dp-Guide Level-justify-between">

                <span class="dp-TitleGroup">
                    <span class="dp-Icon dp-Drag"></span>
                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Installation & Upgrades <span class="dp-qt">(16)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-Icon dp-Drag"></span>
                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Server Software <span class="dp-qt">(30)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between">
                <span class="dp-TitleGroup">
                    <span class="dp-Icon dp-Drag"></span>
                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Performance <span class="dp-qt">(234)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

            <div class="dp-Guide Level-justify-between is-reordering">
                <span class="dp-TitleGroup">
                    <span class="dp-Icon dp-Drag"></span>
                    <span class="dp-Icon Icon--folder"></span>
                    <span class="dp-Guide-title">Troubleshooting <span class="dp-qt">(55)</span></span>
                </span>

                <!-- Icon rolling -->
                <span class="dp-Guide-actions">
                    <span class="dp-Icon dp-IconJump"></span>
                    <span class="dp-Icon dp-settings"></span>
                </span>
            </div>

        </div>

        <div class="dp-Categories">
            <span class="dp-Categories-title">Articles</span>
            <span class="dp-Categories-add">
                <span class="dp-Icon dp-add_follower"></span>
                New
            </span>
        </div>

        <!-- 3 - Sorting -->

        <div class="dp-OrderingBar">

            <div class="dp-OrderingBar-item">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="ordering-3-2"></input>
                    <label for="ordering-3-2"></label>
                </span>
            </div>

            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-grouped_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Grouped by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Department</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick Menu-grouped">
                    <li class="dp-Menu-linkItem is-active">
                        <a href="" class="dp-listItem">Department (DSC)<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">All waiting time<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Helpdesk team size<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<span class="dp-Icon dp-settings"></span></a>
                        <ul class="dp-Menu Menu--tick">
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Ascending</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#" class="dp-listItem">Descending</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 2 -->
            <div class="dp-OrderingBar-item is-active">
                <div class="dp-SortIconDescription">
                    <span class="dp-Icon dp-sort"></span>
                </div>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Sort by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Date created</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">

                    <li class="dp-Menu-linkItem dp-SortOrder">
                        <span class="dp-RadioWrapper">
                            <span class="dp-RadioItem">
                                <input type="radio" class="dp-Input Input--radio" id="radiosort-5-1" value="radiosort-5-1" name="radio-three-one">
                                <label for="radiosort-5-1">Display order</label>
                            </span>
                        </span>
                        <span class="dp-Subtitle">The order shown in the portal</span>
                        <a href="" class="dp-Order-btn">
                            <span class="dp-Icon dp-sort"></span>
                            Set as Display Order
                            <span class="dp-Tooltip">Set the currently selected Sort by as Display Order.</span>
                        </a>
                    </li>

                    <li class="dp-Menu-linkItem dp-SortList">
                        <ul>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-RadioWrapper">
                                    <span class="dp-RadioItem">
                                        <input type="radio" class="dp-Input Input--radio" id="radiosort-5-2" value="radiosort-5-2" name="radio-three-one">
                                        <label for="radiosort-5-2">Sort by</label>
                                    </span>
                                </span>
                            </li>

                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">
                                    Urgency
                                </a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date crated</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date published (DSC)</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last agent reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Date of last user reply</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget type</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Widget description</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Desired sizes</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Manufacturing date</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for cancellation</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Reason for complaint</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="" class="dp-listItem">Suggested actions</a>
                                <!-- Icon hover -->
                                <span class="dp-Cog">
                                    <span class="dp-Icon dp-settings"></span>
                                    <ul class="dp-Menu Menu--tick">
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Ascending
                                            </a>
                                        </li>
                                        <li class="dp-Menu-linkItem">
                                            <a href="#" class="dp-listItem">
                                                Descending
                                            </a>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

            <!-- 3 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon dp-faceted_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Faceted by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">3 Agents</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu Menu--tick">
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Department <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1"></input>
                                    <label for="Faceting-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2"></input>
                                    <label for="Faceting-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3"></input>
                                    <label for="Faceting-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4"></input>
                                    <label for="Faceting-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5"></input>
                                    <label for="Faceting-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6"></input>
                                    <label for="Faceting-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7"></input>
                                    <label for="Faceting-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8"></input>
                                    <label for="Faceting-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9"></input>
                                    <label for="Faceting-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10"></input>
                                    <label for="Faceting-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent (3)<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-1"></input>
                                    <label for="Faceting-3-1-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-1"></input>
                                    <label for="Faceting-3-2-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-1"></input>
                                    <label for="Faceting-3-3-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-1"></input>
                                    <label for="Faceting-3-4-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-1"></input>
                                    <label for="Faceting-3-5-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-1"></input>
                                    <label for="Faceting-3-6-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-1"></input>
                                    <label for="Faceting-3-7-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-1"></input>
                                    <label for="Faceting-3-8-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-1"></input>
                                    <label for="Faceting-3-9-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-1"></input>
                                    <label for="Faceting-3-10-1">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Person <span class="dp-Arrow"></span></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-2"></input>
                                    <label for="Faceting-3-1-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-2"></input>
                                    <label for="Faceting-3-2-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-2"></input>
                                    <label for="Faceting-3-3-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-2"></input>
                                    <label for="Faceting-3-4-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-2"></input>
                                    <label for="Faceting-3-5-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-2"></input>
                                    <label for="Faceting-3-6-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-2"></input>
                                    <label for="Faceting-3-7-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-2"></input>
                                    <label for="Faceting-3-8-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-2"></input>
                                    <label for="Faceting-3-9-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-2"></input>
                                    <label for="Faceting-3-10-2">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Agent team <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-3"></input>
                                    <label for="Faceting-3-1-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-3"></input>
                                    <label for="Faceting-3-2-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-3"></input>
                                    <label for="Faceting-3-3-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-3"></input>
                                    <label for="Faceting-3-4-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-3"></input>
                                    <label for="Faceting-3-5-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-3"></input>
                                    <label for="Faceting-3-6-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-3"></input>
                                    <label for="Faceting-3-7-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-3"></input>
                                    <label for="Faceting-3-8-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-3"></input>
                                    <label for="Faceting-3-9-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-3"></input>
                                    <label for="Faceting-3-10-3">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Organization <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-4"></input>
                                    <label for="Faceting-3-1-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-4"></input>
                                    <label for="Faceting-3-2-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-4"></input>
                                    <label for="Faceting-3-3-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-4"></input>
                                    <label for="Faceting-3-4-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-4"></input>
                                    <label for="Faceting-3-5-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-4"></input>
                                    <label for="Faceting-3-6-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-4"></input>
                                    <label for="Faceting-3-7-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-4"></input>
                                    <label for="Faceting-3-8-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-4"></input>
                                    <label for="Faceting-3-9-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-4"></input>
                                    <label for="Faceting-3-10-4">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Language <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-5"></input>
                                    <label for="Faceting-3-1-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-5"></input>
                                    <label for="Faceting-3-2-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-5"></input>
                                    <label for="Faceting-3-3-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-5"></input>
                                    <label for="Faceting-4-4-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-5"></input>
                                    <label for="Faceting-3-5-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-5"></input>
                                    <label for="Faceting-3-6-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-5"></input>
                                    <label for="Faceting-3-7-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-5"></input>
                                    <label for="Faceting-3-8-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-5"></input>
                                    <label for="Faceting-3-9-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-5"></input>
                                    <label for="Faceting-3-10-5">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Workflow <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-6"></input>
                                    <label for="Faceting-3-1-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-6"></input>
                                    <label for="Faceting-3-2-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-6"></input>
                                    <label for="Faceting-3-3-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-6"></input>
                                    <label for="Faceting-3-4-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-6"></input>
                                    <label for="Faceting-3-5-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-6"></input>
                                    <label for="Faceting-3-6-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-6"></input>
                                    <label for="Faceting-3-7-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-6"></input>
                                    <label for="Faceting-3-8-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-6"></input>
                                    <label for="Faceting-3-9-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-6"></input>
                                    <label for="Faceting-3-10-6">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Product <button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-7"></input>
                                    <label for="Faceting-3-1-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-7"></input>
                                    <label for="Faceting-3-2-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-7"></input>
                                    <label for="Faceting-3-3-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-7"></input>
                                    <label for="Faceting-3-4-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-7"></input>
                                    <label for="Faceting-3-5-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-7"></input>
                                    <label for="Faceting-3-6-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-7"></input>
                                    <label for="Faceting-3-7-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-7"></input>
                                    <label for="Faceting-3-8-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-7"></input>
                                    <label for="Faceting-3-9-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-7"></input>
                                    <label for="Faceting-3-10-7">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">SLAs<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-8"></input>
                                    <label for="Faceting-3-1-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-8"></input>
                                    <label for="Faceting-3-2-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-8"></input>
                                    <label for="Faceting-3-3-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-8"></input>
                                    <label for="Faceting-3-4-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-8"></input>
                                    <label for="Faceting-3-5-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-8"></input>
                                    <label for="Faceting-3-6-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-8"></input>
                                    <label for="Faceting-3-7-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-8"></input>
                                    <label for="Faceting-3-8-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-8"></input>
                                    <label for="Faceting-3-9-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-8"></input>
                                    <label for="Faceting-3-10-8">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Problem<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-9"></input>
                                    <label for="Faceting-3-1-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-9"></input>
                                    <label for="Faceting-3-2-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-9"></input>
                                    <label for="Faceting-3-3-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-9"></input>
                                    <label for="Faceting-3-4-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-9"></input>
                                    <label for="Faceting-3-5-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-9"></input>
                                    <label for="Faceting-3-6-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-9"></input>
                                    <label for="Faceting-3-7-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-9"></input>
                                    <label for="Faceting-3-8-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-9"></input>
                                    <label for="Faceting-3-9-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-9"></input>
                                    <label for="Faceting-3-10-9">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Helpdesk team size<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-10"></input>
                                    <label for="Faceting-3-1-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-10"></input>
                                    <label for="Faceting-3-2-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-10"></input>
                                    <label for="Faceting-3-3-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-10"></input>
                                    <label for="Faceting-3-4-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-10"></input>
                                    <label for="Faceting-3-5-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-10"></input>
                                    <label for="Faceting-3-6-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-10"></input>
                                    <label for="Faceting-3-7-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-10"></input>
                                    <label for="Faceting-3-8-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-10"></input>
                                    <label for="Faceting-3-9-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-10"></input>
                                    <label for="Faceting-3-10-10">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Hubspot deal<button class="dp-Arrow"></button></a>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-1-11"></input>
                                    <label for="Faceting-3-1-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-2-11"></input>
                                    <label for="Faceting-3-2-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-3-11"></input>
                                    <label for="Faceting-3-3-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-4-11"></input>
                                    <label for="Faceting-3-4-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-5-11"></input>
                                    <label for="Faceting-3-5-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-6-11"></input>
                                    <label for="Faceting-3-6-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Pride
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-7-11"></input>
                                    <label for="Faceting-3-7-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bob Cooper
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-8-11"></input>
                                    <label for="Faceting-3-8-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Julien Ducro
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-9-11"></input>
                                    <label for="Faceting-3-9-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Wendy Lightbody
                                    </label>
                                </span>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-CustomCheckbox">
                                    <input type="checkbox" class="dp-ControlInput" id="Faceting-3-10-11"></input>
                                    <label for="Faceting-3-10-11">
                                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                        Bobby Steiner
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 4 -->
            <div class="dp-OrderingBar-item">
                <span class="dp-Icon Icon--view"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Fields</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">8 fields</span>
                    </span>
                </span>

                <!-- dropdown -->
                <ul class="dp-Menu dp-OptionList">
                    <li class="dp-Menu-title">
                        <ul>
                            <li class="dp-Menu-titleItem is-active"><span class="dp-Icon dp-list_view"></span><span>(8)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-table_view"></span><span>(5)</span></li>
                            <li class="dp-Menu-titleItem"><span class="dp-Icon dp-kanban_view"></span><span>(9)</span></li>
                        </ul>
                    </li>
                    <li class="dp-Menu-subtitle">
                        <span class="">Fields</span>
                        <span><span class="dp-Meta is-active">view default</span><span class="dp-Meta">reset to default</span></span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-01"></input>
                            <label for="fields-01">Agent</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-02"></input>
                            <label for="fields-02">Title</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem dp-Uneditable">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-03"></input>
                            <label for="fields-03">User</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-04"></input>
                            <label for="fields-04">Agent team</label>
                        </span>            
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-05"></input>
                            <label for="fields-05">Labels</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-06"></input>
                            <label for="fields-06">ID</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-07"></input>
                            <label for="fields-07">Status</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-08"></input>
                            <label for="fields-08">Language</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-09"></input>
                            <label for="fields-09">Department</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-10"></input>
                            <label for="fields-10">Product</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-11"></input>
                            <label for="fields-11">Organization</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-12"></input>
                            <label for="fields-12">SLAs</label>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-13"></input>
                            <label for="fields-13">User waiting</label>
                        </span>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-14"></input>
                            <label for="fields-14">Date created</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-15"></input>
                            <label for="fields-15">All waiting time</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-16"></input>
                            <label for="fields-16">Date of last reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-17"></input>
                            <label for="fields-17">Date of last user reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-18"></input>
                            <label for="fields-18">Date of last agent reply</label>
                        </span>
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-19"></input>
                            <label for="fields-19">Date resolved</label>
                        </span>
                        <span class="dp-Icon dp-settings is-active"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <a href="#">Date/time</a>
                            </li>
                           <li class="dp-Menu-linkItem">
                                <a href="#">How long since</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dp-Menu-linkItem is-active">
                        <span class="dp-Icon dp-Drag"></span>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-20"></input>
                            <label for="fields-20">Problem</label>
                        </span>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem dp-ButtonWrapper">
                        <button class="dp-Button" type="button">Apply changes</button>
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="fields-21"></input>
                            <label for="fields-21">all filters</label>
                        </span>
                    </li>

                </ul>
            </div>
        </div>

        <div class="dp-Articles-group">
            <ul>

                <!-- 1 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-1">
                            <label for="Articles-2-1"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Creating effective new ticket contact forms</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">14/7/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 2 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-2">
                            <label for="Articles-2-2"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Setting up Departments</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">14/7/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 3 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-3">
                            <label for="Articles-2-3"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">How do I get started with Deskpro?</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">14/7/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 4 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-4">
                            <label for="Articles-2-4"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">What documentation is available for Deskpro?</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">7/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 5 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-5">
                            <label for="Articles-2-5"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Setting up a Custom Email Address with Deskpro</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">28/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 6 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-6">
                            <label for="Articles-2-6"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Creating effective new ticket contact forms</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">30/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 7 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-6">
                            <label for="Articles-2-6"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">Setting up Departments</span>
                            </span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">5/9/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

                <!-- 8 -->
                <li class="dp-Card">
                    <span class="dp-LevelItem Level-justify-between">
                        <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                            <input type="checkbox" class="dp-ControlInput" id="Articles-2-6">
                            <label for="Articles-2-6"></label>
                            <span class="dp-Task-title">
                                <span class="dp-Card-title">How do I get started with Deskpro?</span>
                            </span>
                        </span>

                        <span class="dp-LevelRight">
                            <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                        </span>
                    </span>

                    <span class="dp-LevelItem Level-justify-between">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-group"></span>
                                <span class="dp-UserName dp-date">18/10/18</span>
                            </li>
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Mark Jarvis</span>
                            </li>
                        </ul>
                    </span>
                </li>

            </ul>
        </div>

    </div>
</form>
```

<h4>Sort and Re-order/Sort by and Display order menu</h4>

```html @preview
<div class="dp-MainWrapper demo-cog demo-menu demo-tooltip" style="height:400px">

    <div class="dp-Knowledgebase">
        <!-- dropdown -->
        <ul class="dp-Menu Menu--tick is-active" style="top:0">

            <li class="dp-Menu-linkItem dp-SortOrder">
                <span class="dp-RadioWrapper">
                    <span class="dp-RadioItem">
                        <input type="radio" class="dp-Input Input--radio" id="test-radioone" value="test-radioone" name="demo-radio-group-1">
                        <label for="test-radioone">Display order</label>
                    </span>
                </span>
                <span class="dp-Subtitle">The order shown in the portal</span>
            </li>

            <li class="dp-Menu-linkItem dp-SortList">
                <ul class="dp-Menu-Sort">
                    <li class="dp-Menu-linkItem">
                        <span class="dp-RadioWrapper">
                            <span class="dp-RadioItem">
                                <input type="radio" class="dp-Input Input--radio" id="radiosort-6" value="radiosort-6" name="demo-radio-group-1">
                                <label for="radiosort-6">Sort by</label>
                            </span>
                        </span>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">
                            Urgency
                        </a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date crated</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date published (DSC)</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date of last agent reply</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date of last user reply</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Widget type</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Widget description</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Desired sizes</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Manufacturing date</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Reason for cancellation</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Reason for complaint</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Suggested actions</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </li>

        </ul>

    </div>
</div>
```

```html @preview
<div class="dp-MainWrapper demo-cog demo-menu demo-tooltip" style="height:400px">

    <div class="dp-Knowledgebase">
        <!-- dropdown -->
        <ul class="dp-Menu Menu--tick is-active" style="top:0">

            <li class="dp-Menu-linkItem dp-SortOrder">
                <span class="dp-RadioWrapper">
                    <span class="dp-RadioItem">
                        <input type="radio" class="dp-Input Input--radio" id="test-radiotwo" value="test-radiotwo" name="demo-radio-group-2">
                        <label for="test-radiotwo">Display order</label>
                    </span>
                </span>
                <span class="dp-Subtitle">The order shown in the portal</span>
                <!-- checkbox -->
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="comment-002"></input>
                    <label for="comment-002">Enable drag and drop</br> re-ordering</label>
                </span>

            </li>

            <li class="dp-Menu-linkItem dp-SortList">
                <ul class="dp-Menu-Sort">
                    <li class="dp-Menu-linkItem">
                        <span class="dp-RadioWrapper">
                            <span class="dp-RadioItem">
                                <input type="radio" class="dp-Input Input--radio" id="radiosort-7" value="radiosort-7" name="demo-radio-group-2">
                                <label for="radiosort-7">Sort by</label>
                            </span>
                        </span>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">
                            Urgency
                        </a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date crated</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date published (DSC)</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date of last agent reply</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date of last user reply</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Widget type</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Widget description</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Desired sizes</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Manufacturing date</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Reason for cancellation</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Reason for complaint</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Suggested actions</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </li>

        </ul>

    </div>
</div>
```

```html @preview
<div class="dp-MainWrapper demo-cog demo-menu demo-tooltip" style="height:400px">

    <div class="dp-Knowledgebase">
        <!-- dropdown -->
        <ul class="dp-Menu Menu--tick is-active" style="top:0">

            <li class="dp-Menu-linkItem dp-SortOrder">
                <span class="dp-RadioWrapper">
                    <span class="dp-RadioItem">
                        <input type="radio" class="dp-Input Input--radio" id="test-radiothree" value="test-radiothree" name="demo-radio-group-3">
                        <label for="test-radiothree">Display order</label>
                    </span>
                </span>
                <span class="dp-Subtitle">The order shown in the portal</span>
                <a href="" class="dp-Order-btn">
                    <span class="dp-Icon dp-sort"></span>
                    Set as Display Order
                    <span class="dp-Tooltip">Set the currently selected Sort by as Display Order.</span>
                </a>
            </li>

            <li class="dp-Menu-linkItem dp-SortList">
                <ul class="dp-Menu-Sort">
                    <li class="dp-Menu-linkItem">
                        <span class="dp-RadioWrapper">
                            <span class="dp-RadioItem">
                                <input type="radio" class="dp-Input Input--radio" id="radiosort-8" value="radiosort-8" name="demo-radio-group-3">
                                <label for="radiosort-8">Sort by</label>
                            </span>
                        </span>
                    </li>

                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">
                            Urgency
                        </a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date crated</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date published (DSC)</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date of last agent reply</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Date of last user reply</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Widget type</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Widget description</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Desired sizes</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Manufacturing date</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Reason for cancellation</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Reason for complaint</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="" class="dp-listItem">Suggested actions</a>
                        <!-- Icon hover -->
                        <span class="dp-Cog">
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Ascending
                                    </a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">
                                        Descending
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </li>

        </ul>

    </div>
</div>
```
