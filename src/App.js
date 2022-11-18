import React from 'react';

import './App.css';
import OffCanvasDrawer from "./AgileDrawer.jsx";
import Roles from './RolesComp';
import CollaborativeTask from './Collaborative';
import ProjectPlan from './ProjectPlan';
import Footer from './Footer';


function App() {
  return (
    <div className="firstContainer">
      <div className="container">
        <div className="App">
          <header className="App-header mt-3">
            <h1 className="h1">
              Mini Project Challenge{" "}
              <span className="text-danger">{`( )=> `} </span>
              <span className="text-warning">
                {`{`}
                <br></br>{" "}
              </span>{" "}
              &ensp; <span>{`Mohammad Alamin`}</span>{" "}
              <span className="text-warning">{`}`}</span>
            </h1>
          </header>
          <br></br>
          <main>
            <p className="mt-1">
              CodeYourFuture provides trainees with the opportunity to be
              mentored by professionals in the tech industry. Industry
              professionals need to work in cross functional teams in order to
              deliver a successful product and to communicate to your clients.
            </p>
            <p>You have a research task and one collaborative task</p>
            <div className="researchTask">
              <p>
                <b className="text-warning">Research task :</b>
              </p>

              <div>
                <p>
                  <b className="text-primary">Step 1 :</b> <br></br>
                  Research the agile manifesto and discuss the key principles of
                  agile.
                </p>
                <OffCanvasDrawer />
              </div>
              <Roles />
            </div>{" "}
            <br></br>
            <CollaborativeTask />
            <ProjectPlan />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

