---
title: TicketMessage
---

```html @preview
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
				<a href="#" class="dp-Icon dp-iconSetting"></a>
			</div>
		</div>
		<div class="dp-MessageTitle">
			<p class="dp-Type dp-Orange">Agent note</p>
		</div>
		<div class="dp-MessageBody">
			<div class="Content">
				<p class="dp-txt">I’ve asked one of the tech guys to take a look but don’t want to reply until we know the timeframe for a resolution.</p>
			</div>
		</div>
	</div>
</div>
```

```html @preview
<div class="dp-user dp-TicketMessage">

	<div class="dp-MessageContainer">
		<div class="dp-MessageHeader">
			<div class="dp-Left">
				<div class="dp-title-item dp-optical">
					<div class="dp-UserAvatarName">
						<!-- <span class="dp-UserAvatar"></span> -->
						<span class="dp-Badge Badge--empty"></span>
						<span class="">Zach Prudent</span><a href="mailto:zack.prudent@techcompany.com"><i class="dp-Icon dp-iconEmail"></i>zack.prudent@techcompany ...</a>
					</div>
				</div>
			</div>
			<div class="dp-Right">
				<div class="dp-Time">Today at 11:34am</div>
				<a href="#" class="dp-Icon dp-iconSetting"></a>
			</div>
		</div>
		<div class="dp-MessageTitle">
			<p class="dp-Type">User Reply</p>
		</div>
		<div class="dp-MessageBody">
			<div class="Content">
				<p>Good day Brian,</p>
				<p>We’ve been having another issue with this version of DeskPro. I’ve been doing some troubleshooting with our SSO partner but no luck so far so I thought it wouldn’t hurt to bounce it off of you. The thing is, we configured both Agent and User modules to use SSO and it was working great for a few days. When I came into the office last week Friday I realized that I wasn’t able to log into the Admin/Agent portals but I was able to log in to the User portal. Upon further investigation, we realized that we weren’t able to log in if the SSO URLs were the same.</p>
				<p>We tried clearing browser data in Chrome and trying incognito but no luck. Have you ever seen anything like this before?</p>
				<p>Let me know if anything pops up in your head.</p>
				Thanks,<br></br>
				Zack
			</div>
			<a href="#" class="dp-ExpandButton"><span class="dp-dots">&hellip;</span></a>
		</div>
	</div>


	<!--  -->
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
				<a href="#" class="dp-Icon dp-iconSetting"></a>
			</div>
		</div>
		<div class="dp-MessageTitle">
			<p class="dp-Type dp-Orange">Agent note</p>
		</div>
		<div class="dp-MessageBody">
			<div class="Content">
				<p class="dp-txt">I’ve asked one of the tech guys to take a look but don’t want to reply until we know the timeframe for a resolution.</p>
			</div>
		</div>
	</div>

	<!-- 3 -->
	<div class="dp-MessageContainer">
		<div class="dp-MessageHeader">
			<div class="dp-Left">
				<div class="dp-title-item dp-optical">
					<div class="dp-UserAvatarName">
						<span class="dp-Badge Badge--empty dp-DarkBadge"></span>
						<span class="">Harry Krimbo</span>
					</div>
				</div>
			</div>
			<div class="dp-Right">
				<div class="dp-Time">03/11/2016 at 09.58am</div>
				<a href="#" class="dp-Icon dp-iconSetting"></a>
			</div>
		</div>
		<div class="dp-MessageTitle">
			<p class="dp-Type dp-Green">Agent reply</p>
		</div>
		<div class="dp-MessageBody">
			<div class="Content">
				<p>Hi Zack,</p>
				<p>I’ve asked one of the tech guys to take a look and find the best sol ...</p>
			</div>
		</div>
	</div>

</div>
```