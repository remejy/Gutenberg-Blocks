<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'r3_boardmember_es6_enqueue_block_editor_assets' );

function r3_boardmember_es6_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'r3-boardmember-es6',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	wp_enqueue_style(
		'r3-boardmember-es6-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
}

add_action( 'enqueue_block_assets', 'r3_boardmember_es6_enqueue_block_assets' );

function r3_boardmember_es6_enqueue_block_assets() {
	wp_enqueue_style(
		'r3-boardmember-es6',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
