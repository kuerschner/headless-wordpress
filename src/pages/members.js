import React, {useState, useEffect} from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Button from "../components/Button";


const Members = () => {
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/292')

        .then(res => {

                const responseTitle = res.data.title;
                const responseMeta = res.data.meta;
                setTitle(responseTitle);
                setMeta(responseMeta);
        })

    }

    useEffect(() => {
        makeGetRequest()
    }, [])

    const [disabled, setDisabled] = useState(true)

    const onChange = e => {
        e.target.value === 'colorado' ? setDisabled(false) : setDisabled(true)
    }

    return (
        <Layout title={title && title.rendered} meta={meta} >
            <div className="container my-md-5 py-md-5">
                <div className="row my-md-4 py-md-5">
                    <div className="col-12 my-5 mx-auto p-5 text-center">
                        <h1>Members Please Select Your State Below:</h1>
                        <div className="formContainer">
                            <label style={{fontSize: '1.5rem'}}for="state-select">Choose a state: </label>
                            {' '}
                            <select name="state" id="state-select" onChange={onChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="alabama">Alabama</option>
                                <option value="alaska">Alaska</option>
                                <option value="arizona">Arizona</option>
                                <option value="arkansas">Arkansas</option>
                                <option value="california">California</option>
                                <option value="colorado">Colorado</option>
                                <option value="connecticut">Connecticut</option>
                                <option value="delaware">Delaware</option>
                                <option value="florida">Florida</option>
                                <option value="georgia">Georgia</option>
                                <option value="hawaii">Hawaii</option>
                                <option value="idaho">Idaho</option>
                                <option value="illinois">Illinois</option>
                                <option value="indiana">Indiana</option>
                                <option value="iowa">Iowa</option>
                                <option value="kansas">Kansas</option>
                                <option value="louisiana">Louisiana</option>
                                <option value="maine">Maine</option>
                                <option value="maryland">Maryland</option>
                                <option value="massachusetts">Massachusetts</option>
                                <option value="michigan">Michigan</option>
                                <option value="minnesota">Minnesota</option>
                                <option value="mississippi">Mississippi</option>
                                <option value="missouri">Missouri</option>
                                <option value="montana">Montana</option>
                                <option value="nebraska">Nebraska</option>
                                <option value="nevada">Nevada</option>
                                <option value="newHampshire">New Hampshire</option>
                                <option value="newJersey">New Jersey</option>
                                <option value="newMexico">New Mexico</option>
                                <option value="newYork">New York</option>
                                <option value="northCarolina">North Carolina</option>
                                <option value="northDakota">North Dakota</option>
                                <option value="ohio">Ohio</option>
                                <option value="oklahoma">Oklahoma</option>
                                <option value="oregon">Oregon</option>
                                <option value="pennsylvania">Pennsylvania</option>
                                <option value="rhodeIsland">Rhode Island</option>
                                <option value="southCarolina">South Carolina</option>
                                <option value="southDakota">South Dakota</option>
                                <option value="tennessee">Tennessee</option>
                                <option value="texas">Texas</option>
                                <option value="utah">Utah</option>
                                <option value="vermont">Vermont</option>
                                <option value="virginia">Virginia</option>
                                <option value="washington">Washington</option>
                                <option value="westVirginia">West Virginia</option>
                                <option value="wisconsin">Wisconsin</option>
                                <option value="wyoming">Wyoming</option>
                            </select>
                        </div>
                        <div><Button disabled={disabled}>Continue</Button></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Members;