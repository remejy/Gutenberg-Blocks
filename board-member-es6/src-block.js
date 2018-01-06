/**
 * Block: R3M3JY Board Member ES6
 * Version: 0.0.1
 * Date: Jan 1, 2018
 * Author: r3m3jy
 * Description: This is a block to display Board Member bio
 */

 // Setup WP Block variables
 const { __ } = wp.i18n;
 const {
     registerBlockType,
     Editable,
     InspectorControls,
     MediaUploadButton,
     Tooltip,
     source: { children },
 } = wp.blocks;

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
            selector: '.board-member',
        },
        memberName: {
            source: 'text',
            selector: '.member-name',
        },
        memberPosition: {
            source: 'text',
            selector: '.member-position',
        },
        memberBio: {
            type: 'array',
            source: 'children',
            selector: '.member-bio',
        },
        memberImgID: {
            type: 'number',
        },
        memberImgSrc: {
            type: 'string',
            source: 'attribute',
            selector: '.member-img',
            attribute: 'src',
        },
        memberHistory: {
            type: 'array',
            source: 'children',
            selector: '.member-history',
        },
    },

    /**
     * Block description in edit mode
     * @param Object properties of the block that will be used in the edit function
     */
    
    edit( { focus, setFocus, attributes, setAttributes, className } ) {
        
        // assign local variables used from the stored attributes of the block
        const { 
            memberImgID,
            memberImgSrc, 
            memberName,
            memberPosition,
            memberBio,
            memberHistory,
         } = attributes;

        // initialize a variable to track which field user is in
        const focusedEditable = focus ? focus.editable : null;

        // function called to set the image attributes
        const onSelectImage = memberImg => {
			setAttributes( {
				memberImgSrc: memberImg.url,
				memberImgID: memberImg.id,
			} );
        };

        // functions to identify which field has the focus
        // note: need to convert to one function that accepts an 'editable' string
        const onFocusName = focus => {
            setFocus( _.extend( {}, focus, { editable: 'member-name' } ) );
        };
        const onFocusPosition = focus => {
			setFocus( _.extend( {}, focus, { editable: 'member-position' } ) );
        };
        const onFocusBio = focus => {
			setFocus( _.extend( {}, focus, { editable: 'member-bio' } ) );
        };
        const onFocusHistory = focus => {
			setFocus( _.extend( {}, focus, { editable: 'member-history' } ) );
		};
        
        // JSX view of the block returned in edit mode
        return [
            
            // if the block as a whole has the focus, then display the settings pane
            // currently pane only shows a descriptor of the block and how to use.
            // need to add some options for user to further modify options for block
            // example could be change padding or colors. maybe allow vignette to image
            focus && (
                <InspectorControls key='inspector'>
                    <h2>Board Member Bio</h2>
                    <p>Enter the board members name, position, a short one or two paragraph biography and include in the history any past positions and years</p>
                </InspectorControls>
            ),

            // JSX should have only one outer html element.
            // using outer <div> and apply block class name
            // inside outer div are html elements and 
            // React components that will be converted by babel
            <div className={ className }>
                <div className='member-img'>
                    <MediaUploadButton
                        buttonProps={
                            { className: memberImgID ? 'image-button' : 'components-button button button-large' }
                        }
                        onSelect={ onSelectImage }
                        type='image'
                        value={ memberImgID }
                    >
                        { memberImgID ? <img src={ memberImgSrc} /> : __( 'Upload Image' ) }
                    </MediaUploadButton>
                </div>
                <div className='member-info-pane'>
                    <Tooltip
                        text={ __('Board Member Name here ...') }
                        >
                        <Editable
                            tagName='div'
                            className='member-name'
                            placeholder={ __( 'Board Member Name here ... ' ) }
                            value={ memberName }
                            onChange={ (newName) => {
                                setAttributes( {
                                    memberName: newName,
                                } );
                            } }
                            focus={ focusedEditable === 'member-name' ? focus : null }
                            onFocus={ onFocusName }
                        />
                    </Tooltip>
                    <Editable
                        tagName='div'
                        className='member-position'
                        placeholder={ __( 'Board Member Position here ... ' ) }
                        value={ memberPosition }
                        onChange={ (newPosition) => {
                            setAttributes( {
                                memberPosition: newPosition,
                            } );
                        } }
                        focus={ focusedEditable === 'member-position' ? focus : null }
                        onFocus={ onFocusPosition }
                    />
                    <Editable
                        tagName='div'
                        className='member-bio'
                        multiline='p'
                        placeholder={ __( 'Board Member Short Bio here ... ' ) }
                        value={ memberBio }
                        onChange={ (newBio) => {
                            setAttributes( {
                                memberBio: newBio,
                            } );
                        } }
                        focus={ focusedEditable === 'member-bio' ? focus : null }
                        onFocus={ onFocusBio }
                    />
                </div>
                <div className='member-history-pane'>
                    <div className='history-title'>History</div>
                    <Editable
                        tagName='div'
                        className='member-history'
                        multiline='p'
                        placeholder={ __( 'Board Member History here ... ' ) }
                        value={ memberHistory }
                        onChange={ (newHistory) => {
                            setAttributes( {
                                memberHistory: newHistory,
                            } );
                        } }
                        focus={ focusedEditable === 'member-history' ? focus : null }
                        onFocus={ onFocusHistory }
                    />
                </div>
            </div>
        ];
    },

    /**
     * Block description in non-edit mode
     * This view is used when a different block has focus while in edit post mode
     * or from the view post mode from website visitor view
     * @param Object properties of the block that will be used in the edit function
     */
    
    save( { attributes } ) {
        
        // assign local variables used from the stored attributes of the block
        const { 
            memberImgSrc, 
            memberName,
            memberPosition,
            memberBio,
            memberHistory,
         } = attributes;

        // JSX view of the block returned in edit mode
        return [
            
            // this view should mirror what is in edit mode, but instead of
            // using the Editable components, just display the saved data
            <div className='board-member'>
                { memberImgSrc && <img src={memberImgSrc} className='member-img' /> }
                <div className='member-info-pane'>
                    <div className='member-name'>{ memberName }</div>
                    <div className='member-position'>{ memberPosition }</div>
                    <div className='member-bio'>{ memberBio }</div>
                </div>
                <div className='member-history-pane'>
                    <div className='history-title'>History</div>
                    <div className='member-history'>{ memberHistory }</div>
                </div>
            </div>
        ];
    },
 });