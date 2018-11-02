---
title: FilterResultControls
---

<h2>FilterResultControlsItem</h2>
```html @preview
    <ul class="dp-FilterControlsList">
        <li class="dp-FilterControlsItem">
            <span class="dp-ItemRow">
                <span class="dp-Title">FACETING BY</span>
            </span>
            <span class="dp-ItemRow">
                <select class="dp-Select">
                    <option>2 Agents, 2 Departments</option>
                    <option>3 Agents, 3 Departments</option>
                    <option>4 Agents, 4 Departments</option>
                </select>
            </span>
        </li>   
    </ul>
```

<h2>FilterResultControlsList</h2>

```html @preview
<ul class="dp-FilterControlsList">

    <li class="dp-FilterControlsItem">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox13"></input>
            <label for="customCheckbox13"></label>
        </span>
    </li>

    <li class="dp-FilterControlsItem">
        <span class="dp-ItemRow">
            <span class="dp-Title">Order By</span>
        </span>
        <span class="dp-ItemRow">
            <select class="dp-Select">
                <option>Department & Urgency</option>
                <option>Department & Urgency 2</option>
                <option>Department & Urgency 3</option>
            </select>
        </span>
    </li>

    <li class="dp-FilterControlsItem">
        <span class="dp-ItemRow">
            <span class="dp-Title">FACETING BY</span>
        </span>
        <span class="dp-ItemRow">
            <select class="dp-Select">
                <option>2 Agents, 2 Departments</option>
                <option>3 Agents, 3 Departments</option>
                <option>4 Agents, 4 Departments</option>
            </select>
        </span>
    </li>

    <li class="dp-FilterControlsItem">
        <span class="dp-Icon dp-iconEye"></span>
    </li>

    <li class="dp-FilterControlsItem">
        <span class="dp-Icon dp-iconSetting"></span>
    </li>

</ul>
```

<h2> New design </h2>

