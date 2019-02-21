---
title: Tableview
---

<h4>listpane/grouping-and-sorting-bar</h4>
```html @preview
<div class="Demo-Sorting-bar-class demo-cog demo-menu">

    <ul class="dp-FilterControlsList newControlsList dp-GroupSortBar">
        <li class="dp-ListPane">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="sorting-bar-0"></input>
                <label for="sorting-bar-0"></label>
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
            <span class="dp-Title-group is-active">
                <span class="dp-Icon Icon--csv"></span>
                <span class="dp-Title">CSV</span>

                <!-- Pop up -->
                <div class="dp-ToolTips is-active">
                    <div class="dp-ToolTipsUp">
                        <span class="dp-Icon dp-Info Icon-blue"></span>
                        <p>CSV Export info</p>
                    </div>
                    <div class="dp-ToolTipsDown">
                        <p>You will receive an email with the CSV data shortly.</p>
                    </div>
                </div>
            </span>

            <span class="dp-Title-group">
                <span class="dp-Icon dp-print"></span>
                <span class="dp-Title">Print</span>
            </span>
        </li>
    </ul>

</div>
```

<h4>Tableview Column Headers - For reference Artem</h4>

<!-- ```html @preview
<div class="dp-TableWrapper demo-cog demo-menu">
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
``` -->

```html @preview
<div class="dp-TableWrapper demo-cog demo-menu">
    <div class="dp-Tableview is-hoverable">
        <div class="dp-TableRow dp-TableControl">
            <div class="dp-TableItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1"></input>
                    <label for="tableview-1"></label>
                </span>
            </div>

            <div class="dp-TableItem">
                ID
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem dp-TableSubject">
                Subject
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Labels
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Department
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Language
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Last reply
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                User
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                SLA/Current user wait
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>
 
            <div class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
            </div>
        </div>
    </div>
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

## Listpane/tableview

<!-- 1 -->

```html @preview
<div class="dp-TableWrapper demo-cog demo-menu">
    <div class="dp-Tableview is-hoverable">

        <span class="is-column-draggable" style="position:absolute;content:'';top:0;bottom:0;left:579px;right:auto;background-color:#3a8dde;width:1px;z-index:9;"></span>
        <span class="dp-Icon Icon--draggable" style="position:absolute;top:7px;left:571px;right:auto;"></span>

        <div class="dp-TableRow dp-TableControl">
            <div class="dp-TableItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-1"></input>
                    <label for="tableview-1-1"></label>
                </span>
            </div>

            <div class="dp-TableItem">
                ID
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem dp-TableSubject">
                Subject
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Labels
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem is-item-draggable">
                Department
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Language
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Last reply
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                User
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                SLA/Current user wait
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>
 
            <div class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
            </div>
        </div>

        <div class="dp-TableRow dp-Filter is-open">
            <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="filter-1-1"></input>
                <label for="filter-1-1"></label>
            </div> 

            <div class="dp-Card-title">
                FILTER 
                <span class="dp-qt">(13)</span>
            </div>
                
            <div class="dp-Arrow-btn">
                <button class="dp-Arrow"></button>
            </div>
        </div>

        <div class="dp-TableRow dp-Sub-filter">
            <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="subfilter-1-1"></input>
                <label for="subfilter-1-1"></label>
            </div>

            <div class="dp-Card-title">
                <span class="dp-Icon Icon--enter"></span>
                SUB FILTER 
                <span class="dp-qt">(11)</span>
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-2"></input>
                    <label for="tableview-1-2"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Name Surname</span>
            </div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-3"></input>
                    <label for="tableview-1-3"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
            </div>
            <div>&nbsp;</div>
            <div>Column text</div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Name Surname</span>
            </div>
            <div>3 days</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-hover">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-4"></input>
                    <label for="tableview-1-4"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>5 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-5"></input>
                    <label for="tableview-1-5"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>2 hr 16 min</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">7</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-6"></input>
                    <label for="tableview-1-6"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>43 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--neutral"></span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-selected">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-7"></input>
                    <label for="tableview-2-7"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
                <span class="dp-Icon dp-settings is-active"></span>
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-8"></input>
                    <label for="tableview-1-8"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>3 days</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">6</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow dp-Sub-filter">
            <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="subfilter-1-2"></input>
                <label for="subfilter-1-2"></label>
            </div>

            <div class="dp-Card-title">
                <span class="dp-Icon Icon--enter"></span>
                SUB FILTER 
                <span class="dp-qt">(11)</span>
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-9"></input>
                    <label for="tableview-1-9"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>4 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-10"></input>
                    <label for="tableview-1-10"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>8 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>4 weeks</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-11"></input>
                    <label for="tableview-1-11"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-12"></input>
                    <label for="tableview-1-12"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>2 hr 16 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--neutral">4</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow dp-Filter">
            <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="filter-1-2"></input>
                <label for="filter-1-2"></label>
            </div> 

            <div class="dp-Card-title dp-Table-title">
                Filter title
            </div>
                
        </div>

        <div class="dp-TableRow dp-TableControl">
            <div class="dp-TableItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-13"></input>
                    <label for="tableview-1-13"></label>
                </span>
            </div>

            <div class="dp-TableItem">
                <span>ID</span>
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Subject
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Labels
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Department
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Language
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Last reply
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                User
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                SLA/Current user wait
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>
            
            <div class="dp-Cog">
                <div class="dp-Icon dp-settings"></div>
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-15"></input>
                    <label for="tableview-1-15"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-16"></input>
                    <label for="tableview-1-16"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Name Surname</span>
            </div>
            <div>3 days</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-selected">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-17"></input>
                    <label for="tableview-1-17"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
            </div>
            <div><span class="dp-Icon dp-Arrow"></span></div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>4 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow dp-Table-description">
            sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-18"></input>
                    <label for="tableview-1-18"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>2 hr 16 min</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">7</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-19"></input>
                    <label for="tableview-1-19"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Card title</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Column text</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Column text</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

    </div>
