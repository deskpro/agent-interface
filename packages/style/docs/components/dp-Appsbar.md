---
title: Apps bar
---

```html @preview
<ul class="dp-Tabs Tabs--apps-bar Tabs--vertical">

  <li class="dp-Tabs-item border">
    <button class="dp-Button Button--Apps">
      <span class="dp-Icon Icon--left-caret"></span>
    </button>
  </li>

  <li class="Tabs--devider"></li>

  <li class="dp-Tabs-item">
    <button class="dp-Button Button--Apps">
      <span class="dp-Icon Icon-trello"></span>
    </button>
  </li>

  <li class="dp-Tabs-item">
    <button class="dp-Button Button--Apps">
      <span class="dp-Icon Icon-youtrack"></span>
    </button>
  </li>

  <li class="dp-Tabs-item">
    <button class="dp-Button Button--Apps">
      <span class="dp-Icon Icon-mailchimp"></span>
    </button>
  </li>

  <li class="Tabs--devider"></li>

  <li class="dp-Tabs-item">
    <button class="dp-Button Button--Apps">
      <span class="dp-Icon Icon-jira"></span>
    </button>
  </li>

  <li class="Tabs--devider"></li>

  <li class="dp-Tabs-item">
    <button class="dp-Button Button--Apps">
      <span class="dp-Icon Icon-salesforse"></span>
    </button>
  </li>

  <li class="Tabs--devider"></li>

</ul>
```



