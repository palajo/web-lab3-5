import React, { Component } from 'react'

export default class Sidebar extends Component {

    constructor() {
        super();

        this.state = {
            animals: [],
            getTotalExpenses: false,
        }
        this.handleTotal = this.handleTotal.bind(this);
    }

    handleTotal() {
        this.setState({
            getTotalExpenses: !this.state.getTotalExpenses,
        });
    }

    componentDidMount() {
        fetch('/api/animals')
            .then(res => res.json())
            .then(animals => this.setState({animals}));
    }

    render() {

        const dailyExpensesTotal = this.props.dailyExpensesTotal;

        return (
            <section class="sidebar">
                <div class="container">
                    <div class="row">
                        <div class="sidebar-title">
                            Manage Animals
                        </div>
                        <div class="sort-button">
                            <div class="custom-control custom-switch" >
                                <input type="checkbox" class="custom-control-input" id="customSwitch1"></input>
                                <label class="custom-control-label" for="customSwitch1" onClick={this.props.handleSort}>Sort by the most expensive animals</label>
                            </div>
                        </div>
                        <div class="sidebar-divider"></div>
                        <div class="sidebar-block">
                            <div className="count">
                                <label>Count daily expenses:</label>
                                <button class="button blue fill" onClick={this.handleTotal}>Count</button>  
                            </div>
                            <div class="value">
                                <label>
                                    Total expenses:
                                </label>
                                <div class="value-number">
                                    {
                                        this.state.getTotalExpenses ? `${dailyExpensesTotal} $`  : "Not counted" 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          )
    }
}
