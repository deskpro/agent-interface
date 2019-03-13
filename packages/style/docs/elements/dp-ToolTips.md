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

      <div class="dp-ToolTips ToolTips--PrimaryDelete is-active">
      	<div class="dp-ToolTipsUp">
      		<span class="dp-Icon dp-Exclamation Icon-blue"></span>
      		<p>Delete</p>
      	</div>
      	<div class="dp-ToolTipsDown">
      		<p>Are you sure you want to delete this ticket?</p>
      	</div>
		<div class="dp-ButtonWrapper">
			<button class="dp-Button" type="button">Delete</button>
			<button class="dp-Button dp-Button Button--outlined" type="button">Cancel</button>
		</div>
      </div>


</div>
```

<!-- WarningDelete -->

```html @preview
<div class="dp-MainWrapper demo-tooltip" style="height: 150px;">

      <div class="dp-ToolTips ToolTips--WarningDelete is-active">
      	<div class="dp-ToolTipsUp">
      		<span class="dp-Icon dp-Exclamation Icon--warning"></span>
      		<p>Ticket was deleted by</p>
      	</div>
      	<div class="dp-ToolTipsDown">
      		<p class="dp-UserTitleInfo">
				<span class="dp-Icon dp-UserIcon"><img src="/agent-interface/style/img/docs/avatar.png" alt=""></span>
				<p class="dp-UserName">Zack Prudent</p>
				<span class="dp-Time">
					<span class="dp-Icon dp-history Icon--blue"></span>
					28 mins ago
				</span>
			</p>
			<p>
				Reason: Duplicate ticket
			</p>
			<p>
				This ticket will be permantely removed from the system in 27 days 23 hours.
			</p>	
      	</div>
      </div>

</div>
```
