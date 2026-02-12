import { TextDisplay } from '@/components/text';
import { Button } from '@/components/button';

export default function DirectoryTab() {
  return (
    <>
      <TextDisplay className='mb-8 text-center'>Officers Directory</TextDisplay>
      <div className='flex flex-wrap justify-center gap-4'>
        <Button variant='gradient-outline'>Executive Team</Button>
        <Button variant='black-to-green'>Operations</Button>
        <Button variant='black-to-yellow'>Communications</Button>
        <Button variant='black-to-red'>Finance</Button>
        <Button variant='black-to-blue'>Technology</Button>
      </div>
    </>
  );
}
