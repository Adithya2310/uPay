import React from 'react'

const motivationItems = [
    {
      iconPath: '/icons/icon-online.svg',
      title: 'Fast and reliable',
      subtitle:
        'Make payment fast and reliable using DeepBook and sui blockchain, ',
    },
    {
      iconPath: '/icons/icon-budgeting.svg',
      title: 'Simple and Fast onboarding',
      subtitle:
        'It is a Fast and easy onboarding solution to web 2 users',
    },
    {
      iconPath: '/icons/icon-onboarding.svg',
      title: 'QRcode based ',
      subtitle:
        'QRcode based payments and any token payments ',
    },
    {
      iconPath: '/icons/icon-api.svg',
      title: 'Deep Book',
      subtitle:
        'Using Deep Book platform based on sui to perform any kinds of orders and swaps',
    },
  ];

const Motivation = () => {
  return (
        <section className="bg-neutral-light-grayish-blue mb-32 ">
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 lg:mb-16">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              Why choose uPay
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5">
              We leverage Sui Protocol for merchants to make it easy to recieve the payments in Sui and make it a frictionless experience
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4">
          {motivationItems.map((item) => (
            <div key={item.title} className=" felx flex-col w-full  items-center justify-center">
              <div className="flex  justify-center lg:justify-center">
                <img className=' ' src={item.iconPath} alt="" />
              </div>

              <h2 className="text-lg text-center text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-neutral-grayish-blue text-center text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Motivation