---
title: Filter list
---

<h2>filterlist/tickets</h2>
<h4>filterlist/container</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-FilterlistContainer"></div>
</div>
```

<h4>filterlist/filters-and-views</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-Tickets">
		<div class="dp-dropdownContainer">
			<div class="dp-Title">
				<div class="dp-TitleName is-semibold">
					<span class="dp-Icon dp-menu"></span>
					All tickets <span class="dp-qt">(90)</span>
					<span class="dp-Icon dp-iconArrowDown"></span>
				</div>
				<div class="dp-TicketsThumb">
					<span class="dp-Icon dp-list_view"></span>
					<span class="dp-Icon dp-table_view"></span>
					<span class="dp-Icon dp-kanban_view"></span>
				</div>
			</div>
		</div>
	</div>
</div>
```

<h4>filterlist/filters-selected</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-Tickets">
		<div class="dp-dropdownContainer">
			<div class="dp-Title is-active">
				<div class="dp-TitleName is-semibold">
					<span class="dp-Icon dp-menu"></span>
					All tickets <span class="dp-qt">(90)</span>
					<span class="dp-Icon dp-iconArrowDown"></span>
				</div>
			</div>
		</div>
	</div>
</div>
```

<h4>filterlist/accordian-selected</h4>
```html @preview
<div class="dp-MainWrapper">
	<ul class="dp-TicketMenu is-active">
		<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
			<span class="dp-TitleMenu">
				<span>Awaiting agent</span>
				<button class="dp-Arrow"></button>
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
	</ul>
</div>
```

<h4>filterlist/accordian-item-selected</h4>
```html @preview
<div class="dp-MainWrapper item-selected">
	<ul class="dp-TicketMenu is-active">
		<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
			<ul class="dp-SubMenu">
				<li>
					<a href="#" class="is-active">
						<span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span>
					</a>
				</li>
			</ul>
		</li>
	</ul>
</div>
```

<h4>filterlist/accordian-selected</h4>
```html @preview
<div class="dp-MainWrapper">
	<ul class="dp-TicketMenu is-active">
		<li class="dp-TicketMenuItem dp-MenuBarItem">
			<span class="dp-TitleMenu">
				<span>Filters</span>
				<button class="dp-Arrow"></button>
			</span>
		</li>
	</ul>
</div>
```

<h4>filterlist/ticket-filters  --  filterlist/ticket-filters-selected</h4>
```html @preview
<div class="dp-MainWrapper">

	<div class="dp-FilterlistContainer">
		<div class="dp-Tickets">
			<div class="dp-dropdownContainer">
				<div class="dp-Title is-active">
					<div class="dp-TitleName is-semibold">
						<span class="dp-Icon dp-menu"></span>
						All tickets <span class="dp-qt">(90)</span>
						<span class="dp-Icon dp-iconArrowDown"></span>
					</div>
				</div>
			</div>
		</div>
		<ul class="dp-TicketMenu is-active">
			<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
				<span class="dp-TitleMenu">
					<span>Awaiting agent</span>
					<button class="dp-Arrow"></button>
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
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>Saved Searches</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>Problems & incidents (2)</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>Labels</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>My stars (3)</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
```

<h4>filterlist/ticket-filters-locked</h4>
```html @preview
<div class="dp-MainWrapper">

	<div class="dp-FilterlistContainer">
		<div class="dp-Tickets">
			<div class="dp-dropdownContainer">
				<div class="dp-Title is-active">
					<div class="dp-TitleName is-semibold ">
						<span class="dp-Icon dp-menu"></span>
						All tickets <span class="dp-qt">(90)</span>
						<span class="dp-Icon dp-iconArrowDown"></span>
					</div>
					<span class="dp-Icon dp-lock Icon--primary"></span>
				</div>
			</div>
		</div>

		<ul class="dp-TicketMenu is-active">
			<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
				<span class="dp-TitleMenu">
					<span>Awaiting agent</span>
					<button class="dp-Arrow"></button>
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
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>Saved Searches</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>Problems & incidents (2)</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>Labels</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>My stars (3)</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Lorem ipsum<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
```
