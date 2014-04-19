/* Bringing in the font */
@font-face {
  font-family: "univox";
  src: url("../assets/univox_regular_macroman/univox-webfont.eot");
  src: url("../assets/univox_regular_macroman/aunivox-webfont.eot?#iefix") format("embedded-opentype"), url("../assets/univox_regular_macroman/univox-webfont.woff") format("woff"), url("../assets/univox_regular_macroman/univox-webfont.ttf") format("truetype"), url("../assets/univox_regular_macroman/univox-webfont.svg#univox") format("svg"); }

/*Specification for defaults*/
body {
  background-color: transparent;
  margin: 0px; }
  body p {
    position: relative; }
    body p:first-child {
      right: 20%; }
    body p:nth-child(3) {
      left: 20%; }
    body p:last-child {
      left: 20%; }

/*Specifications for layout*/
#mainLogo {
  width: 23em;
  height: 23em;
  position: absolute; }

#lineStructure {
  height: 51em;
  width: 70.3em;
  position: absolute;
  top: -17em;
  left: -30.5em;
  transition-duration: 2s;
  -webkit-transition-duration: 2s; }

/*Specifications for very nice web design footer*/
footer {
  position: fixed;
  right: 1.5em;
  bottom: 0em;
  z-index: 3; }
  footer #vlogo {
    height: 3em;
    width: 3em;
    float: right; }

/*Specifications for menu*/
.menu {
  z-index: 3;
  position: absolute;
  top: 32.5em;
  word-spacing: 3.5em;
  left: -0.5em; }
  .menu .menuItem {
    font-family: "univox", sans-serif;
    display: inline;
    font-size: 0.6em; }
    .menu .menuItem:hover {
      text-shadow: 0 0 10px grey;
      cursor: pointer; }

/*Specifications for content */
.content {
  width: 20em;
  font-size: 0.75em;
  position: absolute;
  padding-top: 2em;
  text-indent: 2em;
  opacity: 0;
  left: 23em;
  transition-duration: 0.75s;
  -webkit-transition-duration: 0.75s;
  font-family: "Gafata", sans-serif; }

.links {
  position: relative;
  left: 10em;
  list-style-type: none; }

.hidden {
  display: none; }

/*Classes for animations*/
.activated {
  transition-duration: 0.75s;
  -webkit-transition-duration: 0.75s;
  transition-delay: 0.75s;
  -webkit-transition-delay: 0.75s;
  opacity: 1;
  left: 26em;
  z-index: 3; }

.open #lineStructure {
  transition-duration: 2s;
  -webkit-transition-duration: 2s;
  left: -10.5em; }