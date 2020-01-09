import React, { PureComponent } from 'react';
import TermsStore from './store/TermsStore';
import TermsChild from './TermsChild';

// @flow
class Terms extends PureComponent {
    render() {
        return (
            <div class="dom-parent">
                <h1>terms</h1>                
                <div class="termsArea">
                    <TermsChild store={TermsStore} />
                </div>
            </div>
        )
    }
}

export default Terms;