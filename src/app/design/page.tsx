import {
  TextBody,
  TextSubheading,
  TextDisplay,
  TextHeading
} from '@/components/text';

const bgColorClassNames = [
  {
    name: 'Black',
    colors: ['bg-brand-black-100', 'bg-brand-black-200']
  },
  {
    name: 'Blue',
    colors: ['bg-brand-blue-100', 'bg-brand-blue-200', 'bg-brand-blue-300']
  },
  {
    name: 'Green',
    colors: ['bg-brand-green-100', 'bg-brand-green-200', 'bg-brand-green-300']
  },
  {
    name: 'Yellow',
    colors: [
      'bg-brand-yellow-100',
      'bg-brand-yellow-200',
      'bg-brand-yellow-300'
    ]
  },
  {
    name: 'Red',
    colors: ['bg-brand-red-100', 'bg-brand-red-200', 'bg-brand-red-300']
  }
];

export default function Design() {
  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center gap-20 py-20'>
      <div className='brand-border flex h-fit w-full flex-col items-center rounded-2xl p-12 text-center'>
        <TextDisplay className='mb-2'>Typography Scale</TextDisplay>
        <TextHeading className='mb-4'>Heading</TextHeading>
        <TextSubheading className='max-w-[500px]'>Subheading</TextSubheading>
        <TextBody className='max-w-[500px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TextBody>
      </div>
      <div className='brand-border flex h-fit w-full flex-col items-center gap-12 rounded-2xl p-12'>
        <TextHeading>Brand Colors</TextHeading>
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
