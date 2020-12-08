import React, { Component } from 'react'
import Header from '../components/header'

export default class Createpage extends Component {
    render() {
        return (
            <>
                <Header />
                <div id="wrapper">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div>
                                <h2 class="page-title">Create Animal</h2>
                                <form class="create" action="#">
                                    <div class="my-form-row">
                                        <div class="my-form-block">
                                            <label>Title:</label>
                                            <input type="text" class="my-input" placeholder="Animal name.." />
                                        </div>
                                    </div>
                                    <div class="my-form-row">
                                        <div class="my-form-block">
                                            <label>Description:</label>
                                            <textarea class="my-textarea" placeholder="Describe animal you want to add.."></textarea>
                                        </div>
                                    </div>
                                    <div class="my-form-row">
                                        <div class="my-form-block">
                                            <label>Daily expenses ($):</label>
                                            <input type="number" class="my-input" placeholder="5$.." min="1" />
                                        </div>
                                    </div>
                                    <div class="my-form-row">
                                        <div class="my-form-block">
                                            <label>Animal type:</label>
                                            <select class="my-select">
                                            <option value="0" disabled selected>Select Type</option>
                                            <option value="1">Type #1</option>
                                            <option value="2">Type #2</option>
                                            <option value="3">Type #3</option>
                                            <option value="4">Type #4</option>
                                            <option value="5">Type #5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="my-form-row justify-content-center">
                                        <button class="my-form-submit" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
