import { Component } from 'react';
import List from '../components/list';
import Display from '../components/display';


export default class Home extends Component {
    constructor() {
        super();
    }

    state = {
        item: null
    }

    updateInfo = (item) => { 
        this.setState({ item });
    }
    
    render = () => {
        return (
            <div style={{ fontFamily: 'helvetica' }}>
                <h1>Free Imperial Cities of the Holy Roman Empire</h1>
                <div style={{
                    marginRight: this.state.item ? '400px' : '0'
                }}>
                    <List updateInfo={this.updateInfo}></List>
                </div>
                <Display item={this.state.item}></Display>
            </div>
        );
    }
}
