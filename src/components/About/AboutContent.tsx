const AboutContent = ({ children }: { children: string | JSX.Element }) => {
  return (
    <div>
      <p className=' w-[520px] text-[18px] font-normal pt-5 '>{children}</p>
    </div>
  );
};

export default AboutContent;
