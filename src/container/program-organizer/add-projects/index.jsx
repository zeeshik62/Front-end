import { useState } from "react";
import { Formik } from "formik";
import { Dropdown, FormButton, InputField } from "../../../components/common";
import { validationSchema } from "./validationSchema";
import { options } from "./helper-methods";
import "./AddProjects.css";
import FileUpload from "./file-upload";
import { AddNewProject } from "../../../services/http-services/projects";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AddProjects = () => {
  const [imageUri, setImageUri] = useState(null);
  const { user } = useSelector((state) => state.user);

  const handleAddProject = (values, setSubmitting, resetForm) => {
    AddNewProject({
      values: { ...values, fileList: imageUri, userId: user._id },
      cbSuccess: () => {
        resetForm();
        setSubmitting(false);
        setImageUri(null);
        toast.success("project added");
      },
      cbFailure: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className='overflow-auto h-full'>
      <div className='container-contact100'>
        <div className='wrap-contact100'>
          <Formik
            initialValues={{
              projectName: "",
              stackName: "",
              projectDescription: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleAddProject(values, setSubmitting, resetForm);
            }}
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

                <div className='grid grid-cols-2 w-full gap-4'>
                  <Dropdown
                    asterisk={true}
                    dName='des'
                    name='stackName'
                    multiSelect={false}
                    handleChange={handleChange("stackName")}
                    options={options}
                    title='Select Stack name'
                  />

                  {/* <ImageInput getPhoto={getPhoto({ state, setImageUri, setState })} image={imageUri} /> */}
                  <FileUpload imageFile={(e) => setImageUri(e)} />
                </div>

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

                <FormButton disabled={isSubmitting} loading={isSubmitting} text='Add Project' />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddProjects;
