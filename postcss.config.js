const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssPresetEnv = require("postcss-preset-env")({
  autoprefixer: {
    flexbox: "no-2009",
  },
  stage: 3,
});

module.exports = {
  plugins: [
    postcssImport,
    postcssNested,
    postcssFlexbugsFixes,
    postcssPresetEnv,
  ],
};
