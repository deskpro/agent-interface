---
title: Tasks
---

```html @preview
<div class="dp-Tasks">
   <div class="dp-TasksWrap">

	    <div class="dp-Actions">
			<div class="dp-TaskEditor">
				 <form>
					<textarea name="comment" placeholder="Task description"></textarea>
				 </form>
		        <ul class="dp-ActionsItems">
		            <li class="dp-ActionsItem dp-MenuBarItem">No due date<span class="dp-Arrow"></li>
		            <li class="dp-ActionsItem dp-MenuBarItem">Private<span class="dp-Arrow"></li>
		            <li class="dp-ActionsItem dp-MenuBarItem">Me<span class="dp-Arrow"></span></li>
		            <li class="dp-ActionsItem"><span class="dp-Tag Tag--small Tag--green">Add</span></li>
		        </ul>
			</div>
	    </div>

		<form>
		    <ul class="dp-FilterResultList">
				<!-- 1 -->
		        <li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask">
		                    <label for="checkboxTask">Task item description</label>
		                </span>
		            </span>

		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>30/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>14:30 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		        <!-- 2 -->
		        <li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask2">
		                    <label for="checkboxTask2">Task item description</label>
		                </span>
		            </span>

		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>29/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>11:30 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Marketing<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		        <!-- 3 -->
		    	<li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask3">
		                    <label for="checkboxTask3">Task item description</label>
		                </span>
		            </span>
		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>22/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>16:00 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Sales<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		        <!-- 4 -->
		        <li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask4">
		                    <label for="checkboxTask4">Task item description</label>
		                </span>
		            </span>

		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>19/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>10:30 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		    </ul>
		</form>

   </div>
</div>
```

```html @preview
<div class="dp-Tasks dp-MenuBarIcon">

	<ul class="dp-MenuBarList is-active">
	    <li class="dp-MenuBarItem">
	        <span class="dp-Icon dp-iconCharger dp-iconChargerWhite">
	            <span class="dp-Badge dp-red">10</span>
	        </span>
	        <span class="dp-Title">Tasks<span class="dp-Arrow"></span></span>
	    </li>
	</ul>

	<div class="dp-TasksWrap">

	    <div class="dp-Actions">
			<div class="dp-TaskEditor">
				 <form>
					<textarea name="comment" placeholder="Task description"></textarea>
				 </form>
		        <ul class="dp-ActionsItems">
		            <li class="dp-ActionsItem dp-MenuBarItem">No due date<span class="dp-Arrow"></li>
		            <li class="dp-ActionsItem dp-MenuBarItem">Private<span class="dp-Arrow"></li>
		            <li class="dp-ActionsItem dp-MenuBarItem">Me<span class="dp-Arrow"></span></li>
		            <li class="dp-ActionsItem"><span class="dp-Tag Tag--small Tag--green">Add</span></li>
		        </ul>
			</div>
	    </div>

		<form>
		    <ul class="dp-FilterResultList">
				<!-- 1 -->
		        <li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask5">
		                    <label for="checkboxTask5">Task item description</label>
		                </span>
		            </span>

		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>30/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>14:30 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		        <!-- 2 -->
		        <li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask6">
		                    <label for="checkboxTask6">Task item description</label>
		                </span>
		            </span>

		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>29/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>11:30 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Marketing<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		        <!-- 3 -->
		    	<li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask7">
		                    <label for="checkboxTask7">Task item description</label>
		                </span>
		            </span>

		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>22/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>16:00 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Sales<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		        <!-- 4 -->
		        <li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask8">
		                    <label for="checkboxTask8">Task item description</label>
		                </span>
		            </span>

		            <span class="dp-ItemRow">
				        <ul class="dp-ActionsItems">
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>19/09/2018<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>10:30 PM<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
				        </ul>
		                <span class="dp-TimeStatus">
		                    <span class="dp-Tag Tag--small Tag--pink">Remove</span>
		                </span>
		            </span>
		        </li>
		    </ul>
		</form>

	</div>
</div>

```