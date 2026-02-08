import {
  TextBody,
  TextSubheading,
  TextDisplay,
  TextHeading
} from '@/components/text';

const bgColorClassNames = [
  {
    name: 'Black',
    colors: ['bg-core-black-100', 'bg-core-black-200']
  },
  {
    name: 'Blue',
    colors: ['bg-core-blue-100', 'bg-core-blue-200', 'bg-core-blue-300']
  },
  {
    name: 'Green',
    colors: ['bg-core-green-100', 'bg-core-green-200', 'bg-core-green-300']
  },
  {
    name: 'Yellow',
    colors: ['bg-core-yellow-100', 'bg-core-yellow-200', 'bg-core-yellow-300']
  },
  {
    name: 'Red',
    colors: ['bg-core-red-100', 'bg-core-red-200', 'bg-core-red-300']
  }
];

export default function Home() {
  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center gap-20 py-20'>
      <div className='flex h-fit w-full flex-col items-center rounded-2xl border-2 p-12 text-center'>
        <TextDisplay className='mb-2'>Typography Scale</TextDisplay>
        <TextHeading className='mb-4'>Heading</TextHeading>
        <TextSubheading className='max-w-[500px]'>Subheading</TextSubheading>
        <TextBody className='max-w-[500px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TextBody>
      </div>
      <div className='flex h-fit w-full flex-col items-center gap-12 rounded-2xl border-2 p-12'>
        <TextHeading>Core Colors</TextHeading>
        <div className='flex flex-row gap-6'>
          {bgColorClassNames.map((color, index) => {
            return (
              <div
                key={index + color.name}
                className='flex flex-col items-center'
              >
                <div className='mb-4'>
                  <TextSubheading>{color.name}</TextSubheading>
                </div>
                <div className='flex flex-col gap-6'>
                  {color.colors.map(bgColor => {
                    return (
                      <div
                        key={index + bgColor}
                        className='flex flex-col items-center gap-2'
                      >
                        <div
                          key={index + bgColor}
                          className={`size-[100px] rounded-full ` + bgColor}
                        />
                        <TextBody>{bgColor}</TextBody>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
