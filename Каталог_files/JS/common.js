
function getURLVar(key) {
	var value = [];

	var query = document.location.search.split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}


function adaptive_cat( cat_selector ){

	if( (screen.width <= 425) ){

        $(cat_selector).find('.mobile').removeClass('hidden');
        $(cat_selector).find('.tablet').addClass('hidden');
        $(cat_selector).find('.desktop').addClass('hidden');

    } else if( (screen.width >= 768) && (screen.width <= 991) ){
    
		$(cat_selector).find('.mobile').addClass('hidden');
        $(cat_selector).find('.tablet').removeClass('hidden');
        $(cat_selector).find('.desktop').addClass('hidden');

    } else {

       $(cat_selector).find('.mobile').addClass('hidden');
       $(cat_selector).find('.tablet').addClass('hidden');
       $(cat_selector).find('.desktop').removeClass('hidden');

    }

}

$(document).ready(function() {
	
	if( (screen.width <= 425) ){
		if( $(window).scrollTop() > screen.height){
			$('.return-button').removeClass('hidden');
		} else {
			$('.return-button').addClass('hidden');
		}	
	}

	$(window).scroll(function(){
		if( (screen.width <= 425) ){
			if( $(this).scrollTop() > screen.height){
				$('.return-button').removeClass('hidden');
			} else {
				$('.return-button').addClass('hidden');
			}
		}
	});	

	$('#cookie_warning button').click(function(){
		$('#cookie_warning').slideUp();		
		$.ajax({
			url: 'index.php?route=common/header/set_read_rules',
			type: 'POST',			
			success: function( result ) {			
			}
		});
	});

	//Замена i title на a href для СЕО
	$('i[title]').each(function() {
        var newTag = '<a ';            
        $.each(this.attributes, function(index, attribute) {
            if( attribute.name != 'title' ){
                newTag += attribute.name+' = "'+attribute.value+'" ';
            } else {
                newTag += ' href= "'+attribute.value+'" ';
            }
        }); 
        newTag += '>';
        newTag += $(this).html();
        newTag += '</a>';  
        $(this).replaceWith(newTag);
    });


	$(".implements-project").hide();

	$(".project-link-list").on("click", function()
	{
	    $(this).parent().find(".implements-project").slideToggle();
	});


	$(".category-preview>img").show();


    $(".search-block").click(function(){
        $(".input-block-search").animate({width: 'toggle'});
    });

    $('.return-button').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });     
    
	//Узнаём, что за браузер
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	//Эта хрень нужна, чтобы кнопка вне формы,но относящаяся к ней в ie тоже работала

	(function($) {
	  /**
	   * polyfill for html5 form attr
	   */

	  // detect if browser supports this
	  var sampleElement = $('[form]').get(0);
	  var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;
	  if (sampleElement && window.HTMLFormElement && sampleElement.form instanceof HTMLFormElement && !isIE11) {
	    // browser supports it, no need to fix
	    return;
	  }

	  /**
	   * Append a field to a form
	   *
	   */
	  $.fn.appendField = function(data) {
	    // for form only
	    if (!this.is('form')) return;

	    // wrap data
	    if (!$.isArray(data) && data.name && data.value) {
	      data = [data];
	    }

	    var $form = this;

	    // attach new params
	    $.each(data, function(i, item) {
	      $('<input/>')
	        .attr('type', 'hidden')
	        .attr('name', item.name)
	        .val(item.value).appendTo($form);
	    });

	    return $form;
	  };

	  /**
	   * Find all input fields with form attribute point to jQuery object
	   * 
	   */
	  $('form[id]').submit(function(e) {
	    var $form = $(this);
	    // serialize data
	    var data = $('[form='+ $form.attr('id') + ']').serializeArray();
	    // append data to form
	    $form.appendField(data);
	  }).each(function() {
	    var form = this,
	      $form = $(form),
	      $fields = $('[form=' + $form.attr('id') + ']');

	    $fields.filter('button, input').filter('[type=reset],[type=submit]').click(function() {
	      var type = this.type.toLowerCase();
	      if (type === 'reset') {
	        // reset form
	        form.reset();
	        // for elements outside form
	        $fields.each(function() {
	          this.value = this.defaultValue;
	          this.checked = this.defaultChecked;
	        }).filter('select').each(function() {
	          $(this).find('option').each(function() {
	            this.selected = this.defaultSelected;
	          });
	        });
	      } else if (type.match(/^submit|image$/i)) {
	        $(form).appendField({name: this.name, value: this.value}).submit();
	      }
	    });
	  });


	})(jQuery);


	
	$(".city-active").click(function(){
      var city = $(this).parent().find('.city');
      if( $(city).hasClass('hidden') ){
        $(city).removeClass('hidden');        
        $(this).addClass('open');
      } else {
        $(city).addClass('hidden');
        $(this).removeClass('open');
      }    
    });

	$(document).mouseup(function (e){ // событие клика по веб-документу
	  var parentd_div =  $(".city");
	  var div = $(".city-active"); // тут указываем ID элемента
	  if (!parentd_div.is(e.target) //если клик не по родительскому блоку ( важно для скрола )  
		  && !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $(".city").addClass('hidden');      	 
          $(".city-active").removeClass('open');
      }
    });

    $(".offer-active").click(function(){
      if( $(this).parent().find(".offer").hasClass('hidden') ){
        $(".offer").addClass('hidden');      	 
      	$(".offer-active").removeClass('open');
        $(this).parent().find(".offer").removeClass('hidden');
        $(this).parent().find(".offer-active").addClass('open');
        //console.log("show!");        
      } else {      	
        $(this).parent().find(".offer").addClass('hidden');
        $(this).parent().find(".offer-active").removeClass('open');
        //console.log("hidden!");        
      }
    
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
      /*var div = $(".offer-active"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $(".offer").addClass('hidden');      	          
          $(".offer-active").removeClass('open');
      }*/
      var div = $(".offer"); // тут указываем ID элемента
      if (!div.is(e.target) ) { // если клик был не по нашему блоку
          $(".offer").addClass('hidden');      	          
          $(".offer-active").removeClass('open');
      }
    });



	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();

		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});

	// Currency
	$('#form-currency .currency-select').on('click', function(e) {
		e.preventDefault();

		$('#form-currency input[name=\'code\']').val($(this).attr('name'));

		$('#form-currency').submit();
	});

	// Language
	$('#form-language .language-select').on('click', function(e) {
		e.preventDefault();

		$('#form-language input[name=\'code\']').val($(this).attr('name'));

		$('#form-language').submit();
	});

	/* Search */
	
	$('.search-btn').on('click', function(){

		var url = $('base').attr('href') + 'index.php?route=product/search';
		
		var value = $('#search-sm').val();		

		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}

		location = url;

	});


	$('#search').on('keydown', function(e) {
		if (e.keyCode == 13) {
			
			var url = $('base').attr('href') + 'index.php?route=product/search';

			var value = $('#search').val();

			if (value) {
				url += '&search=' + encodeURIComponent(value);
			}

			location = url;
		}
	});

	// Menu
	$('#menu .dropdown-menu').each(function() {
		var menu = $('#menu').offset();
		var dropdown = $(this).parent().offset();

		var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

		if (i > 0) {
			$(this).css('margin-left', '-' + (i + 10) + 'px');
		}
	});



	
	

	// Checkout
	$(document).on('keydown', '#collapse-checkout-option input[name=\'email\'], #collapse-checkout-option input[name=\'password\']', function(e) {
		if (e.keyCode == 13) {
			$('#collapse-checkout-option #button-login').trigger('click');
		}
	});

	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body',trigger: 'hover'});

	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});
});

	function updateCount(){
		$.ajax({
			url: 'index.php?route=checkout/cart/getbincount',
			type: 'GET',
			dataType: 'json',
			success: function( result ) {
				if( $(".bin").hasClass('.bin_count') ){
					$(".bin_count").text(result);
				} else {
					$(".bin").html('<div class="bin_count">'+result+'</div>');
				}
			}
		});	
	}

