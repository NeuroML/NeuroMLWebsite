<? include('httpProtocol.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>">
<head>
<title><?php print $head_title; ?></title>

<?php print $head; ?>

<?php include('/afs/asu.edu/www/asuthemes/latest/custom/d6/includes/asu_d6_head_tags.inc.php'); ?>

<?php print $styles; ?>
<?php print $scripts; ?>
<link rel="stylesheet" href="<?=$httpProtocol?>://www.asu.edu/asuthemes/2.0/custom/d6/css/print_d6.css" type="text/css" media="print" />


<style media="screen" type="text/css">
    @import "/sites/all/themes/asuzen/custom.css";
  </style>

<!--[if lte IE 6]>
<link rel="stylesheet" type="text/css" href="<?php echo base_path() . path_to_theme() . "/ie6.css"; ?>" />
<![endif]-->
<!--[if gte IE 7]>
<link rel="stylesheet" type="text/css" href="<?php echo base_path() . path_to_theme() . "/ie7.css"; ?>" />
<![endif]-->
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="<?php echo base_path() . path_to_theme() . "/ie8.css"; ?>" />
<![endif]-->
<!-- script language="javascript" src="/scripts/rotate_node_2577_m.js">
</script -->



<?php 
if($right)
print '<style type="text/css">
#content .node table { width: 550px !important; }
</style>
'; 
else
print '<style type="text/css">
#content .node table { width: 750px !important; }
</style>
';
?>
</head>
<body class="<?php print $body_classes; ?>">

	<!-- START skip links -->
	<ul class="skip">
	<li><a href="#main">Skip to content</a></li>
	<li><a href="#sidebar-right">Skip to navigation</a></li>
		<!-- Including a site map is especially helpful to users dependent on assistive technology.
		To create a quick sitemap, download the Sitemap Module ( http://drupal.org/project/site_map ); install the module in your folder /sites/all/modules (create folder if necessary); and enable it in http://YourSite.asu.edu/admin/build/modules. Then uncomment the link below. That's it! -->
	<!-- <li><a href="/sitemap">Skip to site map page</a></li> -->
	</ul>
	<!-- /.skip links -->
	

<div class="asu_set_fixed_width">


<!-- START #asu_container -->  	
<div id="asu_container">

<?php include('/afs/asu.edu/www/asuthemes/3.0/headers/math.html'); ?>

  <?php if ($secondary_links): ?>
	<div id="secondary">
	  <?php print theme('links', $secondary_links); ?>
	</div> <!-- /#secondary -->
  <?php endif; ?>
  
  <?php if ($header): ?>
	<div id="header-blocks" class="region region-header">
	  <?php print $header; ?>
	</div> <!-- /#header-blocks -->
  <?php endif; ?>
      
   <!-- START main -->
   <div id="main"><div id="main-inner" class="clear-block<?php if ($search_box or $primary_links or $secondary_links or $navbar) { print ' with-navbar'; } ?>">

    <div id="content"><div id="content-inner">
	<?php if ($breadcrumb or $title or $tabs or $help or $messages): ?>
	  <div id="content-header">
		<?php print $breadcrumb; ?>
		<?php if ($title and $title<>"Welcome"): ?><h1 class="title"><?php print $title; ?></h1><?php endif; ?>
		<?php if ($mission): ?><div id="mission"><?php print $mission; ?></div><?php endif; ?>
		<?php if ($content_top): ?><div id="content-top" class="region region-content_top">
			<?php print $content_top; ?></div> <!-- /#content-top -->
		<?php endif; ?>
		<?php if ($tabs): ?><div class="tabs"><?php print $tabs; ?></div><?php endif; ?>
		<?php print $help; ?>
		<?php print $messages; ?>
	  </div> <!-- /#content-header -->
 	<?php endif; ?>

	  <div id="content-area">
	    <?php print $content; ?>
	  </div>

	  <?php if ($feed_icons): ?><div class="feed-icons"><?php print $feed_icons; ?></div><?php endif; ?>

	  <?php if ($content_bottom): ?><div id="content-bottom" class="region region-content_bottom">
		<?php print $content_bottom; ?>
	  </div> <!-- /#content-bottom --><?php endif; ?>

    </div></div> <!-- /#content-inner, /#content -->

      <?php if ($left || $logo || $site_name || $site_slogan || $search_box): ?> 
        <div id="sidebar-left"><div id="sidebar-left-inner" class="region region-left">
        	<!-- START name-and-slogan -->
			
			<!-- /#name and slogan -->

        <?php print $left; ?>
        </div></div> <!-- /#sidebar-left-inner, /#sidebar-left -->
      <?php endif; ?>

      <?php if ($right): ?>
        <div id="sidebar-right"><div id="sidebar-right-inner" class="region region-right">
          <?php print $right; ?>
        </div></div> <!-- /#sidebar-right-inner, /#sidebar-right -->
      <?php endif; ?>

    </div></div> <!-- /#main-inner, /#main -->

	<?php
	echo "Hello World";
	?>

	<?php include('/afs/asu.edu/www/asuthemes/3.0/includes/footer.html'); ?>
	
    <?php if ($footer_message): ?>
      <div id="asu_footer_contact_info"><div id="footer-inner" class="region region-footer">
		<p><?php print $footer_message; ?></p>
	  </div><!-- end footer contact info -->
	<?php endif; ?>

</div><!-- /#asu-container -->

</div><!-- /.asu_set_fixed_width -->

  <?php if ($closure_region): ?>
    <div id="closure-blocks" class="region region-closure"><?php print $closure_region; ?></div>
  <?php endif; ?>

<?php print $closure; ?>

<?php include('/afs/asu.edu/www/asuthemes/latest/includes/html/google_analytics.shtml'); ?>


</body>
</html>

