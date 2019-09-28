import React from 'react';

// Function Component does not have constructor
// props are passed in so don't need this.props just props
export default function Table(props) {



    const showItems = (theCategory) => {

        return (

            // Recieves list from parent component, and sorts it by category
            // Then returns a div with item name for each item in the list
            props.allItems.filter((eachItem) => {

               return eachItem.category === theCategory;

            })
            
            .map((item, index) => {

                return (
                    
                    <div key={index}> {item.name} </div>

                )
            })

            )

    }

    return (
        <div>

            <h2>Item Table</h2>
            {showItems('Electronics')}

        </div>
    )
}