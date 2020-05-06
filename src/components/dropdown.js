import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export class dropdown extends Component {
  render() {
    const defaultName = this.props.recentDropdown ? 'Recently Added' : 'Price: Lowest First';
    return (
      <div className="col-md-6">
        <Dropdown>
          SORT :
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {defaultName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {this.props.recentDropdown ? (
              <Dropdown.Item
                href=""
                onClick={() => {
                  this.props.handleSort('recent');
                }}
              >
                Recently Added
              </Dropdown.Item>
            ) : (
              ''
            )}
            <Dropdown.Item
              href=""
              onClick={() => {
                this.props.handleSort('asc');
              }}
            >
              Price: Lowest First
            </Dropdown.Item>
            <Dropdown.Item
              href=""
              onClick={() => {
                this.props.handleSort('desc');
              }}
            >
              Price: Highest First
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default dropdown;
