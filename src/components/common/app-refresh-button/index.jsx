import "./style.css";

const AppRefreshButton = ({ onPress, icon }) => {
  return (
    <div className='float-red'>
      <button onClick={onPress} className={`fa ${icon} fa-lg my-float`} />
    </div>
  );
};

export default AppRefreshButton;
