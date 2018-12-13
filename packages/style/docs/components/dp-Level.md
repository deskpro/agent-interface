---
title: Level - alignment
---

The structure of a level is the following:

<ul>
  <li>dpApps-Level: main container</li>
  <li style="list-style: none">
    <ul>
      <li>dpApps-LevelLeft for the left side</li>
      <li>dpApps-LevelRight for the right side</li>
      <li style="list-style: none">
        <ul>
          <li>dpApps-LevelItem for each individual element - centered vertically and horizontally </li>
        </ul>
      </li>
      <li>dpApps-LevelTop for the top side</li>
      <li>dpApps-LevelBottom for the bottom side</li>
    </ul>
  </li>
</ul>

In a dpApps-LevelItem, you can then insert almost anything you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Bulma level, they will always be vertically centered.

# Horizontal
```html @preview
<div class="dpApps-Level">

  <div class="dpApps-LevelLeft">
    <button class="dpApps-Button">dpApps-LevelLeft</button>
  </div>
  <div class="dpApps-LevelItem">
    <button class="dpApps-Button Button--small">dpApps-LevelItem</button>
  </div>
  <div class="dpApps-LevelRight">
    <button class="dpApps-Button">dpApps-LevelRight</button>
  </div>
</div>
```

# Vertical
```html @preview

<div class="dpApps-Level">

  <div class="dpApps-LevelTop">
    <button class="dpApps-Button Button--small">dpApps-LevelTop</button>
  </div>
  <div class="dpApps-LevelItem">
    <button class="dpApps-Button Button--large">dpApps-LevelItem</button>
  </div>
  <div class="dpApps-LevelBottom">
    <button class="dpApps-Button Button--small">dpApps-LevelBottom</button>
  </div>
</div>
```