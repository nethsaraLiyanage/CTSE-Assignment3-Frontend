import React, {  useEffect } from 'react'
// import FormContainer from '../../UI/FormContainer'
import {  Form , Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import {  register } from './../../features/actions/user-actions';
// import Message from './../../UI/Message';
// import Loader from './../../UI/Loader';
import * as Yup from 'yup';
import { useFormik } from 'formik'
import FormContainer from './../../components/UI/FormContainer';



const registerSchema = Yup.object({
  name: Yup.string().required('name is required')
  .min(3, 'name can\'t be less than 3 characters')
  .max(30, 'max length is 30 characters').trim(),

  email: Yup.string().email('Please enter valid email')
  .required('email is required').trim(),
  
  password: Yup.string().required('password is required').trim()
     .matches( 
      new RegExp (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/),
     'password should contain bet. 6-20 characters, at least one Uppercase, one digit and one special Character' 
  ),
  passwordConfirm: Yup.string()
  .oneOf([Yup.ref('password'), null], 'password and passwordConfirm must match') 
  .required('PasswordConfirm is required')

 
})


const initialValues = {
name: '',
email: '',
password: '',
passwordConfirm: ''
}





const RegisterPage = () => {

  const submitHandler = (values) => {
      const { name, email, password } = values;
      // dispatch(register(name, email, password));
  }

  const { 
    handleChange, handleBlur, handleSubmit , values, errors
  } = useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: submitHandler
  })



    // const dispatch = useDispatch()
    // const navigate = useNavigate()
   
  
    const [ searchParams ] = useSearchParams();
    const redirect = searchParams.has('redirect') ? searchParams.get('redirect') : '';
    
  
    // const userRegister = useSelector(state => state.userRegister);
    // const { loading, error, userInfo } = userRegister;


//      useEffect(() => {
//     if(userInfo) {
//       navigate(`/${redirect}`)
//     }
// }, [userInfo, navigate, redirect])



   return (
    <FormContainer>
    <h1>Sign Up</h1>

     {/* {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : ''} */}

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter your name" 
        onChange={handleChange}
        onBlur={handleBlur}
         value={values.name}
        />
      {errors.name && 
        <div id="feedback" className='text-danger'>{errors.name}</div>}
      </Form.Group>


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

      <Row>
        <Col sm={6}>
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
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3" controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Confirm Password" 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
          />

        {errors.passwordConfirm && 
        <div id="feedback" className='text-danger'>{errors.passwordConfirm}</div>}
        </Form.Group>
        </Col>
      </Row>

     
      <Button variant="dark" type="submit" >
        Register
      </Button>
    </Form>


    
       <Row className='py-3'>
         <Col>
            ALready have  an account ?{' '}
            <Link to={redirect? `/login?redirect=${redirect}`: '/login'}>
              Sign In
            </Link>
        </Col>
       </Row>
    </FormContainer>

   )

}





export default RegisterPage