// Cart add remove functions
var cart = {
	'add': function(product, quantity) {

		console.log(quantity);
		console.log(typeof(quantity));

		var post_str = 'product_id=' + product.id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1)
		if( product.to_id != undefined ){
			post_str += '&to_id=' + product.to_id
		}
		if( product.offer_index != undefined ){
			post_str += '&offer_index=' + product.offer_index
		}	
		$.ajax({
			url: 'index.php?route=checkout/cart/add',
			type: 'post',
			data: post_str,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				$('.alert, .text-danger').remove();

				if (json['redirect']) {
					location = json['redirect'];
				}

				if (json['success']) {
					$('#content').parent().before('<div class="alert alert-success"> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

					// Need to set timeout otherwise it wont update the total
					setTimeout(function () {
						$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
					}, 100);

					$('html, body').animate({ scrollTop: 0 }, 'slow');

					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
				updateCount();
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});

	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
				updateCount();
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);
				
				var now_location = String(document.location.pathname);

				if ((now_location == '/cart/') || (now_location == '/checkout/') || (getURLVar('route') == 'checkout/cart') || (getURLVar('route') == 'checkout/checkout')) {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
				updateCount();
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}

var voucher = {
	'add': function() {

	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}

var wishlist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();

				if (json['redirect']) {
					location = json['redirect'];
				}

				if (json['success']) {
					$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
				}

				$('#wishlist-total span').html(json['total']);
				$('#wishlist-total').attr('title', json['total']);

				$('html, body').animate({ scrollTop: 0 }, 'slow');
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {

	}
}

var compare = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=product/compare/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();

				if (json['success']) {
					$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

					$('#compare-total').html(json['total']);

					$('html, body').animate({ scrollTop: 0 }, 'slow');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {

	}
}

/* Agree to Terms */
$(document).delegate('.agree', 'click', function(e) {
	e.preventDefault();

	$('#modal-agree').remove();

	var element = this;

	$.ajax({
		url: $(element).attr('href'),
		type: 'get',
		dataType: 'html',
		success: function(data) {
			html  = '<div id="modal-agree" class="modal">';
			html += '  <div class="modal-dialog">';
			html += '    <div class="modal-content">';
			html += '      <div class="modal-header">';
			html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
			html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
			html += '      </div>';
			html += '      <div class="modal-body">' + data + '</div>';
			html += '    </div';
			html += '  </div>';
			html += '</div>';

			$('body').append(html);

			$('#modal-agree').modal('show');
		}
	});
});

// Autocomplete */
(function($) {
	$.fn.autocomplete = function(option) {
		return this.each(function() {
			this.timer = null;
			this.items = new Array();

			$.extend(this, option);

			$(this).attr('autocomplete', 'off');

			// Focus
			$(this).on('focus', function() {
				this.request();
			});

			// Blur
			$(this).on('blur', function() {
				setTimeout(function(object) {
					object.hide();
				}, 200, this);
			});

			// Keydown
			$(this).on('keydown', function(event) {
				switch(event.keyCode) {
					case 27: // escape
						this.hide();
						break;
					default:
						this.request();
						break;
				}
			});

			// Click
			this.click = function(event) {
				event.preventDefault();

				value = $(event.target).parent().attr('data-value');

				if (value && this.items[value]) {
					this.select(this.items[value]);
				}
			}

			// Show
			this.show = function() {
				var pos = $(this).position();

				$(this).siblings('ul.dropdown-menu').css({
					top: pos.top + $(this).outerHeight(),
					left: pos.left
				});

				$(this).siblings('ul.dropdown-menu').show();
			}

			// Hide
			this.hide = function() {
				$(this).siblings('ul.dropdown-menu').hide();
			}

			// Request
			this.request = function() {
				clearTimeout(this.timer);

				this.timer = setTimeout(function(object) {
					object.source($(object).val(), $.proxy(object.response, object));
				}, 200, this);
			}

			// Response
			this.response = function(json) {
				html = '';

				if (json.length) {
					for (i = 0; i < json.length; i++) {
						this.items[json[i]['value']] = json[i];
					}

					for (i = 0; i < json.length; i++) {
						if (!json[i]['category']) {
							html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
						}
					}

					// Get all the ones with a categories
					var category = new Array();

					for (i = 0; i < json.length; i++) {
						if (json[i]['category']) {
							if (!category[json[i]['category']]) {
								category[json[i]['category']] = new Array();
								category[json[i]['category']]['name'] = json[i]['category'];
								category[json[i]['category']]['item'] = new Array();
							}

							category[json[i]['category']]['item'].push(json[i]);
						}
					}

					for (i in category) {
						html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

						for (j = 0; j < category[i]['item'].length; j++) {
							html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
						}
					}
				}

				if (html) {
					this.show();
				} else {
					this.hide();
				}

				$(this).siblings('ul.dropdown-menu').html(html);
			}

			$(this).after('<ul class="dropdown-menu"></ul>');
			$(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));

		});
	}
})(window.jQuery);




