function Return(){
    return(
        <>
        <h1>book return</h1>
        </>
    )

}
export default Return;

<div className="AddBook">
               <form className="d-flex flex-column mb-3" onClick={handalesubmit}>
                    <div className="form-group mb-3">
                        <label for="formGroupExampleInput ml-2 "style={{marginButtom:'20'}}>Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter..." onClick={handleChange}></input>
                    </div>
                    <div className="form-group mb-3">
                        <label for="formGroupExampleInput2">Author</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter..." onClick={handleChange}></input>
                    </div>
                    <div className="form-group mb-3">
                        <label for="formGroupExampleInput2">Isbn No</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter..." onClick={handleChange}></input>
                    </div>
                    <div className="form-group mb-3">
                        <label for="formGroupExampleInput2">Quantity</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter..." onClick={handleChange}></input>
                    </div>
                    <div className="form-group mb-3">
                        <label for="formGroupExampleInput2">Publish date</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter..." onClick={handleChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary my-3 ">Submit</button>
                </form>
            </div>