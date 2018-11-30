---
title: PageSidebar
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
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
            </ul>
        </div>
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
        <div class="dp-SectionBody-item dp-UserPanel">
            <div class="dp-title-item">
                <span class="dp-Icon dp-iconUserAvatar"></span>
                Zack Prudent
            </div>

            <div class="dp-Email">zack.prudent@techcompany.com</div>
            <div class="dp-Phone">
                <i class="dp-Icon dp-phone_filled"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
            </div>
            <div class="dp-OpenResolved">
                <span class="dp-open"><i class="dp-Icon dp-tickets--primary"></i> Open: 7</span>
                <span class="dp-resolved"><i class="dp-Icon dp-tickets"></i> Resolved: 24</span>
            </div>
        </div>
    </div>
</div>
```

<h4>sidebar/ccs-header</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">

        <div class="dp-SectionControls">
            <div class="dp-SectionTitle dp-CcRow">
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
                <div>
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
            <div class="dp-SectionTitle dp-TimesRow">
                <div class="dp-title-item">
                    <span class="dp-Icon dp-CurrentUser"></span>
                    Current user wait
                </div>
                <span class="dp-TimesStatus">12 hrs 43 mins</span>
            </div>
        </div>

    </div>
</div>
```


<h4>sidebar/SLAs-extended</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-PageSidebar">
        <div class="dp-Slas">

            <div class="dp-TitleControls">COMPLETED SLAS</div>

            <div class="dp-SectionBody">
                <div class="dp-TagItem">
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--pink">27/24 hrs</span>
                    </span>
                    <span class="dp-TagDescription">Time until first respon...</span>
                </div>
                <div class="dp-TagItem">
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--netural">14/72 hrs</span>
                    </span>
                    <span class="dp-TagDescription">Resolution</span>
                </div>
                <div class="dp-TagItem">
                    <span class="dp-TimeStatus">
                        <span class="dp-Tag Tag--small Tag--warning">x3</span>
                    </span>
                    <span class="dp-TagDescription">Time awaiting reply</span>
                </div>
                <div class="dp-TagItem">
                    <span class="dp-TimeStatus dp-StatusGroup">
                        <span class="dp-Tag Tag--small Tag--netural">1</span>
                        <span class="dp-Tag Tag--small Tag--warning">3</span>
                        <span class="dp-Tag Tag--small Tag--pink">1</span>
                    </span>
                    <span class="dp-TagDescription">Time awaiting reply</span>
                </div>
            </div>

            <div class="dp-TitleControls">APPLY AN SLA</div>

            <div class="dp-ButtonWrapper">
                <button class="dp-ActionButton ActionButton--large is-italic" type="button">
                    Select SLA
                </button>
                <button class="dp-Button Button--small" type="button">
                    Apply
                </button>
            </div>

        </div>
    </div>
</div>
```

<h4>sidebar/ticket-version</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarTabs">
                <ul class="dp-SidebarTabsList">
                    <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
                </ul>
            </div>

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">ORGANIZATION & USER</div>
                    </div>
                </div>

                <div class="dp-SidebarSection">
                    <div class="dp-SectionBody-item ">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Optical
                        </div>
                    </div>
                    <div class="dp-SectionBody-item dp-UserPanel">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Zack Prudent
                        </div>
                        <div class="dp-Email">zack.prudent@techcompany.com</div>
                        <div class="dp-Phone">
                            <i class="dp-Icon dp-phone_filled"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                        </div>
                        <div class="dp-OpenResolved">
                            <span class="dp-open"><i class="dp-Icon dp-tickets--primary"></i> Open: 7</span>
                            <span class="dp-resolved"><i class="dp-Icon dp-tickets"></i> Resolved: 24</span>
                        </div>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-CCmenu">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle dp-CcRow">
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

                <div class="dp-SidebarSection">
                    <div class="dp-SectionControls">

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                    </div>
                </div>

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">STATUS</div>
                    </div>
                </div>

                <div class="dp-SidebarSection">

                    <div class="dp-Selectbelow">
                        <div class="dp-ButtonWrapper">
                            <button class="dp-ActionButton dp-Border--danger ActionButton--large is-semibold" type="button">
                                On Hold
                            </button>

                            <button class="dp-ActionButton dp-Border--danger dp--danger is-semibold" type="button">
                                10
                            </button>
                        </div>

                        <div class="dp-ButtonWrapper">
                            <span class="dp-Icon dp-LevelDown"></span>

                            <button class="dp-ActionButton ActionButton--large is-semibold" type="button">
                                Awaiting order confirmation
                            </button>
                        </div>
                    </div>

                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">TIMES</div>
                        <a href="#" class="dp-Controls">
                            <span class="dp-qt"> +6 </span> 
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-ticket_created"></span>
                            Created
                        </div>
                        <span class="dp-TimesStatus">2 weeks ago</span>
                    </div>
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-CurrentUser"></span>
                            Current user wait
                        </div>
                        <span class="dp-TimesStatus">12 hrs 43 mins</span>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">SLAS</div>
                        <a href="#" class="dp-Controls">
                            <span class="dp-qt"> +5 </span> 
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>
                
                <div class="dp-Slas">
                    <div class="dp-TitleControls">ACTIVE SLAS</div>

                    <div class="dp-SectionBody">
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time until resolution</span>
                        </div>
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--warning">10.5 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time awaiting reply</span>
                        </div>
                    </div>
                </div>

            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```


