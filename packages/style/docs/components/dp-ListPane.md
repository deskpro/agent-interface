---
title: List View
---

## Listview/header

```html @preview
<div class="dp-MainWrapper">
    <span class="dp-Card-SectionTitle">
        <span>Sales</span>
    </span>
</div>
```

## Listview/tickets

```html @preview
<form>
    <ul class="dp-CardList is-hoverable">
        
        <li class="dp-Card dp-Level dp-Card-SectionTitle">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tickets-sales-1"></input>
                    <label for="tickets-sales-1"></label>
                </span>
            </span>

            <span>Sales</span>
        </li>

        <!-- 1 -->
<!--         <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-1"></input>
                    <label for="listpane-tickets-1"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon">
                    <span class="dp-Card-title">SSO Information</span>
                    <span class="dp-Icon Icon--star"></span>
                </span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">

                    <span class="Icon--circle dp-iconBug"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Icon Icon--clock Icon--primary"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                </span>
            </span>
        </li> -->

        <!-- 1 -->
        <li class="dp-NewCard dp-CustomCheckbox">

            <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-1" />
            <label for="listpane-tickets-1"></label>

            <ul>
                <li class="dp-Card dp-Level">

                    <span class="dp-LevelCol">
                        <span class="dp-Title Title-Icon">
                            <span class="dp-Card-title">SSO Information</span>
                            <span class="dp-Icon Icon--star"></span>
                        </span>
                        <span class="dp-UserInfo">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-UserName">Kenneth James
                            </span>
                            <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                                &lt;kenneth@windfarms.com&gt;
                            </a>
                        </span>
                    </span>

                    <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                        <span class="dp-IconGroup">

                            <span class="Icon--circle dp-iconBug"></span>
                            <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                            <span class="dp-Icon Icon--clock Icon--primary"></span>
                        </span>
                        <span class="dp-TimeStatus">
                            <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                        </span>
                    </span>

                </li>
            </ul>
        </li>



        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-2"></input>
                    <label for="listpane-tickets-2"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                </span>
            </span>
        </li>

        <!-- 3 -->
<!--         <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-3"></input>
                    <label for="listpane-tickets-3"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon">
                    <span class="dp-Card-title">Inventory component</span>
                    <span class="dp-Icon Icon--star"></span>
                </span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-warning"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>2 hr 16 min</span>
                </span>
            </span>
        </li> -->

        <!-- 3 -->
        <li class="dp-NewCard dp-CustomCheckbox">

            <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-3" />
            <label for="listpane-tickets-3"></label>

            <ul>
                <li class="dp-Card dp-Level">

                    <span class="dp-LevelCol">
                        <span class="dp-Title Title-Icon">
                            <span class="dp-Card-title">Inventory component</span>
                            <span class="dp-Icon Icon--star"></span>
                        </span>
                        <span class="dp-UserInfo">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-UserName">Toby Falkirk
                            </span>
                            <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                                &lt;t.falkirk@rambling.com&gt;
                            </a>
                        </span>
                    </span>

                    <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                        <span class="dp-IconGroup">

                            <span class="Icon--circle dp-iconBug"></span>
                            <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                            <span class="dp-Icon Icon--clock Icon--primary"></span>
                        </span>
                        <span class="dp-TimeStatus">
                            <span>2 hr 16 min</span>
                        </span>
                    </span>
                </li>
            
            </ul>
        </li>


        <!-- 4 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-4"></input>
                    <label for="listpane-tickets-4"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">AW: Need some help?</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconLock"></span>
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>57 mins</span>
                </span>
            </span>
        </li>

        <!-- 5 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-5"></input>
                    <label for="listpane-tickets-5"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">2 hours</span>
                </span>
            </span>
        </li>
        
        <!-- 6 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-6"></input>
                    <label for="listpane-tickets-6"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon">
                    <span class="dp-Card-title">Enjoying your helpdesk?</span>
                    <span class="dp-Icon Icon--star"></span>
                </span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-neutral"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

        <!-- 7 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-7"></input>
                    <label for="listpane-tickets-7"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Product enquiry</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">

                    <span class="Icon--circle dp-iconBug"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Icon Icon--clock Icon--primary"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                </span>
            </span>
        </li>

        <!-- 8 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-8"></input>
                    <label for="listpane-tickets-8"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon">
                    <span class="dp-Card-title">Allow anyone to email support</span>
                    <span class="dp-Icon Icon--star"></span>
                </span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--neutral">6</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

        <li class="dp-Card dp-Level dp-Card-SectionTitle">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="ticket-support"></input>
                    <label for="ticket-support"></label>
                </span>
            </span>
            
            <span>Support</span>
        </li>

        <!-- 9 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-9"></input>
                    <label for="listpane-tickets-9"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>12 hr 43 min</span>
                </span>
            </span>
        </li>

        <!-- 10 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-10"></input>
                    <label for="listpane-tickets-10"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon">
                    <span class="dp-Card-title">Enjoying your helpdesk?</span>
                    <span class="dp-Icon Icon--star"></span>
                </span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>

                <span class="dp-JustifyStart">
                    <span class="dp-Meta">Department: <span class="dp-Meta-value">Support</span></span>
                    <span class="dp-Meta">Language: <span class="dp-Meta-value">Italiano</span></span>
                    <span class="dp-Meta">Last reply: <span class="dp-Meta-value">9 weeks ago</span></span>
                </span>

            </span>

            <span class="dp-LevelCol dp-LevelTop dp-LevelRight Level-justify-between">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-neutral"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>4 weeks</span>
                </span>
            </span>
        </li>

        <!-- 11 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="listpane-tickets-11"></input>
                    <label for="listpane-tickets-11"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
                <span class="dp-TagBar dp-JustifyStart">
                    <span class="dp-Tag Tag--close">Custom work<span class="dp-Icon dp-close"></span></span>
                    <span class="dp-Tag Tag--close">Report back on bug fix<span class="dp-Icon dp-close"></span></span>
                    <span class="dp-Tag Tag--close Tag--purple">VIP<span class="dp-Icon dp-close"></span></span>
                    <button class="dp-Button Button--label">
                        Labels<span class="dp-Icon dp-IconPlusBtn"></span>
                    </button>
                </span>
                <span class="dp-JustifyStart">
                    <span class="dp-Meta">Department: <span class="dp-Meta-value">Support</span></span>
                    <span class="dp-Meta">Language: <span class="dp-Meta-value">Italiano</span></span>
                    <span class="dp-Meta">Last reply: <span class="dp-Meta-value">9 weeks ago</span></span>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelTop dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>12 hr 43 min</span>
                </span>
            </span>
        </li>

    </ul>
</form>
```

<!-- Pagination -->

## Listview/pagination

<h4>Listview/pagination-firstpage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft"></span></a>
        <li><a href="#" class="dp-PageNumber is-active">1</a></li>
        <li><a href="#" class="dp-PageNumber">2</a></li>
        <li><a href="#" class="dp-PageNumber">3</a></li>
        <li><a href="#" class="dp-PageNumber">4</a></li>
        <li><a href="#" class="dp-PageNumber">5</a></li>
        <li><a href="#" class="dp-PageNumber">6</a></li>
        <li><a href="#" class="dp-PageNumber">7</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>

<!--     <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span> -->

    <span class="dp-PageJump">
        <label class="dp-Label dp-PageJump-label">
            Go to page
            <input type="number" min="1" max="75" class="dp-Input dp-PageJump-page" value="" />
        </label>
        <button type="button" class="dp-Button Button--small dp-PageJump-button">Go</button>
    </span>
    
</div>
```


<h4>Listview/pagination-secondpage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><a href="#" class="dp-PageNumber is-active">2</a></li>
        <li><a href="#" class="dp-PageNumber">3</a></li>
        <li><a href="#" class="dp-PageNumber">4</a></li>
        <li><a href="#" class="dp-PageNumber">5</a></li>
        <li><a href="#" class="dp-PageNumber">6</a></li>
        <li><a href="#" class="dp-PageNumber">7</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows">
            <span class="dp-Icon dp-arrowRight Icon--primary"></span></a>
        </li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>

</div>
```

<h4>Listview/pagination-fifthpage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><a href="#" class="dp-PageNumber">2</a></li>
        <li><a href="#" class="dp-PageNumber">3</a></li>
        <li><a href="#" class="dp-PageNumber">4</a></li>
        <li><a href="#" class="dp-PageNumber is-active">5</a></li>
        <li><a href="#" class="dp-PageNumber">6</a></li>
        <li><a href="#" class="dp-PageNumber">7</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>
    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>
```

<h4>Listview/pagination-sixthpage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">4</a></li>
        <li><a href="#" class="dp-PageNumber">5</a></li>
        <li><a href="#" class="dp-PageNumber is-active">6</a></li>
        <li><a href="#" class="dp-PageNumber">7</a></li>
        <li><a href="#" class="dp-PageNumber">8</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>

```

<h4>Listview/pagination-lastpage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">69</a></li>
        <li><a href="#" class="dp-PageNumber">70</a></li>
        <li><a href="#" class="dp-PageNumber">71</a></li>
        <li><a href="#" class="dp-PageNumber">72</a></li>
        <li><a href="#" class="dp-PageNumber">73</a></li>
        <li><a href="#" class="dp-PageNumber">74</a></li>
        <li><a href="#" class="dp-PageNumber is-active">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight"></span></a></li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>
```

<h4>Listview/pagination-penultimatepage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">69</a></li>
        <li><a href="#" class="dp-PageNumber">70</a></li>
        <li><a href="#" class="dp-PageNumber">71</a></li>
        <li><a href="#" class="dp-PageNumber">72</a></li>
        <li><a href="#" class="dp-PageNumber">73</a></li>
        <li><a href="#" class="dp-PageNumber is-active">74</a></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>
```

<h4>Listview/pagination-randompage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">68</a></li>
        <li><a href="#" class="dp-PageNumber">69</a></li>
        <li><a href="#" class="dp-PageNumber is-active">70</a></li>
        <li><a href="#" class="dp-PageNumber">71</a></li>
        <li><a href="#" class="dp-PageNumber">72</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>
```

<h4>Listview/pagination-hover</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber is-hover">69</a></li>
        <li><a href="#" class="dp-PageNumber">70</a></li>
        <li><a href="#" class="dp-PageNumber">71</a></li>
        <li><a href="#" class="dp-PageNumber">72</a></li>
        <li><a href="#" class="dp-PageNumber is-active">73</a></li>
        <li><a href="#" class="dp-PageNumber">74</a></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>
```

<h4>Listview/pagination-gottopage</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">69</a></li>
        <li><a href="#" class="dp-PageNumber">70</a></li>
        <li><a href="#" class="dp-PageNumber">71</a></li>
        <li><a href="#" class="dp-PageNumber">72</a></li>
        <li><a href="#" class="dp-PageNumber is-active">73</a></li>
        <li><a href="#" class="dp-PageNumber">74</a></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>
```

<h4>Listview/pagination-gottopage-result</h4>
```html @preview
<div class="dp-Pagination-container">
    <ul class="dp-Pagination">
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowLeft Icon--primary"></span></a>
        <li><a href="#" class="dp-PageNumber">1</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">20</a></li>
        <li><a href="#" class="dp-PageNumber">21</a></li>
        <li><a href="#" class="dp-PageNumber is-active">22</a></li>
        <li><a href="#" class="dp-PageNumber">23</a></li>
        <li><a href="#" class="dp-PageNumber">24</a></li>
        <li><span class="dp-BreakPagination">...</span></li>
        <li><a href="#" class="dp-PageNumber">75</a></li>
        <li><a href="#" class="dp-PaginationArrows"><span class="dp-Icon dp-arrowRight Icon--primary"></span></a></li>
    </ul>

    <span class="dp-PageJump">
       <label for="gotoPage" class="dp-PageJump-label">Go to page</label>
       <input name="gotoPage" type="number" class="dp-PageJump-page" />
       <button type="button" class="dp-PageJump-button">Go</button>
    </span>
