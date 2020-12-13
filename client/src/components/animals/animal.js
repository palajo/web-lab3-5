import React  from 'react'

export default function Animal(props) {
    const data = props.data;
    const index = props.index;

    return (
        <div class="product-block" key={(index + 1)}>
            <div class="product-block-image">
                <img src={data.image} alt="ocelot" />
            </div>
            <div class="product-block-content">
                <div class="product-block-title">
                    {data.title}
                </div>
                <div class="product-block-description">
                    {data.description}
                </div>
                <div class="product-block-update">
                    Daily expenses: {data.dailyPrice}$
                </div>
                <div class="product-block-actions">
                    <button class="button fill blue" data-toggle="modal" data-target="#editModal" onClick={() => props.editAnimal(data)}>
                        Edit
                    </button>
                    <button class="button fill red" onClick={() => props.deleteAnimal(data.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
