---
title: Publish
---
<!-- Brand name menu -->

```html @preview
<div class="dp-MainWrapper" style="height: 150px;">
	<ul class="dp-BrandMenu" style="width: 241px;">
		<li class="dp-BrandItem is-active"><span class="dp-Icon dp-IconPlane"></span>Brand name<button class="dp-Arrow"></button></li>
		<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneOrange"></span>Brand name two</li>
		<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlane"></span>Brand name three</li>
		<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneViolet"></span>Brand name four</li>
	</ul>
</div>
```

```html @preview
<div class="dp-MainWrapper" style="height: 1100px;">

	<div class="dp-FilterlistContainer">

		<div class="dp-Tickets Tickets--Publish is-active">
			<div class="dp-Card-SectionTitle dp-Tasks-list">

                <span class="dp-ListName">
                    <span class="dp-Icon Icon--menu Icon--primary"></span>
                    <span class="dp-Card-title">
                        Published Approvals<span class="dp-qt">(12)</span>
                    </span>
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </span>

				<!-- <span class="dp-Icon Icon--lock Icon--primary"></span> -->
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
					<li class="dp-SubMenuItem">
						<span>Comments to Review</span> <span class="dp-SubNum">1</span>
					</li>
					<li class="dp-SubMenuItem">
						<span>My Pending Articles</span> <span class="dp-SubNum">1</span>
					</li>
					<li class="dp-SubMenuItem">
						<span>My Drafts</span> <span class="dp-SubNum">0</span>
					</li>
					<li class="dp-SubMenuItem is-active">
						<span>Published Approvals</span> <span class="dp-SubNum">12</span>
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
					<li class="dp-SubMenuItem">
						<span>All pending articles</span> <span class="dp-SubNum">0</span>
					</li>
					<li class="dp-SubMenuItem">
						<span>All drafts</span> <span class="dp-SubNum">0</span>
					</li>
					<li class="dp-SubMenuItem">
						<span>Article translation</span> <span class="dp-SubNum">0</span>
					</li>
				</ul>
			</li>

			<!-- PORTAL PUBLISHING -->
			<li class="dp-TicketMenuItem dp-MenuBarItem is-active">
				<span class="dp-TitleMenu">
					<span>PORTAL PUBLISHING</span>
					<button class="dp-Arrow"></button>
				</span>
				<ul class="dp-BrandMenu">
					<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlane"></span>Brand name<button class="dp-Arrow"></button></li>
					<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneOrange"></span>Brand name two</li>
					<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlane"></span>Brand name three</li>
					<li class="dp-BrandItem"><span class="dp-Icon dp-IconPlaneViolet"></span>Brand name four</li>
				</ul>

				<span class="dp-PortalPublish">

					<span class="dp-PublishItem">
						<span class="dp-Icon Icon--Knowledgebase"></span>
						<span>Knowledgebase</span>
					</span>

					<span class="dp-PublishItem">
						<span class="dp-Icon Icon--News"></span>
						<span>News</span>
					</span>

					<span class="dp-PublishItem" disabled>
						<span class="dp-Icon Icon--Downloads"></span>
						<span>Downloads</span>
					</span>

					<span class="dp-PublishItem">
						<span class="dp-Icon Icon--Guides"></span>
						<span>Guides</span> 	
					</span>

					<span class="dp-PublishItem">
						<span class="dp-Icon Icon--Glossary"></span>
						<span>Glossary</span>
					</span>

					<span class="dp-PublishItem">
						<span class="dp-Icon Icon--Community"></span>
						<span>Community</span>
					</span>

				</span>

				<a class="dp-Support" href="https://support.yourdomain.com">
					<span class="dp-Icon dp-portal"></span>
					https://support.yourdomain.com 
				</a>
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

<h4>Listview/Publish</h4>
```html @preview
<div class="dp-MainWrapper demo-cog demo-menu">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
                <span class="dp-ListName">
                    <span class="dp-Icon Icon--menu"></span>
                    <span class="dp-Card-title">Saved searches</span>
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </span>

                <ul class="View-group">
                    <li class="dp-Icon dp-list_view is-active"></li>
                    <li class="dp-Icon dp-table_view"></li>
                    <li class="dp-Icon dp-kanban_view"></li>
                </ul>
            </li>

            <li class="dp-OrderingBar">

                <div class="dp-OrderingBar-item">
                    <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="ordering-1"></input>
                        <label for="ordering-1"></label>
                    </span>
                </div>

                <div class="dp-OrderingBar-item">
                    <span class="dp-Icon dp-grouped_by"></span>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Grouped by</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">Content type</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu Menu-grouped Menu--tick Menu--tick-left">
                        <li class="dp-Menu-linkItem is-checked">
                            <a href="" class="dp-listItem">Department (DSC)<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Product<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Workflow<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Organization<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Person<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Language<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent team<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Waiting time<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">All waiting time<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Helpdesk team size<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Hubspot deal<span class="dp-Icon dp-settings"></span></a>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Ascending</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Descending</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <!-- 2 -->
                <div class="dp-OrderingBar-item">
                    <div class="dp-SortIconDescription">
                        <span class="dp-Icon dp-sort"></span>
                        <span class="dp-SortDescription">DSC</span>
                    </div>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Sort by</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">Variable long...</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu Menu--tick Menu--tick-left">
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Urgency</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date crated</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last reply</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last agent reply</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Date of last user reply</a></li>
                        <li class="dp-Menu-linkItem" disabled="disabled"><a href="" class="dp-listItem">Widget type</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Widget description</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Desired sizes</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Manufacturing date</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Reason for cancellation</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Reason for complaint</a></li>
                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Suggested actions</a></li>
                    </ul>
                </div>

                <!-- 3 -->
                <div class="dp-OrderingBar-item">
                    <span class="dp-Icon dp-faceted_by"></span>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Faceted by</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">Agent: Nick Gr ...</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Department <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1"></input>
                                        <label for="Faceting-1-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2"></input>
                                        <label for="Faceting-1-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3"></input>
                                        <label for="Faceting-1-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4"></input>
                                        <label for="Faceting-1-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5"></input>
                                        <label for="Faceting-1-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6"></input>
                                        <label for="Faceting-1-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7"></input>
                                        <label for="Faceting-1-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8"></input>
                                        <label for="Faceting-1-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9"></input>
                                        <label for="Faceting-1-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10"></input>
                                        <label for="Faceting-1-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent (3) <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-1"></input>
                                        <label for="Faceting-1-1-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-1"></input>
                                        <label for="Faceting-1-2-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-1"></input>
                                        <label for="Faceting-1-3-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-1"></input>
                                        <label for="Faceting-1-4-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-1"></input>
                                        <label for="Faceting-1-5-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-1"></input>
                                        <label for="Faceting-1-6-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-1"></input>
                                        <label for="Faceting-1-7-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-1"></input>
                                        <label for="Faceting-1-8-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-1"></input>
                                        <label for="Faceting-1-9-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-1"></input>
                                        <label for="Faceting-1-10-1">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Person <span class="dp-Arrow"></span></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-2"></input>
                                        <label for="Faceting-1-1-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-2"></input>
                                        <label for="Faceting-1-2-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-2"></input>
                                        <label for="Faceting-1-3-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-2"></input>
                                        <label for="Faceting-1-4-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-2"></input>
                                        <label for="Faceting-1-5-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-2"></input>
                                        <label for="Faceting-1-6-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-2"></input>
                                        <label for="Faceting-1-7-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-2"></input>
                                        <label for="Faceting-1-8-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-2"></input>
                                        <label for="Faceting-1-9-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-2"></input>
                                        <label for="Faceting-1-10-2">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Agent team <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-3"></input>
                                        <label for="Faceting-1-1-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-3"></input>
                                        <label for="Faceting-1-2-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-3"></input>
                                        <label for="Faceting-1-3-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-3"></input>
                                        <label for="Faceting-1-4-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-3"></input>
                                        <label for="Faceting-1-5-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-3"></input>
                                        <label for="Faceting-1-6-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-3"></input>
                                        <label for="Faceting-1-7-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-3"></input>
                                        <label for="Faceting-1-8-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-3"></input>
                                        <label for="Faceting-1-9-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-3"></input>
                                        <label for="Faceting-1-10-3">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Organization <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-4"></input>
                                        <label for="Faceting-1-1-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-4"></input>
                                        <label for="Faceting-1-2-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-4"></input>
                                        <label for="Faceting-1-3-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-4"></input>
                                        <label for="Faceting-1-4-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-4"></input>
                                        <label for="Faceting-1-5-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-4"></input>
                                        <label for="Faceting-1-6-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-4"></input>
                                        <label for="Faceting-1-7-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-4"></input>
                                        <label for="Faceting-1-8-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-4"></input>
                                        <label for="Faceting-1-9-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-4"></input>
                                        <label for="Faceting-1-10-4">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Language <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-5"></input>
                                        <label for="Faceting-1-1-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-5"></input>
                                        <label for="Faceting-1-2-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-5"></input>
                                        <label for="Faceting-1-3-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-5"></input>
                                        <label for="Faceting-4-4-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-5"></input>
                                        <label for="Faceting-1-5-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-5"></input>
                                        <label for="Faceting-1-6-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-5"></input>
                                        <label for="Faceting-1-7-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-5"></input>
                                        <label for="Faceting-1-8-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-5"></input>
                                        <label for="Faceting-1-9-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-5"></input>
                                        <label for="Faceting-1-10-5">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Workflow <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-6"></input>
                                        <label for="Faceting-1-1-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-6"></input>
                                        <label for="Faceting-1-2-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-6"></input>
                                        <label for="Faceting-1-3-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-6"></input>
                                        <label for="Faceting-1-4-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-6"></input>
                                        <label for="Faceting-1-5-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-6"></input>
                                        <label for="Faceting-1-6-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-6"></input>
                                        <label for="Faceting-1-7-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-6"></input>
                                        <label for="Faceting-1-8-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-6"></input>
                                        <label for="Faceting-1-9-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-6"></input>
                                        <label for="Faceting-1-10-6">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Product <button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-7"></input>
                                        <label for="Faceting-1-1-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-7"></input>
                                        <label for="Faceting-1-2-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-7"></input>
                                        <label for="Faceting-1-3-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-7"></input>
                                        <label for="Faceting-1-4-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-7"></input>
                                        <label for="Faceting-1-5-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-7"></input>
                                        <label for="Faceting-1-6-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-7"></input>
                                        <label for="Faceting-1-7-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-7"></input>
                                        <label for="Faceting-1-8-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-7"></input>
                                        <label for="Faceting-1-9-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-7"></input>
                                        <label for="Faceting-1-10-7">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">SLAs<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-8"></input>
                                        <label for="Faceting-1-1-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-8"></input>
                                        <label for="Faceting-1-2-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-8"></input>
                                        <label for="Faceting-1-3-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-8"></input>
                                        <label for="Faceting-1-4-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-8"></input>
                                        <label for="Faceting-1-5-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-8"></input>
                                        <label for="Faceting-1-6-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-8"></input>
                                        <label for="Faceting-1-7-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-8"></input>
                                        <label for="Faceting-1-8-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-8"></input>
                                        <label for="Faceting-1-9-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-8"></input>
                                        <label for="Faceting-1-10-8">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Problem<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-9"></input>
                                        <label for="Faceting-1-1-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-9"></input>
                                        <label for="Faceting-1-2-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-9"></input>
                                        <label for="Faceting-1-3-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-9"></input>
                                        <label for="Faceting-1-4-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-9"></input>
                                        <label for="Faceting-1-5-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-9"></input>
                                        <label for="Faceting-1-6-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-9"></input>
                                        <label for="Faceting-1-7-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-9"></input>
                                        <label for="Faceting-1-8-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-9"></input>
                                        <label for="Faceting-1-9-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-9"></input>
                                        <label for="Faceting-1-10-9">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem"><a href="" class="dp-listItem">Helpdesk team size<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-10"></input>
                                        <label for="Faceting-1-1-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-10"></input>
                                        <label for="Faceting-1-2-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-10"></input>
                                        <label for="Faceting-1-3-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-10"></input>
                                        <label for="Faceting-1-4-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-10"></input>
                                        <label for="Faceting-1-5-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-10"></input>
                                        <label for="Faceting-1-6-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-10"></input>
                                        <label for="Faceting-1-7-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-10"></input>
                                        <label for="Faceting-1-8-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-10"></input>
                                        <label for="Faceting-1-9-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-10"></input>
                                        <label for="Faceting-1-10-10">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <a href="" class="dp-listItem">Hubspot deal<button class="dp-Arrow"></button></a>
                            <ul class="dp-Menu">
                                <li class="dp-Menu-search">
                                    <form>
                                        <span class="dp-Icon dp-IconSearch"></span>
                                        <input type="text" class="dp-Input Input--search">
                                    </form>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-1-11"></input>
                                        <label for="Faceting-1-1-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-2-11"></input>
                                        <label for="Faceting-1-2-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-3-11"></input>
                                        <label for="Faceting-1-3-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-4-11"></input>
                                        <label for="Faceting-1-4-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-5-11"></input>
                                        <label for="Faceting-1-5-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-6-11"></input>
                                        <label for="Faceting-1-6-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Pride
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-7-11"></input>
                                        <label for="Faceting-1-7-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bob Cooper
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-8-11"></input>
                                        <label for="Faceting-1-8-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Julien Ducro
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-9-11"></input>
                                        <label for="Faceting-1-9-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Wendy Lightbody
                                        </label>
                                    </span>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <span class="dp-CustomCheckbox">
                                        <input type="checkbox" class="dp-ControlInput" id="Faceting-1-10-11"></input>
                                        <label for="Faceting-1-10-11">
                                            <span class="dp-Badge Badge--round Badge--grey-light"></span>
                                            Bobby Steiner
                                        </label>
                                    </span>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>

                <!-- 4 -->
                <div class="dp-OrderingBar-item">
                    <span class="dp-Icon Icon--view"></span>
                    <span class="dp-SelectGroup">
                        <span class="dp-ItemRow">
                            <span class="dp-Title">Fields</span>
                            <button class="dp-Arrow"></button>
                        </span>
                        <span class="dp-ItemRow">
                            <span class="dp-Subtitle">4 fields</span>
                        </span>
                    </span>

                    <!-- dropdown -->
                    <ul class="dp-Menu dp-OptionList">
                        <li class="dp-Menu-title">
                            <ul>
                                <li class="dp-Menu-titleItem is-active"><span class="dp-Icon dp-list_view"></span><span>(8)</span></li>
                                <li class="dp-Menu-titleItem"><span class="dp-Icon dp-table_view"></span><span>(5)</span></li>
                                <li class="dp-Menu-titleItem"><span class="dp-Icon dp-kanban_view"></span><span>(9)</span></li>
                            </ul>
                        </li>
                        <li class="dp-Menu-subtitle">
                            <span class="">Fields</span>
                            <span><span class="dp-Meta is-active">view default</span><span class="dp-Meta">reset to default</span></span>
                        </li>
                        <li class="dp-Menu-linkItem dp-Uneditable">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-01"></input>
                                <label for="fields-01">Agent</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem dp-Uneditable">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-02"></input>
                                <label for="fields-02">Title</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem dp-Uneditable">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-03"></input>
                                <label for="fields-03">User</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-04"></input>
                                <label for="fields-04">Agent team</label>
                            </span>            
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-05"></input>
                                <label for="fields-05">Labels</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-06"></input>
                                <label for="fields-06">ID</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-07"></input>
                                <label for="fields-07">Status</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-08"></input>
                                <label for="fields-08">Language</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-09"></input>
                                <label for="fields-09">Department</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-10"></input>
                                <label for="fields-10">Product</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-11"></input>
                                <label for="fields-11">Organization</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-12"></input>
                                <label for="fields-12">SLAs</label>
                            </span>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-13"></input>
                                <label for="fields-13">User waiting</label>
                            </span>
                        </li>

                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-14"></input>
                                <label for="fields-14">Date created</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-15"></input>
                                <label for="fields-15">All waiting time</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-16"></input>
                                <label for="fields-16">Date of last reply</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-17"></input>
                                <label for="fields-17">Date of last user reply</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" checked="checked" disabled="disabled" class="dp-ControlInput" id="fields-18"></input>
                                <label for="fields-18">Date of last agent reply</label>
                            </span>
                            <span class="dp-Icon dp-settings"></span>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-19"></input>
                                <label for="fields-19">Date resolved</label>
                            </span>
                            <span class="dp-Icon dp-settings is-active"></span>
                            <ul class="dp-Menu Menu--tick Menu--tick-left">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">Date/time</a>
                                </li>
                               <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-listItem">How long since</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dp-Menu-linkItem is-active">
                            <span class="dp-Icon dp-Drag"></span>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-20"></input>
                                <label for="fields-20">Problem</label>
                            </span>
                        </li>

                        <li class="dp-DropdownDivider"></li>

                        <li class="dp-Menu-linkItem dp-ButtonWrapper">
                            <button class="dp-Button" type="button">Apply changes</button>
                            <span class="dp-CustomCheckbox">
                                <input type="checkbox" class="dp-ControlInput" id="fields-21"></input>
                                <label for="fields-21">all filters</label>
                            </span>
                        </li>

                    </ul>
                </div>

            </li>

			<!-- 1 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-1"></input>
                        <label for="cards-feedback-3-1"></label>

                        <span class="dp-Title Title-Icon">
                            <span class="dp-Icon dp-Acrobat"></span>
                            <span class="dp-Card-title">Feedback_guide.pdf <span class="dp-qt">(56kb)</span></span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 2 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-2"></input>
                        <label for="cards-feedback-3-2"></label>

                        <span class="dp-Title Title-Icon">
                            <ul class="dp-vote">
                                <li>38</li>
                                <li>votes</li>
                            </ul>
                            <span class="dp-Card-title">Option to choose if the enduser should be notified</span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 3 -->
            <li class="dp-Card dp-Level Card-news">
                <span class="dp-LevelItem">

                    <span class="dp-LevelCol dp-LevelTop">
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-3"></input>
                            <label for="cards-feedback-3-3"></label>
                        </span>
                    </span>

                    <span class="dp-LevelCol">
                        <ul class="dp-calendar">
                            <li>Nov</li>
                            <li>18</li>
                        </ul>
                    </span>

                    <span class="dp-LevelCol">
                        <span class="dp-Card-title">News item title here</span>
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 4 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-4"></input>
                        <label for="cards-feedback-3-4"></label>

                        <span class="dp-Title Title-Icon">
                            <ul class="dp-vote">
                                <li>38</li>
                                <li>votes</li>
                            </ul>
                            <span class="dp-Card-title">I want to be able to create a user while creating a</span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 5 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-5"></input>
                        <label for="cards-feedback-3-5"></label>

                        <span class="dp-Title Title-Icon">
                            <span class="dp-Icon dp-Acrobat"></span>
                            <span class="dp-Card-title">Feedback_guide.pdf <span class="dp-qt">(56kb)</span></span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 6 -->
			<li class="dp-Card dp-Level Card-news">
			    <span class="dp-LevelItem">

			        <span class="dp-LevelCol dp-LevelTop">
			            <span class="dp-CustomCheckbox">
			                <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-6"></input>
			                <label for="cards-feedback-3-6"></label>
			            </span>
			        </span>

			        <span class="dp-LevelCol">
			            <ul class="dp-calendar">
			                <li>Aug</li>
			                <li>20</li>
			            </ul>
			        </span>

			        <span class="dp-LevelCol">
			            <span class="dp-Card-title">News article title</span>
			            <ul class="dp-LevelWrap">
			                <li>
			                    <span class="dp-Icon dp-iconUserAvatar"></span>
			                    <span class="dp-UserName">Toby falkirk</span>
			                </li>
			            </ul>
			        </span>

			    </span>
			</li>

            <!-- 7 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-7"></input>
                        <label for="cards-feedback-3-7"></label>

                        <span class="dp-Title Title-Icon">
                            <ul class="dp-vote">
                                <li>38</li>
                                <li>votes</li>
                            </ul>
                            <span class="dp-Card-title">I want to be able to create a user while creating a...</span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 8 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-8"></input>
                        <label for="cards-feedback-3-8"></label>

                        <span class="dp-Title Title-Icon">
                            <ul class="dp-vote">
                                <li>38</li>
                                <li>votes</li>
                            </ul>
                            <span class="dp-Card-title">Option to choose if the enduser should be notified...</span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 9 -->
			<li class="dp-Card dp-Level Card-news">
			    <span class="dp-LevelItem">

			        <span class="dp-LevelCol dp-LevelTop">
			            <span class="dp-CustomCheckbox">
			                <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-9"></input>
			                <label for="cards-feedback-3-9"></label>
			            </span>
			        </span>

			        <span class="dp-LevelCol">
			            <ul class="dp-calendar">
			                <li>Nov</li>
			                <li>15</li>
			            </ul>
			        </span>

			        <span class="dp-LevelCol">
			            <span class="dp-Card-title">News article title</span>
			            <ul class="dp-LevelWrap">
			                <li>
			                    <span class="dp-Icon dp-iconUserAvatar"></span>
			                    <span class="dp-UserName">Toby falkirk</span>
			                </li>
			            </ul>
			        </span>

			    </span>
			</li>

            <!-- 10 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-10"></input>
                        <label for="cards-feedback-3-10"></label>

                        <span class="dp-Title Title-Icon">
                            <ul class="dp-vote">
                                <li>38</li>
                                <li>votes</li>
                            </ul>
                            <span class="dp-Card-title">I want to be able to create a user while creating a...</span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

			<!-- 11 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-11"></input>
                        <label for="cards-feedback-3-11"></label>

                        <span class="dp-Title Title-Icon">
                            <span class="dp-Icon dp-Acrobat"></span>
                            <span class="dp-Card-title">Feedback_guide.pdf <span class="dp-qt">(56kb)</span></span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

			<!-- 12 -->
			<li class="dp-Card dp-Level Card-news">
			    <span class="dp-LevelItem">

			        <span class="dp-LevelCol dp-LevelTop">
			            <span class="dp-CustomCheckbox">
			                <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-12"></input>
			                <label for="cards-feedback-3-12"></label>
			            </span>
			        </span>

			        <span class="dp-LevelCol">
			            <ul class="dp-calendar">
			                <li>Nov</li>
			                <li>15</li>
			            </ul>
			        </span>

			        <span class="dp-LevelCol">
			            <span class="dp-Card-title">News article title</span>
			            <ul class="dp-LevelWrap">
			                <li>
			                    <span class="dp-Icon dp-iconUserAvatar"></span>
			                    <span class="dp-UserName">Toby falkirk</span>
			                </li>
			            </ul>
			        </span>

			    </span>
			</li>

			<!-- 13 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-13"></input>
                        <label for="cards-feedback-3-13"></label>

                        <span class="dp-Title Title-Icon">
                            <ul class="dp-vote">
                                <li>38</li>
                                <li>votes</li>
                            </ul>
                            <span class="dp-Card-title">Option to choose if the enduser should be notified...</span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

			<!-- 14 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-14"></input>
                        <label for="cards-feedback-3-14"></label>

                        <span class="dp-Title Title-Icon">
                            <span class="dp-Icon dp-Acrobat"></span>
                            <span class="dp-Card-title">Feedback_guide.pdf <span class="dp-qt">(56kb)</span></span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

			<!-- 15 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-15"></input>
                        <label for="cards-feedback-3-15"></label>

                        <span class="dp-Title Title-Icon">
                            <ul class="dp-vote">
                                <li>38</li>
                                <li>votes</li>
                            </ul>
                            <span class="dp-Card-title">I want to be able to create a user while creating a...</span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

			<!-- 16 -->
            <li class="dp-Card">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox dp-LevelLeft dp-LevelTop">
                        <input type="checkbox" class="dp-ControlInput" id="cards-feedback-3-16"></input>
                        <label for="cards-feedback-3-16"></label>

                        <span class="dp-Title Title-Icon">
                            <span class="dp-Icon dp-Acrobat"></span>
                            <span class="dp-Card-title">Feedback_guide.pdf <span class="dp-qt">(56kb)</span></span>
                        </span>

                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-LevelLeft">
                        <ul class="dp-LevelWrap">
                            <li>
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span class="dp-UserName">Toby falkirk</span>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

        </ul>
    </form>
</div>
```
