import { Component } from 'react';

export default class Display extends Component {
    constructor() {
        super();
    }

    render() {
        if (!this.props.item) return <div></div>;

        const {item} = this.props;
        return (
            <div style={{
                position: 'fixed',
                right: '0',
                top: '0',
                width: '400px',
                height: '100%'
            }}>
                <header style={{
                    width: '100%',
                    height: '200px', 
                    backgroundImage: `url(/static/images/${this.props.item.name}.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    backgroundPositionY: 'center'
                }}>
                    <div style={{
                        background: `rgba(0,0,0,0.5)`,
                        height: '100%',
                        width: '100%',
                        color: 'white',
                        verticalAlign: 'middle',
                        textAlign: 'center',
                        lineHeight: '200px',
                        fontSize: '2em',
                        textShadow: '0px 0px 5px rgba(0,0,0,0.75)',
                    }}>{ item.label }</div>    
                </header>
                <article style={{
                    padding: '1em 0'
                }}>
                    {item.text}
                </article>
                <div>
                    This text is from a <a href={item.url}>Wikipedia article</a> which is released under the <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share-Alike License 3.0</a>
                </div>
            </div>
        );
    }
}
