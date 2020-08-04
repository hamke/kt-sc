var postdate = new Date();
var post_y = document.getElementsByClassName("post-year");
var post_m = document.getElementsByClassName("post-month");
var post_mm = document.getElementsByClassName("post-month-digits");
var t;
for (t = 0; t < post_y.length; t++) {
  post_y[t].innerHTML = postdate.getFullYear();
}
for (t = 0; t < post_m.length; t++) {
  post_m[t].innerHTML = postdate.getMonth() + 1;
}
for (t = 0; t < post_mm.length; t++) {
  post_mm[t].innerHTML = ("0" + (postdate.getMonth() + 1)).slice(-2);
}

jQuery(document).ready(function(){
	jQuery('.dropdown, .btn-group').hover(function(){
		var dropdownMenu = jQuery(this).children('.dropdown-menu');
		if(dropdownMenu.is(':visible')){
			dropdownMenu.parent().toggleClass('open');
		}
	});
});

jQuery(document).on('click', function() {
  jQuery('.collapse').collapse('hide');
});

jQuery(document).ready(function() {
  jQuery('.dropdown, .btn-group').hover(function() {
    var dropdownMenu = jQuery(this).children('.dropdown-menu');
    if (dropdownMenu.is(':visible')) {
      dropdownMenu.parent().toggleClass('open');
    }
  });
});

jQuery(document).ready(function() {
  jQuery(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
  jQuery(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function() {
    jQuery(this).tab('show');
  });
  jQuery('[data-toggle="tooltip"]').tooltip()
});

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
