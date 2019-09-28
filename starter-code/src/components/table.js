import React from 'react';

// Function Component does not have constructor
// props are passed in so don't need this.props just props
export default function Table(props) {

    const showItems = () => {

        return (

            // Recieves list from parent component, and sorts it by category
            // Then returns a div with item name for each item in the list
            props.allItems.sort((a, b) => {

                if (a.category > b.category) {
                    return 1
                } else if (a.category < b.category) {
                    return -1
                } else {
                    return 0
                }

            }).map((item, index) => {

                return (
                    
                    <div key={index}> {item.name} </div>

                )
            })

            )

    }

    return (
        <div>

            <h2>Item Table</h2>
            {showItems()}

        </div>
    )
}