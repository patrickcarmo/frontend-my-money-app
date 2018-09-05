import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './billingCycleActions';
import LabelAndInput from '../common/form/LabelAndInput';
import CreditList from './creditList';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field
                        name='name'
                        component={LabelAndInput}
                        label='Nome'
                        cols='12 4'
                        placeholder='Informe o nome'
                        type='text'
                        readOnly={readOnly}
                    />
                    <Field
                        name='month'
                        component={LabelAndInput}
                        label='Mês'
                        cols='12 4'
                        placeholder='Informe o mês'    
                        type='number'
                        readOnly={readOnly}
                    />
                    <Field
                        name='year'
                        component={LabelAndInput}
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'    
                        type='number'
                        readOnly={readOnly}
                    />
                    <CreditList cols='12 6' readOnly={readOnly}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({
    form: 'billingCycleForm',
    destroyOnUnmount: false
})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)