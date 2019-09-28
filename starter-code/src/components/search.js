import React from "react";

export default class Searchbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            searchTerm: ""

        }

    }


    updateInput = (e) => {
        // Updates the state every keystroke to keep track of user input
        this.setState({
            searchTerm: e.target.value
        },
            //TODO Callback function that does not happen until the state is set
            () => {

                // A function is passed in from Parent component
                // We give it the searchterm state as an argument
                this.props.searchLogic(this.state.searchTerm)

            })

    }

    render() {
        console.log(this.state)
        return (
            <div>

                <div>

                    <div>

                        <label> Search </label>
                        <input type="text" name="searchTerm" onChange={this.updateInput} />

                    </div>

                    <div>
                        <label> Only Show In Stock Items </label>
                        <input type="checkbox" />
                    </div>


                </div>


            </div>
        )
    };

};
