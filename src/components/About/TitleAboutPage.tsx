const TitleAboutPage = ({ children }: { children: string | JSX.Element }) => {
  return (
    <div>
      <p className=' text-[35px] font-semibold '>{children}</p>
    </div>
  );
};

export default TitleAboutPage;
