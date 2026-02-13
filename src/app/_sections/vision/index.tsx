import { TextBody, TextHeading } from '@/components/text';
import Image from 'next/image';

export default function Vision() {
  return (
    <div className='brand-border border-x-0!'>
      <div className='brand-width-container'>
        <div className='flex flex-row gap-10'>
          {/* Image */}
          <div className='brand-border grid aspect-square w-full max-w-[300px] place-items-center rounded-full'>
            {/* <div className='relative aspect-square w-[50%]'>
              <Image
                alt='gdgoc logo'
                src='/logos/gdgoc-logo-main.png'
                fill
                className='object-contain'
              />
            </div> */}
          </div>
          {/* Text */}
          <div className='relative flex w-full max-w-[350px] flex-row items-center self-stretch'>
            <TextBody>
              This organization envisions itself to be an avenue for the future
              generation to nurture their ideas and encourage critical thinking
              by establishing a community of tech enthusiasts who are passionate
              about uplifting communities through technology and innovation.
            </TextBody>
            <div
              className={
                'brand-border absolute top-0 right-[-25%] z-[-1] aspect-square h-full rounded-full border-2' +
                ' ' +
                'after:bg-background after:absolute after:top-1/2 after:left-1/2 after:h-[calc(100%+4px)] after:w-[calc(60%+4px)] after:translate-x-[-95%] after:translate-y-[-50%] after:content-[""]'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
