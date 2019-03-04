---
title: Tableview
---

<h4>listpane/grouping-and-sorting-bar</h4>
```html @preview
<div class="demo-cog demo-menu demo-OrderingBar" style="height:105px;">

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
                    <span class="dp-Subtitle">None</span>
                </span>
            </span>

            <!-- dropdown -->
            <ul class="dp-Menu Menu-grouped Menu-tick Menu--tick-left">
                <li class="dp-Menu-linkItem is-checked">
                    <a href="" class="dp-listItem">Department (DSC)<span class="dp-Icon dp-settings"></span></a>
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
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
                <span class="dp-SortDescription">DSC</span>
            </div>
            <span class="dp-SelectGroup">
                <span class="dp-ItemRow">
                    <span class="dp-Title">Sort by</span>
                    <button class="dp-Arrow"></button>
                </span>
                <span class="dp-ItemRow">
                    <span class="dp-Subtitle">Date of last r...</span>
                </span>
            </span>

            <!-- dropdown -->
            <ul class="dp-Menu Menu-tick Menu--tick-left">
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Urgency</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date crated</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last reply</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last agent reply</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last user reply</a></li>
                <li class="dp-Menu-linkItem" disabled="disabled"><a href="" class="dp-listItem">Widget type</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Widget description</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Desired sizes</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Manufacturing date</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Reason for cancellation</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Reason for complaint</a></li>
                <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Suggested actions</a></li>
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
            <ul class="dp-Menu">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1"></input>
                                <label for="Faceting-1-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2"></input>
                                <label for="Faceting-1-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3"></input>
                                <label for="Faceting-1-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4"></input>
                                <label for="Faceting-1-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5"></input>
                                <label for="Faceting-1-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6"></input>
                                <label for="Faceting-1-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7"></input>
                                <label for="Faceting-1-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8"></input>
                                <label for="Faceting-1-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9"></input>
                                <label for="Faceting-1-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10"></input>
                                <label for="Faceting-1-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                    </ul>
                </li>

                <li class="dp-Menu-linkItem">
                    <a href="" class="dp-listItem">Agent (3) <button class="dp-Arrow"></button></a>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-search">
                            <form>
                                <span class="dp-Icon dp-IconSearch"></span>
                                <input type="text" class="dp-Input Input--search">
                            </form>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-1"></input>
                                <label for="Faceting-1-1-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-1"></input>
                                <label for="Faceting-1-2-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-1"></input>
                                <label for="Faceting-1-3-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-1"></input>
                                <label for="Faceting-1-4-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-1"></input>
                                <label for="Faceting-1-5-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-1"></input>
                                <label for="Faceting-1-6-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-1"></input>
                                <label for="Faceting-1-7-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-1"></input>
                                <label for="Faceting-1-8-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-1"></input>
                                <label for="Faceting-1-9-1">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-1"></input>
                                <label for="Faceting-1-10-1">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-2"></input>
                                <label for="Faceting-1-1-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-2"></input>
                                <label for="Faceting-1-2-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-2"></input>
                                <label for="Faceting-1-3-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-2"></input>
                                <label for="Faceting-1-4-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-2"></input>
                                <label for="Faceting-1-5-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-2"></input>
                                <label for="Faceting-1-6-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-2"></input>
                                <label for="Faceting-1-7-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-2"></input>
                                <label for="Faceting-1-8-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-2"></input>
                                <label for="Faceting-1-9-2">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-2"></input>
                                <label for="Faceting-1-10-2">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-3"></input>
                                <label for="Faceting-1-1-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-3"></input>
                                <label for="Faceting-1-2-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-3"></input>
                                <label for="Faceting-1-3-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-3"></input>
                                <label for="Faceting-1-4-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-3"></input>
                                <label for="Faceting-1-5-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-3"></input>
                                <label for="Faceting-1-6-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-3"></input>
                                <label for="Faceting-1-7-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-3"></input>
                                <label for="Faceting-1-8-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-3"></input>
                                <label for="Faceting-1-9-3">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-3"></input>
                                <label for="Faceting-1-10-3">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-4"></input>
                                <label for="Faceting-1-1-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-4"></input>
                                <label for="Faceting-1-2-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-4"></input>
                                <label for="Faceting-1-3-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-4"></input>
                                <label for="Faceting-1-4-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-4"></input>
                                <label for="Faceting-1-5-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-4"></input>
                                <label for="Faceting-1-6-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-4"></input>
                                <label for="Faceting-1-7-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-4"></input>
                                <label for="Faceting-1-8-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-4"></input>
                                <label for="Faceting-1-9-4">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-4"></input>
                                <label for="Faceting-1-10-4">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-5"></input>
                                <label for="Faceting-1-1-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-5"></input>
                                <label for="Faceting-1-2-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-5"></input>
                                <label for="Faceting-1-3-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-5"></input>
                                <label for="Faceting-4-4-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-5"></input>
                                <label for="Faceting-1-5-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-5"></input>
                                <label for="Faceting-1-6-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-5"></input>
                                <label for="Faceting-1-7-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-5"></input>
                                <label for="Faceting-1-8-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-5"></input>
                                <label for="Faceting-1-9-5">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-5"></input>
                                <label for="Faceting-1-10-5">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-6"></input>
                                <label for="Faceting-1-1-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-6"></input>
                                <label for="Faceting-1-2-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-6"></input>
                                <label for="Faceting-1-3-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-6"></input>
                                <label for="Faceting-1-4-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-6"></input>
                                <label for="Faceting-1-5-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-6"></input>
                                <label for="Faceting-1-6-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-6"></input>
                                <label for="Faceting-1-7-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-6"></input>
                                <label for="Faceting-1-8-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-6"></input>
                                <label for="Faceting-1-9-6">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-6"></input>
                                <label for="Faceting-1-10-6">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-7"></input>
                                <label for="Faceting-1-1-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-7"></input>
                                <label for="Faceting-1-2-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-7"></input>
                                <label for="Faceting-1-3-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-7"></input>
                                <label for="Faceting-1-4-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-7"></input>
                                <label for="Faceting-1-5-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-7"></input>
                                <label for="Faceting-1-6-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-7"></input>
                                <label for="Faceting-1-7-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-7"></input>
                                <label for="Faceting-1-8-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-7"></input>
                                <label for="Faceting-1-9-7">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-7"></input>
                                <label for="Faceting-1-10-7">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-8"></input>
                                <label for="Faceting-1-1-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-8"></input>
                                <label for="Faceting-1-2-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-8"></input>
                                <label for="Faceting-1-3-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-8"></input>
                                <label for="Faceting-1-4-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-8"></input>
                                <label for="Faceting-1-5-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-8"></input>
                                <label for="Faceting-1-6-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-8"></input>
                                <label for="Faceting-1-7-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-8"></input>
                                <label for="Faceting-1-8-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-8"></input>
                                <label for="Faceting-1-9-8">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-8"></input>
                                <label for="Faceting-1-10-8">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-9"></input>
                                <label for="Faceting-1-1-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-9"></input>
                                <label for="Faceting-1-2-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-9"></input>
                                <label for="Faceting-1-3-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-9"></input>
                                <label for="Faceting-1-4-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-9"></input>
                                <label for="Faceting-1-5-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-9"></input>
                                <label for="Faceting-1-6-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-9"></input>
                                <label for="Faceting-1-7-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-9"></input>
                                <label for="Faceting-1-8-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-9"></input>
                                <label for="Faceting-1-9-9">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-9"></input>
                                <label for="Faceting-1-10-9">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-10"></input>
                                <label for="Faceting-1-1-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-10"></input>
                                <label for="Faceting-1-2-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-10"></input>
                                <label for="Faceting-1-3-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-10"></input>
                                <label for="Faceting-1-4-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-10"></input>
                                <label for="Faceting-1-5-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-10"></input>
                                <label for="Faceting-1-6-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-10"></input>
                                <label for="Faceting-1-7-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-10"></input>
                                <label for="Faceting-1-8-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-10"></input>
                                <label for="Faceting-1-9-10">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-10"></input>
                                <label for="Faceting-1-10-10">
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
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-11"></input>
                                <label for="Faceting-1-1-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-11"></input>
                                <label for="Faceting-1-2-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-11"></input>
                                <label for="Faceting-1-3-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-11"></input>
                                <label for="Faceting-1-4-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-11"></input>
                                <label for="Faceting-1-5-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bobby Steiner
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-11"></input>
                                <label for="Faceting-1-6-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Pride
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-11"></input>
                                <label for="Faceting-1-7-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Bob Cooper
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-11"></input>
                                <label for="Faceting-1-8-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Julien Ducro
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-11"></input>
                                <label for="Faceting-1-9-11">
                                    <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                    Wendy Lightbody
                                </label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-11"></input>
                                <label for="Faceting-1-10-11">
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date/time</a>
                        </li>
                       <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">How long since</a>
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date/time</a>
                        </li>
                       <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">How long since</a>
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date/time</a>
                        </li>
                       <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">How long since</a>
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date/time</a>
                        </li>
                       <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">How long since</a>
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date/time</a>
                        </li>
                       <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">How long since</a>
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
                    <ul class="dp-Menu Menu-tick Menu--tick-left">
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date</a>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">Date/time</a>
                        </li>
                       <li class="dp-Menu-linkItem">
                            <a href="#" class="dp-listItem">How long since</a>
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
    
        <div class="dp-OrderingBar-item demo-tooltip">

            <span class="dp-Title-group is-active">
                <span class="dp-Icon Icon--csv"></span>
                <span class="dp-Title">CSV</span>

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

        </div>
    </div>

</div>
```

<h4>Tableview Column Headers - For reference Artem</h4>
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
                Column title
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Column title
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem is-item-draggable">
                Column title
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Column title
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Column title
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Column title
                <span class="dp-Icon dp-arrowGroup"></span>
            </div>

            <div class="dp-TableItem">
                Column title
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

        <div class="dp-TableRow dp-Filter">
            <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="filter-1-1"></input>
                <label for="filter-1-1"></label>
            </div> 

            <div class="dp-Card-title">
                FILTER TITLE
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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">
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
                <ul class="dp-Menu dp-Submenu--left">
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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                    <input type="checkbox" class="dp-ControlInput" id="tableview-1-11" checked></input>
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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
            <div class="dp-Arrow-btn"><span class="dp-Icon dp-Arrow"></span></div>
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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">
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
                <ul class="dp-Menu dp-Submenu--left">
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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">
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
                <ul class="dp-Menu dp-Submenu--left">
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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
                <ul class="dp-Menu dp-Submenu--left">

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
