import FormContainer from './FormContainer';
import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import reactDom from 'react-dom';


const Checkout = () => {
    const checkForm = () => {
        const [checkoutValues , setcheckoutValues] = useState({
            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            address:"",
            city:"",
            st:"",
            zip:"",
            card:"",
            cvv:"",
            exDate:""
        })
    const { firstname, lastname, phone, email, address, city, st, zip, card, cvv, exDate } 
    = checkoutValues

    const handleChange = event => {
    const { name, value } = event.target
    setcheckoutValues({ ...checkoutValues, error:false, [name]: value })
}

  const onSubmit = e => {
    e.preventDefault()
    setcheckoutValues({ ...checkoutValues, error:false })

          setcheckoutValues({
            ...signUpValues, 
            firstname: "",
            lastname:"",
            phone:"",
            email:"",
            password:"", 
            address:"",
            city:"",
            st:"",
            zip:"",
            card:"",
            cvv:"",
            exDate:"",
          })
        
      }
  



        const state = {
            disp: "none"
        };
        const showDiv = () => {
            state.disp = "block";
        }
        const hideDiv = () => {
            state.disp = "none";
        }


        return (
            <div className='py-4' onSubmit={onSubmit} >
        <div className='container'>
            <div className='row'>

                <div className='col-md-7'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Basic Information</h4>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>First Name</label>
                                        <input type='text' name='firstname' value={firstname} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Last Name</label>
                                        <input type='text' name='lastname' value={lastname} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Phone</label>
                                        <input type='tel' name='phone' value={phone} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Email Address</label>
                                        <input type='email' name='email' value={email} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='form-group mb-3'>
                                        <label>Full Address</label>
                                        <textarea rows= '3' name='address' value={address} onChange={handleChange} required className='form-control'></textarea>
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className='form-group mb-3'>
                                        <label>City</label>
                                        <input type='text' name='city' value={city} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group mb-3'>
                                        <label>State</label>
                                        <input type='text' name='state' value={st} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group mb-3'>
                                        <label>Zip Code</label>
                                        <input type='text' name='zipcode' value={zip} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Select Payment Method</label> <br></br>
                                        <small>Cash On Delivery</small> <input type='radio' id='cash' value= 'cash' onClick={hideDiv} name='payment'/> <br></br>
                                        <small>Credit Card</small> <input type='radio' id='cred' value= 'credit' onClick={showDiv()}  name='payment' />
                                    </div>
                                </div>
                                
                                {/* This div should be hidden or visible depending on the two functions above. hideDiv and showDiv */}

                                <div id='disp' style={{display: state.disp }}>

                                <div className='col-md-8'>
                                    <div className='form-group mb-3'>
                                        <label>Card Number</label>
                                        <input type='text' name='cardNumber' value={card} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>CVV</label>
                                        <input type='text' name='cvv' value={cvv} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group mb-3'>
                                        <label>Expiration Date</label>
                                        <input type='date' name='exDate' value={exDate} onChange={handleChange} required className='form-control'/>
                                    </div>
                                </div>





                                </div>

                                <div className='col-md-12'>
                                    <div className='form-group text-end'>
                                        <button type='button' className='btn btn-primary'>Submit</button>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-5'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th width = '50%'>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>IPhone 13</td>
                                <td>2000$</td>
                                <td>1</td>
                                <td>2000$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
    
        </div>
    </div>
    
        )
        
    }
    const credPay = () => {
        checkForm();
        return (checkForm())
    }

    return (
           
credPay()

       
    )
}
export default Checkout;

// const CreditCard = () => {
//     let tog = document.getElementById('cred');
//     let togChash = document.getElementById('cash');
//     let disCredit = document.getElementById('disp');
//     disCredit.style.display = 'none';
//     tog.addEventListener('click', () => {
//         disCredit.style.display = 'block';
//     })
//     togChash.addEventListener('click', () => {
//         disCredit.style.display = 'none';
//     })
// }
// export default CreditCard;