```html @preview
<!-- <ul class="dp-Tabs Tabs--apps-bar">

  <li class="dp-Tabs-item">
    <ul class="dp-LevelLeft">

      <li class="dp-Tabs-item is-expanded">
        <button class="dp-Button Button--Apps is-selected">
          <span class="dpApps-IconHamburger"></span>
        </button>
      </li>

      <li class="dp-Tabs-item">
        <button class="dp-Button Button--Apps">
          <span class="dp-Icon Icon-jira"></span>
        </button>
      </li>

    </ul>
  </li>

  <li class="dp-Tabs-item">
    <button class="dp-Button Button--Apps">
      <span class="dp-Icon Icon--down-caret Icon--left-caret"></span>
    </button>
  </li>

</ul> -->





<div class="dpApps-AppPanel">

<!--     <div class="dpApps-AppTabs is-horizontal">
        <div class="dpApps-ButtonTabs--wrap">
            <button class="dpApps-ButtonTabs is-selected">
                <span class="dpApps-IconHamburger"></span>
            </button>
            <button class="dpApps-ButtonTabs">
                <img class="dpApps-ButtonsImg" src="/agent-interface/style/img/docs/jira-logo.svg" alt=""></img>
            </button>
        </div>
        <button class="dpApps-ButtonTabs ButtonTabs-arrow">
            <button class="dpApps-ButtonTabs ButtonTabs-arrow dp-DropMenuJs"><i class="dpApps-IconArrow iconArrow--left"></i></button>
        </button>
    </div> -->


    <ul class="dp-Tabs Tabs--apps-bar">

        <li class="dp-Tabs-item">
            <ul class="dp-LevelLeft">
                <li class="dp-Tabs-item is-expanded">
                    <button class="dp-Button Button--Apps is-selected">
                        <span class="dpApps-IconHamburger"></span>
                    </button>
                </li>

                <li class="dp-Tabs-item">
                    <button class="dp-Button Button--Apps">
                        <span class="dp-Icon Icon-jira"></span>
                    </button>
                </li>
            </ul>
        </li>

        <li class="dp-Tabs-item">
            <button class="dp-Button Button--Apps">
                <span class="dp-Icon Icon--down-caret Icon--left-caret"></span>
            </button>
        </li>

    </ul>


    <div class="dpApps-AppPanelBody">


        <div class="dpApps-AppFrame">
            <div class="dpApps-AppBar dpApps-Level">
                <div class="dpApps-LevelLeft">
                    <span class="dp-Icon Icon-trello"></span>
                    <span class="dpApps-Title">Trello</span>
                </div>
                <div class="dpApps-LevelRight">
                    <a href="" class="dp-Icon Icon-refresh"></a>
                    <a href="" class="dp-Icon Icon--down-caret"></a>
                </div>
            </div>

            <!-- hide content -->
            <section class="dpApps-AppBody dpApps-Section">

                <div class="dpApps-Level">
                    <div class="dpApps-LevelLeft">
                        <span class="dpApps-AppBodyTitle">Linked cards</span>
                    </div>
                    <div class="dpApps-ActionList dpApps-LevelRight">
                        <a href="" class="dpApps-ActionListItem">
                            <span class="dp-Icon dp-search"></span>
                            <span class="dpApps-ActionListLabel">Find</span>
                        </a>
                        <a href="" class="dpApps-ActionListItem">
                            <span class="dp-Icon dp-new"></span>
                            <span class="dpApps-ActionListLabel">Create</span>
                        </a>
                    </div>
                </div>

                <div class="dpApps-AppBodyItem">
                    <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
                        <span class="dp-Icon Icon-trello"></span>
                        <span class="dpApps-LevelItemTitle">SSO CHROME ISSUE </span>
                    </div>
                    <div class="dpApps-AppBodyItemRow dpApps-Level">
                        <div class="dpApps-AppBodyContent dpApps-LevelLeft">
                            <span>In Planning</span>
                            <span class="dpApps-AppBodySeparator"> | </span>
                            <span>01/01/2019</span>
                        </div>
                        <div class="dpApps-LevelRight">
                            <div class="dp-Badge Badge--round Badge--grey"></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        
        <div class="dpApps-AppFrame">
            <div class="dpApps-AppBar dpApps-Level">
                <div class="dpApps-LevelLeft">
                    <span class="dp-Icon Icon-salesforse"></span>
                    <span class="dpApps-Title">Salesforce</span>
                </div>
                <div class="dpApps-LevelRight">
                    <a href="" class="dp-Icon Icon-refresh"></a>
                    <a href="" class="dp-Icon Icon--down-caret"></a>
                </div>
            </div>
        </div>


        <div class="dpApps-AppFrame">
            <div class="dpApps-AppBar dpApps-Level">
                <div class="dpApps-LevelLeft">
                    <span class="dp-Icon Icon-youtrack"></span>
                    <span class="dpApps-Title">You Track</span>
                </div>
                <div class="dpApps-LevelRight">
                    <a href="" class="dp-Icon Icon-refresh"></a>
                    <a href="" class="dp-Icon Icon--down-caret"></a>
                </div>
            </div>
        </div>

        <div class="dpApps-AppFrame">
            <div class="dpApps-AppBar dpApps-Level">
                <div class="dpApps-LevelLeft">
                    <span class="dp-Icon Icon-shopify"></span>
                    <span class="dpApps-Title">Shopify</span>
                </div>
                <div class="dpApps-LevelRight">
                    <a href="" class="dp-Icon Icon-refresh"></a>
                    <a href="" class="dp-Icon Icon--down-caret"></a>
                </div>
            </div>
        </div>

        <div class="dpApps-AppFrame">
            <div class="dpApps-AppBar dpApps-Level">
                <div class="dpApps-LevelLeft">
                    <div class="dpApps-AppBarIcon-wrap">
                        <div class="dpApps-Icon">
                            <span class="dp-Icon Icon-mailchimp"></span>
                        </div>
                    </div>
                    <span class="dpApps-Title">Mailchimp</span>
                </div>
                <div class="dpApps-LevelRight">
                    <a href="" class="dp-Icon Icon-refresh"></a>
                    <a href="" class="dp-Icon Icon--down-caret"></a>
                </div>
            </div>
        </div>

        <div class="dpApps-AddApp">
            <div class="dpApps-Level">
                <a href="" class="dpApps-LevelLeft">
                  <span class="dp-Icon dp-new"></span>
                  <span class="dpApps-AddApp-text">Add an app</span>
                </a>
                <div class="dpApps-LevelRight">
                    <a href="" class="dp-Icon dp-close"></a>
                </div>
            </div>
        </div>

    </div>

</div>
```

