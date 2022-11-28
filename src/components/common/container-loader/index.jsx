import { ClipLoader } from "react-spinners";
import { appConfig } from "../../../utils";

const ContainerLoader = ({ loading }) => {
  return (
    <div className='center-button'>
      <ClipLoader
        color={appConfig.appColor}
        loading={loading}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default ContainerLoader;
