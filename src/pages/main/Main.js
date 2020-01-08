import React from 'react';
import { Button } from 'antd';
import { PropTypes } from 'mobx-react';

//@flow
class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    // componentDidMount() {
    // }

    render() {
        return (
            <div>
                <h1>{this.props.hello}</h1>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}

Main.propTypes = {
    hello: PropTypes.string
}

export default Main;