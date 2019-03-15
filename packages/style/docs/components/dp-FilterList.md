---
title: Filter list
---

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

        <div class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
            <span class="dp-LevelCol dp-ListName">
                <span class="dp-Icon Icon--menu"></span>
                <span class="dp-Card-title">All tickets<span class="dp-qt">(90)</span></span>
                <span class="dp-Icon Icon--down-caret Icon--primary"></span>
            </span>

            <ul class="View-group">
                <li class="dp-Icon dp-list_view is-active"></li>
                <li class="dp-Icon dp-table_view"></li>
                <li class="dp-Icon dp-kanban_view"></li>
            </ul>
        </div>

	</div>
</div>
```

<h4>filterlist/filters-selected</h4>
```html @preview
<div class="dp-MainWrapper">
	<div class="dp-Tickets is-active">

        <div class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
            <span class="dp-LevelCol dp-ListName">
                <span class="dp-Icon Icon--menu"></span>
                <span class="dp-Card-title">All tickets<span class="dp-qt">(90)</span></span>
                <span class="dp-Icon Icon--down-caret Icon--primary"></span>
            </span>

            <ul class="View-group">
                <li class="dp-Icon dp-list_view is-active"></li>
                <li class="dp-Icon dp-table_view"></li>
                <li class="dp-Icon dp-kanban_view"></li>
            </ul>
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

<h4>filterlist/accordian-subtitle-selected</h4>
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

<h4>filterlist/ticket-filters-selected</h4>
```html @preview
<div class="dp-MainWrapper">

	<div class="dp-FilterlistContainer">

		<div class="dp-Tickets is-active">

			<div class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
				<span class="dp-LevelCol dp-ListName">
					<span class="dp-Icon Icon--menu"></span>
					<span class="dp-Card-title">All tickets<span class="dp-qt">(90)</span></span>
					<span class="dp-Icon Icon--down-caret Icon--primary"></span>
				</span>
			</div>
		</div>

		<ul class="dp-TicketMenu is-active">
			<!-- Awaiting agent -->
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
						<a href="#" class="is-active">
							<span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span>
						</a>
					</li>
				</ul>
			</li>
			<!-- Filters -->
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
			<!-- Saved Searches -->
			<li class="dp-TicketMenuItem dp-MenuBarItem dp-SavedSearches">
				<span class="dp-TitleMenu">
					<span>Saved Searches <span class="dp-qt">(4)</span></span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<span>KB Articles older than 4 week</span>
					</li>
					<li>
						<span>Articles by Agent X</span>
					</li>
					<li>
						<span>News articles in August</span>
					</li>
					<li>
						<span>Feature requests feedback articles </span>
					</li>
				</ul>
			</li>
			<!-- Problems & incidents -->
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
			<!-- Labels -->
			<li class="dp-TicketMenuItem dp-MenuBarItem">
				<span class="dp-TitleMenu">
					<span>Labels</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li class="dp-LabelGroup">
						<span class="dp-LabelFiltersName">A</span>
						<span class="dp-LabelWrapper">
							<span class="dp-Tag">Andriod Mobile App</span>
						</span>
					</li>
					<li class="dp-LabelGroup">
						<span class="dp-LabelFiltersName">B</span>
						<span class="dp-LabelWrapper">
							<span class="dp-Tag">Beta Tester</span>
							<span class="dp-Tag">Billing</span>
							<span class="dp-Tag">Bug fix</span>
						</span>
					</li>
					<li class="dp-LabelGroup">
						<span class="dp-LabelFiltersName">C</span>
						<span class="dp-LabelWrapper">
							<span class="dp-Tag">Capterra</span>
							<span class="dp-Tag">Churn</span>
							<span class="dp-Tag">Click jacking</span>
							<span class="dp-Tag">Cloud</span>
							<span class="dp-Tag">Consultation</span>
							<span class="dp-Tag">Converted</span>
							<span class="dp-Tag">Custome fields</span>
						</span>
					</li>
				</ul>
			</li>
			<!-- My stars -->
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

		<div class="dp-Tickets Tickets--Lock is-active">
			<div class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
				<span class="dp-LevelCol dp-ListName">
					<span class="dp-Icon Icon--menu"></span>
					<span class="dp-Card-title">All tickets<span class="dp-qt">(90)</span></span>
					<span class="dp-Icon Icon--down-caret Icon--primary"></span>
				</span>

				<!-- <span class="dp-Icon dp-lock Icon--primary"></span> -->
				<span class="dp-Icon Icon--lock Icon--primary"></span>
			</div>
		</div>

		<ul class="dp-TicketMenu is-active">
			<!-- Awaiting agent -->
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
						<a href="#" class="is-active">
							<span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span>
						</a>
					</li>
				</ul>
			</li>
			<!-- Filters -->
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
			<!-- Saved Searches -->
			<li class="dp-TicketMenuItem dp-MenuBarItem dp-SavedSearches is-active">
				<span class="dp-TitleMenu">
					<span>Saved Searches <span class="dp-qt">(4)</span></span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<span>KB Articles older than 4 week</span>
					</li>
					<li>
						<span>Articles by Agent X</span>
					</li>
					<li>
						<span>News articles in August</span>
					</li>
					<li>
						<span>Feature requests feedback articles </span>
					</li>
				</ul>
			</li>
			<!-- Problems & incidents -->
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
			<!-- Labels -->
			<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
				<span class="dp-TitleMenu">
					<span>Labels</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li class="dp-LabelGroup">
						<span class="dp-LabelFiltersName">A</span>
						<span class="dp-LabelWrapper">
							<span class="dp-Tag">Andriod Mobile App</span>
						</span>
					</li>
					<li class="dp-LabelGroup">
						<span class="dp-LabelFiltersName">B</span>
						<span class="dp-LabelWrapper">
							<span class="dp-Tag">Beta Tester</span>
							<span class="dp-Tag">Billing</span>
							<span class="dp-Tag">Bug fix</span>
						</span>
					</li>
					<li class="dp-LabelGroup">
						<span class="dp-LabelFiltersName">C</span>
						<span class="dp-LabelWrapper">
							<span class="dp-Tag">Capterra</span>
							<span class="dp-Tag">Churn</span>
							<span class="dp-Tag">Click jacking</span>
							<span class="dp-Tag">Cloud</span>
							<span class="dp-Tag">Consultation</span>
							<span class="dp-Tag">Converted</span>
							<span class="dp-Tag">Custome fields</span>
						</span>
					</li>
				</ul>
			</li>
			<!-- My stars -->
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
