import React from "react";
import "./List.css"

const ListItem = ({ listItem }) => {
    const { name, image, number } = listItem;
    return (
        <>
            <div className="card p-2 border-0 rounded-0 shadow-sm mb-3">
                <div className="d-flex justify-content-between align-items-center">

                    <div className="title-circle d-flex align-items-center justify-content-center">
                        <h2 className="mb-0 title-special">{name[0]}</h2>
                        <h5 className="mb-0 mt-4 title-special">{number}</h5>
                    </div>
                    {/* <img className="img-fluid rounded-circle" src={`https://placehold.co/64?font=playfair-display&text=${name[0]}`}/> */}
                    <h3 className="ms-2 me-auto mb-0 fw-bold">{name}</h3>
                    <button className="btn btn-dark px-4 rounded-0" value={number}>Vote</button>
                </div>
            </div>
        </>
    )
}
export default ListItem