---
title: Ticket View
---

<h4>ticket/agent-select</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-TicketSelect dp-TicketSmall">
		<div class="dp-SectionControls">
			<div class="dp-SectionTitle">
				<div class="dp-TitleControls">Agent</div>
				<div class="dp-StatusTimes dp-MenuBarItem">
					Assign to me | Unassign
				</div>
			</div>
		</div>
		<button class="dp-ActionButton ActionButton--Xlarge dp-Arrow" type="button">
			<span class="dp-title-item">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				Zack Prudent
			</span>
		</button>
	</div>
</div>
```

<h4>ticket/team-select</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-TicketSelect dp-TicketSmall">
		<div class="dp-SectionControls">
			<div class="dp-SectionTitle">
				<div class="dp-TitleControls">Team</div>
				<div class="dp-StatusTimes dp-MenuBarItem">
					Unassign
				</div>
			</div>
		</div>
		<button class="dp-ActionButton ActionButton--Xlarge dp-Arrow" type="button">
			<span class="dp-title-item">
				Support
			<span>
		</button>
	</div>
</div>
```

<!-- <h4>ticket/new-agentselect</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-TicketSelect">
		<div class="dp-SectionControls">
			<div class="dp-SectionTitle">
				<div class="dp-TitleControls">Agent</div>
				<div class="dp-StatusTimes dp-MenuBarItem">
					Assign to me | Unassign
				</div>
			</div>
		</div>
		<button class="dp-ActionButton ActionButton--XXlarge dp-SectionBody-item dp-Arrow" type="button">
			<span class="dp-title-item">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				Kenneth James
			<span>
		</button>
	</div>
</div>
``` -->

<!-- <h4>new ticket/new-agentselect</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-TicketSelect">
		<div class="dp-SectionControls">
			<div class="dp-SectionTitle dp-title-item">
				<div class="dp-TitleControls">Agent</div>
				<div class="dp-StatusTimes dp-MenuBarItem">
					Assign to me | Unassign
				</div>
			</div>
		</div>
		<button class="dp-ActionButton ActionButton--XXlarge dp-SectionBody-item dp-Arrow" type="button">
			<span class="dp-title-item">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				Kenneth James
			<span>
		</button>
	</div>
</div>
``` -->

<h4>ticket/new-teamselect</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-TicketSelect dp-TicketSmall">
		<div class="dp-SectionControls">
			<div class="dp-SectionTitle">
				<div class="dp-TitleControls">Team</div>
				<div class="dp-StatusTimes dp-MenuBarItem">
					Unassign
				</div>
			</div>
		</div>
		<button class="dp-ActionButton ActionButton--Xlarge dp-SectionBody-item dp-Arrow" type="button">
			<span class="dp-title-item is-italic">
				Add team
			<span>
		</button>
	</div>
</div>
```

<h4>ticket/status-select</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-TicketSelect" style="max-width:275px;">
		<div class="dp-SectionControls">
			<div class="dp-SectionTitle">
				<div class="dp-TitleControls">Status</div>
			</div>
		</div>
		<div class="dp-ButtonWrapper">
			<button class="dp-ActionButton ActionButton--XXlarge dp-Arrow" type="button">Awaiting Agent</button>
			<button class="dp-ActionButton dp-Arrow" type="button">1</button>
		</div>
	</div>
</div>
```

```html @preview
<div class="dp-MainWrapper">
	<div class="dp-ControlBar dp-DropDownBar">
		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-TitileControl dp-Tabs-item"><span class="dp-Icon dp-phone_filled Icon-success"></span>Duration: 00:00:01</li>
			<li class="dp-Tabs-item"><span class="dp-Icon dp-hold"></span>Hold</li>
			<li class="dp-Tabs-item"><span class="dp-Icon dp-mute"></span>Mute</li>
			<li class="dp-Tabs-item"><span class="dp-Icon dp-transfer"></span>Transfer<button class="dp-Arrow"></button></li>
			<li class="dp-Tabs-item"><span class="dp-Icon dp-AddUser"></span>Add</li>
		</ul>
	</div>
</div>
```

<h4>ticket/followers</h4>

```html @preview
<div class="dp-Followers" style="max-width:410px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(1)<span></div>
			<div class="dp-StatusTimes dp-FollowersStatus">
				Follow
			</div>
		</div>
	</div>

	<ul class="dp-FollowerList">
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
		</li>
		<li class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</li>
	</ul>
	
</div>
```

<!-- 7 -->

```html @preview
<div class="dp-Followers demo-tooltip" style="max-width:410px">

	<div class="dp-SectionControls">

		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(7)<span></div>
			<div class="dp-StatusTimes dp-FollowersStatus is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</div>
		</div>
	</div>

	<ul class="dp-FollowerList">
		<li class="dp-FollowersItem">
			<span class="dp-LogoName Name--Me">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Me </span>
			</span>
			<i class="dp-Icon dp-close"></i>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergersonon </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richardson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richardson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
		</li>

		<li class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</li>
	</ul>

</div>
```

<!-- 8 -->

```html @preview
<div class="dp-Followers demo-tooltip" style="max-width:410px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(8)<span></div>
			<div class="dp-StatusTimes dp-FollowersStatus is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</div>
		</div>
	</div>

	<ul class="dp-FollowerList Followers--Medium">
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richardson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</li>
	</ul>

</div>
```

<!-- 24 -->

```html @preview
<div class="dp-Followers demo-tooltip" style="max-width:410px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(24)<span></div>
			<div class="dp-StatusTimes dp-FollowersStatus is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</div>
		</div>
	</div>

	<ul class="dp-FollowerList Followers--Medium">
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Me </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Me</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Me </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Me</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</li>
	</ul>

</div>
```

<!-- 50 -->

```html @preview
<div class="dp-Followers demo-tooltip" style="max-width:410px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(24)<span></div>
			<div class="dp-StatusTimes dp-FollowersStatus is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</div>
		</div>
	</div>

	<ul class="dp-FollowerList Followers--Large">
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Me </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Me</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richardson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> John Richards </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Peter Fergerson </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</li>
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<i class="dp-Icon dp-close"></i>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</li>

		<li class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</li>
	</ul>

</div>
```


<h4>ticket/labels</h4>
```html @preview
	<span class="dp-TagBar">
		<span class="dp-Tag Tag--close">Custom work<span class="dp-Icon dp-close"></span></span>
		<span class="dp-Tag Tag--close">Report back on bug fix<span class="dp-Icon dp-close"></span></span>
		<span class="dp-Tag Tag--close Tag--purple">VIP<span class="dp-Icon dp-close"></span></span>
		<button class="dp-Button Button--large Button--square"><span class="dp-Icon dp-add-square"></span></button>
	</span>
```