<h4>sidebar/ticket-version-overlay</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer">
        <div class="dp-PageSidebar dp-TicketOverlay">

            <div class="dp-SidebarTabs">
                <ul class="dp-SidebarTabsList">
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-tickets"></a></li>
                    <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
                </ul>
            </div>

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">ORGANIZATION & USER</div>
                    </div>
                </div>

                <div class="dp-SidebarSection">
                    <div class="dp-SectionBody-item is-disabled">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Optical
                        </div>
                    </div>
                    <div class="dp-SectionBody-item dp-UserPanel">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Zack Prudent
                        </div>
                        <div class="dp-Email">zack.prudent@techcompany.com</div>
                        <div class="dp-Phone">
                            <i class="dp-Icon dp-phone_filled"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                        </div>
                        <div class="dp-OpenResolved">
                            <span class="dp-open"><i class="dp-Icon dp-tickets--primary"></i> Open: 7</span>
                            <span class="dp-resolved"><i class="dp-Icon dp-tickets"></i> Resolved: 24</span>
                        </div>
                    </div>
                </div>

                <div class="dp-SidebarSection">
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

                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">PROPERTIES</div>
                        <a href="#" class="dp-Controls">
                            <span class="dp-qt"> +6 </span> 
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>
                
            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```

<h4>sidebar/ticket-version-times</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarTabs">
                <ul class="dp-SidebarTabsList">
                    <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
                </ul>
            </div>

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">ORGANIZATION & USER</div>
                    </div>
                </div>

                <div class="dp-SidebarSection">
                    <div class="dp-SectionBody-item ">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Optical
                        </div>
                    </div>
                    <div class="dp-SectionBody-item dp-UserPanel">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Zack Prudent
                        </div>
                        <div class="dp-Email">zack.prudent@techcompany.com</div>
                        <div class="dp-Phone">
                            <i class="dp-Icon dp-phone_filled"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                        </div>
                        <div class="dp-OpenResolved">
                            <span class="dp-open"><i class="dp-Icon dp-tickets--primary"></i> Open: 7</span>
                            <span class="dp-resolved"><i class="dp-Icon dp-tickets"></i> Resolved: 24</span>
                        </div>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-CCmenu">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle dp-CcRow">
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

                <div class="dp-SidebarSection">
                    <div class="dp-SectionControls">

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                    </div>
                </div>

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">STATUS</div>
                    </div>
                </div>

                <div class="dp-SidebarSection">

                    <div class="dp-Selectbelow">
                        <div class="dp-ButtonWrapper">
                            <button class="dp-ActionButton dp-Border--danger ActionButton--large is-semibold" type="button">
                                On Hold
                            </button>

                            <button class="dp-ActionButton dp-Border--danger dp--danger is-semibold" type="button">
                                10
                            </button>
                        </div>

                        <div class="dp-ButtonWrapper">
                            <span class="dp-Icon dp-LevelDown"></span>

                            <button class="dp-ActionButton ActionButton--large is-semibold" type="button">
                                Awaiting order confirmation
                            </button>
                        </div>
                    </div>

                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">TIMES</div>
                        <a href="#" class="dp-Controls">
                            <span class="dp-qt"> +6 </span> 
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <!-- 1 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-ticket_created"></span>
                            Created
                        </div>
                        <span class="dp-TimesStatus">2 weeks ago</span>
                    </div>
                    <!-- 2 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-CurrentUser"></span>
                            Current user wait
                        </div>
                        <span class="dp-TimesStatus">12 hrs 43 mins</span>
                    </div>
                    <!-- 3 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-history"></span>
                            Total user wait
                        </div>
                        <span class="dp-TimesStatus">2 weeks</span>
                    </div>
                    <!-- 4 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-WaitUntill"></span>
                            Wait until first reply
                        </div>
                        <span class="dp-TimesStatus">1 hr 3 mins</span>
                    </div>
                    <!-- 5 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-Assignment"></span>
                            First assignment
                        </div>
                        <span class="dp-TimesStatus">2 weeks ago</span>
                    </div>
                    <!-- 6 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-FirstAgent"></span>
                            First agent reply
                        </div>
                        <span class="dp-TimesStatus">2 weeks ago</span>
                    </div>
                    <!-- 7 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-LastAgent"></span>
                            Last agent reply
                        </div>
                        <span class="dp-TimesStatus">4 days ago</span>
                    </div>
                    <!-- 8 -->
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-LastUser"></span>
                            Last user reply
                        </div>
                        <span class="dp-TimesStatus">6 hrs 37 mins</span>
                    </div>                    

                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">SLAS</div>
                        <a href="#" class="dp-Controls">
                            <span class="dp-qt"> +5 </span> 
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>
                
                <div class="dp-Slas">
                    <div class="dp-TitleControls">ACTIVE SLAS</div>

                    <div class="dp-SectionBody">
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time until resolution</span>
                        </div>
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--warning">10.5 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time awaiting reply</span>
                        </div>
                    </div>
                </div>

            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```




