import React from 'react';

const ItemPortfolio = ({src, name}) => {
    return(
        <img src={src} alt={{name}} style={{borderRadius: 25, height: 200, width: 340, marginBottom: 100}}/>        
    )
}

export default ItemPortfolio;