```html @preview

<div style="height: 650px;">
    <ul class="dp-FilterControlsList newControlsList">

        <li class="dp-FilterControlsItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox14"></input>
                <label for="customCheckbox14"></label>
            </span>
        </li>

        <li class="dp-FilterControlsItem is-active dp-DropDownItem">
            <span class="dp-Icon dp-grouped_by"></span>
            <span class="dp-SelectGroup dp-DropMenuJs">
                <span class="dp-ItemRow">
                    <span class="dp-Title">Grouped by</span>
                    <span class="dp-Icon dp-small_caret"></span>
                </span>
                <span class="dp-ItemRow">
                    <span class="dp-Subtitle jsContextItem">Department</span>
                </span>
            </span>
            <ul class="dp-ContextMenu is-active">
                <li><a href="#">Department</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Workflow</a></li>
                <li><a href="#">Organization</a></li>
                <li><a href="#">Person</a></li>
                <li><a href="#">Language</a></li>
                <li><a href="#">Agent</a></li>
                <li><a href="#">Agent team</a></li>
                <li><a href="#">Waiting time</a></li>
                <li><a href="#">All waiting time</a></li>
                <li><a href="#">Time since creation</a></li>
                <li><a href="#">Helpdesk team size</a></li>
                <li><a href="#">Hubspot deal</a></li>
            </ul>
        </li>

        <li class="dp-FilterControlsItem dp-DropDownItem">
            <span class="dp-Icon dp-sort"></span>
            <span class="dp-SelectGroup dp-DropMenuJs">
                <span class="dp-ItemRow">
                    <span class="dp-Title">Sort by</span>
                    <span class="dp-Icon dp-small_caret"></span>
                </span>
                <span class="dp-ItemRow">
                    <span class="dp-Subtitle jsContextItem">Variable ASC</span>
                </span>
            </span>
            <ul class="dp-ContextMenu newControlsList">
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox16"></input>
                        <label for="customCheckbox16">Variable long lenght</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox17"></input>
                        <label for="customCheckbox17">Variable</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox18"></input>
                        <label for="customCheckbox18">Variable</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox19"></input>
                        <label for="customCheckbox19">Variable long</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox20"></input>
                        <label for="customCheckbox20">Variable</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox21"></input>
                        <label for="customCheckbox21">Variable long lenght</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox22"></input>
                        <label for="customCheckbox22">Variable</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox23"></input>
                        <label for="customCheckbox23">Variable</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox24"></input>
                        <label for="customCheckbox24">Variable long lenght</label>
                    </span>
                </li>
                <li class="dp-ViewItem">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="customCheckbox25"></input>
                        <label for="customCheckbox25">Variable long</label>
                    </span>
                </li>
            </ul>

        </li>


<!--  -->
        <li class="dp-FilterControlsItem dp-DropDownItem">
            <span class="dp-Icon dp-faceted_by"></span>
            <span class="dp-SelectGroup dp-DropMenuJs">
                <span class="dp-ItemRow">
                    <span class="dp-Title">Faceted by</span>
                    <span class="dp-Icon dp-small_caret"></span>
                </span>
                <span class="dp-ItemRow">
                    <span class="dp-Subtitle jsContextItem">Department</span>
                </span>
            </span>

            <ul class="dp-FilterResultMenu dp-ContextMenu newControlsList">
                <li>Assign to <a href="#" class="dp-listLink">me</a> or <span class="dp-Arrow"></span>
                    <ul class="dp-SubContextMenu dp-ContextMenu">
                        <li>
                            <form>
                                <div class="dp-SearchForm">
                                    <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                    <input type="text" class="dp-SearchInput"></input>
                                </div>
                            </form>
                        </li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                    </ul>
                </li>
                <li>Assign to <a href="#" class="dp-listLink">my team</a> or <span class="dp-Arrow"></span>
                    <ul class="dp-SubContextMenu dp-ContextMenu">
                        <li>
                            <form>
                                <div class="dp-SearchForm">
                                    <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                    <input type="text" class="dp-SearchInput"></input>
                                </div>
                            </form>
                        </li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                    </ul>
                </li>
                <li class="dp-DropdownDivider"></li>
                <li>Status <span class="dp-Arrow"></span>
                    <ul class="dp-SubContextMenu dp-ContextMenu">
                        <li>
                            <form>
                                <div class="dp-SearchForm">
                                    <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                    <input type="text" class="dp-SearchInput"></input>
                                </div>
                            </form>
                        </li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Julien Ducro</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bobby Steiner</a></li>
                    </ul>
                </li>
                <li>Urgency <span class="dp-Arrow"></span>
                    <ul class="dp-SubContextMenu dp-ContextMenu">
                        <li>
                            <form>
                                <div class="dp-SearchForm">
                                    <button type="submit" class="dp-Icon dp-IconSearch"></button>
                                    <input type="text" class="dp-SearchInput"></input>
                                </div>
                            </form>
                        </li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Pride</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Bob Cooper</a></li>
                        <li><a href="#" class="dp-listItem"><span class="dp-Badge Badge--empty"></span>Wendy Lightbody</a></li>
                    </ul>
                </li>
                <li class="dp-DropdownDivider"></li>
                <li><a href="#" class="dp-listItem">Place on hold</a></li>
                <li><a href="#" class="dp-listItem">Lock</a></li>
                <li><a href="#" class="dp-listItem">Unlock</a></li>
            </ul>
        </li>
<!--  -->



<!--         <li class="dp-FilterControlsItem dp-DropDownItem dp-DropMenuJs">
            <span class="dp-Icon dp-faceted_by"></span>
            <span class="dp-SelectGroup">
                <span class="dp-ItemRow">
                    <span class="dp-Title">Faceted by</span>
                    <span class="dp-Icon dp-small_caret"></span>
                </span>
                <span class="dp-ItemRow">
                    <span class="dp-Subtitle jsContextItem">Department</span>
                </span>
                <ul class="dp-ContextMenu">
                    <li><a href="#">Department</a></li>
                    <li><a href="#">Agent</a></li>
                    <li><a href="#">Person</a></li>
                    <li><a href="#">Agent team</a></li>
                    <li><a href="#">Organization</a></li>
                    <li><a href="#">Language</a></li>
                    <li><a href="#">Workflow</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">SLAs</a></li>
                    <li><a href="#">Problem</a></li>
                    <li><a href="#">Hubspot deal</a></li>
                </ul>
            </span>
        </li> -->




        <li class="dp-FilterControlsItem dp-DropMenuJs">
            <span class="dp-Icon dp-view"></span>

                <ul class="dp-ContextMenu newControlsList">
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox26"></input>
                            <label for="customCheckbox26">User</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox27"></input>
                            <label for="customCheckbox27">Department</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox28"></input>
                            <label for="customCheckbox28">Agent</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox29"></input>
                            <label for="customCheckbox29">Agent team</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox30"></input>
                            <label for="customCheckbox30">Labels</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox31"></input>
                            <label for="customCheckbox31">ID</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox32"></input>
                            <label for="customCheckbox32">Status</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox33"></input>
                            <label for="customCheckbox33">Language</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox34"></input>
                            <label for="customCheckbox34">Workflow</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox35"></input>
                            <label for="customCheckbox35">Product</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox36"></input>
                            <label for="customCheckbox36">Organization</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox37"></input>
                            <label for="customCheckbox37">SLAs</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox38"></input>
                            <label for="customCheckbox38">User waiting</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox39"></input>
                            <label for="customCheckbox39">Date created</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox40"></input>
                            <label for="customCheckbox40">All waiting time</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox41"></input>
                            <label for="customCheckbox41">Date of last reply</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox42"></input>
                            <label for="customCheckbox42">Date of last user reply</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox43"></input>
                            <label for="customCheckbox43">Date of last agent reply</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox44"></input>
                            <label for="customCheckbox44">Date resolved</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox45"></input>
                            <label for="customCheckbox45">Problem</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox46"></input>
                            <label for="customCheckbox46">Helpdesk team size</label>
                        </span>
                    </li>
                    <li class="dp-ViewItem">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="customCheckbox47"></input>
                            <label for="customCheckbox47">Show message preview</label>
                        </span>
                    </li>
                    <li class="dp-DropdownDivider"></li>
                    <li class="dp-RowBtn">
                        <a href="#" class="dp-btn blue-btn">Apply changes</a>
                        <a href="#" class="dp-btn">Cancel</a>
                    </li>
                </ul>
        </li>

    </ul>
</div>
```


