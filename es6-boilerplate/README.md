# R3M3JY - WordPress Gutenberg Block Boilerplate
This is a template from which you can create your own blocks.

## Requirements
1. Gutenberg plugin if older than WordPress 5.0 (planned for release April 2018)
2. Ability to add plugins and edit plugin files
3. Some knowledge of JavaScript and ReactJS
4. NodeJS and NPM installed on the computer you will use to develope your block
5. Local development installation of WordPress in order to develope your block

## Install
1. Download the full repository as a Zip file.
2. From your local install WordPress Admin dashboard, click "Plugins", then "Add New"
3. Click "Upload Plugin" button, choose the Zip file and install and activate this plugin.

## Create your own block
1. From your File Manager, copy the "es6-boilerplate" folder and give folder a name to distinguish as your plugin
2. Edit the index.php file in the root folder of this plugin to include the index.php file of your new folder.
3. Open your folder from a Terminal (Command Line) window and type "npm install". This will load the node modules
4. To work on developing your block, from Terminal run "npm run dev"
5. For final build, from Terminal run "npm run build"
6. Once complete, you can zip up the full plugin folder and install this plugin on your site

NOTE: Use of this plugin is at your own risk. I make no warranties that this works