</div>
```

<h2>Listview/mass-select</h2>
```html @preview
<form class="dp-MassSelect newControlsList select-checkbox">

    <span class="dp-MassSelectTitle">
        <span class="dp-ItemRow">
            <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                <input type="checkbox" class="dp-ControlInput" id="listpaneCheckbox0" checked="checked"></input>
                <label for="listpaneCheckbox0" class="dp-Input-arrow"></label>

                <button class="dp-Arrow"></button>
                <span class="dp-Card-title">(48 items selected)</span>
                <ul class="dp-Menu is-visible">
                    <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Uncheck all</a></li>
                    <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Select all</a></li>
                    <li class="dp-Menu-linkItem"><a href="#" class="dp-Menu-link">Invert</a></li>
                </ul>
            </span>

            <span class="dp-ListPane">
                <span class="dp-Icon dp-grouped_by"></span>
                <span class="dp-SelectGroup">
                    <span class="dp-ItemRow">
                        <span class="dp-Title">Grouped by</span>
                        <button class="dp-Arrow"></button>
                    </span>
                    <span class="dp-ItemRow">
                        <span class="dp-Subtitle">Department</span>
                    </span>
                </span>
            </span>
        </span>
    </span>

    <ul class="dp-CardList newControlsList is-hoverable">

        <li class="dp-Card-SectionTitle">
            <span>Sales</span>
        </li>

        <!-- 1 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-4"></input>
                    <label for="customCheckbox1-4"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">SSO Information<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconBug"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Icon Icon--clock Icon--primary"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                </span>
            </span>
        </li>

        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-5"></input>
                    <label for="customCheckbox1-5"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-rocket Icon-grey-darkest"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--pink">3 hours</span>
                </span>
            </span>
        </li>

        <!-- 3 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-6"></input>
                    <label for="customCheckbox1-6"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Inventory component<span class="dp-Icon Icon--star"></span></span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-warning"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>2 hr 16 min</span>
                </span>
            </span>
        </li>

        <!-- 4 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-7"></input>
                    <label for="customCheckbox1-7"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">AW: Need some help?</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="dp-Icon dp-iconLock"></span>
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">9</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>57 mins</span>
                </span>
            </span>
        </li>

        <!-- 5 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-8"></input>
                    <label for="customCheckbox1-8"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Portal disabled landing page</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--warning">7</span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">2 hours</span>
                </span>
            </span>
        </li>
        
        <!-- 6 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-9"></input>
                    <label for="customCheckbox1-9"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Enjoying your helpdesk?<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Toby Falkirk
                    </span>
                    <a href="mailto:t.falkirk@rambling.com" class="dp-UserEmail">
                        &lt;t.falkirk@rambling.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge-Min Icon-neutral"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

        <!-- 7 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-10"></input>
                    <label for="customCheckbox1-10"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Product enquiry</span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Kenneth James
                    </span>
                    <a href="mailto:kenneth@windfarms.com" class="dp-UserEmail">
                        &lt;kenneth@windfarms.com&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">

                    <span class="Icon--circle dp-iconBug"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Icon Icon--clock Icon--primary"></span>
                </span>
                <span class="dp-TimeStatus">
                    <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                </span>
            </span>
        </li>

        <!-- 8 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="customCheckbox1-11"></input>
                    <label for="customCheckbox1-11"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Allow anyone to email support<span class="dp-Icon Icon--star"></span></span>
                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Mark Jarvis
                    </span>
                    <a href="mailto:mjarvis@econorob.nl" class="dp-UserEmail">
                        &lt;mjarvis@econorob.nl&gt;
                    </a>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconMln"></span>
                    <span class="dp-Badge Badge--round Badge--grey-lighter"></span>
                    <span class="dp-Badge Badge--round Badge--neutral">6</span>
                </span>
                <span class="dp-TimeStatus">
                    <span>43 mins</span>
                </span>
            </span>
        </li>

    </ul>
</form>
```

## Listview/guides

```html @preview
<div class="dp-MainWrapper">

    <!-- 1 -->
    <ul class="dp-CardList dp-Listpane-guides">
        <li class="dp-Card dp-Level is-active">

            <span class="dp-LevelCol dp-LevelTop">
                <span class="dp-Icon dp-drag"></span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Card-title">Card title here</span>

                <span class="dp-UserInfo">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-UserName">Single-line item</span>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight dp-LevelTop">
                <span class="dp-IconGroup">
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </span>
            </span>
        </li>

        <!-- 2 -->
        <!-- <li class="dp-Card dp-Level Level--down"> -->
        <li class="Level--down">
            <ul class="dp-CardList">

                <li class="dp-Card dp-Level">
                    <span class="dp-LevelCol dp-LevelTop">
                        <!-- Arrow -->
                        <span class="dp-Icon dp-sub_field"></span>
                        <span class="dp-Icon dp-drag"></span>
                    </span>

                    <span class="dp-LevelCol">
                        <span class="dp-Card-title">Card title here</span>

                        <span class="dp-UserInfo">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-UserName">Single-line item</span>
                        </span>
                    </span>
                </li>

                <li class="dp-Card dp-Level is-active">
                    <span class="dp-LevelCol dp-LevelTop">
                        <!-- Arrow -->
                        <span class="dp-Icon dp-sub_field"></span>
                        <span class="dp-Icon dp-drag"></span>
                    </span>

                    <span class="dp-LevelCol">
                        <span class="dp-Card-title">Card title here</span>

                        <span class="dp-UserInfo">
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                        </span>
                    </span>

                    <span class="dp-LevelCol dp-LevelRight dp-LevelTop">
                        <span class="dp-IconGroup">
                            <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                        </span>
                    </span>
                </li>
                
                <!-- 3 -->
                <!-- <li class="dp-Card dp-Level Level--down"> -->
                <li class="Level--down">
                    <ul class="dp-CardList">

                        <li class="dp-Card dp-Level Card--primary">
                            <span class="dp-LevelItem dp-LevelCol dp-LevelTop">
                                <!-- Arrow -->
                                <span class="dp-Icon dp-sub_field"></span>
                                <span class="dp-Icon dp-drag"></span>
                            </span>

                            <span class="dp-LevelCol">
                                <span class="dp-Card-title">Card title here</span>

                                <span class="dp-UserInfo">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName">Single-line item</span>
                                </span>
                            </span>

                            <span class="dp-LevelCol dp-LevelRight dp-LevelBottom">
                                <span class="dp-TimeStatus">
                                    <span class="dp-Tag Tag--small Tag--grey">Draft</span>
                                </span>
                            </span>
                        </li>
                    </ul>
                </li>

            </ul>
        </li>
    </ul>

