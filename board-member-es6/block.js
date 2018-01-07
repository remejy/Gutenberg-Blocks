/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Block: R3M3JY Board Member ES6
 * Version: 0.0.1
 * Date: Jan 1, 2018
 * Author: r3m3jy
 * Description: This is a block to display Board Member bio
 */

// Setup WP Block variables
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    Editable = _wp$blocks.Editable,
    InspectorControls = _wp$blocks.InspectorControls,
    RangeControl = _wp$blocks.RangeControl,
    MediaUploadButton = _wp$blocks.MediaUploadButton,
    children = _wp$blocks.source.children;
var PanelBody = wp.components.PanelBody;

/**
 * Register block
 * @param String Block Identifier
 * @param Object Block Descriptor
 */

registerBlockType('r3m3jy/boardmember-es6', {

    // block meta information
    title: __('R3: Board Member'),
    description: __('Board Member block to display biography information.'),
    icon: 'universal-access-alt',
    category: 'layout',

    // setup attributes to collect the data from the block
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.board-member'
        },
        memberName: {
            source: 'text',
            selector: '.member-name'
        },
        memberPosition: {
            source: 'text',
            selector: '.member-position'
        },
        memberBio: {
            type: 'array',
            source: 'children',
            selector: '.member-bio'
        },
        memberImgID: {
            type: 'number'
        },
        memberImgSrc: {
            type: 'string',
            source: 'attribute',
            selector: '.member-img',
            attribute: 'src'
        },
        memberImgRadius: {
            type: 'number',
            default: 0
        },
        memberHistory: {
            type: 'array',
            source: 'children',
            selector: '.member-history'
        }
    },

    /**
     * Block description in edit mode
     * @param Object properties of the block that will be used in the edit function
     */

    edit: function edit(_ref) {
        var focus = _ref.focus,
            setFocus = _ref.setFocus,
            attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            className = _ref.className;


        // assign local variables used from the stored attributes of the block
        var memberImgID = attributes.memberImgID,
            memberImgSrc = attributes.memberImgSrc,
            memberImgRadius = attributes.memberImgRadius,
            memberName = attributes.memberName,
            memberPosition = attributes.memberPosition,
            memberBio = attributes.memberBio,
            memberHistory = attributes.memberHistory;

        // initialize a variable to track which field user is in

        var focusedEditable = focus ? focus.editable : null;

        // function called to set the image attributes
        var onSelectImage = function onSelectImage(memberImg) {
            setAttributes({
                memberImgSrc: memberImg.url,
                memberImgID: memberImg.id
            });
        };

        // functions to identify which field has the focus
        // note: need to convert to one function that accepts an 'editable' string
        var onFocusName = function onFocusName(focus) {
            setFocus(_.extend({}, focus, { editable: 'member-name' }));
        };
        var onFocusPosition = function onFocusPosition(focus) {
            setFocus(_.extend({}, focus, { editable: 'member-position' }));
        };
        var onFocusBio = function onFocusBio(focus) {
            setFocus(_.extend({}, focus, { editable: 'member-bio' }));
        };
        var onFocusHistory = function onFocusHistory(focus) {
            setFocus(_.extend({}, focus, { editable: 'member-history' }));
        };

        // JSX view of the block returned in edit mode
        return [

        // if the block as a whole has the focus, then display the settings pane
        // currently pane only shows a descriptor of the block and how to use.
        // need to add some options for user to further modify options for block
        // example could be change padding or colors. maybe allow vignette to image
        focus && wp.element.createElement(
            InspectorControls,
            { key: 'inspector' },
            wp.element.createElement(
                'h2',
                null,
                'Board Member Bio'
            ),
            wp.element.createElement(
                'p',
                null,
                'Enter the board members name, position, a short one or two paragraph biography and include in the history any past positions and years'
            ),
            wp.element.createElement(
                PanelBody,
                {
                    title: __('Image Radius') },
                wp.element.createElement(RangeControl, {
                    label: __('Radius Size'),
                    value: memberImgRadius || '',
                    onChange: function onChange(value) {
                        return setAttributes({ memberImgRadius: value });
                    },
                    min: 0,
                    max: 50,
                    allowReset: true
                })
            )
        ),

        // JSX should have only one outer html element.
        // using outer <div> and apply block class name
        // inside outer div are html elements and 
        // React components that will be converted by babel
        wp.element.createElement(
            'div',
            { className: className },
            wp.element.createElement(
                'div',
                { className: 'member-img' },
                wp.element.createElement(
                    MediaUploadButton,
                    {
                        buttonProps: { className: memberImgID ? 'image-button' : 'components-button button button-large' },
                        onSelect: onSelectImage,
                        type: 'image',
                        value: memberImgID
                    },
                    memberImgID ? wp.element.createElement('img', { src: memberImgSrc, style: { borderRadius: memberImgRadius } }) : __('Upload Image')
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'member-info-pane' },
                wp.element.createElement(Editable, {
                    tagName: 'div',
                    className: 'member-name',
                    placeholder: __('Board Member Name here ... '),
                    value: memberName,
                    onChange: function onChange(newName) {
                        setAttributes({
                            memberName: newName
                        });
                    },
                    focus: focusedEditable === 'member-name' ? focus : null,
                    onFocus: onFocusName
                }),
                wp.element.createElement(Editable, {
                    tagName: 'div',
                    className: 'member-position',
                    placeholder: __('Board Member Position here ... '),
                    value: memberPosition,
                    onChange: function onChange(newPosition) {
                        setAttributes({
                            memberPosition: newPosition
                        });
                    },
                    focus: focusedEditable === 'member-position' ? focus : null,
                    onFocus: onFocusPosition
                }),
                wp.element.createElement(Editable, {
                    tagName: 'div',
                    className: 'member-bio',
                    multiline: 'p',
                    placeholder: __('Board Member Short Bio here ... '),
                    value: memberBio,
                    onChange: function onChange(newBio) {
                        setAttributes({
                            memberBio: newBio
                        });
                    },
                    focus: focusedEditable === 'member-bio' ? focus : null,
                    onFocus: onFocusBio
                })
            ),
            wp.element.createElement(
                'div',
                { className: 'member-history-pane' },
                wp.element.createElement(
                    'div',
                    { className: 'history-title' },
                    'History'
                ),
                wp.element.createElement(Editable, {
                    tagName: 'div',
                    className: 'member-history',
                    multiline: 'p',
                    placeholder: __('Board Member History here ... '),
                    value: memberHistory,
                    onChange: function onChange(newHistory) {
                        setAttributes({
                            memberHistory: newHistory
                        });
                    },
                    focus: focusedEditable === 'member-history' ? focus : null,
                    onFocus: onFocusHistory
                })
            )
        )];
    },


    /**
     * Block description in non-edit mode
     * This view is used when a different block has focus while in edit post mode
     * or from the view post mode from website visitor view
     * @param Object properties of the block that will be used in the edit function
     */

    save: function save(_ref2) {
        var attributes = _ref2.attributes;


        // assign local variables used from the stored attributes of the block
        var memberImgSrc = attributes.memberImgSrc,
            memberImgRadius = attributes.memberImgRadius,
            memberName = attributes.memberName,
            memberPosition = attributes.memberPosition,
            memberBio = attributes.memberBio,
            memberHistory = attributes.memberHistory;

        // JSX view of the block returned in edit mode

        return [

        // this view should mirror what is in edit mode, but instead of
        // using the Editable components, just display the saved data
        wp.element.createElement(
            'div',
            { className: 'board-member' },
            memberImgSrc && wp.element.createElement('img', { src: memberImgSrc, style: { borderRadius: memberImgRadius }, className: 'member-img' }),
            wp.element.createElement(
                'div',
                { className: 'member-info-pane' },
                wp.element.createElement(
                    'div',
                    { className: 'member-name' },
                    memberName
                ),
                wp.element.createElement(
                    'div',
                    { className: 'member-position' },
                    memberPosition
                ),
                wp.element.createElement(
                    'div',
                    { className: 'member-bio' },
                    memberBio
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'member-history-pane' },
                wp.element.createElement(
                    'div',
                    { className: 'history-title' },
                    'History'
                ),
                wp.element.createElement(
                    'div',
                    { className: 'member-history' },
                    memberHistory
                )
            )
        )];
    }
});

/***/ })
/******/ ]);