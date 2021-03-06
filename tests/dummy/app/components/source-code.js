import Ember from 'ember';
/* global Prism */

export default Ember.Component.extend({
  tagName: "pre",
  language: undefined,
  codeClass: Ember.computed(function() {
    var lang = this.get("language");
    return "language-" + lang;
  }),

  didInsertElement: function() {
    var code = this.element.children[0];
    Prism.highlightElement(code);
  }

});
