import React from 'react';

// Function Component does not have constructor
// props are passed in so don't need this.props just props
export default function Table(props) {

    const showItems = () => {

        return (

            // Recieves list from parent component, and returns a div with item name for each item in the list
            props.allItems.map((item,index) => {

                return (

                    <div key = {index}> {item.name} </div>

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