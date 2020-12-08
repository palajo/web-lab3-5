import React, { Component } from 'react'

import Zoo from '../components/animals/zoo'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

import $ from 'jquery';

export default class Mainpage extends Component {

    constructor() {
        super();
        this.state = {
            sortByHighestPrice: false,
        };
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort() {
        this.setState({
            sortByHighestPrice: !this.state.sortByHighestPrice,
        });
    }

    componentDidMount() {
        $(".reset").click(function() {
            $(".search-input").val("");
        });
    }


    render() {
        return (
            <>
            <Header />
            <div id="wrapper">
                <div class="container">
                    <div class="row">
                        <Sidebar 
                            handleSort={this.handleSort}
                            upadteSearch={this.updateSearch}
                        />
                        <section class="content">
                            <div class="products-row">
                                <Zoo 
                                    sortByHighestPrice={this.state.sortByHighestPrice}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
