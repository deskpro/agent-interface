---
title: Publish
---
<!-- Brand name menu -->

```html @preview
<div class="dp-MainWrapper" style="height: 150px;">
	<ul class="dp-BrandMenu">
		<li class="dp-BrandItem is-active"><span class="dp-Icon dp-IconPlane"></span>Brand name<button class="dp-Arrow"></button></li>
		<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneOrange"></span>Brand name two</li>
		<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlane"></span>Brand name three</li>
		<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneViolet"></span>Brand name four</li>
	</ul>
</div>
```

```html @preview
<div class="dp-MainWrapper" style="height: 850px;">

	<div class="dp-FilterlistContainer">

		<div class="dp-Tickets is-active">
			<div class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
				<span class="dp-LevelCol dp-ListName">
					<span class="dp-Icon Icon--menu"></span>
					<span class="dp-Card-title">Published Approvals <span class="dp-qt">(12)</span></span>
					<span class="dp-Icon Icon--down-caret Icon--primary"></span>
				</span>

				<span class="dp-Icon Icon--lock Icon--primary"></span>
			</div>
		</div>

		<ul class="dp-TicketMenu is-active">
			<!-- Awaiting agent -->
			<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
				<span class="dp-TitleMenu">
					<span>MY TODOS</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>Comments to Review</span> <span class="dp-SubNum">1</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>My Pending Articles</span> <span class="dp-SubNum">1</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>My Drafts</span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#" class="is-active">
							<span>Published Approvals</span> <span class="dp-SubNum">12</span>
						</a>
					</li>
				</ul>
			</li>
			<!-- Filters -->
			<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
				<span class="dp-TitleMenu">
					<span>ALL TODOS</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-SubMenu">
					<li>
						<a href="#">
							<span>All pending articles</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>All drafts</span> <span class="dp-SubNum">0</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Article translation</span> <span class="dp-SubNum">0</span>
						</a>
					</li>
				</ul>
			</li>

			<!-- PORTAL PUBLISHING -->
			<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
				<span class="dp-TitleMenu">
					<span>PORTAL PUBLISHING</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-BrandList">
					<li class="dp-BrandItem is-active"><span class="dp-Icon dp-IconPlane"></span>Brand name<button class="dp-Arrow"></button></li>
					<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneOrange"></span>Brand name two</li>
					<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlane"></span>Brand name three</li>
					<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneViolet"></span>Brand name four</li>
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

		</ul>
	</div>
</div>
```
