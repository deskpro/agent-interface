---
title: PageSidebar
---

<h2>PageSidebarItem</h2>

```html @preview
    <div class="dp-PageSidebar">
        <div class="dp-SidebarTabs">
            <ul class="dp-SidebarTabsList">
                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-iconSettingBlue"></a></li>
                <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-iconUserBlue"></a></li>
                <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-iconBuildingBlue"></a></li>
            </ul>
        </div>
    </div>
```

<h2>PageSidebarList</h2>

```html @preview
<div class="dp-PageSidebar">

    <div class="dp-SidebarTabs">
        <ul class="dp-SidebarTabsList">
            <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-iconSettingBlue"></a></li>
            <li class="dp-SidebarTab-item is-active"><a href="#" class="dp-Icon dp-iconUserBlue"></a></li>
            <li class="dp-SidebarTab-item "><a href="#" class="dp-Icon dp-iconBuildingBlue"></a></li>
        </ul>
    </div>

    <div class="dp-SidebarWrapper">

        <div class="dp-SidebarSection">
            <div class="dp-SectionTitle">Organization & user</div>
            <span class="dp-LineTitle"></span>
        </div>
        <div class="dp-SectionBody">

            <div class="dp-SectionBody-item">
                <div class="dp-title-item dp-optical">
                    <div class="dp-LogoName">
                        <span class="dp-logo"></span>
                        Optical
                    </div>
                </div>
            </div>

            <div class="dp-SectionBody-item">
                <p class="dp-title-item">
                    <img src="/agent-interface/style/img/docs/avatar.png" alt="" class="dp-logo dp-ZackPrudent">
                    Zack Prudent
                </p>

                <p class="dp-mail"><a href="mailto:vlad@htmlbook.ru">zack.prudent@techcompany.com</a></p>
                <p class="dp-phone">
                    <i class="dp-Icon dp-iconPhoneBlue"></i><a href="tel:+442035678940" >+44 20 356 789 40</a>
                </p>
                <p class="dp-OpenResolved">
                    <span class="dp-open"><i class="dp-Icon dp-iconEmailBlue"></i> Open: 7</span>
                    <span class="dp-resolved"><i class="dp-Icon dp-iconEmail"></i> Resolved: 24</span>
                </p>
            </div>

            <div class="dp-OrganizationSubtitle"><div>CC's <a href="#">(2)</a></div>  <div class="dp-BorderLeft">+Add</div></div>

            <div class="dp-SectionBody-item">
                <div class="dp-title-item dp-optical">
                    <div class="dp-LogoName">
                        <span class="dp-logo"></span>
                        <span class="dp-bold">Wendy Pride</span> w.pride@techco ...
                    </div>
                    <i class="dp-Icon dp-iconVDots"></i>
                </div>
            </div>

            <div class="dp-SectionBody-item">
                <div class="dp-title-item dp-optical">
                    <div class="dp-LogoName">
                        <span class="dp-logo"></span>
                        <span class="dp-bold">Bob Cooper</span> bob.cooper@tec ...
                    </div>
                    <i class="dp-Icon dp-iconVDots"></i>
                </div>
            </div>

            <!-- 2 -->
            <div class="dp-SidebarSection dp-SectionControls">
                <div class="dp-SectionTitle">
                    <div class="dp-TitleControls">Ticket properties</div>
                    <span class="dp-LineTitle"></span>
                    <div class="dp-Controls">
                        <span class="dp-Badge"> +5 </span> 
                        <i class="dp-Icon dp-DotsIcon"></i>
                    </div>
                </div>

            </div>
            <div class="dp-SectionBody">
                <ul class="dp-TicketList">
                    <li class="dp-TitleList">Department</li>
                    <li class="dp-SubTitleList"><i class="dp-Icon dp-SupportIcon"></i>Support</li>

                    <li class="dp-TitleList">Product</li>
                    <li class="dp-SubTitleList">Deskpro Cloud</li>

                    <li class="dp-TitleList">Language</li>
                    <li class="dp-SubTitleList"><i class="dp-Icon dp-UKIcon"></i>English (UK)</li>

                    <li class="dp-TitleList">Channel</li>
                    <li class="dp-SubTitleList"><i class="dp-Icon dp-iconVoice"></i>Voice</li>

                </ul>
            </div>

            <!-- 3 -->
            <div class="dp-SidebarSection dp-SectionControls">
                <div class="dp-SectionTitle">
                    <div class="dp-TitleControls dp-StatusTimes">Status &amp; times</div>
                    <span class="dp-LineTitle"></span>
                    <div class="dp-Controls">
                        <i class="dp-Icon dp-DotsIcon"></i>
                    </div>
                </div>
            </div>

            <div class="dp-SectionBody">
                <!-- buttons -->
                <div class="dp-ButtonWrapper">
                    <button class="dp-ActionButton dp-BorderPink" type="button">
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
                    <div class="dp-Controls">
                        <i class="dp-Icon dp-DotsIcon"></i>
                    </div>
                </div>
            </div>

            <div class="dp-SectionBody">
                <div class="dp-TagItem">
                    <span class="dp-Tag Tag--pink">3 hours</span>
                    <span class="dp-TagDescription">Time until resolution</span>
                </div>
                <div class="dp-TagItem">
                    <span class="dp-Tag Tag--orange">10.5 hours</span>
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
                    <span>Assign to me</span>
                    <span class="dp-BorderLeft">Unassign</span>
                </div>
            </div>
            <div class="dp-SectionBody-item">
                <div class="dp-title-item dp-optical">
                    <div class="dp-LogoName">
                        <span class="dp-logo"></span>
                        Chris Pattison
                    </div>
                </div>
            </div>

            <div class="dp-OrganizationSubtitle">
                <span>TEAM</span>  
                <span>Unassign</span>
            </div>
            <div class="dp-SectionBody-item">
                <div class="dp-title-item dp-optical">
                    <div class="dp-LogoName">
                        2nd Level Support
                    </div>
                </div>
            </div>

            <div class="dp-OrganizationSubtitle">
                <div>FOLLOWERS <a href="#">(2)</a></div>  
                <div>
                    <span>Add</span>
                    <span class="dp-BorderLeft">Add me</span>
                </div>
            </div>
                 
            <div class="dp-TagWrapper">       
                <div class="dp-Tag Tag--close">
                    <span class="dp-logo"></span>Wendy Pride<span class="dp-iconClose"></span>
                </div>
                <div class="dp-Tag Tag--close">
                    <span class="dp-logo"></span>Zack Cooper<span class="dp-iconClose"></span>
                </div>
            </div>

            <div class="dp-BorderBottom">
                
            </div>


        </div>

    </div>

</div>
```