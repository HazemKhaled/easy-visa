import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Input from '@/components/Contact/Input';
import TextArea from '@/components/Contact/TextArea';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <div className='w-full h-full flex justify-center items-center py-[100px] '>
      <div className=' w-[1240px] 2xl:w-[1500px] flex justify-center '>
        <div className=' md:w-[800px] 2xl:w-[900px] h-full  mt-20 md:flex justify-between items-start '>
          <div>
            <h1 className=' my-5 text-4xl font-bold '>{t('ContactUs')}</h1>
            <div>
              <p className=' pl-1 font-inter text-md font-medium leading-5 tracking-normal mb-[2px] '>
                {t('FullName')}
              </p>
              <Input type='text' id='username' name='username' />
            </div>
            <br />
            <div className=' mb-5'>
              <p className=' pl-1 font-inter text-md font-medium leading-5 tracking-normal mb-[2px] '>
                {t('Email')}
              </p>
              <Input type='email' id='email' name='email' />
            </div>
            <div className=' mb-5'>
              <p className=' pl-1 font-inter text-md font-medium leading-5 tracking-normal mb-[2px] '>
                {t('Subject')}
              </p>
              <Input type='text' id='message' name='message' />
            </div>
            <div>
              <p className=' pl-1 font-inter text-md font-medium leading-5 tracking-normal mb-[2px] '>
                {t('Message')}
              </p>
              <TextArea id='message' name='message' rows={2} />
            </div>
            <div className='w-full p-[12px] text-center text-gray-100 rounded-xl mt-4 bg-gradient-to-r from-[#5752e5] to-[#6f9dff] '>
              <button type='submit'>{t('SendMessage')}</button>
            </div>
          </div>
          <div className=' mt-10 hidden md:flex '>
            <Image
              src='/assets/ViewFromAirplaneWindow.png'
              width={306}
              height={476}
              className=' rounded-xl'
              alt='View From Airplane Window'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
