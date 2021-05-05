/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';

import validationSchema from '../../utils/validations'

import {
  EmailRounded,
  PhoneRounded,
  PersonRounded,
  HouseRounded,
  MarkunreadMailboxRounded,
  LocationCityRounded
} from '@material-ui/icons';

import { ProductContext } from '../../context/ProductProvider';
import MyCheckbox from '../MyFields/MyCheckbox';
import MyTextField2 from '../MyFields/MyTextField2';
import './Forms.css';
import Dropdown from '../MyFields/Dropdown';
import MyButton from '../MyFields/MyButton/MyButton';
import ButtonLoader from '../animation/ButtonLoader/ButtonLoader';

function Forms() {
  const { countries, products } = useContext(ProductContext);
  const getZipCodesForCountry = (countryName) => {
    const selectedCountry = countries.filter((country) => {
      return country.name === countryName;
    });

    console.log(selectedCountry);

    const zipCodesURL = `https://app.zipcodebase.com/api/v1/search?apikey=${
      process.env.REACT_APP_API_KEY
    }&codes=7000&country=${selectedCountry[0].alpha2Code.toLowerCase()}`;

    fetch(zipCodesURL)
      .then((response) => response.json())
      .then((values) => {
        console.log(values);
        // setZipCodes(values);
      });
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="forms">
      <Formik
        initialValues={{
          products: [...products],
          email: '',
          phoneNumber: undefined,
          fullName: '',
          adress: '',
          isSaved: false,
          country: '',
          postalCode: '',
          address: '',
          city: ''
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(data, null, 2));
            window.location.reload();
          }, 1000);
        }}
        validateOnBlur
        validationSchema={validationSchema}
      >
        {({  dirty, isValid, isSubmitting }) => (
          <Form>
            <h3 className="contactInformation">Contact information</h3>
            <div className="inputField">
              <MyTextField2
                placeholder="Enter your e-mail..."
                name="email"
                type="email"
                id="E-mail"
              >
                <EmailRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="inputField">
              <MyTextField2
                placeholder="Enter your phone number..."
                name="phoneNumber"
                type="tel"
                id="Phone"
              >
                <PhoneRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <h3 className="shippingInformation">Shipping address</h3>

            <div className="inputField">
              <MyTextField2
                placeholder="Enter your full name..."
                name="fullName"
                type="input"
                id="Full name"
              >
                <PersonRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="inputField">
              <MyTextField2
                placeholder="Enter your address..."
                name="address"
                type="input"
                id="Address"
              >
                <HouseRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="inputField">
              <MyTextField2
                placeholder="Enter your city..."
                name="city"
                type="input"
                id="City"
              >
                <LocationCityRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="location">
              <div className="inputField">
                <Dropdown
                  id="Country"
                  name="country"
                  options={countries}
                  prompt="Select country..."
                />
              </div>
              <div className="inputField">
                <MyTextField2
                  id="Postal-Code"
                  placeholder="your postal code"
                  name="postalCode"
                >
                  <MarkunreadMailboxRounded style={{ fill: '#828282' }} />
                </MyTextField2>
              </div>
            </div>
            <MyCheckbox
              name="isSaved"
              type="checkbox"
              label="Save this information for next time"
            />

            <div className="submitButton">
              <MyButton
                disabled={!dirty || !isValid}
                isLoading={isSubmitting}
                type="submit"
              />
                
            </div>

            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Forms;
