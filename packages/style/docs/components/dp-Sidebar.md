---
title: PageSidebar (developing)
---

<h2>SIDE-BAR</h2>


<h4>sidebar/container</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer"></div>
</div>
```

<h4>sidebar/tab-header</h4>
```html @preview
<div class="dp-MainWrapper Sidebar-Demonstration">

    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
            </ul>
        </div>
    </div>

    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
            </ul>
        </div>
    </div>

    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
            </ul>
        </div>
    </div>

    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-publish"></a></li>
            </ul>
        </div>
    </div>

    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-publish"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-history"></a></li>
            </ul>
        </div>
    </div>

    <div class="dp-PageSidebar dp-DemonstrationEements">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-Icon dp-tickets"></a></li>
            </ul>

            <ul class="dp-SidebarTabsList dp-DemonstrationIcon">
                <li>Static</li>
                <li>Rollover</li>
                <li>Selected</li>
            </ul>

        </div>
    </div>

</div>
```

<h4>sidebar/header</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">

        <div class="dp-SidebarSection">
            <div class="dp-SectionTitle">
                <div class="dp-TitleControls">Header</div>
            </div>
        </div>

    </div>
</div>
```

<h4>sidebar/panel</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-SectionBody-item">
            <div class="dp-title-item">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                Name
            </div>
        </div>
    </div>
</div>
```

<h4>sidebar/tickets/header/count-smallmore</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">

        <div class="dp-SidebarSection dp-SectionControls">
            <div class="dp-SectionTitle">
                <div class="dp-TitleControls">Header</div>
                    <a href="#" class="dp-Controls">
                    <span class="dp-qt"> +8 </span> 
                    <i class="dp-Icon dp-DotsIcon"></i>
                </a>
            </div>
        </div>

    </div>
</div>
```

<h2>TICKETS</h2>
<h4>sidebar/tab-header</h4>
```html @preview
    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
            </ul>
        </div>
    </div>
```

<h4>sidebar/org-panel</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-SectionBody-item">
            <div class="dp-title-item">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                Optical
            </div>
        </div>
    </div>
</div>
```

<h4>sidebar/user-panel</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-SectionBody-item">
            <p class="dp-title-item">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                Zack Prudent
            </p>

            <p class="dp-Email">zack.prudent@techcompany.com</p>
            <p class="dp-Phone">
                <i class="dp-Icon dp-phone_filled"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
            </p>
            <p class="dp-OpenResolved">
                <span class="dp-open"><i class="dp-Icon dp-tickets--primary"></i> Open: 7</span>
                <span class="dp-resolved"><i class="dp-Icon dp-tickets"></i> Resolved: 24</span>
            </p>
        </div>
    </div>
</div>
```

<h4>sidebar/ccs-header</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">

        <div class="dp-SectionControls">
            <div class="dp-SectionTitle dp-CcsHeader">
                <div class="dp-TitleControls">
                    <span class="dp-open">CC’s</span>
                    <span>Add</span>
                </div>
                <a href="#" class="dp-Controls">
                    <span class="dp-qt"> +5 </span> 
                    <i class="dp-Icon dp-DotsIcon"></i>
                </a>
            </div>
        </div>

    </div>
</div>
```



<h4>sidebar/cc-row</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-SectionControls">
            <div class="dp-title-item dp-SectionTitle">
                <div class="dp-UserAvatarName">
                    <span class="dp-Badge Badge--empty"></span>
                    <span class="dp-UserName">Wendy Pride</span>
                    <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                </div>
                <a href="#" class="dp-Icon dp-iconVDots"></a>
            </div>
        </div>
    </div>
</div>
```


<h4>sidebar/select-selectbelow</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <!-- buttons -->
        <div class="dp-Selectbelow">

            <button class="dp-ActionButton dp-Border--danger ActionButton--large is-semibold" type="button">
                On Hold
            </button>

            <div class="dp-ButtonWrapper">
                <span class="dp-Icon dp-LevelDown"></span>

                <button class="dp-ActionButton ActionButton--large is-semibold" type="button">
                    Awaiting order confirmation
                </button>
            </div>

        </div>
    </div>
