<?php
/**
 * index.php
 * 
 * This file is used by the plugin to enqueue needed javascipt and css files.
 * If you are not using a plugin, you can add this code to the functions.php
 * of your theme. Adjust the file paths according to where you will store
 * the javascript and css files
 * 
 */

// check if file called by the WordPress system. If not, then exit.
defined( 'ABSPATH' ) || exit;


/**
 * This section is used to enqueue the block.js and editor.css files that describe
 * the block while in edit mode. The block.js file is built from command line
 *     npm run build
 */
add_action( 'enqueue_block_editor_assets', 'your_block_name_enqueue_block_editor_assets' );

function your_block_name_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'your-block-name-es6',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	wp_enqueue_style(
		'your-block-name-es6-editor-style',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
}

/**
 * This section will enqueue the style.css file for both editor and view modes
 */
add_action( 'enqueue_block_assets', 'your_block_name_es6_enqueue_block_assets' );

function your_block_name_es6_enqueue_block_assets() {
	wp_enqueue_style(
		'your-block-name-es6-style',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