<h4>ticket/no-labels</h4>
```html @preview
<span class="dp-TagBar">
	<button class="dp-Button Button--label">
		Labels<span class="dp-Icon dp-IconPlusBtn"></span>
	</button>
</span>
```

<h4>buttons/actions</h4>
```html @preview
<div class="demo-cog demo-menu">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link">Lock</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconMin"></span>
						<a href="#" class="dp-Menu-link">Put ticket on hold</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-Bin"></span>
						<a href="#" class="dp-Menu-link">Delete</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-disabled">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="dp-MenuBarList">
			<li class="dp-MenuBarItem dp-TasksItem">
				<span class="dp-Icon dp-tasks Icon--blue"></span>
				<span class="dp-Title">Tasks</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem is-active">
				<span class="dp-Icon dp-billing Icon--blue">
					<span class="dp-Badge Badge--round Badge--top Badge--danger">2</span>
				</span>
				<span class="dp-Title">Billing</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-liscense Icon--blue"></span>
				<span class="dp-Title">License</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
				<span class="dp-Title">Ticket Properties</span>
				<button class="dp-Arrow"></button>
			</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-follow_up Icon--blue"></span>
				<span class="dp-Title">Follow-ups</span>
				<button class="dp-Arrow"></button>
			</li>
		</ul>

	</div>
</div>
```

<!-- Lock -->

```html @preview
<!-- <div class="dp-MainWrapper demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-lock"></span>
				Lock
				<button class="dp-Arrow"></button>
                <ul class="dp-Menu is-visible">
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-lock"></span>
                    	<a href="#" class="dp-Menu-link">Lock</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-iconMin"></span>
                    	<a href="#" class="dp-Menu-link">Put ticket on hold</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-Bin"></span>
                    	<a href="#" class="dp-Menu-link">Delete</a>
                    </li>
                </ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

	</div>
</div> -->

<div class="demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link">Lock</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconMin"></span>
						<a href="#" class="dp-Menu-link">Put ticket on hold</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-Bin"></span>
						<a href="#" class="dp-Menu-link">Delete</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="dp-MenuBarList">
			<li class="dp-MenuBarItem dp-TasksItem">
				<span class="dp-Icon dp-tasks Icon--blue"></span>
				<span class="dp-Title">Tasks</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-billing Icon--blue"></span>
				<span class="dp-Title">Billing</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-liscense Icon--blue"></span>
				<span class="dp-Title">License</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
				<span class="dp-Title">Ticket Properties</span>
				<button class="dp-Arrow"></button>
			</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-follow_up Icon--blue"></span>
				<span class="dp-Title">Follow-ups</span>
				<button class="dp-Arrow"></button>
			</li>
		</ul>

	</div>
</div>

```

<!-- Link -->

```html @preview
<!-- <div class="dp-MainWrapper demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">
		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-lock"></span>
                    	<a href="#" class="dp-Menu-link">Lock</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-iconMin"></span>
                    	<a href="#" class="dp-Menu-link">Put ticket on hold</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-Bin"></span>
                    	<a href="#" class="dp-Menu-link">Delete</a>
                    </li>
                </ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-IconLink"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu is-visible">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span> 
						<a href="#" class="dp-Menu-link">Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span> 
						<a href="#" class="dp-Menu-link">Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div> -->

<div class="demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link">Lock</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconMin"></span>
						<a href="#" class="dp-Menu-link">Put ticket on hold</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-Bin"></span>
						<a href="#" class="dp-Menu-link">Delete</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="dp-MenuBarList">
			<li class="dp-MenuBarItem dp-TasksItem">
				<span class="dp-Icon dp-tasks Icon--blue"></span>
				<span class="dp-Title">Tasks</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-billing Icon--blue"></span>
				<span class="dp-Title">Billing</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-liscense Icon--blue"></span>
				<span class="dp-Title">License</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
				<span class="dp-Title">Ticket Properties</span>
				<button class="dp-Arrow"></button>
			</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-follow_up Icon--blue"></span>
				<span class="dp-Title">Follow-ups</span>
				<button class="dp-Arrow"></button>
			</li>
		</ul>

	</div>
</div>
```

<!-- New -->

```html @preview
<!-- <div class="dp-MainWrapper demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">
		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-lock"></span>
                    	<a href="#" class="dp-Menu-link">Lock</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-iconMin"></span>
                    	<a href="#" class="dp-Menu-link">Put ticket on hold</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-Bin"></span>
                    	<a href="#" class="dp-Menu-link">Delete</a>
                    </li>
                </ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-IconPlusGrey"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu is-visible">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span> 
						<a href="#" class="dp-Menu-link">New pending article</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link">New Snippet</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link">Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link">Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link">Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link">Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div> -->

<div class="demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link">Lock</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconMin"></span>
						<a href="#" class="dp-Menu-link">Put ticket on hold</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-Bin"></span>
						<a href="#" class="dp-Menu-link">Delete</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="dp-MenuBarList">
			<li class="dp-MenuBarItem dp-TasksItem">
				<span class="dp-Icon dp-tasks Icon--blue"></span>
				<span class="dp-Title">Tasks</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-billing Icon--blue"></span>
				<span class="dp-Title">Billing</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-liscense Icon--blue"></span>
				<span class="dp-Title">License</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
				<span class="dp-Title">Ticket Properties</span>
				<button class="dp-Arrow"></button>
			</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-follow_up Icon--blue"></span>
				<span class="dp-Title">Follow-ups</span>
				<button class="dp-Arrow"></button>
			</li>
		</ul>

	</div>
</div>
```

<!-- Print -->

```html @preview
<!-- <div class="dp-MainWrapper demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">
		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-lock"></span>
                    	<a href="#" class="dp-Menu-link">Lock</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-iconMin"></span>
                    	<a href="#" class="dp-Menu-link">Put ticket on hold</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-Bin"></span>
                    	<a href="#" class="dp-Menu-link">Delete</a>
                    </li>
                </ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-IconPrint"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu is-visible">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link">Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div> -->

<div class="demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link">Lock</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconMin"></span>
						<a href="#" class="dp-Menu-link">Put ticket on hold</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-Bin"></span>
						<a href="#" class="dp-Menu-link">Delete</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="dp-MenuBarList">
			<li class="dp-MenuBarItem dp-TasksItem">
				<span class="dp-Icon dp-tasks Icon--blue"></span>
				<span class="dp-Title">Tasks</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-billing Icon--blue"></span>
				<span class="dp-Title">Billing</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-liscense Icon--blue"></span>
				<span class="dp-Title">License</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
				<span class="dp-Title">Ticket Properties</span>
				<button class="dp-Arrow"></button>
			</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-follow_up Icon--blue"></span>
				<span class="dp-Title">Follow-ups</span>
				<button class="dp-Arrow"></button>
			</li>
		</ul>

	</div>
</div>
```

