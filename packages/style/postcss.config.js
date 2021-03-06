/* eslint-disable global-require */
const postcss = require("postcss");
const contrast = require("contrast");

const contrastPlugin = postcss.plugin(
  "postcss-contrast",
  ({ dark, light } = {}) => css => {
    css.walkDecls(decl => {
      if (!decl.value || decl.value.indexOf("contrast(") === -1) {
        return;
      }

      let index = decl.value.indexOf("(");
      const last = decl.value.indexOf(")");
      // eslint-disable-next-line no-plusplus
      const value = decl.value.slice(++index, last);
      const black = "#000";
      const white = "#fff";

      /* eslint-disable consistent-return,no-param-reassign */
      return new Promise(resolve => {
        if (contrast(value) === "light") {
          decl.value = !dark ? black : dark;
        } else if (!light) {
          decl.value = white;
        } else {
          decl.value = light;
        }
        resolve();
      });
      /* eslint-enable consistent-return,no-param-reassign */
    });
  }
);

module.exports = ctx => ({
  map: ctx.options.map,
  plugins: [
    // require("stylelint"),
    require("postcss-import")({ root: ctx.file.dirname }),
    require("postcss-autoreset")({
      reset: {
        animation: "none 0s ease 0s 1 normal none running",
        background:
          "transparent none repeat 0 0 / auto auto padding-box border-box scroll",
        border: "none",
        "border-collapse": "collapse",
        "border-image": "none",
        "border-radius": "0",
        "border-spacing": "0",
        bottom: "auto",
        "box-shadow": "none",
        "box-sizing": "border-box",
        "caption-side": "top",
        clear: "none",
        clip: "auto",
        color: "#000",
        columns: "auto",
        "column-count": "auto",
        "column-fill": "balance",
        "grid-column-gap": "normal",
        "column-gap": "normal",
        "column-rule": "medium none currentColor",
        "column-span": "1",
        "column-width": "auto",
        content: "none",
        cursor: "auto",
        display: "initial",
        float: "none",
        "font-family": "var(--font-family-base)",
        "font-size": "var(--font-size-base)",
        "font-style": "normal",
        "font-variant": "normal",
        "font-weight": "normal",
        "font-stretch": "normal",
        "line-height": "var(--line-height-base)",
        height: "auto",
        hyphens: "none",
        left: "auto",
        "letter-spacing": "none",
        "list-style": "none",
        margin: "0",
        "max-height": "none",
        "max-width": "none",
        "min-height": "0",
        "min-width": "0",
        opacity: "1",
        outline: "none",
        overflow: "visible",
        "overflow-x": "visible",
        "overflow-y": "visible",
        padding: "0",
        position: "static",
        right: "auto",
        "table-layout": "auto",
        "text-align": "left",
        "text-align-last": "auto",
        "text-decoration": "none",
        "text-indent": "0",
        "text-shadow": "none",
        "text-transform": "none",
        top: "auto",
        transform: "none",
        "transform-origin": "50% 50% 0",
        "transform-style": "flat",
        transition: "none",
        "vertical-align": "baseline",
        visibility: "visible",
        "white-space": "normal",
        width: "auto",
        "word-spacing": "normal",
        "z-index": "auto"
      },
      rulesMatcher: "suit"
    }),
    require("postcss-extend-rule")({
      onFunctionalSelector: "warn",
      onRecursiveExtend: "throw",
      onUnusedExtend: "warn"
    }),
    require("postcss-preset-env")({
      stage: 0,
      features: {
        "custom-properties": {
          preserve: false,
          warnings: true
        },
        "nesting-rules": true
      }
    }),
    require("postcss-flexbugs-fixes"),
    contrastPlugin(),
    require("postcss-inline-svg")(),
    require("postcss-svgo")(),
    require("postcss-reporter")({ clearReportedMessages: false })
  ]
});
/* eslint-enable global-require */
