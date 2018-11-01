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
<ul class="dp-FilterControlsList newControlsList">

    <li class="dp-FilterControlsItem">
        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
            <input type="checkbox" class="dp-ControlInput" id="customCheckbox14"></input>
            <label for="customCheckbox14"></label>
        </span>
    </li>

    <li class="dp-FilterControlsItem is-active">
        <span class="dp-Icon dp-grouped_by"></span>
        <span>
            <span class="dp-ItemRow">
                <span class="dp-Title">Grouped by</span>
            </span>
            <span class="dp-ItemRow">
                <select class="dp-Select">
                    <option>Department</option>
                    <option>Product</option>
                    <option>Workflow</option>
                    <option>Organization</option>
                    <option>Person</option>
                    <option>Language</option>
                    <option>Agent</option>
                    <option>Agent team</option>
                    <option>Waiting time</option>
                    <option>All waiting time</option>
                    <option>Time since creation</option>
                    <option>Helpdesk team size</option>
                    <option>Hubspot deal</option>
                </select>
                <span class="dp-Icon dp-small_caret"></span>
            </span>
        </span>
    </li>

    <li class="dp-FilterControlsItem">
        <span class="dp-Icon dp-sort"></span>
        <span>
            <span class="dp-ItemRow">
                <span class="dp-Title">Sort by</span>
            </span>
            <span class="dp-ItemRow">
                <select class="dp-Select">
                    <option>Variable ASC</option>
                    <option>Variable long lenght</option>
                    <option>Variable</option>
                    <option>Variable</option>
                    <option>Variable long</option>
                    <option>Variable</option>
                    <option>Variable long lenght</option>
                    <option>Variable</option>
                    <option>Variable</option>
                    <option>Variable long lenght</option>
                    <option>Variable long</option>
                </select>
            </span>
        </span>
    </li>

    <li class="dp-FilterControlsItem">
        <span class="dp-Icon dp-faceted_by"></span>
        <span>
            <span class="dp-ItemRow">
                <span class="dp-Title">Faceted by</span>
            </span>
            <span class="dp-ItemRow">
                <select class="dp-Select">
                    <option>Department</option>
                    <option>Agent</option>
                    <option>Person</option>
                    <option>Agent team</option>
                    <option>Organization</option>
                    <option>Language</option>
                    <option>Workflow</option>
                    <option>Product</option>
                    <option>SLAs</option>
                    <option>Problem</option>
                    <option>Hubspot deal</option>
                </select>
            </span>
        </span>
    </li>

    <li class="dp-FilterControlsItem">
        <span class="dp-Icon dp-view"></span>
    </li>

</ul>
```


<h2> Click View Icon </h2>

```html @preview

<div style="height: 650px; position: relative;">

    <ul class="dp-ContextMenu newControlsList is-active" style="top: 10px; left: 10px;">
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox15"></input>
                <label for="customCheckbox15">User</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox16"></input>
                <label for="customCheckbox16">Department</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox17"></input>
                <label for="customCheckbox17">Agent</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox18"></input>
                <label for="customCheckbox18">Agent team</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox19"></input>
                <label for="customCheckbox19">Labels</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox20"></input>
                <label for="customCheckbox20">ID</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox21"></input>
                <label for="customCheckbox21">Status</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox22"></input>
                <label for="customCheckbox22">Language</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox23"></input>
                <label for="customCheckbox23">Workflow</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox24"></input>
                <label for="customCheckbox24">Product</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox25"></input>
                <label for="customCheckbox25">Organization</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox26"></input>
                <label for="customCheckbox26">SLAs</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox27"></input>
                <label for="customCheckbox27">User waiting</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox28"></input>
                <label for="customCheckbox28">Date created</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox29"></input>
                <label for="customCheckbox29">All waiting time</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox30"></input>
                <label for="customCheckbox30">Date of last reply</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox31"></input>
                <label for="customCheckbox31">Date of last user reply</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox32"></input>
                <label for="customCheckbox32">Date of last agent reply</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox31"></input>
                <label for="customCheckbox31">Date resolved</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox32"></input>
                <label for="customCheckbox32">Problem</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox33"></input>
                <label for="customCheckbox33">Helpdesk team size</label>
            </span>
        </li>
        <li class="dp-ViewItem">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="customCheckbox34"></input>
                <label for="customCheckbox34">Show message preview</label>
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