<!-- Ban -->

```html @preview
<!-- <div class="dp-MainWrapper demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">
		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-lock"></span>
                    	<a href="#" class="dp-Menu-link">Lock</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-iconMin"></span>
                    	<a href="#" class="dp-Menu-link">Put ticket on hold</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-Bin"></span>
                    	<a href="#" class="dp-Menu-link">Delete</a>
                    </li>
                </ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link">  Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-ban"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu is-visible">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div> -->


<div class="demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link">Lock</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconMin"></span>
						<a href="#" class="dp-Menu-link">Put ticket on hold</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-Bin"></span>
						<a href="#" class="dp-Menu-link">Delete</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="dp-MenuBarList">
			<li class="dp-MenuBarItem dp-TasksItem">
				<span class="dp-Icon dp-tasks Icon--blue"></span>
				<span class="dp-Title">Tasks</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-billing Icon--blue"></span>
				<span class="dp-Title">Billing</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-liscense Icon--blue"></span>
				<span class="dp-Title">License</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
				<span class="dp-Title">Ticket Properties</span>
				<button class="dp-Arrow"></button>
			</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-follow_up Icon--blue"></span>
				<span class="dp-Title">Follow-ups</span>
				<button class="dp-Arrow"></button>
			</li>
		</ul>

	</div>
</div>
```

<!-- Actions -->

```html @preview
<!-- <div class="dp-MainWrapper demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">
		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
                <ul class="dp-Menu">
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-lock"></span>
                    	<a href="#" class="dp-Menu-link">Lock</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-iconMin"></span>
                    	<a href="#" class="dp-Menu-link">Put ticket on hold</a>
                    </li>
                    <li class="dp-Menu-linkItem">
                    	<span class="dp-Icon dp-Bin"></span>
                    	<a href="#" class="dp-Menu-link">Delete</a>
                    </li>
                </ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-rocket"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu is-visible">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link">Misc value</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div> -->

<div class="demo-cog demo-menu" style="height: 150px;">
	<div class="dp-DropDownBar">

		<ul class="dp-Tabs Tabs--actions">
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link">Lock</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconMin"></span>
						<a href="#" class="dp-Menu-link">Put ticket on hold</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-Bin"></span>
						<a href="#" class="dp-Menu-link">Delete</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-lock"></span>
						<a href="#" class="dp-Menu-link"> Create linked ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconLink"></span>
						<a href="#" class="dp-Menu-link"> Link existing ticket </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSplit"></span>
						<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconMerge"></span>
						<a href="#" class="dp-Menu-link"> Merge </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconArticle"></span>
						<a href="#" class="dp-Menu-link"> New pending article </a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSnippet"></span>
						<a href="#" class="dp-Menu-link"> New Snippet </a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconPrint"></span>
						<a href="#" class="dp-Menu-link"> Print</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconDownloadPDF"></span>
						<a href="#" class="dp-Menu-link"> Download PDF</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-iconBugGray"></span>
						<a href="#" class="dp-Menu-link"> Download Debug File</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-ban"></span>
						<a href="#" class="dp-Menu-link"> Ban</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-IconSpam"></span>
						<a href="#" class="dp-Menu-link"> Spam</a>
					</li>
				</ul>
			</li>
			<li class="dp-Tabs-item is-active">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-Icon dp-rocket"></span>
						<a href="#" class="dp-Menu-link"> Misc value</a>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="dp-MenuBarList">
			<li class="dp-MenuBarItem dp-TasksItem">
				<span class="dp-Icon dp-tasks Icon--blue"></span>
				<span class="dp-Title">Tasks</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-billing Icon--blue"></span>
				<span class="dp-Title">Billing</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem">
				<span class="dp-Icon dp-liscense Icon--blue"></span>
				<span class="dp-Title">License</span>
				<button class="dp-Arrow"></button>
			</li>
			<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
				<span class="dp-Title">Ticket Properties</span>
				<button class="dp-Arrow"></button>
			</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
				<span class="dp-Icon dp-follow_up Icon--blue"></span>
				<span class="dp-Title">Follow-ups</span>
				<button class="dp-Arrow"></button>
			</li>
		</ul>

	</div>
</div>
```

<h4>Agent Team Followers</h4>
```html @preview
<div class="dp-MainWrapper demo-cog demo-menu">

	<div class="dp-TeamFollowersWrapper dp-MainRightContainer" style="height: 75px;">

		<div class="dp-TicketSelect dp-TicketSmall"">
			<div class="dp-SectionControls">
				<div class="dp-SectionTitle">
					<div class="dp-TitleControls">Agent</div>
					<div class="dp-StatusTimes dp-MenuBarItem">
						Assign to me | Unassign
					</div>
				</div>
			</div>
			<button class="dp-ActionButton ActionButton--Xlarge dp-SectionBody-item" type="button">
				<span class="dp-title-item">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					Zack Prudent
				<span>
			</button>
		</div>

		<div class="dp-TicketSelect dp-TicketSmall">
			<div class="dp-SectionControls">
				<div class="dp-SectionTitle">
					<div class="dp-TitleControls">Team</div>
					<div class="dp-StatusTimes dp-MenuBarItem">
						Unassign
					</div>
				</div>
			</div>
			<button class="dp-ActionButton ActionButton--Xlarge dp-SectionBody-item" type="button">
				<span class="dp-title-item">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					Support
				<span>
			</button>
		</div>

		<div class="dp-Followers demo-tooltip">
			<div class="dp-SectionControls">
				<div class="dp-SectionTitle">
					<div class="dp-TitleControls">Followers <span class="dp-qt">(5)<span></div>
					<div class="dp-StatusTimes dp-FollowersStatus is-active">
						Following
						<span class="dp-Icon dp-following Icon--primary"></span>
					</div>
				</div>
			</div>
			<ul class="dp-FollowerList">
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Wendy pride </span>
					</span>
					<i class="dp-Icon dp-close"></i>
					<!-- tooltip -->
					<span class="dp-ToolTips">Wendy pride</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName Name--Me">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Me </span>
					</span>
					<i class="dp-Icon dp-close"></i>
					<!-- tooltip -->
					<span class="dp-ToolTips">Me</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Peter Fergerson </span>
					</span>
					<i class="dp-Icon dp-close"></i>
					<!-- tooltip -->
					<span class="dp-ToolTips">Peter Fergerson</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> John Richardson </span>
					</span>
					<i class="dp-Icon dp-close"></i>
					<!-- tooltip -->
					<span class="dp-ToolTips">John Richardson</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Peter Fergerson </span>
					</span>
					<i class="dp-Icon dp-close"></i>
					<!-- tooltip -->
					<span class="dp-ToolTips">Peter Fergerson</span>
				</li>
				<li class="dp-FollowersBtn">
					<button class="dp-Button Button--link Button--small">
						<span class="dp-Icon dp-add_follower Icon--primary"></span>
						<span>Add</span>
					</button>
				</li>
			</ul>
		</div>

	</div> <!-- dp-FollowerList -->
</div>
```