<h4>sidebar/ticket-version-CCmenu</h4>
```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarTabs">
                <ul class="dp-SidebarTabsList">
                    <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-tickets"></a></li>
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-icon-user"></a></li>
                    <li class="dp-SidebarTab-item"><a href="#" class="dp-Icon dp-oranisation"></a></li>
                </ul>
            </div>

            <div class="dp-SidebarBody dp-VersionCCmenu">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">ORGANIZATION & USER</div>
                    </div>
                </div>

                <div class="dp-SidebarSection">
                    <div class="dp-SectionBody-item ">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Optical
                        </div>
                    </div>
                    <div class="dp-SectionBody-item dp-UserPanel">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Zack Prudent
                        </div>
                        <div class="dp-Email">zack.prudent@techcompany.com</div>
                        <div class="dp-Phone">
                            <i class="dp-Icon dp-phone_filled"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                        </div>
                        <div class="dp-OpenResolved">
                            <span class="dp-open"><i class="dp-Icon dp-tickets--primary"></i> Open: 7</span>
                            <span class="dp-resolved"><i class="dp-Icon dp-tickets"></i> Resolved: 24</span>
                        </div>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-CCmenu">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle dp-CcRow">
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

                <div class="dp-SidebarSection">
                    <div class="dp-SectionControls">

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Bob Cooper</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">bob.cooper@techcompany.co</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                        <div class="dp-title-item dp-SectionTitle is-active">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Wendy Pride</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">w.pride@techcompany.co.uk</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>

                            <ul class="dp-ContextMenu">
                                <li><a href="#"><span class="dp-Icon dp-Swap"></span>Swap with ticket owner</a></li>
                                <li><a href="#"><span class="dp-Icon dp-Owner"></span>Set as ticket owner</a></li>
                                <li><a href="#"><span class="dp-Icon dp-Merge"></span>Merge into ticket owner</a></li>
                                <li><a href="#"><span class="dp-Icon dp-Bin"></span>Remove CC</a></li>
                                <li><a href="#"><span class="dp-Icon dp-iconGrayMin"></span>Remove CC & Block from ticket</a></li>
                            </ul>

                        </div>

                        <div class="dp-title-item dp-SectionTitle">
                            <div>
                                <span class="dp-Badge Badge--empty"></span>
                                <span class="dp-UserName">Bob Cooper</span>
                                <a href="mailto:w.pride@techcompany.com" class="dp-MailAddress">bob.cooper@techcompany.co</a>
                            </div>
                            <a href="#" class="dp-Icon dp-iconVDots"></a>
                        </div>

                    </div>
                </div>

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">STATUS</div>
                    </div>
                </div>

                <div class="dp-SidebarSection">

                    <div class="dp-Selectbelow">
                        <div class="dp-ButtonWrapper">
                            <button class="dp-ActionButton dp-Border--danger ActionButton--large is-semibold" type="button">
                                On Hold
                            </button>

                            <button class="dp-ActionButton dp-Border--danger dp--danger is-semibold" type="button">
                                10
                            </button>
                        </div>

                        <div class="dp-ButtonWrapper">
                            <span class="dp-Icon dp-LevelDown"></span>

                            <button class="dp-ActionButton ActionButton--large is-semibold" type="button">
                                Awaiting order confirmation
                            </button>
                        </div>
                    </div>

                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">TIMES</div>
                        <a href="#" class="dp-Controls">
                            <span class="dp-qt"> +6 </span> 
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-ticket_created"></span>
                            Created
                        </div>
                        <span class="dp-TimesStatus">2 weeks ago</span>
                    </div>
                    <div class="dp-SectionTitle dp-TimesRow">
                        <div class="dp-title-item">
                            <span class="dp-Icon dp-CurrentUser"></span>
                            Current user wait
                        </div>
                        <span class="dp-TimesStatus">12 hrs 43 mins</span>
                    </div>
                </div>

                <div class="dp-SidebarSection dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">SLAS</div>
                        <a href="#" class="dp-Controls">
                            <span class="dp-qt"> +5 </span> 
                            <i class="dp-Icon dp-DotsIcon"></i>
                        </a>
                    </div>
                </div>
                
                <div class="dp-Slas">
                    <div class="dp-TitleControls">ACTIVE SLAS</div>

                    <div class="dp-SectionBody">
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time until resolution</span>
                        </div>
                        <div class="dp-TagItem">
                            <span class="dp-TimeStatus">
                                <span class="dp-Tag Tag--small Tag--warning">10.5 hours</span>
                            </span>
                            <span class="dp-TagDescription">Time awaiting reply</span>
                        </div>
                    </div>
                </div>

            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```
