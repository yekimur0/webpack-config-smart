/* eslint-disable eol-last */
/* eslint-disable require-jsdoc */
export class DomListener {
 constructor($root, listeners = []) {
  if (!$root) {
   throw new Error('No $root provided for DomListener');
  }
  this.$root = $root
  this.listeners = listeners
 }
 initDOMListeners() {
  
 }
 removeDOMListeners() {

 }
}