<h4> ReplyBox </h4>
```html @preview
<div class="dp-MainWrapper demo-cog demo-menu">
	<div class="dp-MainRightContainer ">
		<!-- Reply Box -->
		<div class="dp-ReplyBox">
			<div class="dp-SectionControls">
				<div class="dp-SectionTitle">
					<div class="dp-TitleControls">Messages</div>
				</div>
			</div>

			<!-- Tabs -->
			<ul class="dp-Tabs Tabs--reply Level-justify-between">
				<li>
					<ul>
						<li class="dp-Tabs-item is-active">
							<span class="dp-Icon Icon--Reply"></span>
							Reply
						</li>
						<li class="dp-Tabs-item">
							<span class="dp-Icon Icon--Note"></span>
							Note
						</li>
						<li class="dp-Tabs-item">
							<span class="dp-Icon Icon--Forward"></span>
							Forward
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li class="dp-Tabs-item">
							<span class="dp-Icon Icon--Macro"></span>
							Apply macro
						</li>
					</ul>
				</li>
			</ul>

		    <div class="dp-ReplyWrapper">
				<!-- <textarea class="dp-ReplyEditor" placeholder="Reply"></textarea> -->
				<textarea class="dp-ReplyEditor" placeholder=""></textarea>
		    </div>
		    <div class="dp-SendAs dp-MenuBarItem">
		        <span class="dp-Sendtxt"> Send reply as </span>
		        <button class="dp-Arrow"></button>
		    </div>
		</div> <!-- Reply Box -->
	</div>
</div>
```

```html @preview
<div class="dp-TicketMessage demo-cog demo-menu">
	<div class="dp-MessageContainer dp-ColorContainer">
		<div class="dp-MessageHeader">
			<div class="dp-Left">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span>Zack Prudent</span>
			</div>
			<div class="dp-Right">
				<div class="dp-Time"><span class="dp-Icon dp-history"></span>2 days ago</div>
			</div>
			<!-- Icon hover -->
			<span class="dp-Cog dp-Submenu--left">
				<span class="dp-Icon dp-settings"></span>
				<ul class="dp-Menu">
					<li class="dp-Menu-linkItem">Place on hold</li>
					<li class="dp-Menu-linkItem">Lock</li>
					<li class="dp-Menu-linkItem">Unlock</li>
				</ul>
			</span>
		</div>
		<div class="dp-MessageTitle">
			<p class="dp-Type">Agent note</p>
		</div>
		<div class="dp-MessageBody">
			<p class="dp-txt">I’ve asked one of the tech guys to take a look but don’t want to reply until we know the timeframe for a resolution.</p>
		</div>
	</div>
</div>
```

<h4>ticket/agentselect</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-Pageview-Demonstration demo-cog demo-menu">
		<div class="Pageview-container-demo">

			<div class="dp-SsoWrap">
				<div class="dp-SsoContent">
					<span class="dp-Icon dp-iconStar Icon-success"></span>
					<span class="dp-Badge Badge--id is-active">
						#14355
						<span class="dp-ToolTips">
							<span class="dp-Icon dp-TicketId"></span>
							<span class="dp-Icon dp-IconLink"></span>
						</span>
					</span>
					<span class="dp-SsoTxt">SSO working well with Safari and IE but issue with Chrome browser</span>
				</div>
				<span class="dp-TagBar">
					<span class="dp-Tag Tag--close">Custom work<span class="dp-Icon dp-close"></span></span>
					<span class="dp-Tag Tag--close">Report back on bug fix<span class="dp-Icon dp-close"></span></span>
					<span class="dp-Tag Tag--close Tag--purple">VIP<span class="dp-Icon dp-close"></span></span>
					<button class="dp-Button Button--large Button--square"><span class="dp-Icon dp-add-square"></span></button>
				</span>
			</div>

<!-- 			<div class="dp-DropDownBar">
				<ul class="dp-Tabs Tabs--actions">
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-lock Icon--primary"></span>
						Lock
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-IconLink Icon--primary"></span>
						Link
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
						New
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-IconPrint Icon--primary"></span>
						Print
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-ban Icon--primary"></span>
						Ban
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-rocket Icon--primary"></span>
						Actions
						<button class="dp-Arrow"></button>
					</li>
				</ul>
			</div> -->

