---
title: Status Component
---

<h2> Status </h2>
```html @preview
<div class="dp-StatusComponent dp-BorderGray">
    <div class="dp-TitleWrapper">
        <span class="dp-StatusTitle">Status</span>
        <span class="dp-StatusTimes dp-MenuBarItem">
            Times
            <span class="dp-Arrow"></span>
        </span>
    </div>
    <div class="dp-ButtonWrapper">
        <button class="dp-ActionButton dp-BorderPink ActionButton--large" type="button">
            Awaiting Agent
        </button>
        <button class="dp-ActionButton dp-BorderPink dp-Pink" type="button">
            10
        </button>
    </div>
</div>
```

<h2> Agent </h2>
```html @preview
<div class="dp-StatusComponent dp-Agent dp-BorderGray">
    <div class="dp-ButtonWrapper">
        <div class="dp-AgentPart">
            <div class="dp-TitleWrapper">
                <span class="dp-StatusTitle">Agent</span>
                <span class="dp-StatusTimes dp-MenuBarItem">
                    Assign to me | Unassign
                </span>
            </div>
            <button class="dp-ActionButton ActionButton--xlarge dp-BorderGray" type="button">
                <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                Zack Prudent
            </button>
        </div>
        <div class="dp-TeamPart">
            <div class="dp-TitleWrapper">
                <span class="dp-StatusTitle">Team</span>
                <span class="dp-StatusTimes dp-MenuBarItem">
                    Unassign
                </span>
            </div>
            <button class="dp-ActionButton ActionButton--xlarge dp-BorderGray" type="button">
                Support
            </button>
        </div>
    </div>
</div>
```

<h2> Followers Column </h2>
```html @preview
<div class="dp-StatusComponent dp-Followers dp-BorderGray">
    <div class="dp-TitleWrapper">
        <span class="dp-StatusTitle">Followers (4)</span>
        <span class="dp-StatusTimes dp-MenuBarItem">
            Add | Add me
        </span>
    </div>
    <ul class="dp-FollowersWrapper">
        <li class="dp-FollowersItem">
            <span class="dp-LogoName">
                <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                <span class="dp-UserName"> Wendy pride </span>
            </span>
            <a href="#"><i class="dpApps-IconClose"></i></a>
        </li>
        <li class="dp-FollowersItem">
            <span class="dp-LogoName">
                <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                <span class="dp-UserName"> Zack Prudent </span>
            </span>
            <a href="#"><i class="dpApps-IconClose"></i></a>
        </li>
        <li class="dp-FollowersItem">
            <span class="dp-LogoName">
                <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                <span class="dp-UserName"> Pete Geoffry </span>
            </span>
            <a href="#"><i class="dpApps-IconClose"></i></a>
        </li>
        <li class="dp-FollowersItem">
            <span class="dp-LogoName">
                <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                <span class="dp-UserName"> John Smith </span>
            </span>
            <a href="#"><i class="dpApps-IconClose"></i></a>
        </li>
    </ul>
</div>
```

<h2> Followers Row </h2>
```html @preview
<div class="dp-StatusComponent dp-Followers dp-BorderGray">
    <div class="dp-TitleWrapper">
        <span class="dp-StatusTitle">Followers (11)</span>
        <span class="dp-StatusTimes dp-MenuBarItem">
            Add | Add me
        </span>
    </div>
    <ul class="dp-FollowersWrapper is-active">
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Wendy pride </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Pete Geoffry </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> John Smith </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
        <li class="dp-FollowersItem">
            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
            <span class="dp-UserName"> Zack Prudent </span>
        </li>
    </ul>
</div>
```