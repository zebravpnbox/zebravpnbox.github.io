function write_menu(a)
{
	write_top();
	write_head(a);	
}

function write_top()
{
	document.write('<div class="social_block">');
	document.write('<ul>');
	document.write('<li>');
	document.write('<a href="#">');
	document.write('<img src="images/icon_twitter.png" alt="" />');
	document.write('<span>Twitter</span>');
	document.write('</a>');
	document.write('</li>');
	document.write('<li>');
	document.write('<a href="#">');
	document.write('<img src="images/icon_linkedin.png" alt="" />');
	document.write('<span>Linked In</span>');
	document.write('</a>');
	document.write('</li>');
	document.write('<li>');
	document.write('<a href="#">');
	document.write('<img src="images/icon_googleplus.png" alt="" />');
	document.write('<span>Google Plus</span>');
	document.write('</a>');
	document.write('</li>');
	document.write('<li>');
	document.write('<a href="#">');
	document.write('<img src="images/icon_facebook.png" alt="" />');
	document.write('<span>Facebook</span>');
	document.write('</a>');
	document.write('</li>');
	document.write('<li>');
	document.write('<a href="#">');
	document.write('<img src="images/icon_dribbble.png" alt="" />');
	document.write('<span>Dribbble</span>');
	document.write('</a>');
	document.write('</li>');
	document.write('</ul>');
	document.write('<a href="#" class="social_toggle"><span></span></a>');
	document.write('</div>');
}

function write_head(a)
{
	document.write('<header id="header">');
	document.write('<a class="logo" href="index.html"><img src="images/logo.png" alt="" /></a>');
	document.write('<nav>');
	 document.write('<a href="#" class="top_scroll">');
	 document.write('<span></span>');
	 document.write('<small>Back to top</small>');
	document.write('</a>');
	
	//menu
	document.write('<ul id="navigation"> ');
	
	document.write('<li id="1">');
	document.write('<a href="index.html">');
	document.write('<span>');
	document.write('營養師');
	document.write('</span>');
	document.write('</a>');
	document.write('</li>');	
	
	document.write('<li id="2">');
	document.write('<a href="upload_shenghuo.php">');
	document.write('<span>');
	document.write('生活');
	document.write('</span>');
	document.write('</a>');
	document.write('</li>');
	
	document.write('<li id="3">');
	document.write('<a href="index.html">');
	document.write('<span>');
	document.write('生命');
	document.write('</span>');
	document.write('</a>');
	document.write('</li>');
	
	document.write('<li id="4">');
	document.write('<a href="index.html">');
	document.write('<span>');
	document.write('營養醫療');
	document.write('</span>');
	document.write('</a>');
	document.write('</li>');
	
	document.write('<li id="5">');
	document.write('<a href="index.html">');
	document.write('<span>');
	document.write('影片');
	document.write('</span>');
	document.write('</a>');
	document.write('</li>');
	
	
	document.write('</ul>');
	//document.write('</nav>');
	document.write('</header>');
	document.getElementById(a).className="current_page_item"
}

function write_main_menu(a)
{
	document.write('<header id="header">');
	document.write('<a class="logo" href="index.php"><img src="images/logo.png" alt="" /></a>');
	document.write('<nav>');
	document.write('<a href="#" class="top_scroll">');
	document.write('<span></span>');
	document.write('<small>Back to top</small>');
	document.write('</a>');
	document.write('<ul id="navigation">');
	document.write('<li id="1" class="">');
	document.write('<a href="index.php">');
	document.write('<span>');
	document.write('首頁');
	document.write('</span>');
	document.write('</a>');		
	document.write('</li>');
	document.write('<li id="2">');
	document.write('<a>');
	document.write('<span>');
	document.write('營養師');
	document.write('</span>');
	document.write('</a>');
	document.write('</li>');
	document.write('<li id="3">');
	document.write('<a>');
	document.write('<span>');
	document.write('生活');
	document.write('</span>');
	document.write('</a>');
	document.write('<ul>');
	document.write('<li><a href="sh_jz.php">減重</a></li>');
	document.write('<li><a href="sh_wlms.php">網路迷思</a></li>');
	document.write('<li><a href="sh_njys.php">年節飲食</a></li>');
	document.write('<li><a href="sh_scyy.php">食材營養</a></li>');
	document.write('<li><a href="sh_sp.php">食譜</a></li>');							
	document.write('</ul>');
	document.write('</li>');
	document.write('<li id="4">');
	document.write('<a>');
	document.write('<span>');
	document.write('生命');										
	document.write('</span>');
	document.write('</a>');
	document.write('<ul>');
	document.write('<li><a href="sm_xse.php">新生兒</a></li>');
	document.write('<li><a href="sm_et.php">兒童</a></li>');
	document.write('<li><a href="sm_hy.php">懷孕</a></li>');
	document.write('<li><a href="sm_ml.php">母乳</a></li>');							
	document.write('</ul>');
	document.write('</li>');
	document.write('<li id="5">');
	document.write('<a>');
	document.write('<span>');
	document.write('營養醫療');										
	document.write('</span>');
	document.write('</a>');
	document.write('<ul>');
	document.write('<li><a href="yyyl_mxb.php">慢性病</a></li>');
	document.write('<li><a href="yyyl_az.php">癌症</a></li>');						
	document.write('</ul>');
	document.write('</li>');
	document.write('<li id="6">');
	document.write('<a href="yingpian.php">');
	document.write('<span>')
	document.write('影片');										
	document.write('</span>');
	document.write('</a>');
	document.write('</li>');
	document.write('</ul>');
	document.write('</nav>');
	document.write('</header>');
	
	document.getElementById(a).className="current_page_item";
	
	
}

