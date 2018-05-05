import React from 'react';

const Main = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        var isFormValid = true;
        
        var str = '';

        if(!this.props.firstName.value || this.props.firstName.value === undefined || !this.props.firstName.isValid) {
            isFormValid = false;
        }
        else {
            str += `First Name: ${this.props.firstName.value}\n`
        }

        if(!this.props.lastName.value || this.props.lastName.value === undefined || !this.props.lastName.isValid) {
            isFormValid = false;
        }
        else {
            str += `Last Name: ${this.props.lastName.value}\n`
        }

        if(!this.props.email.value || this.props.email.value === undefined || !this.props.email.isValid) {
            isFormValid = false;
        }   
        else {
            str += `Email Id: ${this.props.email.value}\n`
        }

        this.props.bankDetails.forEach((bank) => {
            if(!bank.name.value || !bank.name.value === undefined || !bank.name.isValid) {
                isFormValid = false;
            }
            else {
                str += `Bank Name: ${bank.name.value}\n` 
            }
            
            if(!bank.iabn.value || !bank.iabn.value === undefined || !bank.iabn.isValid) {
                isFormValid = false;
            }
            else {
                str += `IABN: ${bank.iabn.value}\n` 
            }
        })

       if(!(this.props.bankDetails.length > 0)) {
           str = 'You should provide atleast one bank account';
       }
       else if(this.props.bankDetails.length > 0 && !isFormValid) {
           str = 'Enter Valid Details';
       }
       

        if(isFormValid) {
            alert(str)
            this.props.resetForm();
        }
        else {
            alert(str)
        }


    },
    onUserDetailChange(e) {
        const field = e.target.name;
        const value = e.target.value;
        this.props.fieldChange(field, value);
    },
    onBankDetailChange(e) {
        const field = e.target.name;
        const value = e.target.value;
        const id = e.target.id;
        this.props.updateBankDetail(field, value, id);
    },
    render() {
        return (
            <div>
                <form ref="registerAccountForm"  onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="First Name" name="firstName" value={this.props.firstName.value} onChange={this.onUserDetailChange}/>
                        {this.props.firstName.isValid ? <p/> : <p>Enter Valid First Name</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" name="lastName" value={this.props.lastName.value} onChange={this.onUserDetailChange}/>
                        {this.props.lastName.isValid ? <p/> : <p>Enter Valid Last Name</p>}
                    </div>
                    <div>
                        <input type="email" placeholder="Email Id" name="email" value={this.props.email.value} onChange={this.onUserDetailChange}/>
                        {this.props.email.isValid ? <p/> : <p>Enter Valid Email Id</p>}
                    </div>
                    {this.props.bankDetails.map((bankDetail, id) => (
                        <div key={id}>
                            <div>
                                <input type="text" placeholder='Bank Name' name='name' value={bankDetail.name.value} onChange={this.onBankDetailChange} id={id}/>
                                {bankDetail.name.isValid ? <p/> : <p>Enter Valid Bank Name</p>}
                            </div>
                            <div>
                                <input type="text" placeholder='IBAN' name='iabn' value={bankDetail.iabn.value} onChange={this.onBankDetailChange} id={id}/>                            
                                {bankDetail.iabn.isValid ? <p/> : <p>Enter Valid IABN</p>}
                            </div>
                            <button type="button" onClick={() => {this.props.removeBankField(id)}} style={{marginBottom: '10px'}}>Remove</button>
                        </div>
                    ))}
                    <div style={{marginTop: '10px'}}>
                        <button type="button" onClick={() => {this.props.addBankField()}}>Add Bank</button>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
});

export default Main;