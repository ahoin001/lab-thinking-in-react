import React from "react";

export default class Searchbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            searchTerm: "",
            // Show items not in stock
            showUnstocked: true 

        }

    }

    toggleStocked = () => {

        this.setState ({
            // Toggle it to be true or false
            showUnstocked: !this.state.showUnstocked
        }, () => {
            // Once state updates, call function from parent component that 
            // Returns list matching search , and if we should show out of stock or not 
            this.props.searchLogic(this.state.searchTerm,this.state.showUnstocked)
        })

    }

    updateInput = (e) => {
        // Updates the state every keystroke to keep track of user input
        this.setState({
            searchTerm: e.target.value
        },
            //TODO Callback function that does not happen until the state is set
            () => {

                // A function is passed in from Parent component
                // We give it the searchterm state as an argument and whether we should show out of stock utems or not
                this.props.searchLogic(this.state.searchTerm,this.state.showUnstocked)

            })

    }

    render() {
    
        return (
            <div>

                <div>

                    <div>

                        <label> Search </label>
                        <input type="text" name="searchTerm" onChange={this.updateInput} />

                    </div>

                    <div>
                        <label> Only Show In Stock Items </label>
                        <input type="checkbox" onClick={this.toggleStocked}/>
                    </div>


                </div>


            </div>
        )
    };

};
