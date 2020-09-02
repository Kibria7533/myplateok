import React, { Component } from 'react';

class me extends Component {

    toke(){
     const tt=localStorage.getItem('token');
     console.log('hgjhgjh');
     console.log(tt);
     console.log(localStorage.getItem('token'));
        }
    render() {
        return (
            <div>
                {this.toke()}
                <h1>lool</h1>
            </div>
        );
    }
}

export default me;