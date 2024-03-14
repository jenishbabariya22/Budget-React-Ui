import React, { useEffect, useState } from 'react'

function Movies() {



    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className='shadow' style={{ width: "500px", padding: "20px", margin: "40px" }}>
                        <h2 style={{ marginBottom: "10px" }}>Budget</h2>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">$</span>
                            <input type="number" className="form-control" placeholder="Enter Total Amount" aria-label="Enter Total Amount" aria-describedby="addon-wrapping" />
                        </div>
                        <button style={{ background: "#587ef4", border: "0", color: "white", height: "40px", marginTop: "10px", padding: "20px", lineHeight: "0px" }} >Set Budget</button>
                    </div>
                    <div className='shadow' style={{ width: "300px", padding: "20px", margin: "20px" }}>
                        <h2 style={{ marginBottom: "10px" }}>Expences</h2>
                        <div className="input-group flex-nowrap" style={{ marginBottom: "10px" }}>
                            <input type="text" className="form-control" placeholder="Enter Category" aria-label="Enter Total Amount" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap ">
                            <input type="number" className="form-control" placeholder="Enter Amount" aria-label="Enter Total Amount" aria-describedby="addon-wrapping" />
                        </div>

                        <button style={{ background: "#587ef4", border: "0", color: "white", height: "40px", marginTop: "10px", padding: "20px", lineHeight: "0px" }}>Check Amount</button>

                    </div>
                </div>

                <div className="d-flex" style={{ justifyContent: "space-between", background: "#587ef4", padding: "30px", borderRadius: "20px", color: "white", margin: "20px" }}>
                    <div>
                        <p>Total Budget</p>
                        <h2>0</h2>
                    </div>
                    <div>
                        <p>Expences</p>
                        <h2>0</h2>
                    </div>
                    <div>
                        <p>Total Amount</p>
                        <h2>0</h2>
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <div style={{ margin: "30px 0 30px 0" }}>
                        <h2>Expence List</h2>
                    </div>
                    <div>

                        <div className="d-flex shadow" style={{ justifyContent: "space-between", padding: "20px" }}>

                            <h2></h2>

                            <h2></h2>

                            <div>
                                <button type="button" class="btn btn-primary me-2">Edit</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies