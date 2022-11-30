import { HashLoader } from "react-spinners";
import { appConfig } from "../../../utils";

const ContainerLoader = ({ loading }) => {
  return (
    <div className='center-div'>
      <HashLoader
        color={appConfig.appColor}
        loading={loading}
        size={120}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default ContainerLoader;