<!-- 			<ul class="dp-MenuBarList">
				<li class="dp-MenuBarItem dp-TasksItem">
					<span class="dp-Icon dp-tasks Icon--blue"></span>
					<span class="dp-Title">Tasks</span>
					<button class="dp-Arrow"></button>
				</li>
				<li class="dp-MenuBarItem">
					<span class="dp-Icon dp-billing Icon--blue"></span>
					<span class="dp-Title">Billing</span>
					<button class="dp-Arrow"></button>
				</li>
				<li class="dp-MenuBarItem">
					<span class="dp-Icon dp-liscense Icon--blue"></span>
					<span class="dp-Title">License</span>
					<button class="dp-Arrow"></button>
				</li>
				<li class="dp-MenuBarItem dp-PropertiesItem">
					<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
					<span class="dp-Title">Ticket Properties</span>
					<button class="dp-Arrow"></button>
				</li>
					<li class="dp-MenuBarItem dp-PropertiesItem">
					<span class="dp-Icon dp-follow_up Icon--blue"></span>
					<span class="dp-Title">Follow-ups</span>
					<button class="dp-Arrow"></button>
				</li>
			</ul> -->

			<div class="dp-DropDownBar">

				<ul class="dp-Tabs Tabs--actions">
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-lock Icon--primary"></span>
						Lock
						<button class="dp-Arrow"></button>
						<ul class="dp-Menu">
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-lock"></span>
								<a href="#" class="dp-Menu-link">Lock</a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-iconMin"></span>
								<a href="#" class="dp-Menu-link">Put ticket on hold</a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-Bin"></span>
								<a href="#" class="dp-Menu-link">Delete</a>
							</li>
						</ul>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-IconLink Icon--primary"></span>
						Link
						<button class="dp-Arrow"></button>
						<ul class="dp-Menu">
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-lock"></span>
								<a href="#" class="dp-Menu-link"> Create linked ticket </a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconLink"></span>
								<a href="#" class="dp-Menu-link"> Link existing ticket </a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconSplit"></span>
								<a href="#" class="dp-Menu-link"> Split message to new ticket </a></li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconMerge"></span>
								<a href="#" class="dp-Menu-link"> Merge </a>
							</li>
						</ul>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
						New
						<button class="dp-Arrow"></button>
						<ul class="dp-Menu">
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconArticle"></span>
								<a href="#" class="dp-Menu-link"> New pending article </a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconSnippet"></span>
								<a href="#" class="dp-Menu-link"> New Snippet </a>
							</li>
						</ul>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-IconPrint Icon--primary"></span>
						Print
						<button class="dp-Arrow"></button>
						<ul class="dp-Menu">
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconPrint"></span>
								<a href="#" class="dp-Menu-link"> Print</a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconDownloadPDF"></span>
								<a href="#" class="dp-Menu-link"> Download PDF</a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-iconBugGray"></span>
								<a href="#" class="dp-Menu-link"> Download Debug File</a>
							</li>
						</ul>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-ban Icon--primary"></span>
						Ban
						<button class="dp-Arrow"></button>
						<ul class="dp-Menu">
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-ban"></span>
								<a href="#" class="dp-Menu-link"> Ban</a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-IconSpam"></span>
								<a href="#" class="dp-Menu-link"> Spam</a>
							</li>
						</ul>
					</li>
					<li class="dp-Tabs-item">
						<span class="dp-Icon dp-rocket Icon--primary"></span>
						Actions
						<button class="dp-Arrow"></button>
						<ul class="dp-Menu">
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-rocket"></span>
								<a href="#" class="dp-Menu-link"> Misc value</a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-rocket"></span>
								<a href="#" class="dp-Menu-link"> Misc value</a>
							</li>
							<li class="dp-Menu-linkItem">
								<span class="dp-Icon dp-rocket"></span>
								<a href="#" class="dp-Menu-link"> Misc value</a>
							</li>
						</ul>
					</li>
				</ul>

				<ul class="dp-MenuBarList">
					<li class="dp-MenuBarItem dp-TasksItem">
						<span class="dp-Icon dp-tasks Icon--blue">
						</span>
						<span class="dp-Title">Tasks</span>
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-MenuBarItem is-active">
						<span class="dp-Icon dp-billing Icon--blue">
							<span class="dp-Badge Badge--round Badge--top Badge--danger">2</span>
						</span>
						<span class="dp-Title">Billing</span>
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-MenuBarItem">
						<span class="dp-Icon dp-liscense Icon--blue">
						</span>
						<span class="dp-Title">License</span>
						<button class="dp-Arrow"></button>
					</li>
					<li class="dp-MenuBarItem dp-PropertiesItem">
						<span class="dp-Icon dp-ticket_properties Icon--blue">
						</span>
						<span class="dp-Title">Ticket Properties</span>
						<button class="dp-Arrow"></button>
					</li>
						<li class="dp-MenuBarItem dp-PropertiesItem">
						<span class="dp-Icon dp-follow_up Icon--blue">
						</span>
						<span class="dp-Title">Follow-ups</span>
						<button class="dp-Arrow"></button>
					</li>
				</ul>
			</div>

			<div class="dp-MainContainer">

				<!-- Sidebar -->
				<div class="dp-SidebarContainer demo-sidebar">
			        <div class="dp-PageSidebar">

			            <ul class="dp-Tabs Tabs--icons">
			                <li class="dp-Tabs-item is-active"><a href="#" class="dp-Icon Icon--email"></a></li>
			                <li class="dp-Tabs-item"><a href="#" class="dp-Icon Icon--user"></a></li>
			                <li class="dp-Tabs-item"><a href="#" class="dp-Icon Icon--organisation"></a></li>
			            </ul>

			            <div class="dp-SidebarBody">

			                <div class="dp-SidebarSection">
			                    <div class="dp-SectionBody-item ">
			                        <div class="dp-title-item">
			                            <span class="dp-Icon dp-iconUserAvatar"></span>
			                            Optical
			                        </div>
			                    </div>
			                    <div class="dp-SectionBody-item dp-UserPanel">
			                        <div class="dp-title-item">
			                            <span class="dp-Icon dp-iconUserAvatar"></span>
			                            <span class="dp-UserName">Zack Prudent</span>
			                            <span class="dp-Icon Icon--OwnerArrows"></span>
			                        </div>
			                        <a href="mailto:zack.pride@techcompany.com" class="dp-MailAddress">zack.prudent@techcompany.com</a>
			                        <div class="dp-Phone">
			                            <i class="dp-Icon dp-phone_filled Icon--blue"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
			                        </div>
			                        <div class="dp-OpenResolved">
			                            <span class="dp-open"><i class="dp-Icon Icon--email Icon--primary"></i> Open: 7</span>
			                            <span class="dp-resolved"><i class="dp-Icon Icon--email"></i> Resolved: 24</span>
			                        </div>
			                    </div>
			                </div>

