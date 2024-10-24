(function() {
    // Inspiration:
    // http://coolcarousels.frebsite.nl/c/59/
    // & 
    // https://css-tricks.com/slider-with-sliding-backgrounds/
    var $left_arrow, $right_arrow, animate_next, animate_previous;
  
    $right_arrow = $('#right-arrow');
  
    $left_arrow = $('#left-arrow');
  
    $right_arrow.click(function(e) {
      e.preventDefault();
      $('.slide-holder').velocity('finish'); // finish any current animations
      animate_next('#slide-right');
      animate_next('#slide-center', 175);
      return animate_next('#slide-left', 350);
    });
  
    $left_arrow.click(function(e) {
      e.preventDefault();
      $('.slide-holder').velocity('finish'); // finish any current animations
      animate_previous('#slide-left');
      animate_previous('#slide-center', 175);
      return animate_previous('#slide-right', 350);
    });
  
    animate_next = function(selector, delay = 0, cb = null) {
      return setTimeout(function() {
        var $bg_curr, $bg_next, $bg_prev, $el;
        $el = $(`${selector} .slide-holder`);
        $bg_prev = $el.find('.bg-previous');
        $bg_curr = $el.find('.bg-current');
        $bg_next = $el.find('.bg-next');
        $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
        return $.Velocity.animate($el, { // animate the transform
          translateX: `-${200 / 3}%`,
          duration: 350
        }).then(function(elms) { // reorder the slide-bg's and recenter the slide-holder
          var next_bg_image;
          next_bg_image = $.Velocity.hook($bg_prev, "background-image");
          $.Velocity.hook($bg_prev, "background-image", $.Velocity.hook($bg_curr, "background-image"));
          $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_next, "background-image"));
          $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
          $.Velocity.hook($bg_next, "background-image", next_bg_image);
          if (typeof cb === 'function') {
            return cb(elms);
          }
        });
      }, delay);
    };
  
    animate_previous = function(selector, delay, cb) {
      return setTimeout(function() {
        var $bg_curr, $bg_next, $bg_prev, $el;
        $el = $(`${selector} .slide-holder`);
        $bg_prev = $el.find('.bg-previous');
        $bg_curr = $el.find('.bg-current');
        $bg_next = $el.find('.bg-next');
        $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
        return $.Velocity.animate($el, { // animate the transform
          translateX: "0",
          duration: 350
        }).then(function(elms) { // reorder the slide-bg's and recenter the slide-holder
          var prev_bg_image;
          prev_bg_image = $.Velocity.hook($bg_next, "background-image");
          $.Velocity.hook($bg_next, "background-image", $.Velocity.hook($bg_curr, "background-image"));
          $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_prev, "background-image"));
          $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
          $.Velocity.hook($bg_prev, "background-image", prev_bg_image);
          if (typeof cb === 'function') {
            return cb(elms);
          }
        });
      }, delay);
    };
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3lEO0VBQUE7Ozs7QUFBQSxNQUFBLFdBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQSxFQUFBOztFQUV6RCxZQUFBLEdBQWUsQ0FBQSxDQUFFLGNBQUY7O0VBQ2YsV0FBQSxHQUFjLENBQUEsQ0FBRSxhQUFGOztFQUVkLFlBQVksQ0FBQyxLQUFiLENBQW1CLFFBQUEsQ0FBQyxDQUFELENBQUE7SUFDakIsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtJQUNBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsUUFBbkIsQ0FBNEIsUUFBNUIsRUFERjtJQUVFLFlBQUEsQ0FBYSxjQUFiO0lBQ0EsWUFBQSxDQUFhLGVBQWIsRUFBOEIsR0FBOUI7V0FDQSxZQUFBLENBQWEsYUFBYixFQUE0QixHQUE1QjtFQUxpQixDQUFuQjs7RUFPQSxXQUFXLENBQUMsS0FBWixDQUFrQixRQUFBLENBQUMsQ0FBRCxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxjQUFGLENBQUE7SUFDQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLFFBQW5CLENBQTRCLFFBQTVCLEVBREY7SUFFRSxnQkFBQSxDQUFpQixhQUFqQjtJQUNBLGdCQUFBLENBQWlCLGVBQWpCLEVBQWtDLEdBQWxDO1dBQ0EsZ0JBQUEsQ0FBaUIsY0FBakIsRUFBaUMsR0FBakM7RUFMZ0IsQ0FBbEI7O0VBT0EsWUFBQSxHQUFlLFFBQUEsQ0FBQyxRQUFELEVBQVcsUUFBTSxDQUFqQixFQUFvQixLQUFHLElBQXZCLENBQUE7V0FDYixVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7QUFDYixVQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBO01BQUksR0FBQSxHQUFNLENBQUEsQ0FBRSxDQUFBLENBQUEsQ0FBRyxRQUFILENBQUEsY0FBQSxDQUFGO01BQ04sUUFBQSxHQUFXLEdBQUcsQ0FBQyxJQUFKLENBQVMsY0FBVDtN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QUFRLENBQUMsSUFBWCxDQUFnQixRQUFoQixFQUEwQixrQkFBMUIsQ0FBOUM7UUFDQSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQVgsQ0FBZ0IsR0FBaEIsRUFBcUIsWUFBckIsRUFBbUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFBLEdBQUksQ0FBUixDQUFBLENBQUEsQ0FBbkM7UUFDQSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEIsa0JBQTFCLEVBQThDLGFBQTlDO1FBQ0EsSUFBWSxPQUFPLEVBQVAsS0FBYSxVQUF6QjtpQkFBQSxFQUFBLENBQUcsSUFBSCxFQUFBOztNQU5NLENBSFI7SUFOUyxDQUFYLEVBZ0JFLEtBaEJGO0VBRGlCO0FBdENzQyIsInNvdXJjZXNDb250ZW50IjpbIiMgSW5zcGlyYXRpb246XG4jIGh0dHA6Ly9jb29sY2Fyb3VzZWxzLmZyZWJzaXRlLm5sL2MvNTkvXG4jICYgXG4jIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc2xpZGVyLXdpdGgtc2xpZGluZy1iYWNrZ3JvdW5kcy9cblxuJHJpZ2h0X2Fycm93ID0gJCgnI3JpZ2h0LWFycm93JylcbiRsZWZ0X2Fycm93ID0gJCgnI2xlZnQtYXJyb3cnKVxuXG4kcmlnaHRfYXJyb3cuY2xpY2sgKGUpIC0+XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcuc2xpZGUtaG9sZGVyJykudmVsb2NpdHkoJ2ZpbmlzaCcpICMgZmluaXNoIGFueSBjdXJyZW50IGFuaW1hdGlvbnNcbiAgYW5pbWF0ZV9uZXh0KCcjc2xpZGUtcmlnaHQnKVxuICBhbmltYXRlX25leHQoJyNzbGlkZS1jZW50ZXInLCAxNzUpXG4gIGFuaW1hdGVfbmV4dCgnI3NsaWRlLWxlZnQnLCAzNTApXG5cbiRsZWZ0X2Fycm93LmNsaWNrIChlKSAtPlxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnLnNsaWRlLWhvbGRlcicpLnZlbG9jaXR5KCdmaW5pc2gnKSAjIGZpbmlzaCBhbnkgY3VycmVudCBhbmltYXRpb25zXG4gIGFuaW1hdGVfcHJldmlvdXMoJyNzbGlkZS1sZWZ0JylcbiAgYW5pbWF0ZV9wcmV2aW91cygnI3NsaWRlLWNlbnRlcicsIDE3NSlcbiAgYW5pbWF0ZV9wcmV2aW91cygnI3NsaWRlLXJpZ2h0JywgMzUwKVxuICBcbmFuaW1hdGVfbmV4dCA9IChzZWxlY3RvciwgZGVsYXk9MCwgY2I9bnVsbCkgLT5cbiAgc2V0VGltZW91dCAtPlxuICAgICRlbCA9ICQoXCIje3NlbGVjdG9yfSAuc2xpZGUtaG9sZGVyXCIpICMgc2VsZWN0IHRoZSBlbGVtZW50c1xuICAgICRiZ19wcmV2ID0gJGVsLmZpbmQoJy5iZy1wcmV2aW91cycpXG4gICAgJGJnX2N1cnIgPSAkZWwuZmluZCgnLmJnLWN1cnJlbnQnKVxuICAgICRiZ19uZXh0ID0gJGVsLmZpbmQoJy5iZy1uZXh0JylcbiAgICAkLlZlbG9jaXR5Lmhvb2soJGVsLCBcInRyYW5zbGF0ZVhcIiwgXCItI3sxMDAvM30lXCIpICMgc2V0IHRyYW5zZm9ybSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgJC5WZWxvY2l0eS5hbmltYXRlKCRlbCwgeyAjIGFuaW1hdGUgdGhlIHRyYW5zZm9ybVxuICAgICAgdHJhbnNsYXRlWDogXCItI3syMDAvM30lXCJcbiAgICAgIGR1cmF0aW9uOiAzNTBcbiAgICB9KS50aGVuIChlbG1zKSAtPiAjIHJlb3JkZXIgdGhlIHNsaWRlLWJnJ3MgYW5kIHJlY2VudGVyIHRoZSBzbGlkZS1ob2xkZXJcbiAgICAgIG5leHRfYmdfaW1hZ2UgPSAkLlZlbG9jaXR5Lmhvb2soJGJnX3ByZXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiKVxuICAgICAgJC5WZWxvY2l0eS5ob29rKCRiZ19wcmV2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgJC5WZWxvY2l0eS5ob29rKCRiZ19jdXJyLCBcImJhY2tncm91bmQtaW1hZ2VcIikpXG4gICAgICAkLlZlbG9jaXR5Lmhvb2soJGJnX2N1cnIsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCAkLlZlbG9jaXR5Lmhvb2soJGJnX25leHQsIFwiYmFja2dyb3VuZC1pbWFnZVwiKSlcbiAgICAgICQuVmVsb2NpdHkuaG9vaygkZWwsIFwidHJhbnNsYXRlWFwiLCBcIi0jezEwMC8zfSVcIilcbiAgICAgICQuVmVsb2NpdHkuaG9vaygkYmdfbmV4dCwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIG5leHRfYmdfaW1hZ2UpXG4gICAgICBjYihlbG1zKSBpZiB0eXBlb2YgY2IgaXMgJ2Z1bmN0aW9uJ1xuICAsIGRlbGF5XG4gIFxuYW5pbWF0ZV9wcmV2aW91cyA9IChzZWxlY3RvciwgZGVsYXksIGNiKSAtPlxuICBzZXRUaW1lb3V0IC0+XG4gICAgJGVsID0gJChcIiN7c2VsZWN0b3J9IC5zbGlkZS1ob2xkZXJcIikgIyBzZWxlY3QgdGhlIGVsZW1lbnRzXG4gICAgJGJnX3ByZXYgPSAkZWwuZmluZCgnLmJnLXByZXZpb3VzJylcbiAgICAkYmdfY3VyciA9ICRlbC5maW5kKCcuYmctY3VycmVudCcpXG4gICAgJGJnX25leHQgPSAkZWwuZmluZCgnLmJnLW5leHQnKVxuICAgICQuVmVsb2NpdHkuaG9vaygkZWwsIFwidHJhbnNsYXRlWFwiLCBcIi0jezEwMC8zfSVcIikgIyBzZXQgdHJhbnNmb3JtIGJlZm9yZSBhbmltYXRpbmdcbiAgICAkLlZlbG9jaXR5LmFuaW1hdGUoJGVsLCB7ICMgYW5pbWF0ZSB0aGUgdHJhbnNmb3JtXG4gICAgICB0cmFuc2xhdGVYOiBcIjBcIlxuICAgICAgZHVyYXRpb246IDM1MFxuICAgIH0pLnRoZW4gKGVsbXMpIC0+ICMgcmVvcmRlciB0aGUgc2xpZGUtYmcncyBhbmQgcmVjZW50ZXIgdGhlIHNsaWRlLWhvbGRlclxuICAgICAgcHJldl9iZ19pbWFnZSA9ICQuVmVsb2NpdHkuaG9vaygkYmdfbmV4dCwgXCJiYWNrZ3JvdW5kLWltYWdlXCIpXG4gICAgICAkLlZlbG9jaXR5Lmhvb2soJGJnX25leHQsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCAkLlZlbG9jaXR5Lmhvb2soJGJnX2N1cnIsIFwiYmFja2dyb3VuZC1pbWFnZVwiKSlcbiAgICAgICQuVmVsb2NpdHkuaG9vaygkYmdfY3VyciwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsICQuVmVsb2NpdHkuaG9vaygkYmdfcHJldiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIpKVxuICAgICAgJC5WZWxvY2l0eS5ob29rKCRlbCwgXCJ0cmFuc2xhdGVYXCIsIFwiLSN7MTAwLzN9JVwiKVxuICAgICAgJC5WZWxvY2l0eS5ob29rKCRiZ19wcmV2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgcHJldl9iZ19pbWFnZSlcbiAgICAgIGNiKGVsbXMpIGlmIHR5cGVvZiBjYiBpcyAnZnVuY3Rpb24nXG4gICwgZGVsYXkiXX0=
  //# sourceURL=coffeescript