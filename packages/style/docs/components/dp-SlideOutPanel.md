---
title: Slide-Out Panel (developing)
---

```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer dp-SlideOutPanel">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle dp-TitleSidebar">
                        <div class="">Mass actions</div>
                        <span class="dp-Icon dp-close"></span>
                    </div>
                </div>
                <!-- 1 -->
                <div class="dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">AGENT <span class="dp-Arrow"></span></div>
                        <div class="dp-StatusTimes dp-MenuBarItem">
                            Assign to me | Unassign
                        </div>
                    </div>
                    <div class="dp-Select">
                        <span class="is-italic">Select</span>
                    </div>
                </div>
                <!-- 2 -->
                <div class="dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">TEAM <span class="dp-Arrow"></span></div>
                    </div>
                    <div class="dp-Select">
                        <span class="is-italic">Select</span>
                    </div>
                </div>
                <!-- 3 -->
                <div class="dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">STATUS <span class="dp-Arrow"></span></div>
                    </div>
                    <div class="dp-Select">
                        <span class="is-italic">Select</span>
                    </div>
                </div>
                <!-- 4 -->
                <div class="dp-SectionControls">
                    <div class="dp-SectionTitle">
                        <div class="dp-TitleControls">MACROS <span class="dp-Arrow"></span></div>
                    </div>
                </div>

                <div class="dp-ReplyWrapper">
                    <textarea class="dp-ReplyEditor"></textarea>
                    <a href="#" class="dp-Signature">% Signature %</a>
                </div>

                <div class="dp-ButtonWrapper">
                    <button class="dp-Button ActionButton--large Button--in-active" type="button">
                        Send & apply actions
                    </button>
                    <button class="dp-Button Button--small" type="button">
                        Cancel
                    </button>
                </div>
                
            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```

