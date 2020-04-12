import React from 'react';
import SHOP_DATA from './shoppage.data';
import ComponentPreview from '../../Components/componentpreview/collection-preview.jsx';
import CollectionPreview from '../../Components/componentpreview/collection-preview.jsx';


class Shoppage extends React.Component
{
    constructor()
    {
        super();

        this.state={
            collections : SHOP_DATA
        }
    }

    render()
    {
        const {collections} = this.state;
      return( <div className='shoppage'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    )
                )
                }


                </div>
    );

    }
}

export default Shoppage;