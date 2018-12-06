---
title: Side-bar Overlay (developing)
---

<!-- ```html @preview
<ul class="dp-LeftSidebar">
	<li><button class="dpApps-ButtonTabs ButtonTabs-arrow"><i class="dpApps-IconArrow iconArrow--left"></i></button></li>
	<li class="dp-BarIcon-wrap">
		<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></span>
	</li>

	<li class="dp-BarIcon-wrap">
		<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/youtrack-logo.svg" alt=""></span>
	</li>
	<li class="dp-BarIcon-wrap">
		<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></span>
	</li>
	<li class="dp-BarIcon-wrap">
		<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/jira-logo.svg" alt=""></span>
	</li>
	<li class="dp-BarIcon-wrap">
		<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/salesforce-logo.svg" alt=""></span>
	</li>
</ul>
``` -->

<h2> side-bar-overlay/apps </h2>
```html @preview
<div class="dp-UserOverlay">
	<div class="dp-OverlayWrapp">
		<div class="dp-UserContainer dp-UserTitleInfo">
			<div class="dp-UserTabName">
				<div class="dp-UserNameId">
					<div class="dp-UserInfo">
						<span class="dp-Icon dp-iconUserAvatar"></span>
						<span class="dp-UserName"> Zac Prudent </span>
					</div>

					<div class="dp-TabsBtn">
						<span class="dp-Icon dp-IconJump"></span>
						<span class="dp-Icon dp-IconCloseGrey"></span>
					</div>
				</div>
				<span class="dp-UserId"> #14355 </span>
			</div>
		</div>
		<div class="dp-UserContainer dp-BrandsInfo">

			<ul class="dp-LeftSidebar">
				<li class="dp-BarIcon-wrap dp-BorderBottom">
					<span class="dp-Icon dp-LeftCaret"></span>
				</li>
				<li class="dp-BarIcon-wrap">
					<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/trello-logo.svg" alt=""></span>
				</li>
				<li class="dp-BarIcon-wrap">
					<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/youtrack-logo.svg" alt=""></span>
				</li>
				<li class="dp-BarIcon-wrap dp-BorderBottom">
					<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt=""></span>
				</li>
				<li class="dp-BarIcon-wrap dp-BorderBottom">
					<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/jira-logo.svg" alt=""></span>
				</li>
				<li class="dp-BarIcon-wrap dp-BorderBottom">
					<span class="dpApps-Icon"><img src="/agent-interface/style/img/docs/salesforce-logo.svg" alt=""></span>
				</li>
			</ul>

			<div class="dp-OverlayContent">

				<div class="dp-TitleRow">
					<span class="dp-UserInfo">
						<span class="dp-Icon dp-iconUserAvatar dp-InfoItem"></span>
						<span class="dp-InfoItem dp-Tag">#14355</span>
						<span class="dp-InfoItem dp-UserName">Zack Prudent</span>
					</span>
			    </div>

				<!-- Action bar -->
				<div class="dp-DropDownBar">
					<ul class="dp-DropDownList">
						<li class="dp-ActionButton">
							<span class="dp-Icon dp-lock"></span>
							Lock
						</li>
						<li class="dp-ActionButton">
							<span class="dp-Icon dp-IconLink"></span>
							Link
						</li>
						<li class="dp-ActionButton">
							<span class="dp-Icon dp-IconPlusGrey"></span>
							New
						</li>
						<li class="dp-ActionButton">
							<span class="dp-Icon dp-IconPrint"></span>
							Print
						</li>
						<li class="dp-ActionButton">
							<span class="dp-Icon dp-rocket"></span>
							Actions
						</li>
					</ul>
				</div>

				<!-- Menu Bar List -->
				<ul class="dp-MenuBarList">
					<li class="dp-MenuBarItem">
						<span class="dp-Icon dp-IconCloud"></span>
						<span class="dp-Title">Cloud<span class="dp-Arrow"></span></span>
					</li>
					<li class="dp-MenuBarItem dp-redLightColor">
						<span class="dp-Icon dp-billing"></span>
						<span class="dp-Title">Billing<span class="dp-Arrow"></span></span>
					</li>
					<li class="dp-MenuBarItem dp-greenColor">
						<span class="dp-Icon dp-liscense"></span>
						<span class="dp-Title">License<span class="dp-Arrow"></span></span>
					</li>
				</ul>


				<!-- Table -->
				<ul class="dp-ActionsItems dp-BorderBottom">
				    <li class="dp-ActionsItem dp-MenuBarItem is-active">Tickets</li>
				    <li class="dp-ActionsItem dp-MenuBarItem">Activity stream</li>
				    <li class="dp-ActionsItem dp-MenuBarItem">User groups</li>
				    <li class="dp-ActionsItem dp-MenuBarItem">Brands</li>
				</ul>


				<ul class="dp-TicketsInfo">

					<li class="dp-TicketsInfoItem dp-TicketsInfoTitle is-active">
						<span class="dp-idItem">ID</span>
						<span class="dp-SubjectItem">SUBJECT</span>
						<span class="dp-StatusItem dp-MenuBarItem">STATUS & URGENCY<span class="dp-Arrow"></span></span>
					</li>

					<li class="dp-TicketsOpen">
						<ul>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#83995</span>
								<span class="dp-SubjectItem">New agent questions</span>
								<span class="dp-StatusItem dp-Orange">Awaiting agent <span class="dp-qt">4</span><span class="dp-Badge Badge--empty"></span></span>
							</li>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#74562</span>
								<span class="dp-SubjectItem">Translations</span>
								<span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
							</li>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#63331</span>
								<span class="dp-SubjectItem">ASP Licensing</span>
								<span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
							</li>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#83995</span>
								<span class="dp-SubjectItem">Ver5 Upgrade</span>
								<span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
							</li>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#74562</span>
								<span class="dp-SubjectItem">Your Plan</span>
								<span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
							</li>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#63331</span>
								<span class="dp-SubjectItem">New feature idea</span>
								<span class="dp-StatusItem dp-Green">Resolve</span>
							</li>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#83995</span>
								<span class="dp-SubjectItem">Issue creating multiple tickets</span>
								<span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
							</li>
							<li class="dp-TicketsInfoItem">
								<span class="dp-idItem">#74562</span>
								<span class="dp-SubjectItem">FW: DeskPRO error</span>
								<span class="dp-StatusItem dp-Green">Awaiting user<span class="dp-Badge Badge--empty"></span></span>
							</li>
						</ul>
					</li>
				</ul>
				<div class="dp-Files">
					Notes<span class="dp-LabelItem dp-Icon dp-add_tab"></span>
				</div>
				<div class="dp-TicketMessage">
					<div class="dp-MessageContainer dp-ColorContainer">
						<div class="dp-MessageHeader">
							<div class="dp-Left">
								<div class="dp-title-item dp-optical">

									<div class="dp-UserAvatarName">
										<span class="dp-Badge Badge--empty dp-DarkBadge"></span>
										<span>Harry Krimbo</span>
									</div>

								</div>
							</div>
							<div class="dp-Right">
								<div class="dp-Time">03/11/2016 at 09.58am</div>
								<a href="#" class="dp-Icon dp-IconDelete"></a>
							</div>
						</div>
						<div class="dp-MessageTitle">
							<p class="dp-Type dp-Orange"></p>
						</div>
						<div class="dp-MessageBody">
							<div class="Content">
								<p class="dp-txt">Zack recently had some trouble setting up one of his email address. He was quite frustrated so I suggested he call us next time if he is having problems.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="dp-TicketMessage">
					<div class="dp-MessageContainer dp-ColorContainer">
						<div class="dp-MessageHeader">
							<div class="dp-Left">
								<div class="dp-title-item dp-optical">

									<div class="dp-UserAvatarName">
										<span class="dp-Badge Badge--empty dp-DarkBadge"></span>
										<span>Chris Padfield</span>
									</div>

								</div>
							</div>
							<div class="dp-Right">
								<div class="dp-Time">03/11/2016 at 09.58am</div>
								<a href="#" class="dp-Icon dp-IconDelete"></a>
							</div>
						</div>
						<div class="dp-MessageTitle">
							<p class="dp-Type dp-Orange"></p>
						</div>
						<div class="dp-MessageBody">
							<div class="Content">
								<p class="dp-txt">I think Tech Company are planning to add several more agents in the new year, it’s probably worth reaching out to Zack closer to the time.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="dp-Files">
					Files<span class="dp-LabelItem dp-Icon dp-add_tab"></span>
				</div>
				<div class="dp-FilesList">
					<div class="dp-FilesInfo">
						<div class="dp-LeftInfo">
							<span class="dp-TranslatItem">Translations.png</span>
							<span class="dp-ExtItem">250 KB</span>
						</div>
						<div class="dp-RightInfo">
							<span class="dp-DeleteItem">Delete<span class="dp-Arrow"></span></span>
							<span class="dp-EditItem">Edit<span class="dp-Arrow"></span></span>				
						</div>
					</div>
					<div class="dp-FilesInfo">
						<div class="dp-LeftInfo">
							<span class="dp-TranslatItem">Plan.png</span>
							<span class="dp-ExtItem">456 KB</span>
						</div>
						<div class="dp-RightInfo">
							<span class="dp-DeleteItem">Delete<span class="dp-Arrow"></span></span>
							<span class="dp-EditItem">Edit<span class="dp-Arrow"></span></span>				
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```