<h2> Click View Icon </h2>

```html @preview

<div style="height: 650px; position: relative;">

    <ul class="dp-ContextMenu newControlsList is-active" style="top: 10px; left: 10px;">
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-26"></input>
                <label for="customCheckbox-26">User</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-27"></input>
                <label for="customCheckbox-27">Department</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-28"></input>
                <label for="customCheckbox-28">Agent</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-29"></input>
                <label for="customCheckbox-29">Agent team</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-30"></input>
                <label for="customCheckbox-30">Labels</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-31"></input>
                <label for="customCheckbox-31">ID</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-32"></input>
                <label for="customCheckbox-32">Status</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-33"></input>
                <label for="customCheckbox-33">Language</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-34"></input>
                <label for="customCheckbox-34">Workflow</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-35"></input>
                <label for="customCheckbox-35">Product</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-36"></input>
                <label for="customCheckbox-36">Organization</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-37"></input>
                <label for="customCheckbox-37">SLAs</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-38"></input>
                <label for="customCheckbox-38">User waiting</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-39"></input>
                <label for="customCheckbox-39">Date created</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-40"></input>
                <label for="customCheckbox-40">All waiting time</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-41"></input>
                <label for="customCheckbox-41">Date of last reply</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-42"></input>
                <label for="customCheckbox-42">Date of last user reply</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-43"></input>
                <label for="customCheckbox-43">Date of last agent reply</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-44"></input>
                <label for="customCheckbox-44">Date resolved</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-45"></input>
                <label for="customCheckbox-45">Problem</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-46"></input>
                <label for="customCheckbox-46">Helpdesk team size</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox-47"></input>
                <label for="customCheckbox-47">Show message preview</label>
            </span>
        </li>
        <li class="dp-DropdownDivider"></li>
        <li class="dp-RowBtn">
            <a href="#" class="dp-btn blue-btn">Apply changes</a>
            <a href="#" class="dp-btn">Cancel</a>
        </li>
    </ul>
</div>

```
