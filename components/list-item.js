import { Component } from 'react';

function randomNumber(end, start) { return Math.floor(Math.random() * end) + (start || 0); }

export default class ListItem extends Component {
    constructor() {
        super();

    }

    state = {
        color: [ randomNumber(255), randomNumber(255), randomNumber(255) ]
    }

    render = () => {
        return (
            <div onClick={this.props.onClick} style={{ 
                width: '200px',
                height: '200px',
                backgroundImage: `url(/static/images/${this.props.item.name}.jpg)`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                margin: '1em',
                cursor: 'pointer'
            }}>
                <div style={{
                    background: `rgba(${this.state.color.join(',')},0.5)`,
                    height: '100%',
                    width: '100%'
                }}>
                    <div style={{
                        textAlign: 'center',
                        lineHeight: '200px',
                        color: 'white',
                        height: '100%',
                        fontSize: '1em',
                        width: '100%',
                        textShadow: '0px 0px 5px rgba(0,0,0,0.75)',
                        verticalAlign: 'middle'
                    }}>{this.props.item.label}</div>
                </div>
            </div>
        );
    }
}