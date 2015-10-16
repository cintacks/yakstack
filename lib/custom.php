<?php
/**
 * Custom functions
 */

	//Add Featured (content top) section to all pages
	if (function_exists('register_sidebar')) {
	register_sidebar(array(
	'name' => 'Featured',
	'id' => 'featured',
	'description' => 'Add widgets to the top of a page',
	'before_widget' => '<div id="%1$s" class="widget %2$s">',
	'after_widget' => '</div>',
	'before_title' => '<h2>',
	'after_title' => '</h2>'
	));
	}

	//Put current post title in a variable
	$slide_title = get_the_title();



