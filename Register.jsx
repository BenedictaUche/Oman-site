import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

class Register extends React.Component {
  addUser = (vals) => {
    alert(vals)
  }

  componentDidMount(){
    console.log('test')
  }
  
  render(){
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Sign Up</h1>
                      </div>
                      <div>
                        <Formik onSubmit={this.addUser} initialValues={{ email: '', password: '' }}>
                          {(props) => (
                            <Form noValidate onSubmit={props.handleSubmit}>
                              <Field required name="email" label="Email" placeholder="Email" />

                              <Field required name="password" label="Password" placeholder="Password" />

                              <Button variant="primary" type="submit">
                                Sign Up
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </div>
                      <hr />
                      <div className="text-center">
                        <p>*link to login page*</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register