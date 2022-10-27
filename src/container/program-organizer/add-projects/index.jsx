import { useState } from "react";
import { Formik } from "formik";
import { Dropdown, FormButton, ImageInput, InputField } from "../../../components/common";
import { validationSchema } from "./validationSchema";
import { getPhoto, options } from "./helper-methods";
import "./AddProjects.css";

const AddProjects = () => {
  const [state, setState] = useState({ developers: [], teamLeads: [], projectImage: undefined });
  const [imageUri, setImageUri] = useState("");
  const handleAddProject = (values) => {
    console.log("handleSubmit", values);
  };

  return (
    <>
      <h1>Add Project</h1>
      <div className='container-contact100'>
        <div className='wrap-contact100'>
          <Formik
            initialValues={{
              projectName: "",
              stackName: "",
              projectDescription: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleAddProject(values)}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form className='contact100-form validate-form' onSubmit={handleSubmit}>
                <span className='contact100-form-title'>New Project</span>

                <InputField
                  className='wrap-input100 border-0 validate-input bg1'
                  handleChange={handleChange("projectName")}
                  errors={errors.projectName}
                  touched={touched.projectName}
                  labelName='PROJECT NAME'
                  placeholder='Enter Project Name'
                  type='text'
                  name='projectName'
                  asterisk={true}
                />

                <Dropdown
                  asterisk={true}
                  dName='des'
                  name='stackName'
                  multiSelect={false}
                  handleChange={handleChange("stackName")}
                  options={options}
                  title='Select Stack name'
                />

                <ImageInput getPhoto={getPhoto({ state, setImageUri, setState })} image={imageUri} />

                <div
                  className='wrap-input100 validate-input bg0 rs1-alert-validate'
                  data-validate='Please Type Your Message'
                >
                  <span className='label-input100'>Project description (optional)</span>
                  <textarea
                    className='input100'
                    name='projectDescription'
                    onChange={handleChange("projectDescription")}
                    placeholder='Your message here...'
                  ></textarea>
                  <p style={{ color: "red" }}>
                    {errors.description && touched.description && errors.description}
                  </p>
                </div>

                <FormButton loading={isSubmitting} text='Add Project' />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddProjects;
