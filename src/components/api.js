import React, { useState, useEffect } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import ReactJson from 'react-json-view'
import APILists from '../APILists.json';
const defaultUrl = "http://mldev-api.twnextdigital.com/v1/1/ArticleDetail?mlArticleId=1_20191111002";
const rootPath = "http://mldev-api.twnextdigital.com";

const Fetch = props => {
  const [url, setUrl] = useState({ url: defaultUrl, buttonClick: false });
  const [state, setState] = useState({ data: {}, loading: false});
  const [API, setAPI] = useState({ key:"", value:"" })

  //replace for componentDidUpdate
  useEffect(() => {
    if (!url || !url.url || url.buttonClick === false) return;

    setState(prevState => {
      return {...prevState, ...{loading: true}};
    });

    fetchData(url.url);

  }, [url, setUrl]);

  const fetchData = async (endpoint) => {
    try {
      const time = Date.now();
      const response = await fetch(endpoint);
      const data = await response.json();
      const finishTime = Date.now();
      console.log(finishTime - time);
      //console.log(await data.content);
      setState({ data: data.content, loading: false });
    }
    catch (err) {
      console.log('fetch failed', err);
    }

    // return fetch(endpoint)
    //   .then(response => response.json())
    //   .then(data => {
    //     setState({ data: data.content, loading: false });
    //   })
    //   .catch (err => {
    //     console.log(err);
    //   });
  }

  //fetch button click handle
  const handleButtonClick = (e) => {
    setUrl(prevState => {
      return {...prevState, ...{buttonClick: true}};
    });
    //console.log(`${url.url}`);
  }

  //dropdown select change handle
  const handleSelect = (eventKey) => {
    const apiPath = APILists.requests[eventKey];
    setAPI({key: eventKey, value: apiPath });
    setUrl({url: rootPath + apiPath, buttonClick: false});
  }

  return (
    <div className="container-fluid">
      {/* dropdown */} 
      <div className="row pt-3">
        <div className="col-md-12">
        <DropdownButton id="apiLists" variant="primary" title={API.key?API.key:"API Lists"} 
        onSelect={handleSelect} value={API.key}>
           {Object.keys(APILists.requests).map((key, index) => 
           <Dropdown.Item eventKey={key} key={index} value={key}>{key}</Dropdown.Item>)}
        </DropdownButton>
        </div>
      </div>
      {/* input */}
      <div className="row mt-3">
        <div className="col-md-9">
          <input type="text" className="form-control" value={ url ? url.url : ''}//defaultValue={defaultUrl}
            onChange={e => setUrl({url: e.target.value, buttonClick: false})}>
            </input>
        </div>
        {/* button */}
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={handleButtonClick}>Fetch</button>      
        </div>
      </div>
      {/* result */}
      <div className="row mt-3">
        <div className="col-md-12">
          {/* <code><pre>
            <p className="text-light font-larger">
            {state.loading ? '...loading' : state.data}
            </p> 
          </pre></code> */}
          { state.loading ? '...loading': <ReactJson src={state.data} theme="monokai" displayDataTypes={false}/> }
        </div>
        </div>
      </div>
  )
}

export default Fetch;