/*
 * @Descripttion: 
 * @version: 
 * @Author: lihw02
 * @Date: 2021-01-19 11:55:04
 * @LastEditors: lihw02
 * @LastEditTime: 2021-01-19 14:30:25
 */
require([
  'gitbook'
], function(gitbook) {
  var options = {
    margin: 0,
    background: '#fff',
    scrollOffset: 40
  };
  var selector = 'img';

  var init = function() {
    mediumZoom(selector, options);
  }

  gitbook.events.bind('start', function(e, config){ 
    var configOption = config['medium-zoom-conf'];
    if (configOption) {
      if(configOption.selector) {
        selector = configOption.selector;
      }
      for (var item in options) {
        if (options.hasOwnProperty(item) && (item in configOption)) {
          options[item] = configOption[item];
        }
      }
    }
  });

  gitbook.events.bind('page.change', function(e, config) {
    init();
  });
});