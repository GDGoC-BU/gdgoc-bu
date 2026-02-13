import { TextHeading } from '@/components/text';
import SearchBar from './_sections/search-bar';

export default function PastEvents() {
    return (
        <div className='brand-border border-x-0! border-t-0!'>
            <SearchBar />
            <div className='grid h-[800px] place-items-center px-4 py-20'>
                <TextHeading>Past Events</TextHeading>
            </div>
        </div>
    );
}