</div>
```

## Listview/tasks

<h4>Listview/tasks</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card-SectionTitle dp-Tasks-list">
                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-0"></input>
                        <label for="my-task-0"></label>
                    </span>
                </span>
                <span class="dp-LevelCol">
                    <span class="dp-Card-title">MY TASKS</span>
                </span>
            </li>

            <!-- 1 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-1">
                        <label for="my-task-1"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>

                </span>

                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">

                    <ul class="dp-LevelWrap">
                        <li class="is-active">
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">Private</li>
                                <li class="dp-Menu-linkItem">Public</li>
                                <li class="dp-Menu-linkItem">Department</li>
                                <li class="dp-Menu-linkItem">Support</li>
                                <li class="dp-Menu-linkItem">Sales</li>
                            </ul>
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>

                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 2 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2">
                        <label for="my-task-2"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>

                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 3 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list Task--complete">
                <span class="dp-LevelItem Level-justify-between">

                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-3">
                        <label for="my-task-3"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>

                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 4 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list Task--completed">
                <span class="dp-LevelItem Level-justify-between">

                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-4">
                        <label for="my-task-4"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>

                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-CreateTicket"></span>
                                <a href="#" class="dp-Menu-link">
                                    Add to ticket
                                </a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon Icon--edit"></span>
                                <a href="#" class="dp-Menu-link">
                                    Edit
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

        </ul>
    </form>
</div>
```

<h4>Listview/tasks-addcomment</h4>
```html @preview
<div class="dp-MainWrapper" style="height: 400px">
    <form>
        <ul class="dp-CardList">
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="task-addcomment-1">
                        <label for="task-addcomment-1"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">Today</span> :
                            <span class="dp-Time">4pm</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">

                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>

                    <!-- comment -->
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title is-active">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>
        </ul>
    </form>
</div>
```

<!-- 1 -->

<h4>Listview/tasks-2linecard</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">

                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="task-variations-1">
                        <label for="task-variations-1"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>

                <!-- Icon hover -->
                <span class="dp-Cog">
                    <span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Bin"></span>
                            <a href="#" class="dp-Menu-link">
                                Delete
                            </a>
                        </li>
                    </ul>
                </span>

                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Add comment<button class="dp-Arrow"></button></span>
                    </span>
                </span>
            </li>

        </ul>
    </form>
</div>
```

<!-- 2 -->

<h4>Listview/tasks-3linecard</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">

                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="task-variations-2">
                        <label for="task-variations-2"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>

                </span>

                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-CreateTicket"></span>
                                <a href="#" class="dp-Menu-link">
                                    Add to ticket
                                </a>
                            </li>
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon Icon--edit"></span>
                                <a href="#" class="dp-Menu-link">
                                    Edit
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

        </ul>
    </form>
</div>
```

<h4>Listview/completedtask</h4>
```html @preview
<form>
    <ul class="dp-CardList">
        <li class="dp-Card dp-Level LevelCol dp-Tasks-list Task--completed">

            <span class="dp-LevelItem Level-justify-between">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="tasksnew-2">
                    <label for="my-tasksnew-2"></label>
                    <span class="dp-Task-title">
                        <span class="dp-Icon dp-Approve"></span>
                        <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                    </span>
                </span>

                <span class="dp-DateGroup">
                    <span class="dp-Icon dp-group"></span>
                    <span href="#" class="dp-Date-link">
                        <span class="dp-Date">Today</span> :
                        <span class="dp-Time">4pm</span>
                        <ul class="dp-DateSelect">
                            <li>Today</li>
                            <li>Tomorrow</li>
                            <li class="dp-Datepicker-title is-active">
                                Date picker
                                <span class="dp-MonthYear">
                                    <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                </span>
                                <table class="dp-Datepicker">
                                    <tr>
                                        <th>S</th>
                                        <th>M</th>
                                        <th>T</th>
                                        <th>W</th>
                                        <th>T</th>
                                        <th>F</th>
                                        <th>S</th>
                                    </tr>
                                    <tr>
                                        <td class="dp-old-day">25</td>
                                        <td class="dp-old-day">26</td>
                                        <td class="dp-old-day">27</td>
                                        <td class="dp-old-day">28</td>
                                        <td class="dp-old-day">29</td>
                                        <td class="dp-old-day">30</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                        <td class="is-active">14</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>17</td>
                                        <td>18</td>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                    </tr>
                                    <tr>
                                        <td>30</td>
                                        <td>31</td>
                                        <td class="dp-new-day">1</td>
                                        <td class="dp-new-day">2</td>
                                        <td class="dp-new-day">3</td>
                                        <td class="dp-new-day">4</td>
                                        <td class="dp-new-day">5</td>
                                    </tr>

                                </table>
                            </li>
                        </ul>

                        <ul class="dp-TimeSelect">
                            <li>Morning</li>
                            <li>Afternoon</li>
                            <li>
                                <table class="dp-Timepicker">
                                    <tr>
                                        <td>9am</td>
                                        <td>10am</td>
                                        <td>11am</td>
                                        <td class="is-active">Noon</td>
                                        <td>1pm</td>
                                    </tr>
                                    <tr>
                                        <td>2pm</td>
                                        <td>3pm</td>
                                        <td>4pm</td>
                                        <td>5pm</td>
                                        <td>6pm</td>
                                    </tr>
                                </table>
                            </li>
                        </ul>
                    </span>
                </span>

            </span>

            <span class="dp-LevelItem dp-LevelLeft">
                <span class="dp-Diagnose">
                    <a href="" class="dp-Card-link">
                        <span class="dp-Icon dp-link"></span>
                        Diagnose And Repair Electrical Systems
                    </a>
                </span>

                <!-- Icon hover -->
                <span class="dp-Cog">
                    <span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Bin"></span>
                            <a href="#" class="dp-Menu-link">
                                Delete
                            </a>
                        </li>
                    </ul>
                </span>

            </span>

            <span class="dp-LevelItem Level-justify-between">
                
                <ul class="dp-LevelWrap">
                    <li>
                        <span class="dp-Icon dp-Visibility"></span>
                        Department
                    </li>
                    <li>
                        <span class="dp-Icon dp-iconUserAvatar"></span>
                        Me
                    </li>
                </ul>

                <span class="dp-CommentWrap">
                    <span class="dp-Icon dp-iconComents"></span>
                    <span class="dp-Comments-title">Add comment</span>
                    <ul class="dp-Comments">
                        <li class="dp-Comments-item">
                            <span class="dp-Level">
                                <span class="dp-LevelLeft">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName">Kenneth James</span>
                                </span>
                                <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                    <span>23 mins ago</span>
                                </span>
                            </span>
                            <span class="dp-Level">
                                <span class="dp-txt">
                                    The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                </span>
                            </span>
                        </li>
                        <li class="dp-Comments-item">
                            <span class="dp-Level">
                                <span class="dp-LevelLeft">
                                    <span class="dp-Icon dp-iconUserAvatar"></span>
                                    <span class="dp-UserName">Victor Moses</span>
                                </span>
                                <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                    <span>12 mins ago</span>
                                </span>
                            </span>
                            <span class="dp-Level">
                                <span class="dp-txt">
                                    The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                </span>
                            </span>
                            <div class="dp-ReplyWrapper">
                                <textarea class="dp-ReplyEditor"></textarea>
                            </div>
                            <div class="dp-ButtonWrapper">
                                <button class="dp-Button Button--small Button--outlined" type="button">
                                    Add comment
                                </button>
                                <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                    Cancel
                                </button>
                            </div>
                        </li>
                    </ul>
                </span>
            </span>
        </li>
    </ul>
</form>
```

