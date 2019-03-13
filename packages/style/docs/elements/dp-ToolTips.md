---
title: Tool tips
---

<h4>Alerts/warning-info-box</h4>
```html @preview
<div class="dp-MainWrapper demo-tooltip" style="height: 150px;">

      <div class="dp-ToolTips is-active">
      	<div class="dp-ToolTipsUp">
      		<span class="dp-Icon dp-Info Icon-blue"></span>
      		<p>CSV Export info</p>
      	</div>
      	<div class="dp-ToolTipsDown">
      		<p>You will receive an email with the CSV data shortly.</p>
      	</div>
      </div>

</div>
```

```html @preview
<div class="dp-MainWrapper demo-tooltip" style="height: 150px;">

      <div class="dp-ToolTips ToolTips--Delete ToolTips--PrimaryDelete is-active">
      	<div class="dp-ToolTipsUp">
      		<span class="dp-Icon dp-Exclamation Icon-blue"></span>
      		<p>Delete</p>
      	</div>
      	<div class="dp-ToolTipsDown">
      		<p>Are you sure you want to delete this ticket?</p>
      	</div>
		<div class="dp-ButtonWrapper">
			<button class="dp-Button" type="button">Delete</button>
			<button class="dp-Button Button--outlined" type="button">Cancel</button>
		</div>
      </div>

</div>
```

<!-- WarningDelete -->

```html @preview
<div class="dp-MainWrapper demo-tooltip" style="height: 200px;">

	<div class="dp-ToolTips ToolTips--Delete ToolTips--WarningDelete is-active">
		<div class="dp-ToolTipsUp">
			<span class="dp-Icon dp-Exclamation Icon--warning"></span>
			<p>Ticket was deleted by</p>
		</div>
		<div class="dp-ToolTipsDown">
			<p class="dp-UserTitleInfo">
			<span class="dp-Icon dp-UserIcon"><img src="/agent-interface/style/img/docs/avatar.png" alt=""></span>
			<span class="dp-UserName">Zack Prudent</span>
			<span class="dp-Time">
				<span class="dp-Icon dp-history Icon--blue"></span>
				28 mins ago
			</span>
		</p>
		<p class="dp-ReasonTitle">
			<span class="dp-Description">Reason:</span> Duplicate ticket
		</p>
		<p class="dp-ReasonSubtitle">
			<span class="dp-Description">This ticket will be permantely removed from the system in</span> <span class="dp-TimesStatus">27 days 23 hours.</span>
		</p>	
		</div>
		<div class="dp-ButtonWrapper">
			<button class="dp-Button Button--outlined" type="button">Undo</button>
		</div>
	</div>

</div>
```

```html @preview
<div class="dp-MainWrapper demo-tooltip" style="height: 150px;">

      <div class="dp-ToolTips ToolTips--Delete ToolTips--SuccessDelete is-active">
		<div class="dp-ToolTipsUp">
			<span class="dp-Icon dp-Approve Approve--success"></span>
			<p>Ticket restored</p>
		</div>
		<div class="dp-ToolTipsDown">
			<p>Your ticket has now been restored.</p>
		</div>
      </div>

</div>
```
