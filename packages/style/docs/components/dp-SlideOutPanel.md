---
title: Slide-Out Panel
---

```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SlideOutPanel">
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
                    <button disabled class="dp-Button Button--large" type="button">
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
    <div class="dp-SlideOutPanel">
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
                                <span class="dp-Icon dp-following Icon-primary"></span>
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
                                <button class="dp-Button Button--link Button--small">
                                    <span class="dp-Icon dp-add_follower Icon-primary"></span>
                                    <span id="text">Add</span>
                                </button>
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
                                <button class="dp-Button Button--link Button--small">
                                    <span class="dp-Icon dp-add_follower Icon-primary"></span>
                                    <span id="text">Add action</span>
                                </button>
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
                        <!-- <button class="dp-Button ActionButton--large Button--active" type="button"> -->
                        <button class="dp-Button Button--large" type="button">
                            Send to: 256 recipients
                        </button>
                        <!-- <button class="dp-Button Button--small" type="button"> -->
                        <button class="dp-Button Button--large" type="button">
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
    <div class="dp-SlideOutPanel">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle dp-TitleSidebar">
                        <div class="">Change user</div>
                        <span class="dp-Icon dp-close"></span>
                    </div>
                </div>

                <!-- 1 -->
                <form>
                    <div class="dp-Form dp-Menu-search">
                        <span class="dp-Icon dp-IconSearch"></span>
                        <!-- <input type="text" placeholder="Search" class="dp-SearchInput"> -->
                        <input type="text" placeholder="Search" class="dp-Input Input--search">
                    </div>
                </form>

                <!-- 2 -->
                <div class="dp-Tickets">
                    <div class="dp-dropdownContainer">
                        <div class="dp-TitleName is-semibold dp-BorderBottom is-active">
                            Change user from ticket cc’s
                            <span class="dp-Icon dp-DownCaret"></span>

                            <ul class="dp-Menu is-visible">
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-Menu-link">Change user from ticket CC’s</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-Menu-link">Change user from open tabs</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-Menu-link">Change user from selected messages</a>
                                </li>
                                <li class="dp-Menu-linkItem">
                                    <a href="#" class="dp-Menu-link">Change user from same organisation</a>
                                </li>
                            </ul>

                        </div>

                        <ul class="dp-TicketSelect">
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Peter Fergerson </span>
                                </span>
                            </li>                        
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Wendy Pride </span>
                                </span>
                            </li>                        
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Zack Prudent </span>
                                </span>
                            </li>                        
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> John Richardson </span>
                                </span>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Leanne Spencer </span>
                                </span>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Laura Thomas </span>
                                </span>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Geoff Volts </span>
                                </span>
                            </li>
                            <li class="dp-FollowersItem">
                                <span class="dp-LogoName">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName"> Michael Zamba </span>
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>

                <!-- 3 -->
                <div class="dp-TicketSelect">
                    <div class="dp-SectionControls">
                        <div class="dp-SectionTitle"></div>
                    </div>
                    <div class="dp-Followers">
                        <ul class="dp-FollowersWrapper">
                            <li class="dp-FollowersItem">
                                <button class="dp-Button Button--link Button--small">
                                    <span class="dp-Icon dp-add_follower Icon-primary"></span>
                                    <span id="text">Add new user</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="dp-ButtonWrapper">
                    <button class="dp-Button Button--large" type="button">
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

```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SlideOutPanel dp-WarningContainer">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarBody">

                <div class="dp-SidebarSection">
                    <div class="dp-SectionTitle dp-TitleSidebar">
                        <span class="dp-Icon dp-Warning--danger"></span>
                        <div> Warning </div>
                    </div>
                </div>

                <p>
                    You are about to override the admin field settings for this view. Would you like to continue or return to the the view?
                </p>

                <div class="dp-ButtonWrapper">
                    <button class="dp-Button Button--large" type="button">
                        Override settings
                    </button>
                    <button class="dp-Button Button--large" type="button">
                        Return to view
                    </button>
                </div>

            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```

```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SlideOutPanel dp-SlideTicket">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarBody">

                <div class="dp-SectionTitle dp-TitleSidebar">
                    <div class="">Split messages into a new ticket</div>
                    <span class="dp-Icon dp-close"></span>
                </div>

                <div class="dp-TicketTitle">
                    New ticket title
                </div>

                <!-- 1 -->
                <form>
                    <div>
                        <input type="text" class="dp-NewTitle">
                    </div>
                </form>

                <!-- 2 -->
                <div class="dp-TicketMessage dp-SplitMessages dp-BorderBottom">

                    <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="dp-CheckboxTicket-1"></input>
                        <label for="dp-CheckboxTicket-1"></label>
                    </div>

                    <div class="dp-MessageContainer">
                        <div class="dp-MessageHeader">
                            <div class="dp-Left">
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span>Zach Prudent</span>
                            </div>
                            <div class="dp-Right">
                                <div class="dp-Time">03/11/2016 at 09.58am</div>
                                <a href="#" class="dp-Icon dp-settings"></a>
                            </div>
                        </div>

                        <div class="dp-MessageBody">
                            <div class="Content">
                                <p>Good day Brian,</p>
                                <p>We’ve been having another issue with this version of DeskPro. I’ve been doing some troubleshooting with our SSO partner but no luck so far so I thought it wouldn’t hurt to bounce it off of you. The thing is, we configured both Agent and User modules to use SSO and it was working great for a few days. When I came into the office last week Friday I realized that I wasn’t able to log into the Admin/Agent portals but I was able to log in to the User portal.</p>
                            </div>
                            <a href="#" class="dp-ExpandButton"><span class="dp-dots">&hellip;</span></a>
                        </div>
                    </div>
                </div>

                <!-- 3 -->
                <div class="dp-TicketMessage dp-SplitMessages dp-BorderBottom">

                    <div class="dp-CustomCheckbox dp-EmptyCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="dp-CheckboxTicket-2"></input>
                        <label for="dp-CheckboxTicket-2"></label>
                    </div>

                    <div class="dp-MessageContainer">
                        <div class="dp-MessageHeader">
                            <div class="dp-Left">
                                <span class="dp-Icon dp-iconUserAvatar"></span>
                                <span>Zach Prudent</span>
                            </div>
                            <div class="dp-Right">
                                <div class="dp-Time">03/11/2016 at 09.58am</div>
                                <a href="#" class="dp-Icon dp-settings"></a>
                            </div>
                        </div>

                        <div class="dp-MessageBody">
                            <div class="Content">
                                <p>Good day Brian,</p>
                                <p>We’ve been having another issue with this version of DeskPro. I’ve been doing some troubleshooting with our SSO partner but no luck so far so I thought it wouldn’t hurt to bounce it off of you. The thing is, we configured both Agent and User modules to use SSO and it was working great for a few days. When I came into the office last week Friday I realized that I wasn’t able to log into the Admin/Agent portals but I was able to log in to the User portal.</p>
                            </div>
                            <a href="#" class="dp-ExpandButton"><span class="dp-dots">&hellip;</span></a>
                        </div>
                    </div>
                </div>

                <div class="dp-ButtonWrapper">
                    <button class="dp-Button Button--large" type="button">
                        Split selected messages
                    </button>
                </div>

            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```

<!-- Merge tickets -->

```html @preview
<div class="dp-MainWrapper">
    <div class="dp-SlideOutPanel dp-SlideTicket dp-MergeTickets">
        <div class="dp-PageSidebar">

            <div class="dp-SidebarBody">
                <div class="dp-SectionTitle dp-TitleSidebar">
                    <div class="">Merge tickets</div>
                    <span class="dp-Icon dp-close"></span>
                </div>

                <!-- 1 -->
