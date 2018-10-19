---
title: Tickets
---

<h2>Tickets button</h2>

```html @preview
	<div class="dp-Tickets">
		<span class="dp-Icon dp-iconTickets"></span>
		<span class="dp-Icon dp-iconTickets2"></span>
		<span class="dp-Icon dp-iconTickets3"></span>
		<span class="dp-Icon dp-iconTickets2 is-active"></span>
		<span class="dp-Icon dp-iconTickets4 is-active"></span>
	</div>
```

<h2>Tickets</h2>

```html @preview
	<div class="dp-Tickets" style="height: 450px;">
		<div class="dp-dropdownContainer">
			<div class="dp-Title is-active">
				<div class="dp-TitleName">
					<span class="dp-Icon dp-iconTickets"></span>
					All tickets <span class="dp-qt">(90)</span>
					<span class="dp-Icon dp-iconArrowDown"></span>
				</div>
				<div class="dp-TicketsThumb">
					<span class="dp-Icon dp-iconTickets4 is-active"></span>
					<span class="dp-Icon dp-iconTickets2"></span>
					<span class="dp-Icon dp-iconTickets3"></span>
				</div>
			</div>
			<ul class="dp-TicketMenu">
				<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
						<span class="dp-TitleMenu">
							<span>Awaiting agent</span>
							<span class="dp-Arrow"></span>
						</span>
						<ul class="dp-SubMenu">
							<li>
								<a href="#">
									<span>My tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">1</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Tickets I follow<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Unassigned tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span>
								</a>
							</li>
						</ul>
				</li>
				<li class="dp-TicketMenuItem dp-MenuBarItem">
					<span class="dp-TitleMenu">
						<span>Filters</span>
						<span class="dp-Arrow"></span>
					</span>
				</li>
				<li class="dp-TicketMenuItem dp-MenuBarItem">
					<span class="dp-TitleMenu">
						<span>Saved Searches</span>
						<span class="dp-Arrow"></span>
					</span>
				</li>
				<li class="dp-TicketMenuItem dp-MenuBarItem">
					<span class="dp-TitleMenu">
						<span>Problems & incidents (2)</span>
						<span class="dp-Arrow"></span>
					</span>
				</li>
				<li class="dp-TicketMenuItem dp-MenuBarItem">
					<span class="dp-TitleMenu">
						<span>Labels</span>
						<span class="dp-Arrow"></span>
					</span>
				</li>
				<li class="dp-TicketMenuItem dp-MenuBarItem">
					<span class="dp-TitleMenu">
						<span>My stars (3)</span>
						<span class="dp-Arrow"></span>
					</span>
				</li>
			</ul>
		</div>
	</div>
```