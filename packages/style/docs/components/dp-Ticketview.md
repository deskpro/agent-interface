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
				<!-- <div class="dp-StatusTimes dp-MenuBarItem"> -->
				<button class="Button--link">
					Assign to me <span class="dp-separator"></span> Unassign
				</button>
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
				<!-- <div class="dp-StatusTimes dp-MenuBarItem"> -->
				<button class="Button--link">
					Unassign
				</button>
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
				<!-- <div class="dp-StatusTimes dp-MenuBarItem"> -->
				<button class="Button--link">
					Unassign
				</button>
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
<div class="dp-Followers" style="max-width:405px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(1)<span></div>
			<button class="Button--link">
				Follow
			</button>
		</div>
	</div>

	<ul class="dp-FollowerList">
		<li class="dp-FollowersItem">
			<span class="dp-LogoName">
				<span class="dp-Icon dp-iconUserAvatar"></span>
				<span class="dp-UserName"> Wendy pride </span>
			</span>
			<span class="dp-Icon dp-close"></span>
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
<div class="dp-Followers demo-tooltip" style="max-width:405px">

	<div class="dp-SectionControls">

		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(7)<span></div>
			<button class="Button--link is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</button>
		</div>
	</div>

	<div class="dp-FollowerList Followers--Small">

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName Name--Me">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Me </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
				<!-- tooltip -->
				<span class="dp-ToolTips">John Richardson</span>
			</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
				<!-- tooltip -->
				<span class="dp-ToolTips">John Richardson</span>
			</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersBtn">
				<button class="dp-Button Button--link Button--small">
					<span class="dp-Icon dp-add_follower Icon--primary"></span>
					<span>Add</span>
				</button>
			</span>
		</span>

	</div>

</div>
```

<!-- 8 -->

```html @preview
<div class="dp-Followers demo-tooltip" style="max-width:405px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(8)<span></div>
			<button class="Button--link is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</button>
		</div>
	</div>

	<div class="dp-FollowerList Followers--Medium">

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>
			
		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>
			
		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>
			
		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richardson</span>
		</span>
			
		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>
			
		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>
			
		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>	

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>	

		<span class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</span>
	</div>

</div>
```

<!-- 24 -->

```html @preview
<div class="dp-Followers demo-tooltip" style="max-width:405px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(24)<span></div>
			<button class="Button--link is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</button>
		</div>
	</div>

	<div class="dp-FollowerList Followers--Medium">

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Me </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Me</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Me </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Me</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</span>
	</div>

</div>
```

<!-- 50 -->

```html @preview
<div class="dp-Followers demo-tooltip" style="max-width:405px">

	<div class="dp-SectionControls">
		<div class="dp-SectionTitle">
			<div class="dp-TitleControls">Followers <span class="dp-qt">(50)<span></div>
			<!-- <div class="dp-StatusTimes dp-FollowersStatus is-active"> -->
			<button class="Button--link is-active">
				Following
				<span class="dp-Icon dp-following Icon--primary"></span>
			</button>
		</div>
	</div>

	<div class="dp-FollowerList Followers--Large">

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Me </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Me</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>
		
		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richardson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> John Richards </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">John Richards</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Peter Fergerson </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Peter Fergerson</span>
		</span>

		<span class="demo-Followers-Wrapper"> <!-- demo class -->
			<span class="dp-FollowersItem">
				<span class="dp-LogoName">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					<span class="dp-UserName"> Wendy pride </span>
				</span>
				<span class="dp-Icon dp-close"></span>
			</span>
			<!-- tooltip -->
			<span class="dp-ToolTips">Wendy pride</span>
		</span>

		<span class="dp-FollowersBtn">
			<button class="dp-Button Button--link Button--small">
				<span class="dp-Icon dp-add_follower Icon--primary"></span>
				<span>Add</span>
			</button>
		</span>
	</div>

</div>
```


<h4>ticket/labels</h4>
```html @preview
<span class="dp-TagBar">
	<span class="dp-Tag Tag--close">Custom work<span class="dp-Icon dp-close"></span></span>
	<span class="dp-Tag Tag--close">Report back on bug fix<span class="dp-Icon dp-close"></span></span>
	<span class="dp-Tag Tag--close Tag--purple">VIP<span class="dp-Icon dp-close"></span></span>
	<span class="dp-separator"></span>
	<button class="dp-Button Button--large Button--square"><span class="dp-Icon dp-add-square"></span></button>
</span>
```

<h4>ticket/no-labels</h4>
```html @preview
<span class="dp-TagBar">
	<span class="dp-separator"></span>
	<button class="dp-Button Button--label">
		Labels<span class="dp-Icon dp-IconPlusBtn"></span>
	</button>
</span>
```

<h4>buttons/actions</h4>
```html @preview
<div class="demo-cog demo-menu">

	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>

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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-disabled">
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
			</span>
		</span>
		
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
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
			</span>
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
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
			</span>
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
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
			</span>
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
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
			</span>
		</span>
	</div>
		
	<div class="dp-ActionsBar">
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-tasks Icon--blue"></span>
			Tasks
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown is-active">
			<span class="dp-Icon dp-billing Icon--blue">
				<span class="dp-Badge Badge--round Badge--top Badge--danger">2</span>
			</span>
			Billing
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-liscense Icon--blue"></span>
			License
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
			Ticket Properties
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-follow_up Icon--blue"></span>
			Follow-ups
			<button class="dp-Arrow"></button>
		</span>
	</div>

