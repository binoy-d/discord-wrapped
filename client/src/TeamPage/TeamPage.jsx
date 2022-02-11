import React from "react";
import './TeamPage.css';

function TeamPage() {
  return (
    <div className="TeamPage">
        <div className="container text-center">
            <div className="row">
                <h1>Who made this?</h1>
            </div>
            <div className="row">
                <div className="col">Binoy</div>
                <div className="col">Shaurya</div>
                <div className="col">Atul</div>
            </div>
            
            <div className="row">
                <div className="col">Evan</div>
                <div className="col">Lilian</div>
                <div className="col">Scum</div>
            </div>
        </div>
    </div>
  );
}

export default TeamPage;
