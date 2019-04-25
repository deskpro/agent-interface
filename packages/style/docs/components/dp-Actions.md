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