</div>
```

<!-- 2 -->

```html @preview
<div class="dp-TableWrapper demo-cog demo-menu">
    <div class="dp-Tableview is-hoverable">

        <span class="is-column-draggable" style="position:absolute;content:'';top:0;bottom:0;left:579px;right:auto;background-color:#3a8dde;width:1px;z-index:9;"></span>
        <span class="dp-Icon Icon--draggable" style="position:absolute;top:7px;left:571px;right:auto;"></span>

        <div class="dp-TableRow dp-TableControl">
            <div class="dp-TableItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-1"></input>
                    <label for="tableview-2-1"></label>
                </span>
            </div>

            <div class="dp-TableItem">
                ID
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem dp-TableSubject">
                Subject
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Labels
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem is-item-draggable">
                Department
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Language
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Last reply
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                User
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                SLA/Current user wait
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>
 
            <div class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
            </div>
        </div>

        <div class="dp-TableRow dp-Filter is-open">
            <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="filter-2-1"></input>
                <label for="filter-2-1"></label>
            </div> 

            <div class="dp-Card-title">
                FILTER 
                <span class="dp-qt">(13)</span>
            </div>
                
            <div class="dp-Arrow-btn">
                <button class="dp-Arrow"></button>
            </div>
        </div>

        <div class="dp-TableRow dp-Sub-filter">
            <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="subfilter-2-1"></input>
                <label for="subfilter-2-1"></label>
            </div>

            <div class="dp-Card-title">
                <span class="dp-Icon Icon--enter"></span>
                SUB FILTER 
                <span class="dp-qt">(11)</span>
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-2"></input>
                    <label for="tableview-2-2"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Kenneth James</span>
            </div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-3"></input>
                    <label for="tableview-2-3"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Portal disabled landing page</span>
            </div>
            <div>&nbsp;</div>
            <div>Support</div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Toby Falkirk</span>
            </div>
            <div>3 days</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-hover">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-4"></input>
                    <label for="tableview-2-4"></label>
                </span>
            </div>
            <div>67372</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Inventory component</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>5 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-5"></input>
                    <label for="tableview-2-5"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">AW: Need some help?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>2 hr 16 min</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">7</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-6"></input>
                    <label for="tableview-2-6"></label>
                </span>
            </div>
            <div>12245</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Enjoying your helpdesk?</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Italiano</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>43 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--neutral"></span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-selected">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-7"></input>
                    <label for="tableview-2-7"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
                <span class="dp-Icon dp-settings is-active"></span>
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-8"></input>
                    <label for="tableview-2-8"></label>
                </span>
            </div>
            <div>65347</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Portal disabled landing page</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Italiano</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>3 days</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">6</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-9"></input>
                    <label for="tableview-2-9"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Inventory component</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>4 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-10"></input>
                    <label for="tableview-2-10"></label>
                </span>
            </div>
            <div>97546</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">AW: Need some help?</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Italiano</div>
            <div>8 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>4 weeks</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-11"></input>
                    <label for="tableview-2-11"></label>
                </span>
            </div>
            <div>43563</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Enjoying your helpdesk?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-12"></input>
                    <label for="tableview-2-12"></label>
                </span>
            </div>
            <div>76473</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>2 hr 16 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--neutral">4</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="sales-2-2"></input>
                    <label for="sales-2-2"></label>
                </span>
            </div>
            <div class="dp-Card-title dp-Table-title">Sales</div>
        </div>

        <!--  -->
        <div class="dp-TableRow dp-TableControl">
            <div class="dp-TableItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-13"></input>
                    <label for="tableview-2-13"></label>
                </span>
            </div>

            <div class="dp-TableItem">
                <span>ID</span>
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Subject
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Labels
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Department
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Language
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Last reply
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                User
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                SLA/Current user wait
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>
            
            <div class="dp-Cog">
                <div class="dp-Icon dp-settings"></div>
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-15"></input>
                    <label for="tableview-2-15"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-16"></input>
                    <label for="tableview-2-16"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Portal disabled landing page</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Toby Falkirk</span>
            </div>
            <div>3 days</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-selected">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-17"></input>
                    <label for="tableview-2-17"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Inventory component</span>
            </div>
            <div><span class="dp-Icon dp-Arrow"></span></div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>4 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow dp-Table-description">
            sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-18"></input>
                    <label for="tableview-2-18"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">AW: Need some help?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>2 hr 16 min</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">7</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-2-19"></input>
                    <label for="tableview-2-19"></label>
                </span>
            </div>
            <div>12245</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Enjoying your helpdesk?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

    </div>
