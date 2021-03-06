import React, { Component } from 'react';
import moment from 'moment';
import {
  Link,
  withRouter
} from 'react-router-dom';

import "../styles/homepage.scss";

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="splash-container">
          <div className="splash">
            <h1 className="splash-head">YOUR $BCH TOOLKIT</h1>
            <p className="splash-subhead">
              SUPERCHARGE your Bitcoin Cash workflow.
            </p>
            <p>
              <a href="https://github.com/bigearth/bitbox-electron/releases/download/0.1.9/BITBOX-0.1.9.dmg" className="pure-button pure-button-primary">
                <i className="fab fa-apple"></i> Download (MacOS)
              </a>
            </p>
            <div>
              <p className="splash-subhead install">
              INSTALL VIA NPM
              </p>
              <p>
                <code>npm install bitbox-cli --global</code>
              </p>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content features">
              <h2 className="content-head is-center">Features</h2>

              <div className="pure-g">
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                    <p className="header-icon"><i className="fa fa-cube" /></p>
                    <h3 className="content-subhead">
                      Instant Blockchain
                    </h3>
                    <p>
                      Your own Bitcoin Cash blockchain to run tests and execute commands. Also interact from the command line and w/ web bindings.
                    </p>
                  </div>
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                    <p className="header-icon"><i className="fa fa-eye" /></p>
                    <h3 className="content-subhead">
                      Visual Mnemonic &amp; HD Path
                    </h3>
                    <p>
                      Generate any number of addresses. Toggle the address between public/privateWIF and cashaddr/base58. Set a custom mnemonic and/or HD Derivation Path.
                    </p>
                  </div>
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                    <p className="header-icon"><i className="fa fa-keyboard" /></p>
                    <h3 className="content-subhead">
                      Command line utility
                    </h3>
                    <p>
                      Create new $BCH apps w/ a single command. Accelerate how quickly you can create your app.
                    </p>
                  </div>
                  <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                    <p className="header-icon"><i className="fas fa-code" /></p>
                    <h3 className="content-subhead">
                      Entire Bitcoin Cash RPC
                    </h3>
                    <p>
                      Accepts incoming requests for 100% of the Bitcoin Cash JSON RPC.
                    </p>
                  </div>
              </div>
          </div>

          <div className="ribbon l-box-lrg pure-g">
              <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-16-24">
                <img alt="File Icons" className="pure-img-responsive" src='assets/screenshot.png' />
              </div>
              <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-8-24 screenshot-desc">
                <p>
                  <a href="https://github.com/bigearth/bitbox-electron/releases/download/0.1.9/BITBOX-0.1.9.dmg" className="pure-button pure-button-primary">
                    <i className="fab fa-apple"></i> Download (MacOS)
                  </a>
                </p>
              <div>
                <p className="splash-subhead install">INSTALL VIA NPM</p>
                <p><code>npm install bitbox-cli --global</code></p>
              </div>

              </div>
          </div>

          <div className="content">
              <h2 className="content-head is-center">Like what you see?</h2>

              <div className="pure-g">
                  <div className="l-box-lrg pure-u-1 pure-u-md-8-24 download">
                    <h4>It&rsquo;s open source</h4>
                    <p>BITBOX is on GitHub under the MIT Open Source License. We welcome any and all contributions, and feature suggestions.</p>
                    <ul>
                      <li>
                        <a href='https://github.com/bigearth/bitbox-electron'>https://github.com/bigearth/bitbox-electron</a>
                      </li>
                      <li>
                        <a href='https://github.com/bigearth/bitbox-cli'>https://github.com/bigearth/bitbox-cli</a>
                      </li>
                      <li>
                        <a href='https://github.com/bigearth/bitbox.earth'>https://github.com/bigearth/bitbox.earth</a>
                      </li>
                    </ul>
                  </div>
                  <div className="l-box-lrg pure-u-1 pure-u-md-16-24 github">
                    <i className="fab fa-github-square"></i>
                  </div>
              </div>

          </div>

          <div className="footer l-box is-center">
            Created w/ ❤️ on EARTH by <a href='https://twitter.com/cgcardona'>gabr13l</a>. Donations <strong>bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
