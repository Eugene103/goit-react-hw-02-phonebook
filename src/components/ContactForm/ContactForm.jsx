import { Conteiner, Label, Err, Btn } from "./ContactForm.styled";
import {  Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
   Name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   Number: Yup.number()
     .min(2, 'Too Short!')
     .required('Required'),
 });

export const ContactForm = ({onAdd}) => {
    return <Formik
      initialValues={{
        Name: '',
        Number: '',
        }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
          onAdd(values)
          actions.resetForm();
      }}
    >
      <Conteiner>
            <Label htmlFor="Name">Name
          <Field id="Name" name="Name" placeholder="Jane" />    
          <ErrorMessage name="Name">{msg => <Err>{msg}</Err>}</ErrorMessage>
        </Label>
        
        <Label htmlFor="Number">Number
          <Field id="Number" name="Number" placeholder="459-12-56" />
          <ErrorMessage name="Number">{msg => <Err>{msg}</Err>}</ErrorMessage>
        </Label>
        
        <Btn type="submit">Add contact</Btn>
      </Conteiner>
    </Formik>
}