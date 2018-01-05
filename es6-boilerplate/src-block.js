/**
 * Block: Your Block Name ES6
 * Version: 0.0.1
 * Date: Jan 1, 2018
 * Author: Your Name
 * Description: This is a block that just looks cool
 */

 // Setup WP Block variables
 const { __ } = wp.i18n;
 const {
     registerBlockType,
     Editable,
     InspectorControls,
     source: { children },
 } = wp.blocks;

/**
 * Register block
 * @param String Block Identifier
 * @param Object Block Descriptor
 */
 registerBlockType('your-name/block-name-es6', {
    
    // block meta information
    title: __('Short Block Title'),
    description: __('A nice little description of your block'),
    icon: 'universal-access-alt',
    category: 'common',
    
    // setup attributes to collect the data from the block
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'div',
        },
    },

    /**
     * Block description in edit mode
     * @param Object properties of the block that will be used in the edit function
     */
    
    edit( { focus, setFocus, attributes, setAttributes, className } ) {
        
        // assign local variables used from the stored attributes of the block
        const { 
            content,
         } = attributes;
        
        // JSX view of the block returned in edit mode
        return [
            
            // if the block as a whole has the focus, then display the settings pane
            focus && (
                <InspectorControls key='inspector'>
                    <h2>Block Title</h2>
                    <p>How to use the block . . .</p>
                </InspectorControls>
            ),

            // JSX should have only one outer html element.
            // using outer <div> and apply block class name
            // inside outer div are html elements and
            // React components that will be converted by babel
            <div className={ className }>
                
                    <Editable
                        tagName='div'
                        multiline='p'
                        placeholder={ __( 'Type some information here ... ' ) }
                        value={ content }
                        onChange={ (newData) => {
                            setAttributes( {
                                content: newData,
                            } );
                        } }
                    />
               
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
            content,
         } = attributes;

        // JSX view of the block returned in edit mode
        return [
            
            // this view should mirror what is in edit mode, but instead of
            // using the Editable components, just display the saved data
            <div className='block-name'>
                { content }
            </div>
        ];
    },
 });