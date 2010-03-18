// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Apple Inc. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/*global module test equals context ok same Q$ htmlbody */
sc_require('panes/menu');

var responder, menu;

module("SC.RootResponder#makeMenuPane", {
  setup: function() {
    responder = SC.RootResponder.create();
    menu = SC.Pane.create();
  },
  
  teardown: function() {
    menu.remove();
    menu = responder = null;
  }
});

test("Returns receiver", function() {
  equals(responder.makeMenuPane(menu), responder, 'returns receiver');
});

test("Sets RootResponder's menuPane", function() {
  equals(responder.get('menuPane'), null, 'precond - menuPane should be null by default');
  responder.makeMenuPane(menu);
  equals(responder.get('menuPane'), menu, 'menuPane should be passed menu');
});

test("menuPane does not affect keyPane", function() {
  var p2 = SC.Pane.create();
  responder.makeKeyPane(p2);
  equals(responder.get('keyPane'), p2, 'precond - pane should be key pane');
  responder.makeMenuPane(menu);
  equals(responder.get('menuPane'), menu, 'menuPane should be set');
  equals(responder.get('keyPane'), p2, 'key pane should not change');
});