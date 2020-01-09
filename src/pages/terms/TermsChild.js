import React, { PureComponent } from 'react';
import { observer, PropTypes } from 'mobx-react';
import { List, Typography, Button } from 'antd';

const propTypes = {
    store: PropTypes.object
};

@observer
class TermsChild extends PureComponent {

    constructor(props) {
        super(props);
        // this.state = {
        //     message: ""
        // }
    }

    componentWillMount() {
        this.props.store.getTerms();
    }

    componentDidMount() {
        if(this.props.store.termsList != null) {
            console.log(this.props.store.termsList);
        } else {
            console.log('termsList is null');
        }
    }

    render () {
        return (
            <div>
                <h3>이용 약관</h3>
                {console.log(this.props.store.termsList)}
                <Button type="primary" onClick={this.props.store.getTerms()} >Button</Button>
                <br/>
                { this.props.store.termsList == null ? "null" : "not null" }
                <p>value : {this.props.store.termsList[0]}</p>
                <ul>
                    {this.props.store.termsList.map((item, i) => {
                        return (
                            <li key={i}>
                                <p>{item.insertTime}</p>
                            </li>
                        )
                    })}
                </ul>
                <List
                    header={<div>시작</div>}
                    footer={<div>끝</div>}
                    bordered
                    dataSource={this.props.store.termsList}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

TermsChild.propTypes = propTypes;

export default TermsChild;