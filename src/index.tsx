import { useState } from 'react';
import Login from './components/login.component';
import './index.css'

function Index() {
  function loginClick() {  
    Login.login(region);
  }
  
  function handleRegionSelectChange(sender) {
    let regions = document.getElementsByClassName("region")
    Array.prototype.forEach.call(regions, function(el) {
      el.classList.remove("chosen");
      if(el.id === sender.currentTarget.id) {
        el.classList.add("chosen");
        setRegion(sender.currentTarget.id);
      }
    });
  }  

  const [region, setRegion] = useState<string>("eu")

  return (
      <div id="PluginWrapper">
        <div id='PluginContainer'>
          <h3 className="title">Send data between FormIt and Forma</h3>
          <div id="AppControls">
            <div className="container mt-3">
              <div id="app">
                <div id="lblExplanation">Select a region to start and view projects</div>
                <div id="region-selector">
                  <label id="lblRegion">Regions: </label>
                  <label id="eu" className="region chosen" onClick={handleRegionSelectChange.bind(this)}>EU</label>
                  <label id="us" className="region" onClick={handleRegionSelectChange.bind(this)}>US</label>
                </div>
                <div id="LoginControls" className="">
                  <button id="LoginButton" className="button is-link" onClick={loginClick}>
                    <span>Login to Forma</span>
                    <i className="fab fa-github fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="NoAccess" hidden>
            <div>
                <div className="alertIcon"></div>
            </div>
            <div>
                It looks like your web browser is in private or incognito mode. 
                FormIt-Forma plugin needs to save data to the local storage, so it can only be used in standard browsing mode.
                <br/>
                <br/>
                To use FormIt Plugin Facade, please switch to standard browsing mode.
            </div>
          </div>
        </div>
      </div>
  )
}

export default Index
