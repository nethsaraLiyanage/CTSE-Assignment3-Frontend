import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { login } from './../../features/actions/user-actions';
// import Message from './../../UI/Message';
// import Loader from './../../UI/Loader';
import * as Yup from 'yup';
import { useFormik } from 'formik'
import FormContainer from './../../components/UI/FormContainer';


const loginSchema = Yup.object({
  
    email: Yup.string().email('Please enter valid email')
    .required('email is required').trim(),
    
    password: Yup.string().required('password is required').trim()
    .matches( 
      new RegExp (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/),
       'password should contain bet.6-20 characters, at least one Uppercase, one digit and one special Character' 
       )
   
  })
  
  
  const initialValues = {
  email: '',
  password: ''
  }



const LoginScreen = () => {
    
    // const dispatch = useDispatch();
    //  const navigate = useNavigate()

    const [ searchParams ] = useSearchParams();
    const redirect = searchParams.has('redirect') ? searchParams.get('redirect') : '';
  
    // const userLogin = useSelector(state => state.userLogin);
    // const { loading, error, userInfo } = userLogin;


    const submitHandler = (values) => {
        const { email, password } = values;
        // dispatch(login(email, password));
    }
  
    const { 
      handleChange, handleBlur, handleSubmit , values, errors
    } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: submitHandler
    })



    // useEffect(() => {
    //     if(userInfo) {
    //       navigate(`/${redirect}`)
    //     }
    // }, [userInfo, navigate, redirect])



  return (
    <FormContainer>
   
    <h1>Sign in</h1>

     {/* {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : ''} */}

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="example@example.com" 
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        />
         {errors.email && 
            <div id="feedback" className='text-danger'>{errors.email}</div>}
      </Form.Group>

      
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Enter Password" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
            {errors.password && 
                <div id="feedback" className='text-danger'>{errors.password}</div>}
        </Form.Group>

     
      <Button variant="dark" type="submit" >
        sign in
      </Button>
    </Form>


    
    <Row className='py-3'>
        <Col>
           New user ?{' '}
           <Link to={redirect? `/register?redirect=${redirect}`: '/register'}>
              register
           </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen