---
title: List Pane
---

<h2>Listpane/general</h2>

<h4>listpane/column-controls</h4>
```html @preview
<ul class="dp-FilterControlsList newControlsList">
    <li class="dp-ListPane">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-0"></input>
            <label for="customCheckbox1-0"></label>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem is-active">
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
        <ul class="dp-Menu Menu-grouped">
            <li class="dp-Menu-linkItem">Due date <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <a href="#">Ascending</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="#">Descending</a>
                    </li>
                </ul>
            </li>

            <li class="dp-Menu-linkItem"> Agent <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <a href="#">Ascending</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="#">Descending</a>
                    </li>
                </ul>
            </li>

            <li class="dp-Menu-linkItem"> Department <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <a href="#">Ascending</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="#">Descending</a>
                    </li>
                </ul>
            </li>

            <li class="dp-Menu-linkItem"> Title <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <a href="#">Ascending</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="#">Descending</a>
                    </li>
                </ul>
            </li>
            
            <li class="dp-Menu-linkItem is-active"> Title <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <a href="#">Ascending</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <a href="#">Descending</a>
                    </li>
                </ul>
            </li>
        </ul>
    </li>

    <!-- 2 -->
    <li class="dp-ListPane dp-DropDownItem">
        <div class="dp-SortIconDescription">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SortDescription">DSC</span>
        </div>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Variable long...</span>
            </span>
        </span>

        <!-- dropdown -->
        <ul class="dp-Menu Menu-sort">
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Urgency</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date crated</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last reply</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last agent reply</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last user reply</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Widget type</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Widget description</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Desired sizes</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Manufacturing date</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Reason for cancellation</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Reason for complaint</a></li>
            <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Suggested actions</a></li>
        </ul>

    </li>

    <!-- 3 -->

    <li class="dp-ListPane dp-DropDownItem is-active">
        <span class="dp-Icon dp-faceted_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Department</span>
            </span>
        </span>

        <!-- dropdown -->
        <ul class="dp-Menu">
            <li class="dp-Menu-linkItem">My tasks</li>
            <li class="dp-Menu-linkItem">My teams tasks</li>
            <li class="dp-Menu-linkItem">Tasks delegated</li>
            <li class="dp-Menu-linkItem">All tasks</li>
        </ul>

    </li>

    <!-- 4 -->

    <li class="dp-ListPane dp-DropDownItem is-active">
        <span class="dp-Icon Icon--view"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Fields</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">4 fields</span>
            </span>
        </span>

        <!-- dropdown -->
        <ul class="dp-Menu Menu-fields">
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
            <li class="dp-Menu-linkItem">
                <span class="dp-Icon dp-Drag"></span>
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-01"></input>
                    <label for="fields-01">Agent</label>
                </span>
            </li>
            <li class="dp-Menu-linkItem">
                <span class="dp-Icon dp-Drag"></span>
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-02"></input>
                    <label for="fields-02">Title</label>
                </span>
            </li>
            <li class="dp-Menu-linkItem">
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
    </li>
</ul>
```

<h4>listpane/grouped-by-emptystate</h4>
```html @preview
<ul class="dp-FilterControlsList newControlsList">
    <li class="dp-ListPane">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-01"></input>
            <label for="customCheckbox1-01"></label>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon dp-grouped_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Grouped by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">None</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <div class="dp-SortIconDescription">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SortDescription">DSC</span>
        </div>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Variable long...</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon dp-faceted_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Department</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon Icon--view"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Fields</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">4 fields</span>
            </span>
        </span>
    </li>
</ul>
```

<h4>listpane/dsc</h4>
```html @preview
<ul class="dp-FilterControlsList newControlsList">
    <li class="dp-ListPane">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-02"></input>
            <label for="customCheckbox1-02"></label>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
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
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <div class="dp-SortIconDescription">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SortDescription">DSC</span>
        </div>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Variable long...</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon dp-faceted_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Department</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon Icon--view"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Fields</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">4 fields</span>
            </span>
        </span>
    </li>
</ul>
```

<h4>listpane/asc</h4>
```html @preview
<ul class="dp-FilterControlsList newControlsList">
    <li class="dp-ListPane">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-03"></input>
            <label for="customCheckbox1-03"></label>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
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
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <div class="dp-SortIconDescription">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SortDescription">ASC</span>
        </div>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Variable long...</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon dp-faceted_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Department</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon Icon--view"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Fields</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">4 fields</span>
            </span>
        </span>
    </li>
</ul>
```

<h4>listpane/column-controls-disabled</h4>
```html @preview
<ul disabled class="dp-FilterControlsList newControlsList">
    <li class="dp-ListPane">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-04"></input>
            <label for="customCheckbox1-04"></label>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
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
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <div class="dp-SortIconDescription">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SortDescription">ASC</span>
        </div>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Variable long...</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon dp-faceted_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Department</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon Icon--view"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Fields</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">4 fields</span>
            </span>
        </span>
    </li>
</ul>
```

<h4>listpane/header</h4>
```html @preview
<div class="dp-MainWrapper">
    <span class="dp-Card-SectionTitle">
        <span>Sales</span>
    </span>
</div>
```

<!-- Demo grid Level -->

<h4>Demo grid Level - Col </h4>
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
                        <span class="dp-ActivityStatus ActivityStatus--viewing">
                            <span class="dp-Icon Icon--view"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                        </span>
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

<h4>Demo grid Level - Row </h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList Card--row">
            <li class="dp-Card is-select dp-Level LevelCol">

                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox0-1"></input>
                        <label for="customCheckbox0-1" class="dp-Card-title">Card title here</label>
                    </span>

                    <span class="dp-IconGroup">
                        <span class="dp-ActivityStatus ActivityStatus--viewing">
                            <span class="dp-Icon Icon--view"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                        </span>
                        <span class="Icon--circle dp-iconBug"></span>
                        <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                        <span class="dp-Icon Icon--clock Icon--primary"></span>
                    </span>
                </span>

                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Single-line item</span>
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

<h4>list-pane/agent-viewing-small</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-select-items dp-Level">

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

                        <span class="dp-ActivityStatus ActivityStatus--viewing">
                            <span class="dp-Icon Icon--view"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                        </span>

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

<h4>list-pane/agent-viewing-large</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card is-checked dp-Level">

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
                        <span class="dp-ActivityStatus ActivityStatus--viewing">
                            <span class="dp-Icon Icon--view"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                        </span>
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

<h4>list-pane/agent-writing-small</h4>
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

                        <span class="dp-ActivityStatus ActivityStatus--writing ActivityStatus--primary">
                            <span class="dp-Icon Icon--edit Icon--primary"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                        </span>

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

<h4>list-pane/agent-writing-large</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card dp-Level">

                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-4"></input>
                        <label for="customCheckbox1-4" class="dp-Card-title"></label>
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

                        <span class="dp-ActivityStatus ActivityStatus--writing ActivityStatus--primary">
                            <span class="dp-Icon Icon--edit Icon--primary"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                            <span class="dp-Badge Badge--round Badge--grey"></span>
                        </span>

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

<h2>listpane/pagination-start</h2>
```html @preview
<div class="dp-Pagination">
    <a href="#" class="dp-PageNumber  is-active">1</a>
    <a href="#" class="dp-PageNumber">2</a>
    <a href="#" class="dp-PageNumber">3</a>
    <a href="#" class="dp-PageNumber">4</a>
    <a href="#" class="dp-PageNumber">5</a>
    <a href="#" class="dp-PageNumber">6</a>
    <a href="#" class="dp-PageNumber">7</a>
    <span class="dp-BreakPagination">...</span>
    <a href="#" class="dp-PageNumber">
        <span class="dp-Icon dp-Infinity"></span>
    </a>
    <a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight"></span></a>
</div>
```

<h2>listpane/pagination-midpage</h2>
```html @preview
<div class="dp-Pagination dp-Pagination-two">
    <a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft"></span></a>
    <a href="#" class="dp-PageNumber">1</a>
    <span class="dp-BreakPagination">...</span>
    <a href="#" class="dp-PageNumber">5</a>
    <a href="#" class="dp-PageNumber">6</a>
    <span class="dp-PageNumber is-active">7</span>
    <a href="#" class="dp-PageNumber">8</a>
    <a href="#" class="dp-PageNumber">9</a>
    <span class="dp-BreakPagination">...</span>
    <a href="#" class="dp-PageNumber">
        <span class="dp-Icon dp-Infinity"></span>
    </a>
    <a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight"></span></a>
</div>
```

<h2>listpane/tickets</h2>
```html @preview
<form>
    <ul class="dp-CardList is-hoverable">
        
        <li class="dp-Card-SectionTitle">
            <span>Sales</span>
        </li>

        <!-- 1 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-1"></input>
                    <label for="listpane-tickets-1" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">SSO Information<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
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

        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-2"></input>
                    <label for="listpane-tickets-2" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                </span>
            </span>
        </li>

        <!-- 3 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-3"></input>
                    <label for="listpane-tickets-3" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component<span class="dp-Icon Icon--star"></span></span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-warning"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>2 hr 16 min</span>
                </span>
            </span>
        </li>

        <!-- 4 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-4"></input>
                    <label for="listpane-tickets-4" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">AW: Need some help?</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconLock"></span>
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>57 mins</span>
                </span>
            </span>
        </li>

        <!-- 5 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-5"></input>
                    <label for="listpane-tickets-5" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">2 hours</span>
                </span>
            </span>
        </li>
        
        <!-- 6 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-6"></input>
                    <label for="listpane-tickets-6" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Enjoying your helpdesk?<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-neutral"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

        <!-- 7 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-7"></input>
                    <label for="listpane-tickets-7" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Product enquiry</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
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

        <!-- 8 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-8"></input>
                    <label for="listpane-tickets-8" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Allow anyone to email support<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--neutral">6</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

        <li class="dp-Card-SectionTitle">
            <span>Sales</span>
        </li>

        <!-- 9 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-9"></input>
                    <label for="listpane-tickets-9" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>12 hr 43 min</span>
                </span>
            </span>
        </li>

        <!-- 10 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-10"></input>
                    <label for="listpane-tickets-10" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Enjoying your helpdesk?<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>

                <span class="dp-JustifyStart">
                    <span class="dp-Meta">Department: <span class="dp-Meta-value">Support</span></span>
                    <span class="dp-Meta">Language: <span class="dp-Meta-value">Italiano</span></span>
                    <span class="dp-Meta">Last reply: <span class="dp-Meta-value">9 weeks ago</span></span>
                </span>

            </span>

            <span class="dp-LevelCol dp-LevelTop dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-neutral"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>4 weeks</span>
                </span>
            </span>
        </li>

        <!-- 11 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-11"></input>
                    <label for="listpane-tickets-11" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
                <span class="dp-TagBar dp-JustifyStart">
                    <span class="dp-Tag Tag--close">Custom work<span class="dp-Icon dp-close"></span></span>
                    <span class="dp-Tag Tag--close">Report back on bug fix<span class="dp-Icon dp-close"></span></span>
                    <span class="dp-Tag Tag--close Tag--purple">VIP<span class="dp-Icon dp-close"></span></span>
                    <button class="dp-Button Button--label">
                        Labels<span class="dp-Icon dp-IconPlusBtn"></span>
                    </button>
                </span>
                <span class="dp-JustifyStart">
                    <span class="dp-Meta">Department: <span class="dp-Meta-value">Support</span></span>
                    <span class="dp-Meta">Language: <span class="dp-Meta-value">Italiano</span></span>
                    <span class="dp-Meta">Last reply: <span class="dp-Meta-value">9 weeks ago</span></span>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelTop dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>12 hr 43 min</span>
                </span>
            </span>
        </li>

    </ul>
</form>
```

<h4>listpane/rightclick</h4>
```html @preview
<div class="dp-MainWrapper">
    <div style="height: 450px; position: relative;">

        <ul class="dp-Menu is-visible" style="top: 0; left: 0;">
            <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">me</a> or <button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-search">
                        <form>
                            <span class="dp-Icon dp-IconSearch"></span>
                            <input type="text" class="dp-Input Input--search">
                        </form>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Pride</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bob Cooper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Julien Ducro</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Lightbody</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bobby Steiner</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Pride</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bob Cooper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Julien Ducro</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Lightbody</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bobby Steiner</a>
                    </li>
                </ul>
            </li>

            <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">my team</a> or <button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-search">
                        <form>
                            <span class="dp-Icon dp-IconSearch"></span>
                            <input type="text" class="dp-Input Input--search">
                        </form>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Pride</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bob Cooper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Julien Ducro</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Lightbody</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bobby Steiner</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Pride</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bob Cooper</a>
                    </li>
                </ul>
            </li>

            <li class="dp-DropdownDivider"></li>

            <li class="dp-Menu-linkItem">Status <span class="dp-Arrow"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-search">
                        <form>
                            <span class="dp-Icon dp-IconSearch"></span>
                            <input type="text" class="dp-Input Input--search">
                        </form>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Pride</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bob Cooper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Julien Ducro</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Lightbody</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bobby Steiner</a>
                    </li>
                </ul>
            </li>

            <li class="dp-Menu-linkItem"> Urgency <button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-search">
                        <form>
                            <span class="dp-Icon dp-IconSearch"></span>
                            <input type="text" class="dp-Input Input--search">
                        </form>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Pride</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Bob Cooper</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Badge Badge--round Badge--grey-light"></span>
                        <a href="#" class="dp-listItem">Wendy Lightbody</a>
                    </li>
                </ul>
            </li>

            <li class="dp-DropdownDivider"></li>
            <li class="dp-Menu-linkItem">Place on hold</li>
            <li class="dp-Menu-linkItem">Lock</li>
            <li class="dp-Menu-linkItem">Unlock</li>

        </ul>

    </div>
</div>
```

<h4>listpane/grouping-and-sorting-bar</h4>
```html @preview
<ul class="dp-FilterControlsList newControlsList dp-GroupSortBar">
    <li class="dp-ListPane">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-04"></input>
            <label for="customCheckbox1-04"></label>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
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
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <div class="dp-SortIconDescription">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SortDescription">DSC</span>
        </div>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Variable long name</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon dp-faceted_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Agent: Julien Durco</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon Icon--view"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Fields</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">4 fields</span>
            </span>
        </span>
    </li>

    <li class="dp-ListPane">
        <span class="dp-Icon dp-csv"></span>
        <span class="dp-Title">CSV Export</span>
    </li>

</ul>
```


<h2>Listpane/tableview</h2>
<h4>listpane/grouping-and-sorting-bar</h4>
```html @preview
<ul class="dp-FilterControlsList newControlsList dp-GroupSortBar">
    <li class="dp-ListPane">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="dp-Listpane-tableview"></input>
            <label for="dp-Listpane-tableview"></label>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
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
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <div class="dp-SortIconDescription">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SortDescription">DSC</span>
        </div>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Variable long name</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon dp-faceted_by"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">Agent: Julien Durco</span>
            </span>
        </span>
    </li>
    <li class="dp-ListPane dp-DropDownItem">
        <span class="dp-Icon Icon--view"></span>
        <span class="dp-SelectGroup">
            <span class="dp-ItemRow">
                <span class="dp-Title">Fields</span>
                <button class="dp-Arrow"></button>
            </span>
            <span class="dp-ItemRow">
                <span class="dp-Subtitle">4 fields</span>
            </span>
        </span>
    </li>

    <li class="dp-ListPane">
        <span class="dp-Icon dp-csv"></span>
        <span class="dp-Title">CSV Export</span>
    </li>

</ul>
```

<h4>listpane/tableview-column-controls</h4>
```html @preview
<div class="dp-TableWrapper">
    <table class="dp-Tableview">
        <thead>
            <tr class="dp-ColumnControls">
                <th>
                    <span class="dp-TableItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="tableview-1"></input>
                            <label for="tableview-1"></label>
                        </span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        <span>ID</span>
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableSubject">
                    <span class="dp-TableItem">
                        Subject
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLabels">
                    <span class="dp-TableItem">
                        Labels
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableDepartment">
                    <span class="dp-TableItem">
                        Department
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLanguage">
                    <span class="dp-TableItem">
                        Language
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLastreply">
                    <span class="dp-TableItem">
                        Last reply
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableUser">
                    <span class="dp-TableItem">
                        User
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        SLA/Current user wait
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
            </tr>
        </thead>
    </table>
</div>
```

<h4>listpane/table-subheader</h4>
```html @preview
<div class="dp-MainWrapper">
    <span class="dp-Card-title">
        <span>Sales</span>
    </span>
</div>
```

```html @preview
<div class="dp-TableWrapper">
    <table class="dp-Tableview">
        <thead>
            <tr class="dp-ColumnControls">
                <th>
                    <span class="dp-TableItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="tableview-1-1"></input>
                            <label for="tableview-1-1"></label>
                        </span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        <span>ID</span>
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableSubject">
                    <span class="dp-TableItem">
                        Subject
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLabels">
                    <span class="dp-TableItem">
                        Labels
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableDepartment">
                    <span class="dp-TableItem">
                        Department
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLanguage">
                    <span class="dp-TableItem">
                        Language
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLastreply">
                    <span class="dp-TableItem">
                        Last reply
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableUser">
                    <span class="dp-TableItem">
                        User
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        SLA/Current user wait
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
            </tr>
        </thead>

        <tbody class="dp-ColumnControls dp-TableviewBody is-hoverable">

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-2"></input>
                        <label for="tableview-2"></label>
                    </span>
                </td>
                <td>83995</td>
                <td class="dp-SubjectItem">
                    <span>SSO Information</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td>Sales</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem">
                    <span class="dp-Icon dp-avatar"></span>
                    <span>Kenneth James</span>
                </td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-3"></input>
                        <label for="tableview-3"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem"><span>Portal disabled landing page</span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem">
                    <span class="dp-Icon dp-avatar"></span>
                    <span>Toby Falkirk</span>
                </td>
                <td>3 days</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">8</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-4"></input>
                        <label for="tableview-4"></label>
                    </span>
                </td>
                <td>67372</td>
                <td class="dp-SubjectItem"><span>Inventory component</span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>English (US)</td>
                <td>5 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-5"></input>
                        <label for="tableview-5"></label>
                    </span>
                </td>
                <td>83995</td>
                <td class="dp-SubjectItem">
                    <span>AW: Need some help?</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td>Sales</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></td>
                <td>2 hr 16 min</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-6"></input>
                        <label for="tableview-6"></label>
                    </span>
                </td>
                <td>12245</td>
                <td class="dp-SubjectItem"><span>Enjoying your helpdesk?</span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>Italiano</td>
                <td>2 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></td>
                <td>43 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--neutral"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-7"></input>
                        <label for="tableview-7"></label>
                    </span>
                </td>
                <td>83995</td>
                <td class="dp-SubjectItem"><span>SSO Information</span><span class="dp-Icon Icon--star"></span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-8"></input>
                        <label for="tableview-8"></label>
                    </span>
                </td>
                <td>65347</td>
                <td class="dp-SubjectItem"><span>Portal disabled landing page</span><span class="dp-Icon Icon--star"></span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>Italiano</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></td>
                <td>3 days</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--warning">6</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-9"></input>
                        <label for="tableview-9"></label>
                    </span>
                </td>
                <td>83995</td>
                <td class="dp-SubjectItem">
                    <span>Inventory component</span>
                </td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>English (US)</td>
                <td>4 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-10"></input>
                        <label for="tableview-10"></label>
                    </span>
                </td>
                <td>97546</td>
                <td class="dp-SubjectItem">
                    <span>AW: Need some help?</span>
                </td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>Italiano</td>
                <td>8 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></td>
                <td>4 weeks</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">8</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-11"></input>
                        <label for="tableview-11"></label>
                    </span>
                </td>
                <td>43563</td>
                <td class="dp-SubjectItem">
                    <span>Enjoying your helpdesk?</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td>Sales</td>
                <td>English (US)</td>
                <td>2 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-12"></input>
                        <label for="tableview-12"></label>
                    </span>
                </td>
                <td>76473</td>
                <td class="dp-SubjectItem">
                    <span>SSO Information</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></td>
                <td>2 hr 16 min</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--neutral">4</span>
                </td>
            </tr>
        </tbody>

        <thead>
            <tr class="dp-Card-title">
                <td colspan="12">Sales</td>
            </tr>

            <tr class="dp-ColumnControls">
                <th>
                    <span class="dp-TableItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="tableview-13"></input>
                            <label for="tableview-13"></label>
                        </span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        <span>ID</span>
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableSubject">
                    <span class="dp-TableItem">
                        Subject
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLabels">
                    <span class="dp-TableItem">
                        Labels
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableDepartment">
                    <span class="dp-TableItem">
                        Department
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLanguage">
                    <span class="dp-TableItem">
                        Language
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLastreply">
                    <span class="dp-TableItem">
                        Last reply
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableUser">
                    <span class="dp-TableItem">
                        User
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        SLA/Current user wait
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
            </tr>
        </thead>

        <tbody class="dp-ColumnControls dp-TableviewBody is-hoverable">
            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-14"></input>
                        <label for="tableview-14"></label>
                    </span>
                </td>
                <td>83995</td>
                <td class="dp-SubjectItem">
                    <span>SSO Information</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td>Sales</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon Icon--circle dp-rocket Icon-grey-darkest"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-15"></input>
                        <label for="tableview-15"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem"><span>Portal disabled landing page</span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></td>
                <td>3 days</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">8</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-16"></input>
                        <label for="tableview-16"></label>
                    </span>
                </td>
                <td>67372</td>
                <td class="dp-SubjectItem"><span>Inventory component</span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>English (US)</td>
                <td>5 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-17"></input>
                        <label for="tableview-17"></label>
                    </span>
                </td>
                <td>83995</td>
                <td class="dp-SubjectItem">
                    <span>AW: Need some help?</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td>Sales</td>
                <td>English (US)</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></td>
                <td>2 hr 16 min</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-18"></input>
                        <label for="tableview-18"></label>
                    </span>
                </td>
                <td>12245</td>
                <td class="dp-SubjectItem"><span>Enjoying your helpdesk?</span></td>
                <td>&nbsp;</td>
                <td>Support</td>
                <td>Italiano</td>
                <td>2 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></td>
                <td>43 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--neutral"></span>
                </td>
            </tr>

        </tbody>
    </table>
</div>
```

<h2>Listpane/mass-select</h2>
```html @preview
<form class="dp-MassSelect newControlsList">

    <span class="dp-MassSelectTitle">
        <span class="dp-ItemRow">
            <span class="dp-CustomCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="listpaneCheckbox0" checked="checked"></input>
                <label for="listpaneCheckbox0" class="dp-Input-arrow"></label>

                <button class="dp-Arrow"></button>
                <span class="dp-Card-title">(48 items selected)</span>
                <ul class="dp-Menu is-visible">
                    <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Uncheck all</a></li>
                    <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Select all</a></li>
                </ul>
            </span>

            <span class="dp-ListPane">
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
            </span>
        </span>
    </span>

    <ul class="dp-CardList newControlsList is-hoverable">

        <li class="dp-Card-SectionTitle">
            <span>Sales</span>
        </li>

        <!-- 1 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-4"></input>
                    <label for="customCheckbox1-4" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">SSO Information<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
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

        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-5"></input>
                    <label for="customCheckbox1-5" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                </span>
            </span>
        </li>

        <!-- 3 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-6"></input>
                    <label for="customCheckbox1-6" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component<span class="dp-Icon Icon--star"></span></span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-warning"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>2 hr 16 min</span>
                </span>
            </span>
        </li>

        <!-- 4 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-7"></input>
                    <label for="customCheckbox1-7" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">AW: Need some help?</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconLock"></span>
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>57 mins</span>
                </span>
            </span>
        </li>

        <!-- 5 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-8"></input>
                    <label for="customCheckbox1-8" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">2 hours</span>
                </span>
            </span>
        </li>
        
        <!-- 6 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-9"></input>
                    <label for="customCheckbox1-9" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Enjoying your helpdesk?<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-neutral"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

        <!-- 7 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-10"></input>
                    <label for="customCheckbox1-10" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Product enquiry</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
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

        <!-- 8 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-11"></input>
                    <label for="customCheckbox1-11" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Allow anyone to email support<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--neutral">6</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

    </ul>
</form>
```
<h2>Listpane/tasks</h2>
<h4>listpane/tasks-sort</h4>
```html @preview

    <div class="dp-TasksSort">
        <span class="dp-Tag Tag--small Tag--grey-lighter">DATE</span>
        <span class="dp-Tag Tag--small Tag--grey-lighter">ASSIGNED</span>
        <span class="dp-Tag Tag--small Tag--grey-lighter">CREATOR</span>
    </div>
```

<h4>Listpane/guides</h4>
```html @preview
<div class="dp-MainWrapper">

    <!-- 1 -->
    <ul class="dp-CardList dp-Listpane-guides">
        <li class="dp-Card dp-Level is-active">

            <span class="dp-LevelCol dp-LevelTop">
                <span class="dp-Icon dp-drag"></span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Card title here</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Single-line item</span>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight dp-LevelTop">
                <span class="dp-IconGroup">
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </span>
            </span>
        </li>

        <!-- 2 -->
        <!-- <li class="dp-Card dp-Level Level--down"> -->
        <li class="Level--down">
            <ul class="dp-CardList">

                <li class="dp-Card dp-Level">
                    <span class="dp-LevelCol dp-LevelTop">
                        <!-- Arrow -->
                        <span class="dp-Icon dp-sub_field"></span>
                        <span class="dp-Icon dp-drag"></span>
                    </span>

                    <span class="dp-LevelCol">
                        <span class="dp-Card-title">Card title here</span>

                        <span class="dp-UserInfo">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-UserName">Single-line item</span>
                        </span>
                    </span>
                </li>

                <li class="dp-Card dp-Level is-active">
                    <span class="dp-LevelCol dp-LevelTop">
                        <!-- Arrow -->
                        <span class="dp-Icon dp-sub_field"></span>
                        <span class="dp-Icon dp-drag"></span>
                    </span>

                    <span class="dp-LevelCol">
                        <span class="dp-Card-title">Card title here</span>

                        <span class="dp-UserInfo">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                        </span>
                    </span>

                    <span class="dp-LevelCol dp-LevelRight dp-LevelTop">
                        <span class="dp-IconGroup">
                            <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                        </span>
                    </span>
                </li>
                
                <!-- 3 -->
                <!-- <li class="dp-Card dp-Level Level--down"> -->
                <li class="Level--down">
                    <ul class="dp-CardList">

                        <li class="dp-Card dp-Level Card--primary">
                            <span class="dp-LevelItem dp-LevelCol dp-LevelTop">
                                <!-- Arrow -->
                                <span class="dp-Icon dp-sub_field"></span>
                                <span class="dp-Icon dp-drag"></span>
                            </span>

                            <span class="dp-LevelCol">
                                <span class="dp-Card-title">Card title here</span>

                                <span class="dp-UserInfo">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName">Single-line item</span>
                                </span>
                            </span>

                            <span class="dp-LevelCol dp-LevelRight dp-LevelBottom">
                                <span class="dp-TimeStatus">
                                    <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                                </span>
                            </span>
                        </li>
                    </ul>
                </li>

            </ul>
        </li>
    </ul>

</div>
```

