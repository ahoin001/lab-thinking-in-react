import React from 'react';

// Function Component does not have constructor
// props are passed in so don't need this.props just props
export default function Table(props) {



    const showOneCategory = (theCategory) => {

        return (

            // Recieves list from parent component, and sorts it by category
            // Then returns a div with item name for each item in the list
            props.allItems.filter((eachItem) => {

                return eachItem.category === theCategory;

            }).map((item, index) => {

                return (

                    <div key={index}> {item.name} </div>

                )
            })

        )

    }

    const showItems = () => {

        const categories = [];


        props.allItems.forEach((eachItem) => {

            // If categories doesn't include the current item category
            if (!categories.includes(eachItem.category)) {

                // Add the category to the array
                categories.push(eachItem.category);


            }

        });

        // For each category in the array
        return categories.map((eachCategory) => {

            return (

                // Return a div That displays the category name 
                <div>

                    <h2> {eachCategory}</h2>

                    {/* Goes through the Data list and returns a list of items that have the current category */}
                    {showOneCategory(eachCategory)}

                </div>)

        })

    }

    return (
        <div>

            <h2>Item Table</h2>
            {showItems()}

        </div>
    )
}