<!-- 			                <div class="dp-SidebarSection dp-CCmenu">
			                    <div class="dp-SectionControls">
			                        <div class="dp-SectionTitle dp-CcRow">
			                            <div class="dp-TitleControls">
			                                <span class="dp-open">CC’s</span>
			                                <span>Add</span>
			                            </div>
			                            <a href="#" class="dp-Controls">
			                                <span class="dp-qt"> +5 </span> 
			                                <button class="dp-Button Button--more Button--small"><span class="dp-dots">...</span></button>
			                            </a>
			                        </div>
			                    </div>
			                </div>

			                <div class="dp-SectionControls dp-SidebarSection">

			                    <div class="dp-title-item dp-SectionTitle">
			                        <span class="dp-UserName">
			                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
			                            Wendy Pride
			                            <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
			                        </span>
			                        <a href="#" class="dp-Icon dp-iconVDots"></a>
			                    </div>

			                    <div class="dp-title-item dp-SectionTitle">
			                        <span class="dp-UserName">
			                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
			                            Wendy Pride
			                            <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
			                        </span>
			                        <a href="#" class="dp-Icon dp-iconVDots"></a>
			                    </div>

			                    <div class="dp-title-item dp-SectionTitle">
			                        <span class="dp-UserName">
			                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
			                            Wendy Pride
			                            <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
			                        </span>
			                        <a href="#" class="dp-Icon dp-iconVDots"></a>
			                    </div>

			                    <div class="dp-title-item dp-SectionTitle">
			                        <span class="dp-UserName">
			                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
			                            Wendy Pride
			                            <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
			                        </span>
			                        <a href="#" class="dp-Icon dp-iconVDots"></a>
			                    </div>
			                </div> -->



                <div class="dp-SidebarSection dp-CCmenu">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle dp-CcRow">
                            <div class="dp-TitleControls">
                                <span class="dp-open">CC’s</span>
                                <span class="dp-AddBtn is-active">Add</span>
                            </div>
                            <a href="#" class="dp-Controls">
                                <span class="dp-qt"> +5 </span> 
                                <i class="dp-Icon dp-DotsIcon is-active"></i>
                            </a>
                        </div>
                    </div>

                    <div class="dp-SectionControls dp-SidebarSection">

                        <div class="dp-AddCc">
                            <div class="dp-Menu-search">
                                <form>
                                    <div class="dp-Form">
                                        <input type="email" name="" class="dp-Input" placeholder="Email address">
                                        <input type="text" name="" placeholder="Name" class="dp-Input">
                                        <button class="dp-ActionButton dp-Arrow">Language</button>
                                    </div>
                                    <button class="dp-Button Button--cc">Add CC</button>
                                </form>
                            </div>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <span class="dp-UserName">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <span class="dp-User-link">
                                    Bob Cooper
                                    <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">bob.cooper@techcompany.co</a>
                                </span>
                            </span>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                            <!-- hide menu -->
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Swap"></span>
                                    <a href="#" class="dp-Menu-link">Swap with ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Owner"></span>
                                    <a href="#" class="dp-Menu-link">Set as ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Merge"></span>
                                    <a href="#" class="dp-Menu-link">Merge into ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Bin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-iconMin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC & Block from ticket</a>
                                </li>
                            </ul>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <span class="dp-UserName">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <span class="dp-User-link">
                                    Bob Cooper
                                    <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">bob.cooper@techcompany.co</a>
                                </span>
                            </span>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                            <!-- hide menu -->
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Swap"></span>
                                    <a href="#" class="dp-Menu-link">Swap with ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-Menu-link">Set as ticket owner</a>
                                    <span class="dp-Icon dp-Owner"></span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Merge"></span>
                                    <a href="#" class="dp-Menu-link">Merge into ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Bin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-iconMin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC & Block from ticket</a>
                                </li>
                            </ul>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <span class="dp-UserName">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <span class="dp-User-link">
                                    Bob Cooper
                                    <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">bob.cooper@techcompany.co</a>
                                </span>
                            </span>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                            <!-- hide menu -->
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Swap"></span>
                                    <a href="#" class="dp-Menu-link">Swap with ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Owner"></span>
                                    <a href="#" class="dp-Menu-link">Set as ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Merge"></span>
                                    <a href="#" class="dp-Menu-link">Merge into ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Bin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-iconMin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC & Block from ticket</a>
                                </li>
                            </ul>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <span class="dp-UserName">
                                <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                <span class="dp-User-link">
                                    Bob Cooper
                                    <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">bob.cooper@techcompany.co</a>
                                </span>
                            </span>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                            <!-- hide menu -->
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Swap"></span>
                                    <a href="#" class="dp-Menu-link">Swap with ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Owner"></span>
                                    <a href="#" class="dp-Menu-link">Set as ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Merge"></span>
                                    <a href="#" class="dp-Menu-link">Merge into ticket owner</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-Bin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-Icon dp-iconMin"></span>
                                    <a href="#" class="dp-Menu-link">Remove CC & Block from ticket</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>


			                <div class="dp-SidebarSection dp-SectionControls">
			                    <div class="dp-SectionTitle">
			                        <div class="dp-TitleControls"><span class="dp-Section--name">Status</span></div>
			                    </div>
			                </div>

			                <div class="dp-SidebarSection">
			                    <div class="dp-Selectbelow">
			                        <div class="dp-ButtonWrapper">
			                            <button class="dp-ActionButton dp-Border--danger ActionButton--large dp-Arrow" type="button">
			                                On Hold
			                            </button>

			                            <button class="dp-ActionButton dp-Border--danger dp--danger dp-Arrow" type="button">
			                                10
			                            </button>
			                        </div>
			                        <div class="dp-ButtonWrapper">
			                            <span class="dp-Icon dp-LevelDown"></span>

			                            <button class="dp-ActionButton ActionButton--large dp-Arrow" type="button">
			                                Awaiting order confirmation
			                            </button>
			                        </div>
			                    </div>
			                </div>

			                <div class="dp-SidebarSection dp-SectionControls">
			                    <div class="dp-SectionTitle">
			                        <div class="dp-TitleControls"><span class="dp-Section--name">TIMES</span></div>
			                        <a href="#" class="dp-Controls">
			                            <span class="dp-qt"> +6 </span> 
			                            <button class="dp-Button Button--more Button--small"><span class="dp-dots">...</span></button>
			                        </a>
			                    </div>
			                </div>

			                <div class="dp-SidebarSection dp-SectionControls">
			                    <!-- 1 -->
			                    <div class="dp-SectionTitle dp-TimesRow">
			                        <div class="dp-title-item">
			                            <span class="dp-Icon dp-ticket_created Icon--blue"></span>
			                            Created
			                        </div>
			                        <span class="dp-TimesStatus">2 weeks ago</span>
			                    </div>
			                    <!-- 2 -->
			                    <div class="dp-SectionTitle dp-TimesRow">
			                        <div class="dp-title-item">
			                            <span class="dp-Icon dp-CurrentUser Icon--blue"></span>
			                            Current user wait
			                        </div>
			                        <span class="dp-TimesStatus">12 hrs 43 mins</span>
			                    </div>                   
			                </div>

			                <div class="dp-SidebarSection dp-SectionControls">
			                    <div class="dp-SectionTitle">
			                        <div class="dp-TitleControls"><span class="dp-Section--name">SLAS</span></div>
			                        <a href="#" class="dp-Controls">
			                            <span class="dp-qt"> +5 </span> 
			                            <button class="dp-Button Button--more Button--small"><span class="dp-dots">...</span></button>
			                        </a>
			                    </div>
			                </div>
			                
			                <div class="dp-Slas">
			                    <div class="dp-TitleControls">ACTIVE SLAS</div>

			                    <div class="dp-SectionBody">
			                        <div class="dp-TagItem">
			                            <span class="dp-TimeStatus">
			                                <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
			                            </span>
			                            <span class="dp-TagDescription">Time until resolution</span>
			                        </div>
			                        <div class="dp-TagItem">
			                            <span class="dp-TimeStatus">
			                                <span class="dp-Tag Tag--small Tag--warning">10.5 hours</span>
			                            </span>
			                            <span class="dp-TagDescription">Time awaiting reply</span>
			                        </div>
			                    </div>
			                </div>

			            </div> <!-- Sidebar body -->
			        </div>
			    </div>

				<div class="dp-MainRightContainer">
					
					<div class="dp-TeamFollowersWrapper">
						<div class="dp-TicketSelect dp-TicketSmall">
							<div class="dp-SectionControls">
								<div class="dp-SectionTitle">
									<div class="dp-TitleControls">Agent</div>
									<div class="dp-StatusTimes dp-MenuBarItem">
										Assign to me | Unassign
									</div>
								</div>
							</div>
							<button class="dp-ActionButton ActionButton--Xlarge dp-SectionBody-item dp-Arrow" type="button">
								<span class="dp-title-item">
									<!-- <span class="dp-Icon dp-iconUserAvatar"></span> -->
									Zack Prudent
								<span>
							</button>
						</div>
						<div class="dp-TicketSelect dp-TicketSmall">
							<div class="dp-SectionControls">
								<div class="dp-SectionTitle">
									<div class="dp-TitleControls">Team</div>
									<div class="dp-StatusTimes dp-MenuBarItem">
										Unassign
									</div>
								</div>
							</div>
							<button class="dp-ActionButton ActionButton--Xlarge dp-SectionBody-item dp-Arrow" type="button">
								<span class="dp-title-item">
									<!-- <span class="dp-Icon dp-iconUserAvatar"></span> -->
									Support
								<span>
							</button>
						</div>

