!function(e){"use strict";var t,i,n,a="",o=0;function s(){var i=e("#ct-header-wrap").outerHeight(),o=e(".fixed-height").outerHeight(),s=i+200;e("#ct-header-wrap").hasClass("is-sticky")&&(t>s?e("#ct-header").addClass("h-fixed"):e("#ct-header").removeClass("h-fixed")),n>992&&e(".fixed-height").css({height:o}),"up"==a&&t>0?e("#ct-header").addClass("scroll-up"):e("#ct-header").removeClass("scroll-up"),"down"==a?e("#ct-header").addClass("scroll-down"):e("#ct-header").removeClass("scroll-down")}function c(){var t=(e("#content").width()-1200)/2;n>1200&&(e("body:not(.rtl) .col-offset-left > .elementor-column-wrap > .elementor-widget-wrap").css("padding-left",t+"px"),e("body:not(.rtl) .col-offset-right > .elementor-column-wrap > .elementor-widget-wrap").css("padding-right",t+"px"),e(".rtl .col-offset-left > .elementor-column-wrap > .elementor-widget-wrap").css("padding-right",t+"px"),e(".rtl .col-offset-right > .elementor-column-wrap > .elementor-widget-wrap").css("padding-left",t+"px"))}function r(){setTimeout((function(){var t=e(".fixed-footer .site-footer-custom").outerHeight()-1;e(".fixed-footer .site-content").css("margin-bottom",t+"px")}),300)}function l(){t<i&&e(".scroll-top").addClass("off").removeClass("on"),t>i&&e(".scroll-top").addClass("on").removeClass("off")}function d(){e("#content .quantity").append('<span class="quantity-icon"><i class="quantity-down fa fa-sort-desc"></i><i class="quantity-up fa fa-sort-asc"></i></span>'),e(".quantity-up").on("click",(function(){e(this).parents(".quantity").find('input[type="number"]').get(0).stepUp()})),e(".quantity-down").on("click",(function(){e(this).parents(".quantity").find('input[type="number"]').get(0).stepDown()})),e(".woocommerce-cart-form .actions .button").removeAttr("disabled")}e(window).on("load",(function(){e(".ct-loader").fadeOut("slow"),n=e(window).width(),c(),s(),l(),d(),r(),e(".ct-image-animate").addClass("active")})),e(window).on("resize",(function(){n=e(window).width(),c(),r()})),e(window).on("scroll",(function(){t=e(window).scrollTop(),i=e(window).height(),n=e(window).width(),a=t<o?"up":"down",o=t,s(),l()})),e(document).on("click",".h-btn-search",(function(){e(".ct-modal-search").addClass("open"),e("body").addClass("ov-hidden"),setTimeout((function(){e(".ct-modal-search .search-field").focus()}),1e3)})),e(document).ready((function(){e(".ct-main-navigation").find(".ct-main-menu li").each((function(){var t=e(this).find("> ul.sub-menu");1==t.length&&e(this).hover((function(){(t.offset().left+t.width()>e(window).width()||t.offset().left<0)&&t.addClass("back")}),(function(){t.removeClass("back")}))})),e(".mega-2-columns").parents(".sub-menu").addClass("ct-mega-2-columns"),e(".ct-main-navigation li.menu-item-has-children").append('<span class="ct-menu-toggle far fac-angle-down"></span>'),e(".ct-menu-toggle").on("click",(function(){e(this).toggleClass("toggle-open"),e(this).parent().find("> .sub-menu").toggleClass("submenu-open"),e(this).parent().find("> .sub-menu").slideToggle()})),e("#ct-menu-mobile .open-menu").on("click",(function(){e(this).toggleClass("opened"),e(".ct-header-navigation").toggleClass("navigation-open")})),e(".ct-menu-close").on("click",(function(){e(this).parents(".header-navigation").removeClass("navigation-open"),e(".ct-menu-overlay").removeClass("active"),e("#ct-menu-mobile .open-menu").removeClass("opened"),e("body").removeClass("ovhidden")})),e(".ct-menu-overlay").on("click",(function(){e(this).parents("#header-main").find(".header-navigation").removeClass("navigation-open"),e(this).removeClass("active"),e("#ct-menu-mobile .open-menu").removeClass("opened"),e(".header-navigation").removeClass("navigation-open"),e("body").removeClass("ovhidden")})),e(".h-btn-form").click((function(t){t.preventDefault(),e(".ct-modal-contact-form").removeClass("remove").toggleClass("open")})),e(".ct-close").click((function(t){t.preventDefault(),e(this).parents(".ct-widget-cart-wrap").removeClass("open"),e(this).parents(".ct-modal").addClass("remove").removeClass("open"),e(this).parents("#page").find(".site-overlay").removeClass("open"),e(this).parents("body").removeClass("ov-hidden")})),e(".ct-hidden-sidebar-overlay, .ct-widget-cart-overlay").click((function(t){t.preventDefault(),e(this).parent().toggleClass("open"),e(this).parents("body").removeClass("ov-hidden")})),e(".entry-video iframe").each((function(){var t=e(this).width();t/=16/9,e(this).attr("height",t+35)})),e(".ct-video-button, .btn-video, .slider-video").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e(".scroll-top").click((function(){return e("html, body").animate({scrollTop:0},800),!1})),e(".wpcf7-select").parent().addClass("wpcf7-menu");var t=e(".owl-active-click");t.children().each((function(t){e(this).attr("data-position",t)})),e(document).on("click",".owl-active-click .owl-item > div",(function(){t.trigger("to.owl.carousel",e(this).data("position"))})),e("select").each((function(){e(this).niceSelect()})),e(".widget_newsletterwidget, form.newsletter").each((function(){var t=e(this).find(".tnp-field-email label").text();e(this).find(".tnp-field-email label").remove(),e(this).find(".tnp-email").each((function(i){e(this).val()||e(this).attr("placeholder",t)}));var i=e(this).find(".tnp-field-firstname label").text();e(this).find(".tnp-field-firstname label").remove(),e(this).find(".tnp-firstname").each((function(t){e(this).val()||e(this).attr("placeholder",i)}));var n=e(this).find(".tnp-field-lastname label").text();e(this).find(".tnp-field-lastname label").remove(),e(this).find(".tnp-lastname").each((function(t){e(this).val()||e(this).attr("placeholder",n)}))})),e(".ct-modal-close").on("click",(function(){e(this).parent().removeClass("open"),e(this).parents("body").removeClass("ov-hidden")})),e(document).on("click",(function(t){"ct-modal ct-modal-search open"==t.target.className&&e(".ct-modal-search").removeClass("open"),"ct-hidden-sidebar open"==t.target.className&&e(".ct-hidden-sidebar").removeClass("open")})),e(".h-btn-sidebar").on("click",(function(t){t.preventDefault(),e(".ct-hidden-sidebar-wrap").toggleClass("open"),e(this).parents("body").addClass("ov-hidden")})),e(".ct-hidden-close").on("click",(function(t){t.preventDefault(),e(this).parents(".ct-hidden-sidebar-wrap").removeClass("open"),e(this).parents("body").removeClass("ov-hidden")})),e(".h-btn-cart, .btn-nav-cart").on("click",(function(t){t.preventDefault(),e(".ct-widget-cart-wrap").toggleClass("open"),e(".ct-header-navigation").removeClass("navigation-open"),e("#ct-menu-mobile .open-menu").removeClass("opened"),e(this).parents("body").addClass("ov-hidden")}));var i=e(".ct-footer-year"),n=i.parents(".site").find(".ct-year");n.after(i.clone()),i.remove(),n.remove(),e(".comment-reply a").append('<i class="fa fa-angle-right"></i>'),e(".ct-navigation-menu1.default a").append('<i class="fac fac-angle-right"></i>'),setTimeout((function(){e(".revslider-initialised").each((function(){e(this).find(".ct-slider-nav .slider-nav-right").on("click",(function(){e(this).parents(".revslider-initialised").find(".tp-rightarrow").trigger("click")})),e(this).find(".ct-slider-nav .slider-nav-left").on("click",(function(){e(this).parents(".revslider-initialised").find(".tp-leftarrow").trigger("click")}))})),e(".ct-slider-nav").parents(".revslider-initialised").find(".tparrows").addClass("arrow-hidden")}),300),setTimeout((function(){e(".input-filled").each((function(){var t=e(this).find(".input-icon");e(this).find(".wpcf7-form-control").before(t.clone()),t.remove()}))}),200),e(".same-height").matchHeight(),e(".choose-demo").on("click",(function(){e(this).parents(".ct-demo-bar").toggleClass("active")})),e(".animate-time").each((function(){var t=100,i=e(this).children().length,n=i-1;e(this).find("> .grid-item > .wow").each((function(a,o){e(this).css("animation-delay",t+"ms"),n===a?(t=100,n+=i):t+=80}))})),e(".ct-pricing-body").each((function(){e(this).find(".item--first").hover((function(){e(this).parent().addClass("item--first-active")}),(function(){e(this).parent().removeClass("item--first-active")})),e(this).find(".item--last").hover((function(){e(this).parent().addClass("item--last-active")}),(function(){e(this).parent().removeClass("item--last-active")}))})),e(".item--nav").on("click",(function(){e(this).parent().toggleClass("active"),e(this).parents(".ct-pricing").find(".ct-pricing-monthly").toggleClass("pr-hide"),e(this).parents(".ct-pricing").find(".ct-pricing-year").toggleClass("pr-active")})),e("body:not(.elementor-editor-active) .ct-cover-boxes1 .ct-cover-item").each((function(){e(this).hover((function(){e(this).parents(".ct-cover-boxes1").find(".ct-cover-item").removeClass("active"),e(this).addClass("active")}))})),e(".ctf-author-box-link").removeAttr("target"),setTimeout((function(){e(".elementor-section-wrap > .elementor-element").each((function(){var t=e(this).find(".ct-image-animate");t.parents(".elementor-container").before(t.clone()),t.remove();var i=e(this).find(".ct-text");i.parents(".elementor-container").before(i.clone()),i.remove()}))}),200),e(".ct-blog-grid-layout1 .grid-item-inner").hover((function(){e(this).find(".entry-readmore").slideToggle(300),e(this).find(".entry-meta").slideToggle(300)}),(function(){e(this).find(".entry-readmore").slideToggle(300),e(this).find(".entry-meta").slideToggle(300)})),e(".wpcf7-form").each((function(){e(this).find(".ct-range-slider");var t=e(this).find(".ct-range-slider").attr("data-value"),i=e(this).find(".ct-range-slider").attr("data-maxvalue"),n=e(this).find(".ct-range-slider").attr("data-currency");e(this).find(".ct-range-slider").slider({range:"min",value:t,min:1,max:i,slide:function(t,i){e(this).parent().find(".ct-range-result").val(n+i.value)}}),e(this).find(".ct-range-result").val(n+e(this).find(".ct-range-slider").slider("value"))})),e(".ct-pricing-tab-active .ct-pricing-tab-item").on("click",(function(){e(this).parent().find(".ct-pricing-tab-item").removeClass("active"),e(this).addClass("active")})),e(".ct-pricing-tab-active .title-tab-monthly").on("click",(function(){e(this).parents(".ct-pricing").find(".ct-pricing-monthly").removeClass("ct-pricing-hide"),e(this).parents(".ct-pricing").find(".ct-pricing-year").addClass("ct-pricing-hide")})),e(".ct-pricing-tab-active .title-tab-year").on("click",(function(){e(this).parents(".ct-pricing").find(".ct-pricing-year").removeClass("ct-pricing-hide"),e(this).parents(".ct-pricing").find(".ct-pricing-monthly").addClass("ct-pricing-hide")})),e(".item--social-btn").on("click",(function(){e(this).toggleClass("active"),e(this).parent().toggleClass("active")})),e(".ct-service-grid4 .grid-item-inner").hover((function(){e(this).find(".item-readmore").slideToggle(300)}),(function(){e(this).find(".item-readmore").slideToggle(300)}))})),e(document).ajaxComplete((function(){d()}))}(jQuery);