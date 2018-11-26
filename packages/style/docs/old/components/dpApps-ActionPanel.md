---
title: Action Panel - Search List Items
---

```html @preview
<div class="dpApps-ActionPanel">
  <div class="dpApps-HeaderAppPanel dpApps-Level">
    <div class="dpApps-LevelLeft">
      <i class="dpApps-Icon">
        <img src="/agent-interface/style/img/docs/trello-logo.svg" alt="">
      </i>
      <span class="dpApps-HeaderTitle">Find</span>
    </div>
    <div class="dpApps-LevelRight">
      <i class="dpApps-IconClose"></i>
    </div>
  </div>
  <div class="dpApps-ActionPanelBody">
    <span class="dpApps-ActionPanelTitle">Search for a card</span>
    <div class="dpApps-InputSearchWrap">
      <div class="dpApps-IconSearchWrap">
        <i class="dpApps-IconSearch"></i>
      </div>
      <input class="dpApps-Input dpApps-InputSearch" type="text" placeholder="Search">
      <i class="dpApps-IconClose"></i>
    </div>
    <div class="dpApps-Scrollable" style="height: 200px">
      <div class="dpApps-ScrollableBody">
        <div class="dpApps-ListItem">
          <div class="dpApps-ListItemRow dpApps-ListItemRow--spaceBottom">
            <i class="dpApps-Icon">
              <img src="/agent-interface/style/img/docs/trello-logo.svg" alt="">
            </i>
            <span class="dpApps-ListItemTitle">Design of messages</span>
            <div class="dpApps-ListItemRowAction">
              <i class="dpApps-IconSettings"></i>
              <div class="dpApps-ListSettingDropdown">
                <div class="dpApps-ListSettingItem">
                  <i class="dpApps-IconOpen"></i>
                  <span class="dpApps-ListSettingItem--text">Open</span>
                </div>
                <div class="dpApps-ListSettingItem">
                  <i class="dpApps-IconLink"></i>
                  <span class="dpApps-ListSettingItem--text">Unlink</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dpApps-ListItemRow dpApps-Level">
            <div class="dpApps-ListItemContent dpApps-LevelLeft">
              <span>In Dev</span><span class="dpApps-Divider"> | </span><span>Mobile on Done</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
```