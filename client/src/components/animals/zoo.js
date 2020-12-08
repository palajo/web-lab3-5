import React, { Component } from 'react'
import EditModal from '../edit';

export function Animal(props) {
    return(
        <div class="product-block">
            <div class="product-block-image">
                <img src={props.image} alt="ocelot" />
            </div>
            <div class="product-block-content">
                <div class="product-block-title">
                    {props.title}
                </div>
                <div class="product-block-description">
                    {props.description}
                </div>
                <div class="product-block-update">
                    Daily expenses: {props.price}$
                </div>
                <div class="product-block-actions">
                    <button class="button fill blue" data-toggle="modal" data-target="#editModal">
                        Edit
                    </button>
                    <button class="button fill red">
                        Delete
                    </button>
                </div>
            </div>
        </div>        
    )
}

export default class Zoo extends Component {

    constructor() {
        super();

        this.state = {
            animals: [],
            search: ''
        }

        this.searchClear = this.searchClear.bind(this);

    }

    searchClear(e) {
        e.stopPropagation();
        this.setState({
            search: ""
        });
    }

    componentDidMount() {
        fetch('/api/animals')
            .then(res => res.json())
            .then(animals => this.setState({animals}));
    }

    upadteSearch(event) {
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    render() {
        const { animals } = this.state;
        const sortedAnimals = this.props.sortByHighestPrice ? animals.sort((a, b) => b.price - a.price) : animals.sort((a, b) => a.price - b.price);

        const filteredAnimals = sortedAnimals.filter(
            (animal) => {
                return animal.title.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
            }
        );

        return (
            <>
                <div class="search">
                    <input class="search-input" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.upadteSearch.bind(this)}></input>
                    <button class="search-button blue" type="submit">Search</button>
                    <button class="search-button red" onClick={this.searchClear}>Clear</button>
                </div>
                {
                    filteredAnimals.map((animal) =>
                        <Animal 
                            key={animal.id}
                            image={animal.image}
                            title={animal.title}
                            description={animal.description}
                            updated={animal.updated}
                            price={animal.price}
                        />
                    )
                }

                <EditModal />
            </>
        )
    }
}
