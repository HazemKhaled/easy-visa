const AboutContent = ({ children }: { children: string | JSX.Element }) => {
  return (
    <div>
      <p className=' md:w-[580px] 2xl:w-[700px] text-[18px] font-normal pt-5 '>
        {children}
      </p>
    </div>
  );
};

export default AboutContent;
