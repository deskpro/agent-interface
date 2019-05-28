---
title: Actions
---

<h4>buttons/actions</h4>
```html @preview
<div class="demo-cog demo-menu">

	<div class="dp-ActionsBar outlined">
		<span class="dp-Dropdown-container">
			<span class="dp-Dropdown is-active">
				<span class="dp-Icon dp-lock Icon--primary"></span>
				Lock
				<button class="dp-Arrow"></button>
			</span>
			<ul class="dp-Menu">
				<li class="dp-Menu-linkItem">
					<span class="dp-linkItem-wrap">
						<span class="dp-Icon dp-lock"></span>
						<span class="dp-Menu-link">Lock</span>
					</span>
				</li>
				<li class="dp-Menu-linkItem">
					<span class="dp-linkItem-wrap">
						<span class="dp-Icon dp-iconMin"></span>
						<span class="dp-Menu-link">Put ticket on hold</span>
					</span>
				</li>
				<li class="dp-Menu-linkItem">
					<span class="dp-linkItem-wrap">
						<span class="dp-Icon dp-Bin"></span>
						<span class="dp-Menu-link">Delete</span>
					</span>
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
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-lock"></span>
							<span class="dp-Menu-link"> Create linked ticket </span>
						</span>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconLink"></span>
							<span class="dp-Menu-link"> Link existing ticket </span>
						</span>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconSplit"></span>
							<span class="dp-Menu-link"> Split message to new ticket </span>
						</span>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconMerge"></span>
							<span class="dp-Menu-link"> Merge </span>
						</span>
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
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconArticle"></span>
							<span class="dp-Menu-link"> New pending article </span>
						</span>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconSnippet"></span>
							<span class="dp-Menu-link"> New Snippet </span>
						</span>
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
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconPrint"></span>
							<span class="dp-Menu-link"> Print</span>
						</span>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconDownloadPDF"></span>
							<span class="dp-Menu-link"> Download PDF</span>
						</span>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-iconBugGray"></span>
							<span class="dp-Menu-link"> Download Debug File</span>
						</span>
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
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-ban"></span>
							<span class="dp-Menu-link"> Ban</span>
						</span>
					</li>
					<li class="dp-Menu-linkItem">
						<span class="dp-linkItem-wrap">
							<span class="dp-Icon dp-IconSpam"></span>
							<span class="dp-Menu-link"> Spam</span>
						</span>
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
					<span class="dp-linkItem-wrap">
						<span class="dp-Icon dp-rocket"></span>
						<span class="dp-Menu-link"> Misc value </span>
					</span>
				</li>
				<li class="dp-Menu-linkItem">
					<span class="dp-linkItem-wrap">
						<span class="dp-Icon dp-rocket"></span>
						<span class="dp-Menu-link"> Misc value </span>
					</span>
				</li>
				<li class="dp-Menu-linkItem">
					<span class="dp-linkItem-wrap">
						<span class="dp-Icon dp-rocket"></span>
						<span class="dp-Menu-link"> Misc value </span>
					</span>
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
