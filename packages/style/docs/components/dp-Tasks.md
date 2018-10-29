---
title: Tasks
---

```html @preview
<div class="dp-Tasks">
	<div class="dp-BarListWrapper">

		<form>
			<div class="dp-Actions">
				<div class="dp-TaskEditor">
					<textarea name="comment" placeholder="Task description"></textarea>
			        <ul class="dp-ActionsItems dp-BackgroundGray">
			            <li class="dp-ActionsItem dp-MenuBarItem">No due date<span class="dp-Arrow"></span></li>
			            <li class="dp-ActionsItem dp-MenuBarItem">Private<span class="dp-Arrow"></span></li>
			            <li class="dp-ActionsItem dp-MenuBarItem">Me<span class="dp-Arrow"></span></li>
			            <li class="dp-ActionsItem"><span class="dp-Tag Tag--small Tag--green">Add</span></li>
			        </ul>
				</div>
		    </div>

		    <ul class="dp-FilterResultList">
				<!-- 1 -->
		        <li class="dp-FilterResultItem">
		            <span class="dp-ItemRow">
		                <span class="dp-CustomCheckbox">
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask"></input>
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
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask2"></input>
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
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask3"></input>
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
		                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask4"></input>
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
<div style="height: 550px; position: relative;">

	<div class="dp-Tasks dp-MenuBarIcon">

		<ul class="dp-MenuBarList is-active">
			<li class="dp-MenuBarItem dp-TasksItem dp-blueColor is-active">
				<span class="dp-Icon dp-iconCharger">
					<span class="dp-Badge dp-red">10</span>
				</span>
				<span class="dp-Title">Tasks<span class="dp-Arrow"></span></span>
			</li>
		</ul>

		<div class="dp-BarListWrapper">
			<form>
				<div class="dp-Actions">
					<div class="dp-TaskEditor">
						<textarea name="comment" placeholder="Task description"></textarea>
				        <ul class="dp-ActionsItems dp-BackgroundGray">
				            <li class="dp-ActionsItem dp-MenuBarItem">No due date<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem">Private<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem dp-MenuBarItem">Me<span class="dp-Arrow"></span></li>
				            <li class="dp-ActionsItem"><span class="dp-Tag Tag--small Tag--green">Add</span></li>
				        </ul>
					</div>
			    </div>

			    <ul class="dp-FilterResultList">
					<!-- 1 -->
			        <li class="dp-FilterResultItem">
			            <span class="dp-ItemRow">
			                <span class="dp-CustomCheckbox">
			                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask5"></input>
			                    <label for="checkboxTask5">Task item description</label>
			                </span>
			            </span>
			            <span class="dp-ItemRow">
					        <ul class="dp-ActionsItems">
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>30/09/2018<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>14:30 PM<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconChat"></span>Add comment</li>
					        </ul>
			                <span class="dp-TimeStatus">
			                    <span class="dp-Tag Tag--small Tag--pink is-disabled">Remove</span>
			                </span>
			            </span>
			        </li>
			        <!-- 2 -->
			        <li class="dp-FilterResultItem">
			            <span class="dp-ItemRow">
			                <span class="dp-CustomCheckbox">
			                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask6"></input>
			                    <label for="checkboxTask6">Task item description</label>
			                </span>
			            </span>
			            <span class="dp-ItemRow">
					        <ul class="dp-ActionsItems">
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>29/09/2018<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>11:30 PM<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Marketing<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconChat"></span>Add comment</li>
					        </ul>
			                <span class="dp-TimeStatus">
			                    <span class="dp-Tag Tag--small Tag--pink is-disabled">Remove</span>
			                </span>
			            </span>
			        </li>
			        <!-- 3 -->
			    	<li class="dp-FilterResultItem">
			            <span class="dp-ItemRow">
			                <span class="dp-CustomCheckbox">
			                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask7"></input>
			                    <label for="checkboxTask7">Task item description</label>
			                </span>
			            </span>
			            <span class="dp-ItemRow">
					        <ul class="dp-ActionsItems">
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>22/09/2018<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>16:00 PM<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Sales<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconChat"></span>Add comment <a href="#" class="dp-NumLink">(1)</a></li>
					        </ul>
			                <span class="dp-TimeStatus">
			                    <span class="dp-Tag Tag--small Tag--pink is-disabled">Remove</span>
			                </span>
			            </span>

			            <span class="dp-ItemRow dp-BorderGray dp-Comment">
			            	<span class="dp-UserInfo">
			            		<span class="dp-Icon dp-iconUserAvatar"></span>
			            		<span class="dp-UserName"> Nick Green </span> | <span class="dp-DateTime">22/09/2018: 18.00 PM</span>
							</span>
			            	<span class="dp-Commenttxt"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </span>
			            </span>

			        </li>
			        <!-- 4 -->
			        <li class="dp-FilterResultItem">
			            <span class="dp-ItemRow">
			                <span class="dp-CustomCheckbox">
			                    <input type="checkbox" class="dp-ControlInput" id="checkboxTask8"></input>
			                    <label for="checkboxTask8">Task item description</label>
			                </span>
			            </span>
			            <span class="dp-ItemRow">
					        <ul class="dp-ActionsItems">
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconCalendar2"></span>19/09/2018<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconClock3"></span>10:30 PM<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-IconBuilding"></span>Infastructure<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconUserAvatar"></span>Me<span class="dp-Arrow"></span></li>
					            <li class="dp-ActionsItem dp-MenuBarItem"><span class="dp-Icon dp-iconChat"></span>Add comment</li>
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

</div>

```