<!--                 <form>
                    <div class="dp-Form dp-SearchForm">
                        <span class="dp-Icon dp-IconSearch"></span>
                        <input type="text" placeholder="Search" class="dp-SearchInput">
                    </div>
                </form>
 -->
                <form>
                    <div class="dp-Form dp-Menu-search">
                        <span class="dp-Icon dp-IconSearch"></span>
                        <input type="text" placeholder="Search" class="dp-Input Input--search">
                    </div>
                </form>

                <!-- 2 -->
                <div class="dp-ButtonWrapper">
                    <button class="dp-Button ActionButton--large" type="button">
                        Switch tickets
                    </button>
                </div>

                <div class="dp-Actions">
                    <ul class="dp-ActionsItems dp-BorderBottom">
                        <li class="dp-ActionsItem dp-MenuBarItem is-active">
                            KEEP THIS TICKET
                        </li>
                        <li class="dp-ActionsItem dp-MenuBarItem">
                            MERGE THIS TICKET
                        </li>
                    </ul>
                </div>

                <table class="dp-BorderBottom">
                    <tr>
                        <td>ID</td>
                        <td>57 221</td>
                    </tr>
                    <tr>
                        <td>Subject</td>
                        <td>Et sed qui perspiciatis accusamus </td>
                    </tr>
                    <tr>
                        <td>Person</td>
                        <td>Jovan Greenholt Katelyn Lowe</td>
                    </tr>
                    <tr>
                        <td>Date created</td>
                        <td>Tue, 9th Oct 2018 8:52pm</td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>Sales Support</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>Awaiting Agent</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>English</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>Ticket Category 1</td>
                    </tr>
                    <tr>
                        <td>Product</td>
                        <td>Product 3</td>
                    </tr>
                    <tr>
                        <td>Workflow</td>
                        <td>Workflow 2</td>
                    </tr>
                    <tr>
                        <td>Widget type</td>
                        <td>Disagree</td>
                    </tr>
                    <tr>
                        <td>Widget description</td>
                        <td>Agree</td>
                    </tr>
                    <tr>
                        <td>Desired sizes</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Manufacture date</td>
                        <td>Tue, 9th Oct 2018 8:52pm</td>
                    </tr>
                    <tr>
                        <td>Reason for complaint</td>
                        <td>What sort of knot, and then keep tight hold of it; so, after hunting all about as curious as it left no mark on the table</td>
                    </tr>
                    <tr>
                        <td>Other remarks</td>
                        <td>What sort of knot, and then keep tight hold of it; so, after hunting all about as curious as it left no mark on the table</td>
                    </tr>
                </table>

                <div class="dp-ButtonWrapper">
                    <!-- <button class="dp-Button ActionButton--large Button--active" type="button"> -->
                    <button class="dp-Button Button--large" type="button">
                        Merge tickets
                    </button>
                </div>

            </div> <!-- Sidebar body -->
        </div>
    </div>
</div>
```