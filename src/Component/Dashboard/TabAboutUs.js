import React, { Component } from 'react';
import './Dashboard.scss';
import InfoTab from './Tab/InfoTab';

export class TabAboutUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return (
            <>
                <div className='tab-table'>
                    <InfoTab />
                </div>
            </>
        )
    }
}

export default TabAboutUs