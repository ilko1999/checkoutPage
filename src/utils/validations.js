import * as yup from 'yup';
import { regexGetBasedOnCountry } from './index';

const phoneRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const fullNameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

const validationSchema = yup.object({
    email: yup
      .string()
      .required()
      .email('It must be a valid email!')
      .label('Email'),
    phoneNumber: yup
      .string()
      .required()
      .matches(phoneRegex, 'Phone number is not valid')
      .label('Phone'),
    fullName: yup
      .string()
      .required()
      .matches(fullNameRegex, 'It must be a valid fullname.')
      .label('Full name'),
    address: yup.string().required().label('Adress'),
    country: yup.string().required().label('Country'),
    postalCode: yup
      .string()
      .required()
      .label('Postal Code')
      .when('country', (country, schema) => {
        const result = regexGetBasedOnCountry(country);

        return schema.matches(result, `Postal code doesnt match ${country}.`);
      }),
      city: yup.string().required().label('City')
  });

  export default validationSchema;