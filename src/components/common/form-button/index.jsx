import { MoonLoader } from "react-spinners";

const FormButton = ({ disabled, loading, text }) => {
  return (
    <div className='container-contact100-form-btn'>
      <button
        className='contact100-form-btn hover:bg-gradient-to-tl from-blue-600 to-cyan-400'
        disabled={disabled}
        type='submit'
      >
        <span className='buttonLoader'>
          {text}
          {!loading ? (
            <i className='fa fa-long-arrow-right ml-4' aria-hidden='true' />
          ) : (
            <MoonLoader className='ml-4' color='#fff' size={18} loading />
          )}
        </span>
      </button>
    </div>
  );
};

export default FormButton;