<h4>Listview/New task - Static</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
                <span class="dp-LevelCol">
                    <span class="dp-Icon Icon--menu"></span>
                    <span class="dp-Card-title">My Tasks <a href="#" class="dp-qt">(9)</a></span>
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </span>

                <ul class="View-group">
                    <li class="dp-Icon dp-list_view is-active"></li>
                    <li class="dp-Icon Icon--Table-view"></li>
                    <li class="dp-Icon dp-kanban_view"></li>
                </ul>
            </li>

            <li class="dp-Add-task dp-Tasks-list">
                <span class="dp-Icon dp-add_im"></span>
                Click to add new task
            </li>

            <li class="dp-orderingbar--Wrap">
                <ul class="dp-FilterControlsList newControlsList dp-orderingbar">
                    <li class="dp-ListPane">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="task-ordering-1">
                            <label for="task-ordering-1"></label>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <span class="dp-Icon dp-grouped_by"></span>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Grouped by</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">Urgency</span>
                            </span>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <div class="dp-SortIconDescription">
                            <span class="dp-Icon dp-sort"></span>
                            <span class="dp-SortDescription">DSC</span>
                        </div>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Sort by</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">Date of last r...</span>
                            </span>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <span class="dp-Icon dp-faceted_by"></span>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Faceted by</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">3 Agents</span>
                            </span>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <span class="dp-Icon Icon--view"></span>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Fields</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">4 fields</span>
                            </span>
                        </span>
                    </li>
                </ul>
            </li>

            <li class="dp-Card-SectionSubtitle dp-Tasks-list">
                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-0"></input>
                        <label for="my-task-2-0"></label>
                    </span>
                </span>
                <span class="dp-LevelCol">
                    <span class="dp-Card-title">OVERDUE</span>
                </span>
            </li>

            <!-- 1 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-1">
                        <label for="my-task-2-1"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve is-active"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>

                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">

                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">Private</li>
                                <li class="dp-Menu-linkItem">Public</li>
                                <li class="dp-Menu-linkItem">Department</li>
                                <li class="dp-Menu-linkItem">Support</li>
                                <li class="dp-Menu-linkItem">Sales</li>
                            </ul>
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>

                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 2 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-2">
                        <label for="my-task-2-2"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Add comment<button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 3 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list is-hover">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-3">
                        <label for="my-task-2-3"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings is-active"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title is-active">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 4 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-4">
                        <label for="my-task-2-4"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 5 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-5">
                        <label for="my-task-2-5"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 6 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-6">
                        <label for="my-task-2-6"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <a href="#" class="dp-Date-link">2 days 3 hrs</a>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!--  -->
            <li class="dp-Card-SectionSubtitle dp-Tasks-list">
                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-0-1"></input>
                        <label for="my-task-2-0-1"></label>
                    </span>
                </span>
                <span class="dp-LevelCol">
                    <span class="dp-Card-title">TODAY</span>
                </span>
            </li>


            <!-- 7 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-7">
                        <label for="my-task-2-7"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 8 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-8">
                        <label for="my-task-2-8"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 9 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list Task--complete">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-9">
                        <label for="my-task-2-9"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 10 -->
            <li class="dp-Card dp-Level LevelCol is-active dp-Tasks-list Task--completed">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-2-10">
                        <label for="my-task-2-10"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

        </ul>
    </form>