</div>
```

<!-- Lock -->

```html @preview
<div class="demo-cog demo-menu" style="height: 150px;">

	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-active">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
		
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
	</div>
		
	<div class="dp-ActionsBar">
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-tasks Icon--blue"></span>
			Tasks
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-billing Icon--blue"></span>
			Billing
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-liscense Icon--blue"></span>
			License
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
			Ticket Properties
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-follow_up Icon--blue"></span>
			Follow-ups
			<button class="dp-Arrow"></button>
		</span>
	</div>

</div>

```

<!-- Link -->

```html @preview
<div class="demo-cog demo-menu" style="height: 150px;">

	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-active">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
		
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
	</div>
		
	<div class="dp-ActionsBar">
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-tasks Icon--blue"></span>
			Tasks
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-billing Icon--blue"></span>
			Billing
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-liscense Icon--blue"></span>
			License
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
			Ticket Properties
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-follow_up Icon--blue"></span>
			Follow-ups
			<button class="dp-Arrow"></button>
		</span>
	</div>

</div>
```

<!-- New -->

```html @preview
<div class="demo-cog demo-menu" style="height: 150px;">

	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
		
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-active">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
	</div>
		
	<div class="dp-ActionsBar">
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-tasks Icon--blue"></span>
			Tasks
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-billing Icon--blue"></span>
			Billing
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-liscense Icon--blue"></span>
			License
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
			Ticket Properties
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-follow_up Icon--blue"></span>
			Follow-ups
			<button class="dp-Arrow"></button>
		</span>
	</div>

</div>
```

<!-- Print -->

```html @preview
<div class="demo-cog demo-menu" style="height: 150px;">

	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
		
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-active">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
	</div>
		
	<div class="dp-ActionsBar">
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-tasks Icon--blue"></span>
			Tasks
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-billing Icon--blue"></span>
			Billing
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-liscense Icon--blue"></span>
			License
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
			Ticket Properties
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-follow_up Icon--blue"></span>
			Follow-ups
			<button class="dp-Arrow"></button>
		</span>
	</div>

</div>
```

<!-- Ban -->

```html @preview
<div class="demo-cog demo-menu" style="height: 150px;">
	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
		
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-active">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
	</div>
		
	<div class="dp-ActionsBar">
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-tasks Icon--blue"></span>
			Tasks
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-billing Icon--blue"></span>
			Billing
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-liscense Icon--blue"></span>
			License
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
			Ticket Properties
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-follow_up Icon--blue"></span>
			Follow-ups
			<button class="dp-Arrow"></button>
		</span>
	</div>
</div>
```

<!-- Actions -->

```html @preview
<div class="demo-cog demo-menu" style="height: 150px;">

	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown ">
				<span class="dp-Icon dp-IconLink Icon--primary"></span>
				Link
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
		
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPlusGrey Icon--primary"></span>
				New
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-IconPrint Icon--primary"></span>
				Print
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown">
				<span class="dp-Icon dp-ban Icon--primary"></span>
				Ban
				<button class="dp-Arrow"></button>
			</span>
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
		</span>

		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-active">
				<span class="dp-Icon dp-rocket Icon--primary"></span>
				Actions
				<button class="dp-Arrow"></button>
			</span>
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
		</span>
	</div>
		
	<div class="dp-ActionsBar">
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-tasks Icon--blue"></span>
			Tasks
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-billing Icon--blue"></span>
			Billing
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-liscense Icon--blue"></span>
			License
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-ticket_properties Icon--blue"></span>
			Ticket Properties
			<button class="dp-Arrow"></button>
		</span>
		<span class="dp-Dropdown">
			<span class="dp-Icon dp-follow_up Icon--blue"></span>
			Follow-ups
			<button class="dp-Arrow"></button>
		</span>
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
					<!-- <div class="dp-StatusTimes dp-MenuBarItem"> -->
					<button class="Button--link">
						Assign to me <span class="dp-separator"></span> Unassign
					</button>
				</div>
			</div>
			<button class="dp-ActionButton ActionButton--Xlarge dp-Arrow" type="button">
				<span class="dp-title-item">
					<span class="dp-Icon dp-iconUserAvatar"></span>
					Zack Prudent
				</span>
			</button>
		</div>

		<div class="dp-TicketSelect dp-TicketSmall">
			<div class="dp-SectionControls">
				<div class="dp-SectionTitle">
					<div class="dp-TitleControls">Team</div>
					<!-- <div class="dp-StatusTimes dp-MenuBarItem"> -->
					<button class="Button--link">
						Unassign
					</button>
				</div>
			</div>
			<button class="dp-ActionButton ActionButton--Xlarge dp-Arrow" type="button">
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
					<!-- <div class="dp-StatusTimes dp-FollowersStatus is-active"> -->
					<button class="Button--link is-active">
						Following
						<span class="dp-Icon dp-following Icon--primary"></span>
					</button>
				</div>
			</div>
			<ul class="dp-FollowerList">
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Wendy pride </span>
					</span>
					<span class="dp-Icon dp-close"></span>
					<!-- tooltip -->
					<span class="dp-ToolTips">Wendy pride</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName Name--Me">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Me </span>
					</span>
					<span class="dp-Icon dp-close"></span>
					<!-- tooltip -->
					<span class="dp-ToolTips">Me</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Peter Fergerson </span>
					</span>
					<span class="dp-Icon dp-close"></span>
					<!-- tooltip -->
					<span class="dp-ToolTips">Peter Fergerson</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> John Richardson </span>
					</span>
					<span class="dp-Icon dp-close"></span>
					<!-- tooltip -->
					<span class="dp-ToolTips">John Richardson</span>
				</li>
				<li class="dp-FollowersItem">
					<span class="dp-LogoName">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Peter Fergerson </span>
					</span>
					<span class="dp-Icon dp-close"></span>
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