</div>
```

<h4>sidebar/urgency</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SectionBody">
        <!-- buttons -->
        <div class="dp-ButtonWrapper">
            <button class="dp-ActionButton dp-Border--danger dp--danger is-semibold" type="button">
                10
            </button>
        </div>
    </div>
</div>
```

<h4>sidebar/headers</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">

        <div class="dp-SidebarSection dp-SectionControls">
            <div class="dp-SectionTitle">
                <div class="dp-TitleControls">TIMES</div>
                <a href="#" class="dp-Controls">
                    <span class="dp-qt"> +6 </span> 
                    <i class="dp-Icon dp-DotsIcon"></i>
                </a>
            </div>
        </div>

    </div>
</div>
```

<h4>sidebar/times-row</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">

        <div class="dp-SidebarSection dp-SectionControls">
            <div class="dp-SectionTitle">
                <div class="dp-TitleControls">
                    <span class="dp-Icon dp-CurrentUser"></span>
                    Current user wait
                </div>
                <span class="dp-TimesStatus">12 hrs 43 mins</span>
            </div>
        </div>

    </div>
</div>
```






<!-- <h2>SectionTitle</h2>
```html @preview
    <div class="dp-PageSidebar">

        <div class="dp-SidebarRow">
            <div class="dp-SidebarSection dp-SectionControls">
                <div class="dp-SectionTitle">
                    <div class="dp-TitleControls">Ticket properties</div>
                    <span class="dp-LineTitle"></span>
                    <a href="#" class="dp-Controls">
                        <span class="dp-qt"> +5 </span> 
                        <i class="dp-Icon dp-DotsIcon"></i>
                    </a>
                </div>
            </div>
        </div>

    </div>
``` -->



<h2>SidebarSection</h2>
```html @preview
    <div class="dp-PageSidebar">

        <div class="dp-SidebarRow">
            <div class="dp-SidebarSection dp-SectionControls">
                <div class="dp-SectionTitle">
                    <div class="dp-TitleControls">Ticket properties</div>
                    <span class="dp-LineTitle"></span>
                    <a href="#" class="dp-Controls">
                        <span class="dp-qt"> +5 </span> 
                        <i class="dp-Icon dp-DotsIcon"></i>
                    </a>
                </div>
            </div>
            <div class="dp-PropertyList">
                <dl class="dp-TicketList">
                    <dt class="dp-TitleList db-m-0">Department</dt>
                    <dd class="dp-SubTitleList"><i class="dp-Icon dp-SupportIcon"></i>Support</dd>

                    <dt class="dp-TitleList">Product</dt>
                    <dd class="dp-SubTitleList">Deskpro Cloud</dd>

                    <dt class="dp-TitleList">Language</dt>
                    <dd class="dp-SubTitleList"><i class="dp-Icon dp-UKIcon"></i>English (UK)</dd>

                    <dt class="dp-TitleList">Channel</dt>
                    <dd class="dp-SubTitleList"><i class="dp-Icon dp-iconVoice"></i>Voice</dd>
                </dl>
            </div>
        </div>

    </div>
```


<h2>PageSidebarList</h2>