</div>
```


<h4>Listview/New task - in completion</h4>
```html @preview
<div class="dp-MainWrapper">
    <form>
        <ul class="dp-CardList is-hoverable">

            <li class="dp-Card-SectionTitle dp-Tasks-list Level-justify-between">
                <span class="dp-LevelCol">
                    <span class="dp-Icon Icon--menu"></span>
                    <span class="dp-Card-title">My Tasks <a href="#" class="dp-qt">(9)</a></span>
                    <span class="dp-Icon Icon--down-caret Icon--primary"></span>
                </span>

                <ul class="View-group">
                    <li class="dp-Icon dp-list_view is-active"></li>
                    <li class="dp-Icon Icon--Table-view"></li>
                    <li class="dp-Icon dp-kanban_view"></li>
                </ul>
            </li>

            <li class="dp-orderingbar--Wrap">
                <ul class="dp-FilterControlsList newControlsList dp-orderingbar">
                    <li class="dp-ListPane">
                        <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="task-ordering-3-1">
                            <label for="task-ordering-3-1"></label>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <span class="dp-Icon dp-grouped_by"></span>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Grouped by</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">Urgency</span>
                            </span>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <div class="dp-SortIconDescription">
                            <span class="dp-Icon dp-sort"></span>
                            <span class="dp-SortDescription">DSC</span>
                        </div>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Sort by</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">Date of last r...</span>
                            </span>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <span class="dp-Icon dp-faceted_by"></span>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Faceted by</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">3 Agents</span>
                            </span>
                        </span>
                    </li>
                    <li class="dp-ListPane dp-DropDownItem">
                        <span class="dp-Icon Icon--view"></span>
                        <span class="dp-SelectGroup">
                            <span class="dp-ItemRow">
                                <span class="dp-Title">Fields</span>
                                <button class="dp-Arrow"></button>
                            </span>
                            <span class="dp-ItemRow">
                                <span class="dp-Subtitle">4 fields</span>
                            </span>
                        </span>
                    </li>
                </ul>
            </li>

            <!-- add new card -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list dp-NewCard">
                <span class="dp-LevelItem Level-justify-between">

                    <span class="dp-LevelCol">
                        <span class="dp-CustomCheckbox">
                            <input type="checkbox" class="dp-ControlInput" id="my-task-3-0"></input>
                            <label for="my-task-3-0"></label>
                       

                            <span class="dp-Task-title dp-NewTitle">
                                <span class="dp-Icon dp-Approve"></span>
                                <span class="dp-Card-title" contenteditable="true">New task</span>
                            </span>

                         </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">Today</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>

                <!-- Icon hover -->
                <span class="dp-Cog">
                    <span class="dp-Icon dp-settings"></span>
                    <ul class="dp-Menu">
                        <li class="dp-Menu-linkItem">
                            <span class="dp-Icon dp-Bin"></span>
                            <a href="#" class="dp-Menu-link">
                                Delete
                            </a>
                        </li>
                    </ul>
                </span>

                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Public
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                </span>
            </li>

            <li class="dp-Card-SectionSubtitle dp-Tasks-list">
                <span class="dp-LevelCol">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-3-1"></input>
                        <label for="my-task-3-1"></label>
                    </span>
                </span>
                <span class="dp-LevelCol">
                    <span class="dp-Card-title">OVERDUE</span>
                </span>
            </li>

            <!-- 1 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-3-2">
                        <label for="my-task-3-2"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve is-active"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>

                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>

                </span>

                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">

                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                            <ul class="dp-Menu">
                                <li class="dp-Menu-linkItem">Private</li>
                                <li class="dp-Menu-linkItem">Public</li>
                                <li class="dp-Menu-linkItem">Department</li>
                                <li class="dp-Menu-linkItem">Support</li>
                                <li class="dp-Menu-linkItem">Sales</li>
                            </ul>
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>

                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 2 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-3-3">
                        <label for="my-task-3-3"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Add comment<button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

            <!-- 3 -->
            <li class="dp-Card dp-Level LevelCol dp-Tasks-list">
                <span class="dp-LevelItem Level-justify-between">
                    <span class="dp-CustomCheckbox">
                        <input type="checkbox" class="dp-ControlInput" id="my-task-3-4">
                        <label for="my-task-3-4"></label>
                        <span class="dp-Task-title">
                            <span class="dp-Icon dp-Approve"></span>
                            <span class="dp-Card-title">Maintenance & Installation of Lighting System</span>
                        </span>
                    </span>
                    <span class="dp-DateGroup">
                        <span class="dp-Icon dp-group"></span>
                        <span href="#" class="dp-Date-link">
                            <span class="dp-Date">2 days</span>
                            <span class="dp-Time">3 hrs</span>
                            <ul class="dp-DateSelect">
                                <li>Today</li>
                                <li>Tomorrow</li>
                                <li class="dp-Datepicker-title is-active">
                                    Date picker
                                    <span class="dp-MonthYear">
                                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                                    </span>
                                    <table class="dp-Datepicker">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td class="dp-old-day">25</td>
                                            <td class="dp-old-day">26</td>
                                            <td class="dp-old-day">27</td>
                                            <td class="dp-old-day">28</td>
                                            <td class="dp-old-day">29</td>
                                            <td class="dp-old-day">30</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td class="is-active">14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td class="dp-new-day">1</td>
                                            <td class="dp-new-day">2</td>
                                            <td class="dp-new-day">3</td>
                                            <td class="dp-new-day">4</td>
                                            <td class="dp-new-day">5</td>
                                        </tr>

                                    </table>
                                </li>
                            </ul>

                            <ul class="dp-TimeSelect">
                                <li>Morning</li>
                                <li>Afternoon</li>
                                <li>
                                    <table class="dp-Timepicker">
                                        <tr>
                                            <td>9am</td>
                                            <td>10am</td>
                                            <td>11am</td>
                                            <td class="is-active">Noon</td>
                                            <td>1pm</td>
                                        </tr>
                                        <tr>
                                            <td>2pm</td>
                                            <td>3pm</td>
                                            <td>4pm</td>
                                            <td>5pm</td>
                                            <td>6pm</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
                <span class="dp-LevelItem dp-LevelLeft">
                    <span class="dp-Diagnose">
                        <a href="" class="dp-Card-link">
                            <span class="dp-Icon dp-link"></span>
                            Diagnose And Repair Electrical Systems
                        </a>
                    </span>
                    <!-- Icon hover -->
                    <span class="dp-Cog">
                        <span class="dp-Icon dp-settings"></span>
                        <ul class="dp-Menu">
                            <li class="dp-Menu-linkItem">
                                <span class="dp-Icon dp-Bin"></span>
                                <a href="#" class="dp-Menu-link">
                                    Delete
                                </a>
                            </li>
                        </ul>
                    </span>
                </span>
                <span class="dp-LevelItem Level-justify-between">
                    <ul class="dp-LevelWrap">
                        <li>
                            <span class="dp-Icon dp-Visibility"></span>
                            Department
                        </li>
                        <li>
                            <span class="dp-Icon dp-iconUserAvatar"></span>
                            Me
                        </li>
                    </ul>
                    <span class="dp-CommentWrap">
                        <span class="dp-Icon dp-iconComents"></span>
                        <span class="dp-Comments-title">Comment <a href="#" class="dp-qt">(2)</a><button class="dp-Arrow"></button></span>
                        <ul class="dp-Comments">
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelItem dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Kenneth James</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>23 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                            </li>
                            <li class="dp-Comments-item">
                                <span class="dp-Level">
                                    <span class="dp-LevelLeft dp-LevelMiddle">
                                        <span class="dp-Icon dp-iconUserAvatar"></span>
                                        <span class="dp-UserName">Victor Moses</span>
                                    </span>
                                    <span class="dp-TimeStatus dp-LevelRight dp-LevelTop">
                                        <span>12 mins ago</span>
                                    </span>
                                </span>
                                <span class="dp-Level">
                                    <span class="dp-txt">
                                        The door led right into it. 'That's very curious!' she thought. 'I must be getting somewhere near the King had said that day.
                                    </span>
                                </span>
                                <div class="dp-ReplyWrapper">
                                    <textarea class="dp-ReplyEditor"></textarea>
                                </div>
                                <div class="dp-ButtonWrapper">
                                    <button class="dp-Button Button--small Button--outlined" type="button">
                                        Add comment
                                    </button>
                                    <button class="dp-Button Button--small Button--outlined Button--outborder" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </span>
                </span>
            </li>

        </ul>
    </form>
