// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
if (!ReactRailsUJS) {
    location.reload();
}
ReactRailsUJS.useContext(componentRequireContext);

