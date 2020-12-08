import React, { Component } from 'react'

export default class EditModal extends Component {
    render() {
        return (
            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Edit animal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
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
        )
    }
}
