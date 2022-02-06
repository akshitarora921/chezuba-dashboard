function Paper({ children }) {
  return (
    <div className='flex flex-1 flex-col p-6 shadow-xl rounded-3xl bg-white'>
      {children}
    </div>
  );
}
export default Paper;
