---
title: App Frame
---

```html @preview
<div class="dpApps-AppFrame">
  <div class="dpApps-AppBar dpApps-Level">
    <div class="dpApps-LevelLeft">
      <div class="dpApps-AppBarIcon-wrap">
        <div class="dpApps-Icon">
          <img src="/agent-interface/style/img/docs/trello-logo.svg" alt="">
        </div>
        <span class="dpApps-IconBadge is-inactive">2</span>
      </div>
      <span class="dpApps-Title">Trello</span>
    </div>
    <div class="dpApps-LevelRight">
      <a href="" class="dpApps-ActionListIcon dpApps-Icon">
        <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt="">
      </a>
      <a href="" class="dpApps-ActionListIcon">
        <i class="dpApps-IconArrow iconArrow--top"></i>
      </a>
    </div>
  </div>
  <section class="dpApps-AppBody dpApps-Section">
    <div class="dpApps-Level">
      <div class="dpApps-LevelLeft">
        <span class="dpApps-AppBodyTitle">Linked cards</span>
      </div>
      <div class="dpApps-ActionList dpApps-LevelRight">
        <a href="" class="dpApps-ActionListItem">
          <i class="dpApps-IconSearch"></i>
          <span class="dpApps-ActionListLabel">Find</span>
        </a>
        <a href="" class="dpApps-ActionListItem">
          <i class="dpApps-IconPlus"></i>
          <span class="dpApps-ActionListLabel">Create</span>
        </a>
      </div>
    </div>
    <div class="dpApps-AppBodyItem">
      <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
        <i class="dpApps-Icon">
          <img src="/agent-interface/style/img/docs/trello-logo.svg" alt="">
        </i>
        <span class="dpApps-LevelItemTitle">Blog calender</span>
        <div class="dpApps-AppBodySetting">
          <i class="dpApps-IconSettings"></i>
          <div class="dpApps-AppSettingDropdown">
            <div class="dpApps-AppSettingItem">
              <i class="dpApps-IconOpen"></i>
              <span class="dpApps-AppSettingItem--text">Open</span>
            </div>
            <div class="dpApps-AppSettingItem">
              <i class="dpApps-IconUnlink"></i>
              <span class="dpApps-AppSettingItem--text">Unlink</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dpApps-AppBodyItemRow dpApps-Level">
        <div class="dpApps-AppBodyContent dpApps-LevelLeft">
          <span>In Planning</span><span class="dpApps-AppBodySeparator"> | </span><span>Linked 12/06/2018</span>
        </div>
        <div class="dpApps-LevelRight">
          <i class="dpApps-Icon dpApps-Icon--Round">
            <img src="/agent-interface/style/img/docs/AppBodyIcon.jpg" alt="">
          </i>
        </div>
      </div>
    </div>
    <div class="dpApps-AppBodyItem">
      <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
        <i class="dpApps-Icon">
          <img src="/agent-interface/style/img/docs/trello-logo.svg" alt="">
        </i>
        <span class="dpApps-LevelItemTitle">New home page design</span>
        <div class="dpApps-AppBodySetting">
          <i class="dpApps-IconSettings"></i>
          <div class="dpApps-AppSettingDropdown">
            <div class="dpApps-AppSettingItem">
              <i class="dpApps-IconOpen"></i>
              <span class="dpApps-AppSettingItem--text">Open</span>
            </div>
            <div class="dpApps-AppSettingItem">
              <i class="dpApps-IconUnlink"></i>
              <span class="dpApps-AppSettingItem--text">Unlink</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dpApps-AppBodyItemRow dpApps-Level">
        <div class="dpApps-AppBodyContent dpApps-LevelLeft">
          <span>In Planning</span><span class="dpApps-AppBodySeparator"> | </span><span>Linked 12/06/2018</span>
        </div>
        <div class="dpApps-LevelRight">
          <i class="dpApps-Icon dpApps-Icon--Round">
            <img src="/agent-interface/style/img/docs/AppBodyIcon.jpg" alt="">
          </i>
        </div>
      </div>
    </div>
  </section>
</div>
```