```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer dp-SlideOutPanel">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle dp-TitleSidebar">
                        <div class="">Mass actions</div>
                        <span class="dp-Icon dp-close"></span>
                    </div>
                </div>
                <!-- 1 -->
                <div class="dp-TicketSelect">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">STATUS</div>
                        </div>
                    </div>
                    <div class="dp-ButtonWrapper">
                        <button class="dp-ActionButton ActionButton--XXlarge dp--danger dp-Border--danger is-semibold" type="button">Set resolved</button>
                        <button class="dp-ActionButton dp--danger dp-Border--danger is-semibold" type="button">10</button>
                    </div>
                </div>
                <!-- 2 -->
                <div class="dp-TicketSelect">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">Agent</div>
                            <div class="dp-StatusTimes dp-MenuBarItem">
                                Assign to me | Unassign
                            </div>
                        </div>
                    </div>
                    <button class="dp-ActionButton ActionButton--XXlarge dp-SectionBody-item" type="button">
                        <span class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Zack Prudent
                        <span>
                    </button>
                </div>
                <!-- 3 -->
                <div class="dp-TicketSelect dp-TicketSmall">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">TEAM</div>
                            <div class="dp-StatusTimes dp-MenuBarItem">
                                Unassign
                            </div>
                        </div>
                    </div>
                    <button class="dp-ActionButton ActionButton--Xlarge dp-SectionBody-item" type="button">
                        <span class="dp-title-item">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Support
                        <span>
                    </button>
                </div>
                <!-- 4 -->
                <div class="dp-TicketSelect">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">FOLLOWERS (5)</div>
                            <div class="dp-StatusTimes dp-FollowersStatus">
                                Following
                                <span class="dp-Icon dp-following--primary"></span>
                            </div>
                        </div>
                    </div>
                    <div class="dp-Followers">
                        <ul class="dp-FollowersWrapper">
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Wendy pride </span>
                                </span>
                                <a href="#"><i class="dp-Icon dp-close"></i></a>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Me </span>
                                </span>
                                <a href="#"><i class="dp-Icon dp-close"></i></a>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Peter Fergers... </span>
                                </span>
                                <a href="#"><i class="dp-Icon dp-close"></i></a>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> John Richards... </span>
                                </span>
                                <a href="#"><i class="dp-Icon dp-close"></i></a>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Peter Fergers... </span>
                                </span>
                                <a href="#"><i class="dp-Icon dp-close"></i></a>
                            </li>

                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-add_follower--primary"></span>
                                    <span class="dp-UserName"> Add </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 5 -->
                <div class="dp-TicketSelect dp-TicketSmall">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">PROBLEMS AND INCIDENTS</div>
                            <div class="dp-StatusTimes dp-MenuBarItem">
                                Add
                            </div>
                        </div>
                    </div>

                    <div class="dp-SecurityBreach">
                        <span class="dp-Icon dp-IconSecurity"></span>
                        Security Breach
                    </div>
                </div>

                <!-- 6 -->
                <div class="dp-TicketSelect dp-TicketSmall">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">FLAGS</div>
                            <div class="dp-StatusTimes dp-MenuBarItem">
                                Add
                            </div>
                        </div>
                    </div>

                    <div class="dp-FlagsWrapper">
                        <span class="dp-Icon dp-icon-UK"></span>
                        <span class="dp-Icon dp-icon-SP"></span>
                        <span class="dp-Icon dp-icon-GE"></span>
                    </div>
                </div>

                <!-- 7 -->
                <div class="dp-TicketSelect dp-TicketSmall">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle">
                            <div class="dp-TitleControls">LABELS</div>
                            <div class="dp-StatusTimes dp-MenuBarItem">
                                Add
                            </div>
                        </div>
                    </div>
                    <span class="dp-TagBar">
                        <span class="dp-Tag Tag--close">Custom work<span class="dp-Icon dp-close"></span></span>
                        <span class="dp-Tag Tag--close">Report back on bug fix<span class="dp-Icon dp-close"></span></span>
                        <span class="dp-Tag Tag--close Tag--purple">VIP<span class="dp-Icon dp-close"></span></span>
                    </span>
                </div>

                <!-- 8 -->
                <div class="dp-TicketSelect">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle"></div>
                    </div>
                    <div class="dp-Followers">
                        <ul class="dp-FollowersWrapper">

                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-add_follower--primary"></span>
                                    <span class="dp-UserName"> Add action </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="dp-ReplyBox">
                    <div class="dp-Actions">
                        <ul class="dp-ActionsItems dp-BorderBottom">
                            <li class="dp-ActionsItem dp-MenuBarItem is-active">
                                MASS REPLY
                                <span class="dp-Arrow"></span>
                            </li>
                            <li class="dp-ActionsItem dp-MenuBarItem">Add Note</li>
                            <li class="dp-ActionsItem dp-MenuBarItem">
                                Macros
                                <span class="dp-Arrow"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="dp-ReplyWrapper">
                        <textarea class="dp-ReplyEditor"></textarea>
                        <a href="#" class="dp-Signature">% Signature %</a>
                    </div>
                    <div class="dp-ButtonWrapper">
                        <button class="dp-Button ActionButton--large Button--active" type="button">
                            Send to: 256 recipients
                        </button>
                        <button class="dp-Button Button--small" type="button">
                            Cancel
                        </button>
                    </div>

                </div>

            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```


```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SidebarContainer dp-SlideOutPanel">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle dp-TitleSidebar">
                        <div class="">Change user</div>
                        <span class="dp-Icon dp-close"></span>
                    </div>
                </div>
                <!-- 1 -->

                <div>
                    <form>
                        <div class="dp-SearchForm">
                            <button type="submit" class="dp-Icon dp-IconSearch"></button>
                            <input type="text" placeholder="Search" class="dp-SearchInput is-italic">
                        </div>
                    </form>
                </div>

                <div class="dp-TicketSelect">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle"></div>
                    </div>
                    <div class="dp-Followers">
                        <ul class="dp-FollowersWrapper">

                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-add_follower--primary"></span>
                                    <span class="dp-UserName"> Add new user </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="dp-ButtonWrapper">
                    <button class="dp-Button ActionButton--large Button--active" type="button">
                        Change user
                    </button>
                    <button class="dp-Button Button--small" type="button">
                        Cancel
                    </button>
                </div>


            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```