import React from 'react';

// Function Component does not have constructor
// props are passed in so don't need this.props just props
export default function Table(props) {

    const showOneCategory = (theCategory) => {

        return (

            // Recieves list from parent component
            // Then returns a div with item name for each item in the list
            props.allItems.filter((eachItem) => {

                return eachItem.category === theCategory;

            }).map((item, index) => {

                // TODO Style Object for conditional styling
                let styleObject = {}

                // If stocked boolean for given item is false, make its color red
                if (!item.stocked) {
                    styleObject.color = 'red'
                }

                return (

                    <div key={index} style = {styleObject}>

                        {item.name}
                        {item.price}
                    
                    </div>

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

                console.log(categories)
            }

        });

   

        // For each category in the array
        return categories.sort((a,b) => {

            if(a < b)
            {
                return -1
            }
            else if(a > b)
            {
                return 1
            }
            else{
                return 0
            }

        }).map((eachCategory, index) => {

            console.log(eachCategory)
            return (

                // Return a div That displays the category name 
                <div key={index}>

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