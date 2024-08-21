import Heading from '../common/Heading';
import { Fade } from 'react-awesome-reveal';

type CardData = {
  imgUrl: string;
  title: string;
  description: string;
  btnTxt: string;
};

const HowToUse: React.FC = () => {
  const cardsData: CardData[] = [
    {
      imgUrl: '/create.jpg',
      title: 'Create an Account',
      description: 'Quick and easy sign-up to access all features.',
      btnTxt: 'Sign Up',
    },
    {
      imgUrl: '/plan.jpg',
      title: 'Choose Your Plan',
      description:
        'Select the subscription that best fits your needs.',
      btnTxt: 'Check plans',
    },
    {
      imgUrl: '/explore.jpg',
      title: 'Explore and Enjoy',
      description: 'Start exploring all the content and activities available.',
      btnTxt: 'Explore more',
    },
  ];

  return (
    <div className='h-full w-full py-16 bg-light-blue relative'>
      <Heading heading='Getting Started' />
      <div className='h-[6rem] w-[6rem] absolute top-[2rem] left-[2rem] lg:h-[10rem] lg:w-[10rem] lg:top-[4rem] lg:left-[15rem]'>
        <img src="/handprints.png" alt="icons" className='h-full w-full'/>
      </div>
      <div className='h-[6rem] w-[6rem] absolute top-[2rem] right-[2rem] lg:h-[10rem] lg:w-[10rem] lg:top-[4rem] lg:right-[15rem]'>
        <img src="/handprints2.png" alt="icons" className='h-full w-full'/>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10 px-4 lg:px-20'>
        {cardsData.map((card, index) => (
          <Fade key={index} direction="up" triggerOnce>
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300 pt-8">
              <a href="#">
                <img className="w-full h-56 object-cover" src={card.imgUrl} alt={card.title} />
              </a>
              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <a href="#">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {card.title}
                    </h5>
                  </a>
                  <p className="mb-4 text-gray-700 dark:text-gray-400">
                    {card.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center px-4 py-2 text-lg font-semibold text-center text-white bg-men-blue rounded-lg shadow-lg hover:bg-men-dark-blue focus:ring-4 focus:outline-none focus:ring-men-blue"
                >
                  {card.btnTxt}
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