</div>
```

<!-- new 3 -->

```html @preview
<div class="dp-TableWrapper demo-cog demo-menu">
    <div class="dp-Tableview is-hoverable">

        <span class="is-column-draggable" style="position:absolute;content:'';top:0;bottom:0;left:579px;right:auto;background-color:#3a8dde;width:1px;z-index:9;"></span>
        <span class="dp-Icon Icon--draggable" style="position:absolute;top:7px;left:571px;right:auto;"></span>

        <div class="dp-TableRow dp-TableControl">
            <div class="dp-TableItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-1"></input>
                    <label for="tableview-3-1"></label>
                </span>
            </div>

            <div class="dp-TableItem">
                ID
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem dp-TableSubject">
                Subject
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Labels
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem is-item-draggable">
                Department
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Language
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Last reply
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                User
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                SLA/Current user wait
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>
 
            <div class="dp-Cog">
                <span class="dp-Icon dp-settings"></span>
            </div>
        </div>

        <div class="dp-TableRow">

            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-2"></input>
                    <label for="tableview-3-2"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Kenneth James</span>
            </div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-3"></input>
                    <label for="tableview-3-3"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Portal disabled landing page</span>
            </div>
            <div>&nbsp;</div>
            <div>Support</div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Toby Falkirk</span>
            </div>
            <div>3 days</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-hover">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-4"></input>
                    <label for="tableview-3-4"></label>
                </span>
            </div>
            <div>67372</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Inventory component</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>5 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-5"></input>
                    <label for="tableview-3-5"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">AW: Need some help?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>2 hr 16 min</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">7</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-6"></input>
                    <label for="tableview-3-6"></label>
                </span>
            </div>
            <div>12245</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Enjoying your helpdesk?</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Italiano</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>43 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--neutral"></span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow is-selected">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-7"></input>
                    <label for="tableview-3-7"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
                <span class="dp-Icon dp-settings is-active"></span>
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-8"></input>
                    <label for="tableview-3-8"></label>
                </span>
            </div>
            <div>65347</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Portal disabled landing page</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Italiano</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>3 days</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">6</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-9"></input>
                    <label for="tableview-3-9"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Inventory component</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>4 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-10"></input>
                    <label for="tableview-3-10"></label>
                </span>
            </div>
            <div>97546</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">AW: Need some help?</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>Italiano</div>
            <div>8 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>4 weeks</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-11"></input>
                    <label for="tableview-3-11"></label>
                </span>
            </div>
            <div>43563</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Enjoying your helpdesk?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-12"></input>
                    <label for="tableview-3-12"></label>
                </span>
            </div>
            <div>76473</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>2 hr 16 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--neutral">4</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="sales-3-2"></input>
                    <label for="sales-3-2"></label>
                </span>
            </div>
            <div class="dp-Card-title dp-Table-title">Sales</div>
        </div>

        <div class="dp-TableRow dp-TableControl">
            <div class="dp-TableItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-13"></input>
                    <label for="tableview-3-13"></label>
                </span>
            </div>

            <div class="dp-TableItem">
                <span>ID</span>
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Subject
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Labels
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Department
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Language
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Last reply
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                User
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                SLA/Current user wait
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>
            
            <div class="dp-Cog">
                <div class="dp-Icon dp-settings"></div>
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-15"></input>
                    <label for="tableview-3-15"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">SSO Information</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Toby Falkirk</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-15"></input>
                    <label for="tableview-3-15"></label>
                </span>
            </div>
            <div>12345</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Portal disabled landing page</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem">
                <span class="dp-Icon dp-avatar"></span>
                <span>Toby Falkirk</span>
            </div>
            <div>3 days</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">8</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-16"></input>
                    <label for="tableview-3-16"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Inventory component</span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Support</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>4 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Mark Jarvis</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-17"></input>
                    <label for="tableview-3-17"></label>
                </span>
            </div>
            <div>83995</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">AW: Need some help?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>9 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>2 hr 16 min</div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Icon dp-avatar"></span>
            </div>
            <div>
                <span class="dp-Badge Badge--round Badge--warning">7</span>
            </div>

            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

        <div class="dp-TableRow">
            <div>
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tableview-3-18"></input>
                    <label for="tableview-3-18"></label>
                </span>
            </div>
            <div>12245</div>
            <div class="dp-SubjectItem">
                <span class="dp-Card-title" contenteditable="true">Enjoying your helpdesk?</span>
                <span class="dp-Icon Icon--star"></span>
            </div>
            <div>&nbsp;</div>
            <div class="dp-DepartmentItem">
                <span class="dp-Item-title">Sales</span>
                <span class="dp-Icon Icon--edit">
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                    </ul>
                </span>
            </div>
            <div>English (US)</div>
            <div>2 weeks ago</div>
            <div class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Kenneth James</span></div>
            <div>12 hr 30 min</div>
            <div>
                <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span class="dp-Badge Badge--round Badge--danger">10</span>
            </div>
            <div class="dp-Cog">
                <!-- Icon hover -->
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
            </div>
        </div>

    </div>
</div>
```
