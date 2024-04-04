const AboutImg = ({ children }: { children: string | JSX.Element }) => {
  return (
    <div className=' w-full h-full rounded-3xl flex justify-center items-center '>
      {children}
    </div>
  );
};

export default AboutImg;
