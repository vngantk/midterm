import React from "react";
import {Link} from "react-router-dom";
import * as Icons from "react-bootstrap-icons";

export default function NewShopForm() {

    /**
     * Store the file in state so that it can be used later when the form is submitted.
     */
    let [file, setFile] = React.useState<File | null>(null);

    return (
        <form className="text-center">
            <h1 className="">New Shop</h1>
            <div className="file btn btn-primary "style={{position: 'relative', overflow: 'hidden'}}>
                UPLOAD LOGO&nbsp;
                <Icons.Upload></Icons.Upload>
                <input type="file" name="file" style={{position: 'absolute', opacity: '0', right: '0', top: '0'}}
                   onChange={(e) => {
                       setFile(e.target.files![0]);
                   }}
                />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="nameField" className="form-label">Name</label>
                <input type="text" className="form-control" id="nameField" placeholder=""/>
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="descField" className="form-label">Description</label>
                <input type="text" className="form-control" id="descField" placeholder=""/>
            </div>
            <div className="row">
                <button type="submit" className="btn btn-primary col-1">SUBMIT</button>
                <span className="col-10"></span>
                <Link to="/" className="btn btn-primary col-1">CANCEL</Link>
            </div>
        </form>
    );
}
