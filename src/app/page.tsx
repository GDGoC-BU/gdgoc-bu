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
    <div className='grid min-h-screen place-items-center font-sans'>
      <div className='flex h-fit w-fit flex-col items-center gap-12 rounded-2xl border-2 p-12'>
        <h1 className='text-3xl font-[550]'>Core Colors</h1>
        <div className='flex flex-row gap-6'>
          {bgColorClassNames.map((color, index) => {
            return (
              <div
                key={index + color.name}
                className='flex flex-col items-center'
              >
                <div className='mb-4'>
                  <p className='text-2xl'>{color.name}</p>
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
                        <p className='text-base'>{bgColor}</p>
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
