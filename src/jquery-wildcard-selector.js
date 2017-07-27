(function($){
    $.extend($.expr[':'],{
        withWildcard: function(el, index, meta) {
          var $el = $(el);
          var parameters = meta[3].split(",");
          var attribute = parameters[0].trim();
          var expr = parameters[1].trim();
          return new RegExp("^" + expr.split("*").join(".*") + "$").test($el.attr(attribute));
        }
    });
})(jQuery);