function write_footer()
{
document.write('<section id="bottom">');
document.write('<div class="bottom_inner">');
document.write('<div class="one_fourth">');
document.write('');
document.write('<aside class="widget widget_custom_comments_entries">');
document.write('<h4 class="widgettitle">關於新時代生活</h4>');
document.write('<ul>');
document.write('<li>寶貝來了解新世代父母親的焦慮與無助，我們期望能和新世代的父母一起用最剛好的溫度丶最適宜的態度，以及育兒專家丶醫護等專業建議，幫助您一同解開小小人兒的成長秘密。');
document.write('<!-- <li>');
document.write('admin on <a href="openpost.html#comments">Standard post</a><br /> Duis semper nunc id metus sagittis nec ullamcorper justo consequat.');
document.write('</li> -->');
document.write('</ul>	');						
document.write('</aside>');
document.write('');
document.write('');
document.write('</div>');
document.write('<div class="one_fourth">');
document.write('<aside class="widget widget_links">');
document.write('<h4 class="widgettitle">精選影片</h4>');
document.write('<ul>');
document.write('<li><a href="#">精選影片1</a></li>');
document.write('<li><a href="#">精選影片2</a></li>');
document.write('<li><a href="#">精選影片3</a></li>');
document.write('<li><a href="#">精選影片4</a></li>');
document.write('<li><a href="#">精選影片5</a></li>');
document.write('<li><a href="#">精選影片6</a></li>');
document.write('</ul>	');						
document.write('</aside>');
document.write('</div>');
document.write('<div class="one_fourth">');
document.write('<aside class="widget widget_links">');
document.write('<h4 class="widgettitle">熱門文章</h4>');
document.write('<ul>');
document.write('<li><a href="#">熱門文章1</a></li>');
document.write('<li><a href="#">熱門文章2</a></li>');
document.write('<li><a href="#">熱門文章3</a></li>');
document.write('<li><a href="#">熱門文章4</a></li>');
document.write('<li><a href="#">熱門文章5</a></li>');
document.write('<li><a href="#">熱門文章6</a></li>');
document.write('</ul>');							
document.write('</aside>');
document.write('</div>');
document.write('<div class="one_fourth">');
document.write('<aside class="widget widget_custom_contact_form_entries">');
document.write('<h4 class="widgettitle">聯繫我們</h4>');
document.write('<div class="cmsms-form-builder">');
document.write('<div class="widgetinfo">Thank you! <br />Your message has been sent successfully.</div>');

jQuery(document).ready(function () { 
jQuery('#form_contact_form_widget_001').validationEngine('init');

jQuery('#form_contact_form_widget_001 a#contact_form_widget_001_wformsend').click(function () { 
var form_builder_url = jQuery('#contact_form_widget_001_wurl').val();

jQuery('#form_contact_form_widget_001 .loading').animate( {
	opacity : 1
} , 250);

if (jQuery('#form_contact_form_widget_001').validationEngine('validate')) { 
	jQuery.post(form_builder_url, {  
		field_003 : jQuery('#field_003').val(), 
		field_004 : jQuery('#field_004').val(), 
		formname : 'contact_form_widget_001', 
		formtype : 'widget' 
	}, function () { 
		jQuery('#form_contact_form_widget_001 .loading').animate( { opacity : 0 }, 250);
		document.getElementById('form_contact_form_widget_001').reset();
		jQuery('#form_contact_form_widget_001').parent().find('.widgetinfo').hide();
		jQuery('#form_contact_form_widget_001').parent().find('.widgetinfo').fadeIn('fast');
		jQuery('html, body').animate( { scrollTop : (jQuery('#form_contact_form_widget_001').offset().top - 100) }, 'slow');
		jQuery('#form_contact_form_widget_001').parent().find('.widgetinfo').delay(5000).fadeOut(1000);
	} );
	
	return false;
} else { 
	jQuery('#form_contact_form_widget_001 .loading').animate( { opacity : 0 }, 250);
	
	return false;
}
} );
} );
document.write('<form action="#" method="post" id="form_contact_form_widget_001">');
document.write('<div class="form_info cmsms_input">');
document.write('<label for="field_003">Email<span class="color_3"> *</span></label>');
document.write('<input type="text" name="wemail" id="field_003" size="22" tabindex="12" class="validate[required,custom[email]]" />');
document.write('</div>');
document.write('<div class="form_info cmsms_textarea">');
document.write('<label for="field_004">Message<span class="color_3"> *</span></label>');
document.write('<textarea name="wmessage" id="field_004" cols="28" rows="6" tabindex="13" class="validate[required,minSize[3]]"></textarea>');
document.write('</div>');
document.write('<div class="loading"></div>');
document.write('<div><input type="hidden" name="contact_form_widget_001_wurl" id="contact_form_widget_001_wurl" value="http://www.yoursite.net/php/sendmail.php" /></div><!-- Here you need to set the path to the sendmail file -->');
document.write('<div><a href="#" id="contact_form_widget_001_wformsend" class="button" tabindex="14"><span>Submit</span></a></div>');
document.write('</form>');
document.write('</div>');
document.write('</aside>');
document.write('</div>');
document.write('</div>');
document.write('</section>');
		
}