</div>
```

<h4>Listview/tasks-datetimeselect</h4>

```html @preview
<div class="dp-MainWrapper">
    <span class="dp-DateGroup">
        <span class="dp-Icon dp-group"></span>
        <span href="#" class="dp-Date-link">
            <span class="dp-Date">Today</span> : <span class="dp-Time">4pm</span>
        </span>
    </span>
</div>
```

```html @preview
<div class="dp-MainWrapper" style="height: 150px">
    <span class="dp-DateGroup date-active">
        <span class="dp-Icon dp-group"></span>
        <span href="#" class="dp-Date-link">
            <span class="dp-Date">Today</span> : <span class="dp-Time">4pm</span>
            <ul class="dp-DateSelect">
                <li>Today</li>
                <li>Tomorrow</li>
                <li class="dp-Datepicker-title">
                    Date picker
                    <span class="dp-DatepickerWrapper">
                        <span class="dp-MonthYear">
                            <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                            <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                        </span>
                        <table class="dp-Datepicker">
                            <tr>
                                <th>S</th>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>T</th>
                                <th>F</th>
                                <th>S</th>
                            </tr>
                            <tr>
                                <td class="dp-old-day">25</td>
                                <td class="dp-old-day">26</td>
                                <td class="dp-old-day">27</td>
                                <td class="dp-old-day">28</td>
                                <td class="dp-old-day">29</td>
                                <td class="dp-old-day">30</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td class="is-active">15</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>17</td>
                                <td>18</td>
                                <td>19</td>
                                <td>20</td>
                                <td>21</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>24</td>
                                <td>25</td>
                                <td>26</td>
                                <td>27</td>
                                <td>28</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>31</td>
                                <td class="dp-new-day">1</td>
                                <td class="dp-new-day">2</td>
                                <td class="dp-new-day">3</td>
                                <td class="dp-new-day">4</td>
                                <td class="dp-new-day">5</td>
                            </tr>

                        </table>
                    </span>
                </li>
            </ul>

        </span>
    </span>
</div>
```

```html @preview
<div class="dp-MainWrapper Datepicker-demo" style="height: 320px">
    <span class="dp-DateGroup date-active">
        <span class="dp-Icon dp-group"></span>
        <span href="#" class="dp-Date-link">
            <span class="dp-Date">Today</span> : <span class="dp-Time">4pm</span>
            <ul class="dp-DateSelect">
                <li>Today</li>
                <li>Tomorrow</li>
                <li class="dp-Datepicker-title is-active">
                    Date picker
                    <span class="dp-MonthYear">
                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                    </span>
                    <table class="dp-Datepicker">
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                        <tr>
                            <td class="dp-old-day">25</td>
                            <td class="dp-old-day">26</td>
                            <td class="dp-old-day">27</td>
                            <td class="dp-old-day">28</td>
                            <td class="dp-old-day">29</td>
                            <td class="dp-old-day">30</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td class="is-active">14</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>31</td>
                            <td class="dp-new-day">1</td>
                            <td class="dp-new-day">2</td>
                            <td class="dp-new-day">3</td>
                            <td class="dp-new-day">4</td>
                            <td class="dp-new-day">5</td>
                        </tr>

                    </table>
                </li>
            </ul>

        </span>
    </span>
