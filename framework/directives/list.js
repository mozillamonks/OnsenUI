/**
 * @ngdoc directive
 * @id list
 * @name ons-list
 * @description
 *    [en]Component to defines a list, and the container for ons-list-item(s).[/en]
 *    [ja]リストを表現するためのコンポーネント。ons-list-itemのコンテナとして使用します。[/ja]
 * @param modifier
 * @seealso ons-list-item [en]ons-list-item component[/en][ja]ons-list-itemコンポーネント[/ja]
 * @seealso ons-list-header [en]ons-list-header component[/en][ja]ons-list-headerコンポーネント[/ja]
 * @guide UsingList [en]Using lists[/en][ja]リストを使う[/ja]
 * @codepen yxcCt
 * @example
 * <ons-list>
 *   <ons-list-header>Header Text</ons-list-header>
 *   <ons-list-item>Item</ons-list-item>
 *   <ons-list-item>Item</ons-list-item>
 * </ons-list>
 */
(function() {
  'use strict';

  var module = angular.module('onsen');

  module.directive('onsList', function($onsen) {
    return {
      restrict: 'E',
      scope: false,

      // NOTE: This element must coexists with ng-controller.
      // Do not use isolated scope and template's ng-transclude.
      replace: false,
      transclude: false,

      compile: function(element, attrs) {
        var templater = $onsen.generateModifierTemplater(attrs);

        element.addClass('list ons-list-inner');
        element.addClass(templater('list--*'));
      
        return function(scope, element, attrs) {
          $onsen.fireComponentEvent(element[0], "init"); 
        };
      }
    };
  });
})();

