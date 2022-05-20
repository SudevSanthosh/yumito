import "react-app-polyfill/ie11";
import { Formik, Field, Form, FormikHelpers } from "formik";
import {Users} from "../utils/Users"

interface Values {
  password: string;
  email: string;
}

export const LoginPage = () => {
  // let history = useHistory();

  return (
    <div className="grid place-items-center h-screen">
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
          
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
          console.log(values.password)
         const selectedUser=Users.forEach(user=>user.mail===values.email)
         console.log(selectedUser)
        // if(selectedUser.mail===values.email && selectedUser.psd===values.password) {  
        //       console.log("login successful")
        //  }
         
        }
       }
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@mail.com"
              type="email"
              className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-400"
            />
          </div>
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="*****"
            type="password"
            className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
};
