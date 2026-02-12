import { TextDisplay } from '@/components/text';
import { Button } from '@/components/button';

export default function DirectoryTab() {
  return (
    <div>
      <TextDisplay className='mb-8 text-center'>Officers Directory</TextDisplay>
      <div className='flex flex-wrap justify-center gap-4'>
        <Button variant='gradient-outline'>Executive Team</Button>
        <Button variant='black-outline'>Operations</Button>
        <Button variant='black-outline'>Communications</Button>
        <Button variant='black-outline'>Finance</Button>
        <Button variant='black-outline'>Technology</Button>
      </div>
    </div>
  );
}