```html @preview
<div class="dp-PageSidebar">

    <div class="dp-PageWrapper">

        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-mass_actions dp--blue"></a></li>
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-icon-user dp--blue"></a></li>
                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-oranisation dp--blue"></a></li>
            </ul>
        </div>

        <div class="dp-SidebarWrapper">
                <div class="dp-SidebarRow">

                    <div class="dp-SidebarSection">
                        <div class="dp-SectionTitle">Organization & user</div>
                        <span class="dp-LineTitle"></span>
                    </div>

                    <div class="dp-SectionBody-item">
                        <div class="dp-title-item dp-optical">
                            <div class="dp-UserAvatarName">
                                <span class="dp-Badge Badge--empty"></span>
                                Optical
                            </div>
                        </div>
                    </div>

                    <div class="dp-SectionBody-item">
                        <p class="dp-title-item">
                            <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                            Zack Prudent
                        </p>

                        <p class="dp-Email">zack.prudent@techcompany.com</p>
                        <p class="dp-Phone">
                            <i class="dp-Icon dp-iconPhoneBlue"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                        </p>
                        <p class="dp-OpenResolved">
                            <span class="dp-open"><i class="dp-Icon dp-iconEmailBlue"></i> Open: 7</span>
                            <span class="dp-resolved"><i class="dp-Icon dp-iconEmail"></i> Resolved: 24</span>
                        </p>
                    </div>

                    <div class="dp-OrganizationSubtitle"><div>CC's <a href="#" class="dp-NumLink">(2)</a></div>  <a href="#" class="dp-BorderLeft">+Add</a></div>

                    <div class="dp-SectionBody-item">
                        <div class="dp-title-item dp-optical dp-CCs">
                            <div class="dp-UserAvatarName">
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span><a href="mailto:w.pride@techcompany.com">w.pride@techco...</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>
                    </div>

                    <div class="dp-SectionBody-item db-m-0">
                        <div class="dp-title-item dp-optical dp-CCs">
                            <div class="dp-UserAvatarName">
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Bob Cooper</span><a href="mailto:bob.cooper@techcompany.com">bob.cooper@tec ...</a>
                            </div>
                            <i class="dp-Icon dp-iconVDots"></i>
                        </div>
                    </div>

                    <!-- 2 -->
                    <div class="dp-SidebarSection dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">Ticket properties</div>
                            <span class="dp-LineTitle"></span>
                            <a href="#" class="dp-Controls">
                                <span class="dp-qt"> +5 </span> 
                                <i class="dp-Icon dp-DotsIcon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="dp-PropertyList">
                        <dl class="dp-TicketList">
                            <dt class="dp-TitleList db-m-0">Department</dt>
                            <dd class="dp-SubTitleList"><i class="dp-Icon dp-SupportIcon"></i>Support</dd>

                            <dt class="dp-TitleList">Product</dt>
                            <dd class="dp-SubTitleList">Deskpro Cloud</dd>

                            <dt class="dp-TitleList">Language</dt>
                            <dd class="dp-SubTitleList"><i class="dp-Icon dp-UKIcon"></i>English (UK)</dd>

                            <dt class="dp-TitleList">Channel</dt>
                            <dd class="dp-SubTitleList"><i class="dp-Icon dp-iconVoice"></i>Voice</dd>
                        </dl>
                    </div>

                    <!-- 3 -->
                    <div class="dp-SidebarSection dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls dp-StatusTimes">Status &amp; times</div>
                            <span class="dp-LineTitle"></span>
                            <a href="#" class="dp-Controls">
                                <i class="dp-Icon dp-DotsIcon"></i>
                            </a>
                        </div>
                    </div>

                    <div class="dp-SectionBody">
                        <!-- buttons -->
                        <div class="dp-ButtonWrapper">
                            <button class="dp-ActionButton dp-BorderPink ActionButton--large" type="button">
                                Awaiting Agent
                            </button>
                            <button class="dp-ActionButton dp-BorderPink dp-Pink" type="button">
                                10
                            </button>
                        </div>

                        <div class="dp-DataWrapper">
                            <span class="dp-DateItem">
                                <i class="dp-Icon dp-iconCalendar"></i>2 weeks ago
                            </span>
                            <span class="dp-DateItem">
                                <i class="dp-Icon dp-iconUserTime"></i>12 hr 43 min
                            </span>
                        </div>
                    </div>

                    <!-- 4 -->
                    <div class="dp-SidebarSection dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls dp-Slas">SLAS</div>
                            <span class="dp-LineTitle"></span>
                            <a href="#" class="dp-Controls">
                                <i class="dp-Icon dp-DotsIcon"></i>
                            </a>
                        </div>
                    </div>

                    <div class="dp-SectionBody">
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time until resolution</span>
                        </div>
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--orange">10.5 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time awaiting reply</span>
                        </div>
                    </div>

                    <!-- 5 -->
                    <div class="dp-SidebarSection">
                        <div class="dp-SectionTitle">Agents &amp; team</div>
                        <span class="dp-LineTitle"></span>
                    </div>


                    <div class="dp-OrganizationSubtitle">
                        <div>AGENT</div>  
                        <div>
                            <a href="#">Assign to me</a>
                            <a href="#" class="dp-BorderLeft">Unassign</a>
                        </div>
                    </div>
                    <div class="dp-SectionBody-item">
                        <div class="dp-title-item dp-optical dp-Agent">
                            <div class="dp-UserAvatarName">
                                <span class="dp-Badge Badge--empty"></span>
                                Chris Pattison
                            </div>
                        </div>
                    </div>

                    <div class="dp-OrganizationSubtitle">
                        <span>TEAM</span>  
                        <a href="#">Unassign</a>
                    </div>
                    <div class="dp-SectionBody-item">
                        <div class="dp-title-item dp-optical">
                            <div class="dp-UserAvatarName">
                                2nd Level Support
                            </div>
                        </div>
                    </div>

                    <div class="dp-OrganizationSubtitle">
                        <div>FOLLOWERS <a href="#" class="dp-NumLink">(2)</a></div>  
                        <div>
                            <a href="#">Add</a>
                            <a href="#" class="dp-BorderLeft">Add me</a>
                        </div>
                    </div>
                         
                    <div class="dp-TagWrapper">       
                        <div class="dp-Tag Tag--close">
                            <span class="dp-Badge Badge--empty"></span>Wendy Pride<span class="dp-iconClose"></span>
                        </div>
                        <div class="dp-Tag Tag--close">
                            <span class="dp-Badge Badge--empty"></span>Zack Cooper<span class="dp-iconClose"></span>
                        </div>
                    </div>

                    <div class="dp-BorderBottom"></div>

            </div>
        </div>
    </div>

</div>
```

