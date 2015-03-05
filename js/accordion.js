(function( $ ){

	$.fn.accordion = function(options) {	
	
	var settings = $.extend( {
	      activeTabIndex: 0,
	      collapsible: true,
	      autoHeight: true	
	}, options);
      return this.each(function(){		
				/* Defining Accordion Tab Headers and Detailed Panels */
				var acWrapper = $(this);
				var acTabHeaders = acWrapper.find(" > :not(li):even");
				var acTabDetails = acWrapper.find(" > :not(li):odd");
				var maxHeight = 0;	
						
				/* Styling accordion Tabs, Adding Class and Finding Maximum Possible Height */
				acTabDetails.each(function() {						
								$(this).addClass('accordion-tabDetail'+(($(this).index()+1)/2)+' accordion-tabDetail');
								maxHeight = Math.max(maxHeight,$(this).height());				
							});
				if(settings.autoHeight == true)
					acTabDetails.height(maxHeight);				
							
				acTabHeaders.css('cursor','pointer')
							.each(function(){
								$(this).addClass('accordion-tabHeader'+(($(this).index()+2)/2)+' accordion-tabHeader');
							})
							.on('click',function(){											
								var currentTabDetails = $(this).next();
								if(currentTabDetails.css('display') != 'none' && settings.collapsible == true)
								{
									currentTabDetails.slideUp('fast').removeClass('activeTabDetail');
									$(this).removeClass('activeTabHeader');
								}
								else if(currentTabDetails.css('display') == 'none')
								{	
									acWrapper.find('> :not(li):odd:visible').each(function(){
										$(this).slideUp('fast').removeClass('activeTabDetail');
										$(this).prev().removeClass('activeTabHeader');
									});
									currentTabDetails.slideDown('fast').addClass('activeTabDetail').prev().addClass('activeTabHeader');		
								}										
							});	
							createAc(acWrapper);
					});				
			function createAc(acWrapper) {
				var acTabHeaders = acWrapper.find(" > :not(li):even");
				var acTabDetails = acWrapper.find(" > :not(li):odd");
				var arrow = $('<span>');
				arrow.addClass('arrow');
				arrow.prependTo(acTabHeaders);
				
				acTabDetails.each(function(index) {						
					if(index != settings.activeTabIndex)
						acTabDetails.eq(index).slideUp('fast');
					else
						$(this).addClass('activeTabDetail').prev().addClass('activeTabHeader');
				});	
			}
  };
})( jQuery );


