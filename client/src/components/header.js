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
                                <NavLink to="/create" className="nav-link">
                                    Create Animal
                                </NavLink>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            </>
        )
    }
}