<h2>Active PageSidebarList</h2>

```html @preview
<div class="dp-PageSidebar dp-UserActivSidebar">

    <div class="dp-PageWrapper">

        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-mass_actions dp--blue"></a></li>
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-icon-user dp--white"></a></li>
                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-oranisation dp--blue"></a></li>
            </ul>
        </div>

        <div class="dp-SidebarWrapper">
            <div class="dp-SidebarRow">

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls dp-Slas">User contact information</div>
                        <span class="dp-LineTitle"></span>
                        <a href="#" class="dp-Controls">
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>

                <div class="dp-SectionBody-item dp-DropMenuJs">
                    <p class="dp-title-item">
                        <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-Icon dp-Avatar"></img>
                        Zack Prudent
                    </p>

                    <p class="dp-Email"><a href="mailto:zack.prudent@techcompany.com">zack.prudent@techcompany.com</a></p>
                    <p class="dp-Phone">
                        <i class="dp-Icon dp-iconPhoneBlue"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                    </p>
                    <p class="dp-OpenResolved">
                        <span class="dp-open"><i class="dp-Icon dp-iconEmailBlue"></i> Open: 7</span>
                        <span class="dp-resolved"><i class="dp-Icon dp-iconEmail"></i> Resolved: 24</span>
                    </p>
                </div>

                <dl class="dp-AddressList">
                    <dt class="dp-TitleList">Website</dt>
                    <dd class="dp-SubTitleList">www.techcompany.com</dd>

                    <dt class="dp-TitleList">Address</dt>
                    <dd class="dp-SubTitleList address">
                        Tech Company Ltd<br></br>
                        14 Cloud Street<br></br>
                        London<br></br>
                        SE1 ONG<br></br>
                        England
                    </dd>

                    <dt class="dp-TitleList">IM</dt>
                    <dd class="dp-SubTitleList"> - </dd>

                    <dt class="dp-TitleList">Facebook</dt>
                    <dd class="dp-SubTitleList"> - </dd>

                    <dt class="dp-TitleList">Twitter</dt>
                    <dd class="dp-SubTitleList"> - </dd>

                    <dt class="dp-TitleList">LinkedIn</dt>
                    <dd class="dp-SubTitleList"> - </dd>
                </dl>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls dp-Slas">Properties</div>
                        <span class="dp-LineTitle"></span>
                        <a href="#" class="dp-Controls">
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>
```