<!-- 						<div class="dp-TicketSelect">
							<div class="dp-SectionControls">
								<div class="dp-SectionTitle">
									<div class="dp-TitleControls">Followers <span class="dp-qt">(5)</span></div>
									<div class="dp-StatusTimes dp-FollowersStatus">
										Following
										<span class="dp-Icon dp-following Icon--primary"></span>
									</div>
								</div>
							</div>
							<div class="dp-Followers">
								<ul class="dp-FollowerList">
									<li class="dp-FollowersItem">
										<span class="dp-LogoName">
											<span class="dp-Icon dp-iconUserAvatar"></span>
											<span class="dp-UserName"> Wendy pride </span>
										</span>
										<a href="#"><i class="dp-Icon dp-close"></i></a>
									</li>
									<li class="dp-FollowersItem">
										<span class="dp-LogoName">
											<span class="dp-Icon dp-iconUserAvatar"></span>
											<span class="dp-UserName"> Me </span>
										</span>
										<a href="#"><i class="dp-Icon dp-close"></i></a>
									</li>
									<li class="dp-FollowersItem">
										<span class="dp-LogoName">
											<span class="dp-Icon dp-iconUserAvatar"></span>
											<span class="dp-UserName"> Peter Fergerson... </span>
										</span>
										<a href="#"><i class="dp-Icon dp-close"></i></a>
									</li>
									<li class="dp-FollowersItem">
										<span class="dp-LogoName">
											<span class="dp-Icon dp-iconUserAvatar"></span>
											<span class="dp-UserName"> John Richards... </span>
										</span>
										<a href="#"><i class="dp-Icon dp-close"></i></a>
									</li>
									<li class="dp-FollowersItem">
										<span class="dp-LogoName">
											<span class="dp-Icon dp-iconUserAvatar"></span>
											<span class="dp-UserName"> Peter Fergerson... </span>
										</span>
										<a href="#"><i class="dp-Icon dp-close"></i></a>
									</li>

									<li class="dp-FollowersItem">
										<button class="dp-Button Button--link Button--small">
											<span class="dp-Icon dp-add_follower Icon--primary"></span>
											<span id="text">Add</span>
										</button>
									</li>
								</ul>
							</div>
						</div> -->

						<div class="dp-Followers demo-tooltip">
							<div class="dp-SectionControls">
								<div class="dp-SectionTitle">
									<div class="dp-TitleControls">Followers <span class="dp-qt">(5)<span></div>
									<div class="dp-StatusTimes dp-FollowersStatus is-active">
										Following
										<span class="dp-Icon dp-following Icon--primary"></span>
									</div>
								</div>
							</div>
							<ul class="dp-FollowerList">
								<li class="dp-FollowersItem">
									<span class="dp-LogoName">
										<span class="dp-Icon dp-iconUserAvatar"></span>
										<span class="dp-UserName"> Wendy pride </span>
									</span>
									<i class="dp-Icon dp-close"></i>
									<!-- tooltip -->
									<span class="dp-ToolTips">Wendy pride</span>
								</li>
								<li class="dp-FollowersItem">
									<span class="dp-LogoName Name--Me">
										<span class="dp-Icon dp-iconUserAvatar"></span>
										<span class="dp-UserName"> Me </span>
									</span>
									<i class="dp-Icon dp-close"></i>
									<!-- tooltip -->
									<span class="dp-ToolTips">Me</span>
								</li>
								<li class="dp-FollowersItem">
									<span class="dp-LogoName">
										<span class="dp-Icon dp-iconUserAvatar"></span>
										<span class="dp-UserName"> Peter Fergerson </span>
									</span>
									<i class="dp-Icon dp-close"></i>
									<!-- tooltip -->
									<span class="dp-ToolTips">Peter Fergerson</span>
								</li>
								<li class="dp-FollowersItem">
									<span class="dp-LogoName">
										<span class="dp-Icon dp-iconUserAvatar"></span>
										<span class="dp-UserName"> John Richardson </span>
									</span>
									<i class="dp-Icon dp-close"></i>
									<!-- tooltip -->
									<span class="dp-ToolTips">John Richardson</span>
								</li>
								<li class="dp-FollowersItem">
									<span class="dp-LogoName">
										<span class="dp-Icon dp-iconUserAvatar"></span>
										<span class="dp-UserName"> Peter Fergerson </span>
									</span>
									<i class="dp-Icon dp-close"></i>
									<!-- tooltip -->
									<span class="dp-ToolTips">Peter Fergerson</span>
								</li>
								<li class="dp-FollowersBtn">
									<button class="dp-Button Button--link Button--small">
										<span class="dp-Icon dp-add_follower Icon--primary"></span>
										<span>Add</span>
									</button>
								</li>
							</ul>
						</div>

					</div> <!-- dp-FollowerList -->

					<!-- Reply Box -->
					<div class="dp-ReplyBox">
						<div class="dp-SectionControls">
							<div class="dp-SectionTitle">
								<div class="dp-TitleControls">Messages</div>
							</div>
						</div>

						<!-- Tabs -->
						<ul class="dp-Tabs Tabs--reply Level-justify-between">
							<li>
								<ul>
									<li class="dp-Tabs-item is-active">
										<span class="dp-Icon Icon--Reply"></span>
										Reply
									</li>
									<li class="dp-Tabs-item">
										<span class="dp-Icon Icon--Note"></span>
										Note
									</li>
									<li class="dp-Tabs-item">
										<span class="dp-Icon Icon--Forward"></span>
										Forward
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li class="dp-Tabs-item">
										<span class="dp-Icon Icon--Macro"></span>
										Apply macro
									</li>
								</ul>
							</li>
						</ul>

					    <div class="dp-ReplyWrapper">
							<!-- <textarea class="dp-ReplyEditor" placeholder="Reply"></textarea> -->
							<textarea class="dp-ReplyEditor" placeholder=""></textarea>
					    </div>
					    <div class="dp-SendAs dp-MenuBarItem">
					        <span class="dp-Sendtxt"> Send reply as </span>
					        <button class="dp-Arrow"></button>
					    </div>
					</div> <!-- Reply Box -->

					<!-- Tabs -->
					<ul class="dp-Tabs Tabs--reply">
						<li class="dp-Tabs-item is-active">
							<span class="dp-Icon Icon--Notes"></span>
							Messages & Notes
						</li>
						<li class="dp-Tabs-item">
							<span class="dp-Icon Icon--Fulllog"></span>
							Full log
						</li>
					</ul>

					<div class="dp-TicketMessage">
						<div class="dp-MessageContainer dp-ColorContainer user--BlueContainer">
							<div class="dp-MessageHeader">
								<div class="dp-Left">
									<span class="dp-Icon dp-iconUserAvatar"></span>
									<span>Zach Prudent</span>
									<a href="mailto:zack.prudent@techcompany.com">
										<i class="dp-Icon dp-email_small"></i>zack.prudent@techcompany.com
									</a>
								</div>
								<div class="dp-Right">
									<div class="dp-Time">
										<span class="dp-Icon dp-history Icon--blue"></span>
										28 mins ago
									</div>
								</div>
								<!-- Icon hover -->
								<span class="dp-Cog dp-Submenu--left">
									<span class="dp-Icon dp-settings"></span>
									<ul class="dp-Menu">
										<li class="dp-Menu-linkItem">Place on hold</li>
										<li class="dp-Menu-linkItem">Lock</li>
										<li class="dp-Menu-linkItem">Unlock</li>
									</ul>
								</span>
							</div>
							<div class="dp-MessageTitle">
								<p class="dp-Type">User Reply</p>
							</div>
							<div class="dp-MessageBody">
								<div class="Content">
									<p>Good day Brian,</p>
									<p>We’ve been having another issue with this version of DeskPro. I’ve been doing some troubleshooting with our SSO partner but no luck so far so I thought it wouldn’t hurt to bounce it off of you. The thing is, we configured both Agent and User modules to use SSO and it was working great for a few days. When I came into the office last week Friday I realized that I wasn’t able to log into the Admin/Agent portals but I was able to log in to the User portal. Upon further investigation, we realized that we weren’t able to log in if the SSO URLs were the same.</p>
									<p>We tried clearing browser data in Chrome and trying incognito but no luck. Have you ever seen anything like this before?<br>
									Let me know if anything pops up in your head.</p>
									Thanks, Zack
								</div>
								<button class="dp-Button Button--more"><span class="dp-dots">...</span></button>
							</div>
						</div>
					</div>
					<!-- 2 -->
					<div class="dp-TicketMessage">
						<div class="dp-MessageContainer dp-ColorContainer agent--Container">
							<div class="dp-MessageHeader">
								<div class="dp-Left">
									<span class="dp-Icon dp-iconUserAvatar"></span>
									<span>Nick Green</span>
									<a href="mailto:nick.green@techcompany.com">
										<i class="dp-Icon dp-email_small"></i>nick.green@techcompany.com
									</a>
								</div>
								<div class="dp-Right">
									<div class="dp-Time"><span class="dp-Icon dp-history Icon--neutral"></span>2 days ago</div>
								</div>
								<!-- Icon hover -->
								<span class="dp-Cog dp-Submenu--left">
									<span class="dp-Icon dp-settings"></span>
									<ul class="dp-Menu">
										<li class="dp-Menu-linkItem">Place on hold</li>
										<li class="dp-Menu-linkItem">Lock</li>
										<li class="dp-Menu-linkItem">Unlock</li>
									</ul>
								</span>
							</div>
							<div class="dp-MessageTitle">
								<p class="dp-Type">Agent note</p>
							</div>
							<div class="dp-MessageBody">
								<p class="dp-txt">I’ve asked one of the tech guys to take a look but don’t want to reply until we know the timeframe for a resolution.</p>
							</div>
						</div>
					</div>
					<!-- 3 -->
					<div class="dp-TicketMessage">
						<div class="dp-MessageContainer">
							<div class="dp-MessageHeader">
								<div class="dp-Left">
									<span class="dp-Icon dp-iconUserAvatar"></span>
									<span>Nick Green</span>
									<a href="mailto:nick.green@techcompany.com">
										<i class="dp-Icon dp-email_small"></i>nick.green@techcompany.com
									</a>
								</div>
								<div class="dp-Right">
									<div class="dp-Time"><span class="dp-Icon dp-history"></span>2 days ago</div>
								</div>
								<!-- Icon hover -->
								<span class="dp-Cog dp-Submenu--left">
									<span class="dp-Icon dp-settings"></span>
									<ul class="dp-Menu">
										<li class="dp-Menu-linkItem">Place on hold</li>
										<li class="dp-Menu-linkItem">Lock</li>
										<li class="dp-Menu-linkItem">Unlock</li>
									</ul>
								</span>
							</div>
							<div class="dp-MessageTitle">
								<p class="dp-Type">Agent note</p>
							</div>
							<div class="dp-MessageBody">
								<p class="dp-txt">I’ve asked one of the tech guys to take a look but don’t want to reply until we know the timeframe for a resolution.</p>
							</div>
						</div>
					</div>
					

				</div> <!-- MainRightContainer -->
			</div> <!-- MainContainer -->
		</div> <!-- MainWrapper -->
	</div>
</div>
```