<h4>listpane/tasksnew</h4>
```html @preview
<div class="dp-MainWrapper" style="height: 400px">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tasksnew-1">
                        <label for="tasksnew-1" class="dp-Card-title">
                            <span class="dp-Icon dp-Approve is-completed"></span>
                            <span class="dp-Label-title">Maintenance & Installation of Lighting System</span>
                        </label>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <a href="#" class="dp-Date-link">Today : 4pm</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link Icon--primary"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings is-active"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">

                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>

                    <!-- comment -->
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title is-active">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>
        </ul>
    </form>
</div>
```

<h4>COMPLETED TASK</h4>
```html @preview
<form>
    <ul class="dp-CardList Task--completed">
        <li class="dp-Card dp-Level LevelCol dp-Tasks-list">

            <span class="dp-LevelItem Level-justify-between">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tasksnew-2">
                    <label for="tasksnew-2" class="dp-Card-title">
                        <span class="dp-Icon dp-Approve"></span>
                        Maintenance & Installation of Lighting System
                    </label>
                </span>

                <span class="dp-DateGroup">
                    <span class="dp-Icon dp-group"></span>
                    <a href="#" class="dp-Date-link">Today : 4pm</a>
                </span>
            </span>

            <span class="dp-LevelItem dp-LevelLeft">
                <span class="dp-Diagnose">
                    <a href="" class="dp-Card-link">
                        <span class="dp-Icon dp-link Icon--primary"></span>
                        Diagnose And Repair Electrical Systems
                    </a>
                </span>

                <!-- Icon hover -->
                <span class="dp-Cog">
                    <span class="dp-Icon dp-settings is-active"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Bin"></span>
                            <a href="#" class="dp-Menu-link">
                                Delete
                            </a>
                        </li>
                    </ul>
                </span>

            </span>

            <span class="dp-LevelItem Level-justify-between">
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-Visibility"></span>
                    <span class="dp-UserName dp-Department">Department</span>
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Me</span>
                </span>
                <span class="dp-CommentWrap">
                    <span class="dp-Icon dp-iconComents"></span>
                    <span class="dp-Comments-title">Add comment</span>
                    <ul class="dp-Comments">
                        <li class="dp-Comments-item">
                            <span class="dp-Level">
                                <span class="dp-LevelLeft">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName">Kenneth James</span>
                                </span>
                                <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                    <span>23 mins ago</span>
                                </span>
                            </span>
                            <span class="dp-Level">
                                <span class="dp-txt">
                                    The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                </span>
                            </span>
                        </li>
                        <li class="dp-Comments-item">
                            <span class="dp-Level">
                                <span class="dp-LevelLeft">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName">Victor Moses</span>
                                </span>
                                <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                    <span>12 mins ago</span>
                                </span>
                            </span>
                            <span class="dp-Level">
                                <span class="dp-txt">
                                    The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                </span>
                            </span>
                            <div class="dp-ReplyWrapper">
                                <textarea class="dp-ReplyEditor"></textarea>
                            </div>
                            <div class="dp-ButtonWrapper">
                                <button class="dp-Button Button--small Button--outlined" type="button">
                                    Add comment
                                </button>
                                <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                    Cancel
                                </button>
                            </div>
                        </li>
                    </ul>
                </span>
            </span>
        </li>
    </ul>
</form>
```

