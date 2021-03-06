import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {

    render() {

        return (
            <>
                <header>
                    <div class="container">
                        <div class="row">
                            <div class="left-part">
                                <div class="logo">
                                    <NavLink to="/" exact>
                                        My Zoo
                                </NavLink>
                                </div>
                                <ul class="nav">
                                    <li class="nav-item">
                                        <NavLink to="/" className="nav-link" exact>
                                            My Animals
                                </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink to="#" className="nav-link" data-toggle="modal" data-target="#editModal">
                                            Create Animal
                                </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-part">
                                <div class="search">
                                    <input class="search-input" type="text" placeholder="Search" aria-label="Search" value={this.props.search} onChange={this.props.updateSearch}></input>
                                    <button class="search-button blue" type="submit">Search</button>
                                    <button class="search-button red" onClick={this.props.searchClear}>Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
