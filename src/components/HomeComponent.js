'use strict';

import React from 'react';
// import Company from './Company';

require('styles/Home.css');

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home-component">
        <div className="cover-container">
            <div className="cover-image-bk">
                <div className="cover-image"> </div>
            </div>
            <div className="cover-text"> CCapital </div>
            <div className="cover-subtext"> Do more with your money. </div>
        </div>
        <div className="page-content">
            <div className="info-section">
                <div className="title"> Invest in the Best</div>
                <div className="summary">
                <ul>
                    <li> Invest in one of 12+ top tier private equity funds. </li>
                    <li> Outperform traditional investment opportunities by ~8% </li>
                    <li> No middlemen — See expected ROI and Market averages upfront </li>
                </ul>
                </div>
            <div className="callout-section">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-6 col-xs-12">
                            <div className="callout investors">
                                <div className="icon-holder">
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                </div>
                                <div className="title"> Investors </div>
                                <div className="summary">
                                 Access premier private equity funds with proven returns
                                 </div>
                                 <div className="action">
                                    <div className="action-button"> Learn More </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-6 col-xs-12">
                            <div className="callout funds">
                            <div className="icon-holder">
                                    <i className="fa fa-tasks" aria-hidden="true"></i>
                                </div>

                                <div className="title"> Funds </div>
                                <div className="summary">
                                  Discover and manage untapped sources of investment
                                </div>
                                <div className="action">
                                 <div className="action-button"> Learn More </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
