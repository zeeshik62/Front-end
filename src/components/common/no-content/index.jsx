const NoContent = ({ title, imgSrc, picWidth, picHeight }) => {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center'>
      <img
        alt=''
        src={imgSrc}
        className='rounded border shadow-lg'
        style={{
          width: picWidth ?? 150,
          height: picHeight ?? 150,
          objectFit: "cover",
        }}
      />
      <h4 className='text-gray-500 pt-5 font-light'>{title}</h4>
    </div>
  );
};

export default NoContent;