<h4>Listpane/settings-cog</h4>
```html @preview
<form>
    <ul class="dp-CardList is-hoverable">
        
        <li class="dp-Card-SectionTitle">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-0"></input>
                    <label for="settings-cog-0" class="dp-Card-title"></label>
                </span>
            </span>
            <span class="dp-LevelCol">
                <span class="dp-Card-title">Sales</span>
            </span>
        </li>

        <!-- 1 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-1"></input>
                    <label for="settings-cog-1" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">SSO Information<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James</span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
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

            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">me</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">my team</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem">Status <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"> Urgency <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>
                    <li class="dp-Menu-linkItem">Place on hold</li>
                    <li class="dp-Menu-linkItem">Lock</li>
                    <li class="dp-Menu-linkItem">Unlock</li>

                </ul>
            </span>

        </li>

        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-2"></input>
                    <label for="settings-cog-2" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis</span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                </span>
            </span>

            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">me</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">my team</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem">Status <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"> Urgency <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>
                    <li class="dp-Menu-linkItem">Place on hold</li>
                    <li class="dp-Menu-linkItem">Lock</li>
                    <li class="dp-Menu-linkItem">Unlock</li>

                </ul>
            </span>

        </li>

        <!-- 3 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-3"></input>
                    <label for="settings-cog-3" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component<span class="dp-Icon Icon--star"></span></span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk</span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-warning"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>2 hr 16 min</span>
                </span>
            </span>

            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">me</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">my team</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem">Status <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"> Urgency <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>
                    <li class="dp-Menu-linkItem">Place on hold</li>
                    <li class="dp-Menu-linkItem">Lock</li>
                    <li class="dp-Menu-linkItem">Unlock</li>

                </ul>
            </span>

        </li>

        <!-- 4 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-4"></input>
                    <label for="settings-cog-4" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">AW: Need some help?</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James</span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconLock"></span>
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>57 mins</span>
                </span>
            </span>

            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">me</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">my team</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem">Status <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"> Urgency <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>
                    <li class="dp-Menu-linkItem">Place on hold</li>
                    <li class="dp-Menu-linkItem">Lock</li>
                    <li class="dp-Menu-linkItem">Unlock</li>

                </ul>
            </span>

        </li>

        <!-- 5 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-5"></input>
                    <label for="settings-cog-5" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis</span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">2 hours</span>
                </span>
            </span>

            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings is-active"></span>
                <ul class="dp-Menu is-visible">

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">me</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem">Assign to <a href="#" class="dp-listLink">my team</a> or <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>

                    <li class="dp-Menu-linkItem">Status <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Julien Ducro</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bobby Steiner</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-Menu-linkItem"> Urgency <button class="dp-Arrow"></button>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-search">
                                <form>
                                    <span class="dp-Icon dp-IconSearch"></span>
                                    <input type="text" class="dp-Input Input--search">
                                </form>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Pride</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Bob Cooper</a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <a href="#" class="dp-listItem">Wendy Lightbody</a>
                            </li>
                        </ul>
                    </li>

                    <li class="dp-DropdownDivider"></li>
                    <li class="dp-Menu-linkItem">Place on hold</li>
                    <li class="dp-Menu-linkItem">Lock</li>
                    <li class="dp-Menu-linkItem">Unlock</li>

                </ul>
            </span>
        </li>
    </ul>
</form>
```

```html @preview
<form>
    <ul class="dp-CardList is-hoverable">

        <li class="dp-Card-SectionTitle dp-General-Articles">
            <span>GENERAL ARTICLES</span>
        </li>

        <!-- 1 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-6"></input>
                    <label for="settings-cog-6" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing message</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James</span>

                    <span class="dp-Icon dp-group"></span>
                    <span class="dp-UserName">3rd November 2018</span>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight dp-LevelTop">
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--success">Published</span>
                </span>
            </span>

            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-iconInsert-Link"></span>
                        <a href="#" class="dp-Menu-link">
                            Insert link
                        </a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-iconInsert"></span>
                        <a href="#" class="dp-Menu-link">
                            Insert into ticket
                        </a>
                    </li>
                </ul>
            </span>

        </li>

        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-7"></input>
                    <label for="settings-cog-7" class="dp-Card-title"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Creating effective new ticket contact forms</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James</span>

                    <span class="dp-Icon dp-group"></span>
                    <span class="dp-UserName">3rd November 2018</span>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight dp-LevelTop">
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--success">Published</span>
                </span>
            </span>

            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-iconInsert-Link"></span>
                        <a href="#" class="dp-Menu-link">
                            Insert link
                        </a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-iconInsert"></span>
                        <a href="#" class="dp-Menu-link">
                            Insert into ticket
                        </a>
                    </li>
                </ul>
            </span>
        </li>

        <!-- 3 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="settings-cog-8"></input>
                    <label for="settings-cog-8" class="dp-Card-title"></label>
                </span>
            </span>
            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James</span>
                    <span class="dp-Icon dp-group"></span>
                    <span class="dp-UserName">3rd November 2018</span>
                </span>
            </span>
            <span class="dp-LevelCol dp-LevelRight dp-LevelBottom">
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--disabled">Archived</span>
                </span>
            </span>
            <!-- Icon hover -->
            <span class="dp-Cog">
                <span class="dp-Icon dp-settings is-active"></span>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-iconInsert-Link"></span>
                        <a href="#" class="dp-Menu-link">
                            Insert link
                        </a>
                    </li>
                    <li class="dp-Menu-linkItem">
                        <span class="dp-Icon dp-iconInsert"></span>
                        <a href="#" class="dp-Menu-link">
                            Insert into ticket
                        </a>
                    </li>
                </ul>
            </span>
        </li>

    </ul>
</form>
```