# Inactive
Need add class "is-inactive" for dpApps-AppFrame
```html @preview
<div class="dpApps-AppFrame is-inactive">
  <div class="dpApps-AppBar dpApps-Level">
    <div class="dpApps-LevelLeft">
      <div class="dpApps-AppBarIcon-wrap">
        <div class="dpApps-Icon">
          <img src="/agent-interface/style/img/docs/trello-logo.svg" alt="">
        </div>
        <span class="dpApps-IconBadge is-inactive">2</span>
      </div>
      <span class="dpApps-Title">Trello</span>
    </div>
    <div class="dpApps-LevelRight">
      <a href="" class="dpApps-ActionListIcon dpApps-Icon">
        <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt="">
      </a>
      <a href="" class="dpApps-ActionListIcon">
        <i class="dpApps-IconArrow iconArrow--top"></i>
      </a>
    </div>
  </div>
  <section class="dpApps-AppBody dpApps-Section">
    <div class="dpApps-Level">
      <div class="dpApps-LevelLeft">
        <span class="dpApps-AppBodyTitle">Linked cards</span>
      </div>
      <div class="dpApps-ActionList dpApps-LevelRight">
        <a href="" class="dpApps-ActionListItem">
          <i class="dpApps-IconSearch"></i>
          <span class="dpApps-ActionListLabel">Find</span>
        </a>
        <a href="" class="dpApps-ActionListItem">
          <i class="dpApps-IconPlus"></i>
          <span class="dpApps-ActionListLabel">Create</span>
        </a>
      </div>
    </div>
  </section>
</div>
```
# Collapsed
Need add class "is-colapsed" for dpApps-AppFrame
```html @preview
<div class="dpApps-AppFrame is-colapsed">
  <div class="dpApps-AppBar dpApps-Level">
    <div class="dpApps-LevelLeft">
      <div class="dpApps-AppBarIcon-wrap">
        <div class="dpApps-Icon">
          <img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt="">
        </div>
        <span class="dpApps-IconBadge is-inactive">1</span>
      </div>
      <span class="dpApps-Title">Mailchimp</span>
    </div>
    <div class="dpApps-LevelRight">
      <a href="" class="dpApps-ActionListIcon dpApps-Icon">
        <img class="dpApps-AppBarIcon" src="/agent-interface/style/img/docs/refresh-icon.jpg" alt="">
      </a>
      <a href="" class="dpApps-ActionListIcon">
        <i class="dpApps-IconArrow iconArrow--top"></i>
      </a>
    </div>
  </div>
  <section class="dpApps-AppBody dpApps-Section">
    <div class="dpApps-Level">
      <div class="dpApps-LevelLeft">
        <span class="dpApps-AppBodyTitle">Linked issues</span>
      </div>
      <div class="dpApps-ActionList dpApps-LevelRight">
        <a href="" class="dpApps-ActionListItem">
          <i class="dpApps-IconSearch"></i>
          <span class="dpApps-ActionListLabel">Find</span>
        </a>
        <a href="" class="dpApps-ActionListItem">
          <i class="dpApps-IconPlus"></i>
          <span class="dpApps-ActionListLabel">Create</span>
        </a>
      </div>
    </div>
    <div class="dpApps-AppBodyItem">
      <div class="dpApps-AppBodyItemRow dpApps-AppBodyItemRow--spaceBottom">
        <i class="dpApps-Icon">
          <img src="/agent-interface/style/img/docs/mailchimp-logo.svg" alt="">
        </i>
        <span class="dpApps-LevelItemTitle">#dpApps-1170-symfony 4/p lorem ipsum</span>
      </div>
      <div class="dpApps-AppBodyItemRow dpApps-Level">
        <div class="dpApps-AppBodyContent dpApps-LevelLeft">
          <span>Linked 12/06/2018</span>
        </div>
        <div class="dpApps-LevelRight">
          <i class="dpApps-Icon dpApps-Icon--Round">
            <img src="/agent-interface/style/img/docs/AppBodyIcon.jpg" alt="">
          </i>
        </div>
      </div>
    </div>
  </section>
</div>
```


# Add App
```html @preview
<div class="dpApps-AddApp">
  <div class="dpApps-Level">
    <a href="" class="dpApps-LevelLeft">
      <i class="dpApps-IconPlus"></i>
      <span class="dpApps-AddApp-text">Add an app</span>
    </a>
    <a href="" class="dpApps-LevelRight">
      <i class="dpApps-IconClose"></i>
    </a>
  </div>
</div>
```