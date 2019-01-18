---
title: Groups, Facets and Fields
---

<h4>Ordering bar</h4>
```html @preview
<div class="demo-ControlsList">

    <ul class="dp-FilterControlsList newControlsList">
        <li class="dp-ListPane">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox2-0"></input>
                <label for="customCheckbox2-0"></label>
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

            <!-- dropdown -->
            <ul class="dp-Menu Menu-grouped">
                <li class="dp-Menu-linkItem">Department (DSC)<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Product<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Workflow<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Organization<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">Person<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">Language<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">Agent<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">Agent team<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">Waiting time<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">All waiting time<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">Helpdesk team size<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem is-active">Hubspot deal<span class="dp-Icon dp-settings"></span>
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

            <!-- dropdown -->
            <ul class="dp-Menu">
                <li class="dp-Menu-linkItem">My tasks</li>
                <li class="dp-Menu-linkItem">My teams tasks</li>
                <li class="dp-Menu-linkItem">Tasks delegated</li>
                <li class="dp-Menu-linkItem">All tasks</li>
            </ul>

        </li>

        <!-- 4 -->

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

</div>
```




<!-- 2 -->

<h4>Grouping</h4>
```html @preview
<div class="demo-ControlsList">

    <ul class="dp-FilterControlsList newControlsList">
        <li class="dp-ListPane">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox2-1"></input>
                <label for="customCheckbox2-1"></label>
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
                <li class="dp-Menu-linkItem is-active">Department (DSC)<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Product<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Workflow<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Organization<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Person<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Language<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Agent<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Agent team<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Waiting time<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">All waiting time<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Helpdesk team size<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Hubspot deal<span class="dp-Icon dp-settings"></span>
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

            <!-- dropdown -->
            <ul class="dp-Menu">
                <li class="dp-Menu-linkItem">My tasks</li>
                <li class="dp-Menu-linkItem">My teams tasks</li>
                <li class="dp-Menu-linkItem">Tasks delegated</li>
                <li class="dp-Menu-linkItem">All tasks</li>
            </ul>

        </li>

        <!-- 4 -->

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

</div>
```





<!-- 3 -->

<h4>Sorting</h4>
```html @preview
<div class="demo-ControlsList">

    <ul class="dp-FilterControlsList newControlsList">
        <li class="dp-ListPane">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox3-1"></input>
                <label for="customCheckbox3-1"></label>
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

            <!-- dropdown -->
            <ul class="dp-Menu Menu-grouped">
                <li class="dp-Menu-linkItem">Department (DSC)<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Product<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Workflow<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Organization<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Person<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Language<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Agent<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Agent team<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Waiting time<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">All waiting time<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Helpdesk team size<span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="#">Ascending</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#">Descending</a>
                        </li>
                    </ul>
                </li>
                <li class="dp-Menu-linkItem">Hubspot deal<span class="dp-Icon dp-settings"></span>
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
        <li class="dp-ListPane dp-DropDownItem is-active">
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

            <!-- dropdown -->
            <ul class="dp-Menu">
                <li class="dp-Menu-linkItem">My tasks</li>
                <li class="dp-Menu-linkItem">My teams tasks</li>
                <li class="dp-Menu-linkItem">Tasks delegated</li>
                <li class="dp-Menu-linkItem">All tasks</li>
            </ul>

        </li>

        <!-- 4 -->

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

</div>
```

<!-- 4 -->


