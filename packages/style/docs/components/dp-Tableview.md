---
title: Tableview
---

<h4>listpane/grouping-and-sorting-bar</h4>
```html @preview
<div class="Demo-Sorting-bar-class">

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
                        Column title
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLabels">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableDepartment">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLanguage">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLastreply">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableUser">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        Column title
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

                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>

            </tr>
        </thead>

        <tbody class="dp-ColumnControls dp-TableviewBody is-hoverable">

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="filter"></input>
                        <label for="filter"></label>
                    </span> 
                </td>
                <td colspan="10">
                    <span class="dp-Card-title">
                        FILTER 
                        <span class="dp-qt">(13)</span>
                    </span>
                </td>
                <td class="is-active"><button class="dp-Arrow"></button></td>
                <td>&nbsp;</td>
            </tr>

            <tr class="dp-Sub-filter">
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="subfilter"></input>
                        <label for="subfilter"></label>
                    </span>
                </td>
                <td colspan="12">
                    <span class="dp-Icon Icon--enter"></span>
                    <span class="dp-Card-title">
                        SUB FILTER 
                        <span class="dp-qt">(11)</span>
                    </span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-2"></input>
                        <label for="tableview-2"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <a class="dp-Card-title" contenteditable="true">Card title</a>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem">
                    <span class="dp-Icon dp-avatar"></span>
                    <span>Name Surname</span>
                </td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
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
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span></td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>

                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem">
                    <span class="dp-Icon dp-avatar"></span>
                    <span>Name Surname</span>
                </td>
                <td>3 days</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">8</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr class="is-hover">
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-4"></input>
                        <label for="tableview-4"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span></td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>5 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-5"></input>
                        <label for="tableview-5"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <span class="dp-Card-title" contenteditable="true">Card title</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>

                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>2 hr 16 min</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
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
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span></td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>2 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>43 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--neutral"></span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr class="is-selected">
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-7"></input>
                        <label for="tableview-7"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span><span class="dp-Icon Icon--star"></span></td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
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
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-8"></input>
                        <label for="tableview-8"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span><span class="dp-Icon Icon--star"></span></td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>3 days</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--warning">6</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-9"></input>
                        <label for="tableview-9"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <span class="dp-Card-title" contenteditable="true">Card title</span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>4 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-10"></input>
                        <label for="tableview-10"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <span class="dp-Card-title" contenteditable="true">Card title</span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>8 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>4 weeks</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">8</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr class="dp-Sub-filter">
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="subfilter"></input>
                        <label for="subfilter"></label>
                    </span>
                </td>
                <td colspan="12">
                    <span class="dp-Icon Icon--enter"></span>
                    <span class="dp-Card-title">
                        SUB FILTER 
                        <span class="dp-qt">(11)</span>
                    </span>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-11"></input>
                        <label for="tableview-11"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <span class="dp-Card-title" contenteditable="true">Card title</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>2 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-12"></input>
                        <label for="tableview-12"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <span class="dp-Card-title" contenteditable="true">Card title</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>2 hr 16 min</td>
                <td>
                    <span class="dp-Icon dp-rocket Icon-grey-darkest Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--neutral">4</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="filter-2"></input>
                        <label for="filter-2"></label>
                    </span> 
                </td>
                <td colspan="12">
                    <span class="dp-Card-title">FILTER TITLE</span>
                </td>
            </tr>

        </tbody>

        <thead>

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
                        Column title
                        <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLabels">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableDepartment">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLanguage">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableLastreply">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th class="dp-TableUser">
                    <span class="dp-TableItem">
                        Column title
                    <span class="dp-Icon dp-arrowGroup"></span>
                    </span>
                </th>
                <th>
                    <span class="dp-TableItem">
                        Column title
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
                <th class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
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
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <span class="dp-Card-title" contenteditable="true">Card title</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon Icon--circle dp-rocket Icon-grey-darkest"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">10</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
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
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span></td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>3 days</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--danger">8</span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr class="is-selected is-active">
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-16"></input>
                        <label for="tableview-16"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span></td>
                <td><span class="dp-Arrow"></span></td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>5 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>12 hr 30 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr class="dp-Table-description">
                <td>&nbsp;</td>
                <td colspan="11">
                    <span>
                        sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text sub row text
                    </span>
                </td>
                <td>&nbsp;</td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-17"></input>
                        <label for="tableview-17"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem">
                    <span class="dp-Card-title" contenteditable="true">Card title</span>
                    <span class="dp-Icon Icon--star"></span>
                </td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>9 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>2 hr 16 min</td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Icon dp-avatar"></span>
                </td>
                <td>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </td>
                                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="tableview-18"></input>
                        <label for="tableview-18"></label>
                    </span>
                </td>
                <td>12345</td>
                <td class="dp-SubjectItem"><span class="dp-Card-title" contenteditable="true">Card title</span></td>
                <td>&nbsp;</td>
                <td class="dp-DepartmentItem">
                    <span class="dp-Item-title">Column text</span>
                    <span class="dp-Icon Icon--edit">
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                            <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Column text</a></li>
                        </ul>
                    </span>
                </td>
                <td>Column text</td>
                <td>2 weeks ago</td>
                <td class="dp-UserItem"><span class="dp-Icon dp-avatar"></span><span>Name Surname</span></td>
                <td>43 min</td>
                <td>
                    <span class="dp-Icon dp-beetle Icon-black Icon--circle"></span>
                </td>
                <td>&nbsp;</td>
                <td>
                    <span class="dp-Badge Badge--round Badge--neutral"></span>
                </td>
                <td class="dp-Cog">
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
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">Assign to my team or </li>
                        <li class="dp-DropdownDivider"></li>
                        <li class="dp-Menu-linkItem">Status</button></li>
                    </ul>
                </td>
            </tr>

        </tbody>
    </table>
</div>
```