</div>
```

```html @preview
<div class="dp-MainWrapper" style="height: 250px">
    <span class="dp-DateGroup time-active">
        <span class="dp-Icon dp-group"></span>
        <span href="#" class="dp-Date-link">
            <span class="dp-Date">Today</span> : <span class="dp-Time">4pm</span>
            <ul class="dp-DateSelect">
                <li>Today</li>
                <li>Tomorrow</li>
                <li class="dp-Datepicker-title is-active">
                    Date picker
                    <span class="dp-MonthYear">
                        <span>December<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                        <span>2019<span class="dp-Icon Icon--down-caret Icon--primary"></span></span>
                    </span>
                    <table class="dp-Datepicker">
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                        <tr>
                            <td class="dp-old-day">25</td>
                            <td class="dp-old-day">26</td>
                            <td class="dp-old-day">27</td>
                            <td class="dp-old-day">28</td>
                            <td class="dp-old-day">29</td>
                            <td class="dp-old-day">30</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td class="is-active">14</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>31</td>
                            <td class="dp-new-day">1</td>
                            <td class="dp-new-day">2</td>
                            <td class="dp-new-day">3</td>
                            <td class="dp-new-day">4</td>
                            <td class="dp-new-day">5</td>
                        </tr>

                    </table>
                </li>
            </ul>

            <ul class="dp-TimeSelect">
                <li>Morning</li>
                <li>Afternoon</li>
                <li>
                    <table class="dp-Timepicker">
                        <tr>
                            <td>9am</td>
                            <td>10am</td>
                            <td>11am</td>
                            <td class="is-active">Noon</td>
                            <td>1pm</td>
                        </tr>
                        <tr>
                            <td>2pm</td>
                            <td>3pm</td>
                            <td>4pm</td>
                            <td>5pm</td>
                            <td>6pm</td>
                        </tr>
                    </table>
                </li>
            </ul>

        </span>
    </span>
</div>
```

```html @preview
<div class="dp-MainWrapper">
    <span class="dp-DateGroup">
        <span class="dp-Icon dp-group"></span>
        <span href="#" class="dp-Date-link">
            <span class="dp-Date">Tomorrow</span> : <span class="dp-Time">Noon</span>
        </span>
    </span>
</div>
```



## Listview/CRM

<h4>Listview/CRM-organizations</h4>
```html @preview
<form>
    <ul class="dp-CardList">

        <!-- 1 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-1"></input>
                    <label for="organizations-1"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-IconPlane"></span>
                    <span class="dp-Card-title">Warephase</span>
                </span>
                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--frame"></span>
                    <span class="dp-title">Members <span class="dp-qt">(6)</span></span>
                </span>
            </span>

            <span class="dp-LevelCol dp-LevelRight">
                <span class="dp-IconGroup">
                    <span class="Icon--circle dp-iconBug"></span>
                    <span class="dp-Badge Badge--round Badge--white"></span>
                    <span class="dp-Icon Icon--clock Icon--primary"></span>
                </span>
                <span class="dp-TimeStatus dp-LevelBottom">
                    <span class="dp-Tag Tag--small Tag--danger">Failed</span>
                </span>
            </span>
        </li>

        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-2"></input>
                    <label for="organizations-2"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-IconPlane"></span>
                    <span class="dp-Card-title">Faxquote</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--frame"></span>
                    <span class="dp-title">Members <span class="dp-qt">(2)</span></span>
                </span>
            </span>
        </li>

        <!-- 3 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-3"></input>
                    <label for="organizations-3"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-IconPlane"></span>
                    <span class="dp-Card-title">Zencorporation</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--frame"></span>
                    <span class="dp-title">Members <span class="dp-qt">(1)</span></span>
                </span>
            </span>
        </li>

        <!-- 4 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-4"></input>
                    <label for="organizations-4"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-IconPlane"></span>
                    <span class="dp-Card-title">Plusstrip</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--frame"></span>
                    <span class="dp-title">Members <span class="dp-qt">(6)</span></span>
                </span>
            </span>
        </li>

        <!-- 5 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-5"></input>
                    <label for="organizations-5"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-IconPlane"></span>
                    <span class="dp-Card-title">Iselectrics</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--frame"></span>
                    <span class="dp-title">Members <span class="dp-qt">(12)</span></span>
                </span>
            </span>
        </li>

        <!-- 6 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-6"></input>
                    <label for="organizations-6"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-IconPlane"></span>
                    <span class="dp-Card-title">Donware</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--frame"></span>
                    <span class="dp-title">Members <span class="dp-qt">(7)</span></span>
                </span>
            </span>
        </li>

    </ul>
</form>
```

<h4>Listview/CRM-members</h4>
```html @preview
<form>
    <ul class="dp-CardList Card-tickets-organizations">

        <!-- 1 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-7"></input>
                    <label for="organizations-7"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Card-title">Shayne Bowens</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-title">Tickets <span class="dp-qt">(2)</span></span>
                </span>
            </span>
        </li>

        <!-- 2 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-8"></input>
                    <label for="organizations-8"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Card-title">Maryrose Ferranti</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-title">Tickets <span class="dp-qt">(4)</span></span>
                </span>
            </span>
        </li>

        <!-- 3 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-9"></input>
                    <label for="organizations-9"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Card-title">Syble Danos</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-title">Tickets <span class="dp-qt">(3)</span></span>
                </span>
            </span>
        </li>

        <!-- 4 -->
        <li class="dp-Card dp-Level">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-10"></input>
                    <label for="organizations-10"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Card-title">Donella Hendriks</span>
                </span>

                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-title">Tickets <span class="dp-qt">(2)</span></span>
                </span>
            </span>
        </li>

        <!-- 5 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-11"></input>
                    <label for="organizations-11"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Card-title">Leonardo Mckee</span>
                </span>
                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-title">Tickets <span class="dp-qt">(12)</span></span>
                </span>
            </span>
        </li>

        <!-- 6 -->
        <li class="dp-Card dp-Level is-active">
            <span class="dp-LevelCol">
                <span class="dp-CustomCheckbox">
                    <input type="checkbox" class="dp-ControlInput" id="organizations-12"></input>
                    <label for="organizations-12"></label>
                </span>
            </span>

            <span class="dp-LevelCol">
                <span class="dp-Title Title-Icon dp-LevelTop">
                    <span class="dp-Icon dp-iconUserAvatar"></span>
                    <span class="dp-Card-title">Glynis Marquette</span>
                </span>
                <span class="dp-Card-subtitle">
                    <span class="dp-Icon Icon--email"></span>
                    <span class="dp-title">Tickets <span class="dp-qt">(9)</span></span>
                </span>
            </span>
        </li>

    </ul>
</form>
```
