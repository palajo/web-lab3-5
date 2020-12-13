import React from 'react'

export default function CreateModal(props) {
    return (
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Create animal</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="create">
                            <div class="my-form-row">
                                <div class="my-form-block">
                                    <label>Image:</label>
                                    <input type="text" class="my-input" placeholder="Image link.." onChange={props.handleImageChange} value={props.image} />
                                </div>
                            </div>
                            <div class="my-form-row">
                                <div class="my-form-block">
                                    <label>Title:</label>
                                    <input type="text" class="my-input" placeholder="Animal name.." onChange={props.handleTitleChange} value={props.title} />
                                </div>
                            </div>
                            <div class="my-form-row">
                                <div class="my-form-block">
                                    <label>Description:</label>
                                    <textarea class="my-textarea" placeholder="Describe animal you want to add.." onChange={props.handleDescriptionChange} value={props.description}></textarea>
                                </div>
                            </div>
                            <div class="my-form-row">
                                <div class="my-form-block">
                                    <label>Daily expenses ($):</label>
                                    <input type="number" class="my-input" placeholder="5$.." min="1" onChange={props.handleDailyPriceChange} value={props.dailyPrice} />
                                </div>
                            </div>
                            <div class="my-form-row justify-content-center">
                                {props.id ? <button class="my-form-submit" onClick={props.submitData}>UPDATE</button> : <button class="my-form-submit" onClick={props.submitData}>ADD</button>}   <button class="my-form-submit" onClick={props.clearData}>CLEAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
