import React, { Component } from 'react'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

import PropTypes from 'prop-types';
import { getAnimal, addAnimal, editAnimal, deleteAnimal } from '../components/redux/actions';
import { connect } from 'react-redux';

import Animal from '../components/animals/animal';
import CreateModal from '../components/animals/create';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            image: '',
            title: '',
            description: '',
            dailyPrice: '',
            search: '',
            sortByHighestPrice: false
        };

        this.handleSort = this.handleSort.bind(this);
        this.searchClear = this.searchClear.bind(this);
    }

    static propTypes = {
        animals: PropTypes.array.isRequired,
        getAnimal: PropTypes.func.isRequired,
        addAnimal: PropTypes.func.isRequired,
        editAnimal: PropTypes.func.isRequired,
        deleteAnimal: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getAnimal();
    }

    submitData = () => {

        if (this.state.image && this.state.title && this.state.description && this.state.dailyPrice && !this.state.id) {
            const newAnimal = {
                id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                image: this.state.image,
                title: this.state.title,
                description: this.state.description,
                dailyPrice: this.state.dailyPrice
            };

            this.props.addAnimal(newAnimal);
        } else if (this.state.image && this.state.title && this.state.description && this.state.dailyPrice && this.state.id) {
            const updatedDetails = {
                id: this.state.id,
                image: this.state.image,
                title: this.state.title,
                description: this.state.description,
                dailyPrice: this.state.dailyPrice
            };

            this.props.editAnimal(updatedDetails);
        } else {
            alert('Enter Employee Details.');
        }

        this.clearData();
    }

    editAnimal = (data) => {
        this.setState({
            id: data.id,
            image: data.image,
            title: data.title,
            description: data.description,
            dailyPrice: data.dailyPrice
        })
    }

    deleteAnimal = (id) => {
        this.clearData();
        if (window.confirm("Are you sure?")) {
            this.props.deleteAnimal(id);
        }
    }

    handleImageChange = (e) => {
        this.setState({
            image: e.target.value
        });
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handleDailyPriceChange = (e) => {
        this.setState({
            dailyPrice: e.target.value
        });
    }

    clearData = () => {
        this.setState({
            id: 0,
            image: '',
            title: '',
            description: '',
            dailyPrice: '',
        });
    }

    handleSort() {
        this.setState({
            sortByHighestPrice: !this.state.sortByHighestPrice,
        });
    }

    upadteSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 20)
        });
    }

    searchClear(e) {
        e.stopPropagation();
        this.setState({
            search: ""
        });
    }


    render() {

        const animals = this.props.animals;

        const sortedAnimals = this.state.sortByHighestPrice ? animals.sort((a, b) => b.dailyPrice - a.dailyPrice) : animals.sort((a, b) => a.id - b.id);

        const filteredAnimals = sortedAnimals.filter(
            (animal) => {
                return animal.title.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
            }
        );

        const dailyExpensesTotal = animals.reduce((dailyExpensesTotal, animal) => dailyExpensesTotal + parseInt(animal.dailyPrice), 0);

        return (
            <>
                <Header />
                <div id="wrapper">
                    <div class="container">
                        <div class="row">
                            <Sidebar
                                handleSort={this.handleSort}
                                upadteSearch={this.updateSearch}
                                dailyExpensesTotal={dailyExpensesTotal}
                            />
                            <section class="content">
                                <div class="products-row">
                                    <div class="search">
                                        <input class="search-input" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.upadteSearch.bind(this)}></input>
                                        <button class="search-button blue" type="submit">Search</button>
                                        <button class="search-button red" onClick={this.searchClear}>Clear</button>
                                    </div>
                                    {
                                        filteredAnimals.map((data, index) =>
                                            <Animal
                                                data={data}
                                                index={index}
                                                editAnimal={this.editAnimal}
                                                deleteAnimal={this.deleteAnimal}
                                            />
                                        )
                                    }
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <CreateModal 
                    handleImageChange={this.handleImageChange}
                    handleTitleChange={this.handleTitleChange}
                    handleDescriptionChange={this.handleDescriptionChange}
                    handleDailyPriceChange={this.handleDailyPriceChange}
                    id={this.state.id}
                    image={this.state.image}
                    title={this.state.title}
                    description={this.state.description}
                    dailyPrice={this.state.dailyPrice}
                    submitData={this.submitData}
                    clearData={this.clearData}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({
    animals: state.animals
});

export default connect(mapStateToProps, { getAnimal, addAnimal, editAnimal, deleteAnimal })(MainPage);