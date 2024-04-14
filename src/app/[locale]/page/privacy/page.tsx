import { useTranslations } from 'next-intl';

const PrivacyPage = () => {
  const t = useTranslations('PrivacyPage');

  return (
    <div className=' w-full h-full flex justify-center items-start mb-20 '>
      <div className=' md:w-[1240px] pt-[140px] 2xl:w-[1500px] flex justify-center '>
        <div className=' md:w-[1000px] ml-1 '>
          <h1 className=' text-4xl font-bold '>Privacy Policy</h1>
          <p className='w-[360px] md:w-full mt-5 text-lg '>
            Welcome to Easy Visa's Privacy Policy. This Privacy Policy describes
            how Easy Visa collects, uses, and discloses information when you use
            our submit for a visa.
          </p>
          <p className=' w-[360px] md:w-full mt-5 font-semibold '>
            Information We Collect We collect certain information when you use
            our Service, including:
          </p>

          <div className=' w-[360px] md:w-full mt-3 '>
            <li className=' '>
              Personal Information: When you use our Service, we may collect
              personal information such as your name, email address, passport
              details, and travel preferences.
            </li>
            <li className=' mt-3 '>
              Usage Information: We may collect information about how you
              interact with our Service, such as the pages you visit and the
              actions you take.
            </li>
            <li className=' mt-3 '>
              Device Information: We may collect information about the device
              you use to access our Service, including device type, operating
              system, and browser type.
            </li>
          </div>

          <p className=' w-[360px] md:w-full mt-5 font-semibold '>
            How We Use Your Information We may use the information we collect
            for various purposes, including to:
          </p>

          <div className=' mt-3 '>
            <li className=' '>Provide and maintain our Service</li>
            <li className=' mt-3 '>Personalize your experience</li>
            <li className=' mt-3 '>Communicate with you</li>
            <li className=' mt-3 '>
              Analyze usage trends and improve our Service
            </li>
            <li className=' mt-3 '>Comply with legal obligations</li>
          </div>

          <p className=' mt-5 font-semibold '>Data Security</p>

          <p className=' w-[360px] md:w-full mt-3'>
            We take data security seriously and implement appropriate measures
            to protect your information from unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <p className=' mt-5 font-semibold '>Third-Party Services</p>

          <p className=' w-[360px] md:w-full mt-3'>
            We may use third-party services to facilitate our Service and to
            analyze how our Service is used. These third-party services may have
            their own privacy policies governing the use of your information.
          </p>

          <p className=' mt-5 font-semibold '>Your Choices</p>

          <p className=' w-[360px] md:w-full mt-3'>
            You may choose to opt-out of certain data collection and use,
            although this may limit your ability to use certain features of our
            Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