<h4>MY TASKS</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card-SectionTitle dp-Tasks-list">
                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-0"></input>
                        <label for="my-task-0" class="dp-Card-title"></label>
                    </span>
                </span>
                <span class="dp-LevelCol">
                    <span class="dp-Card-title">MY TASKS</span>
                </span>
            </li>

            <!-- 1 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-1">
                        <label for="my-task-1" class="dp-Card-title">
                            <span class="dp-Icon dp-Approve"></span>
                            Maintenance & Installation of Lighting System
                        </label>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <a href="#" class="dp-Date-link">Today : 4pm</a>
                    </span>
                </span>

                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link Icon--primary"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-Visibility"></span>
                        <span class="dp-UserName dp-Department is-active">
                            Department
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">Private</li>
                                <li class="dp-Menu-linkItem">Public</li>
                                <li class="dp-Menu-linkItem">Department</li>
                                <li class="dp-Menu-linkItem">Support</li>
                                <li class="dp-Menu-linkItem">Sales</li>
                            </ul>
                        </span>
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Me</span>
                    </span>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 2 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2">
                        <label for="my-task-2" class="dp-Card-title">
                            <span class="dp-Icon dp-Approve"></span>
                            Maintenance & Installation of Lighting System
                        </label>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <a href="#" class="dp-Date-link">Today : 4pm</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link Icon--primary"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-Visibility"></span>
                        <span class="dp-UserName dp-Department">Department</span>
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Me</span>
                    </span>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 3 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-3">
                        <label for="my-task-3" class="dp-Card-title">
                            <span class="dp-Icon dp-Approve"></span>
                            Maintenance & Installation of Lighting System
                        </label>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <a href="#" class="dp-Date-link">Today : 4pm</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link Icon--primary"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-Visibility"></span>
                        <span class="dp-UserName dp-Department">Department</span>
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Me</span>
                    </span>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 4 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-4">
                        <label for="my-task-4" class="dp-Card-title">
                            <span class="dp-Icon dp-Approve"></span>
                            Maintenance & Installation of Lighting System
                        </label>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <a href="#" class="dp-Date-link">Today : 4pm</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link Icon--primary"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings is-active"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-CreateTicket"></span>
                                <a href="#" class="dp-Menu-link">
                                    Add to ticket
                                </a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon Icon--edit"></span>
                                <a href="#" class="dp-Menu-link">
                                    Edit
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-UserInfo">
                        <span class="dp-Icon dp-Visibility"></span>
                        <span class="dp-UserName dp-Department">Department</span>
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        <span class="dp-UserName">Me</span>
                    </span>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

        </ul>
    </form>
</div>
```

<!-- COMMENTS -->

<h4>COMMENTS</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card-SectionTitle">
                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="comment-0"></input>
                        <label for="comment-0" class="dp-Card-title"></label>
                    </span>
                </span>
                <span class="dp-LevelCol">
                    <span class="dp-Card-title">COMMENTS <span>(123)</span></span>
                </span>
            </li>
            <!-- 1 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="comment-1">
                        <label for="comment-1" class="dp-UserName">
                            Mark Jarvis
                        </label>
                        <a href="" class="dp-UserEmail">mark.javis@customercompany.net</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Card-comment is-active">I wish I could show you our cat Dinah: I think I must go back by railw...
                        <span class="dp-Menu">
                            <span class="dp-UserInfo">
                                <span class="dp-UserName"><span class="dp-Icon dp-iconUserAvatar"></span>Mark Jarvis</span>
                                <a href="" class="dp-UserEmail">mark.javis@customercompany.net</a>
                            </span>
                            <span class="dp-UserDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </span>
                        </span>
                    </span>
                </span>
    
                <ul class="dp-Comment-control">
                    <li><span class="dp-Icon dp-Approve"></span>Approve</li>
                    <li><span class="dp-Icon dp-Delete"></span>Delete</li>
                    <li><span class="dp-Icon dp-CreateTicket"></span>Create ticket</li>
                    <li><span class="dp-Icon Icon--edit"></span>Edit</li>
                </ul>
            </li>

            <!-- 2 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="comment-2">
                        <label for="comment-2" class="dp-UserName">
                            Mark Jarvis
                        </label>
                        <a href="" class="dp-UserEmail">mark.javis@customercompany.net</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Card-comment">I wish I could show you our cat Dinah: I think I must go back by railw...</span>
                </span>
    
                <ul class="dp-Comment-control">
                    <li><span class="dp-Icon dp-Approve"></span>Approve</li>
                    <li><span class="dp-Icon dp-Delete"></span>Delete</li>
                    <li><span class="dp-Icon dp-CreateTicket"></span>Create ticket</li>
                    <li><span class="dp-Icon Icon--edit"></span>Edit</li>
                </ul>
            </li>

            <!-- 3 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="comment-3">
                        <label for="comment-3" class="dp-UserName">
                            Mark Jarvis
                        </label>
                        <a href="" class="dp-UserEmail">mark.javis@customercompany.net</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Card-comment">I wish I could show you our cat Dinah: I think I must go back by railw...</span>
                </span>
    
                <ul class="dp-Comment-control">
                    <li><span class="dp-Icon dp-Approve"></span>Approve</li>
                    <li><span class="dp-Icon dp-Delete"></span>Delete</li>
                    <li><span class="dp-Icon dp-CreateTicket"></span>Create ticket</li>
                    <li><span class="dp-Icon Icon--edit"></span>Edit</li>
                </ul>
            </li>

            <!-- 4 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="comment-4">
                        <label for="comment-4" class="dp-UserName">
                            Mark Jarvis
                        </label>
                        <a href="" class="dp-UserEmail">mark.javis@customercompany.net</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Card-comment">I wish I could show you our cat Dinah: I think I must go back by railw...</span>
                </span>
    
                <ul class="dp-Comment-control">
                    <li><span class="dp-Icon dp-Approve"></span>Approve</li>
                    <li><span class="dp-Icon dp-Delete"></span>Delete</li>
                    <li><span class="dp-Icon dp-CreateTicket"></span>Create ticket</li>
                    <li><span class="dp-Icon Icon--edit"></span>Edit</li>
                </ul>
            </li>

        </ul>
    </form>
</div>
```