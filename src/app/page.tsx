import { TextDisplay } from '@/components/text';

export default function Home() {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='brand-width-container brand-border grid place-items-center p-20'>
        <TextDisplay>GDGoC Bicol University</TextDisplay>
      </div>
      <div className='bg-brand-black-100 grid place-items-center px-4 py-20'>
        Full Width Content
      </div>
    </div>
  );
}
