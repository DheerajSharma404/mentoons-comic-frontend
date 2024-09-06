import Wordbreak from "@/components/comics/Wordbreak";
import { motion } from "framer-motion";
import FrequentlyAskeQuestion from "../FAQSection/FrequentlyAskeQuestion";
const Career = () => {
  return (
    <section className='relative  '>
      {/* Testimonial */}

      <div className=' p-4 aspect-video'>
        <video
          src='https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/Team+Video_02.mp4'
          className='w-full object-cover  rounded-xl'
          controls
          poster='/team-men.png'
        />
      </div>

      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='space-y-5 pb-8 text-center lg:text-start md:pl-8'
      >
        <motion.div
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=' text-3xl text-[#974200] lineBefore uppercase'
        >
          Experience
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className='text-5xl lg:text-7xl text-black w-full font-extrabold leading-[1.10]'
        >
          What our previous employee <Wordbreak /> have to say.
        </motion.div>
      </motion.div>

      <div className=' grid md:grid-cols-2 '>
        <div className='relative p-4 pt-0 pl-5 rounded-lg'>
          <video className='h-full w-full rounded-lg' controls>
            <source
              src='https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/Abhishek+Testimonial.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <div className='relative p-4 pt-0 pl-5 rounded-lg'>
          <video className='h-full w-full rounded-lg' controls>
            <source
              src='https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/Ayushi+Testimonial.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      {/* open position is acorrdian */}
      <div className='relative  '>
        <div className='relative md:w-80 mx-auto'>
          <img
            src='/assets/images/open-position-bg.svg'
            alt=''
            className='w-full object-cover'
          />
          <h1 className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-[28px] font-bold whitespace-nowrap text-neutral-700'>
            Open positions
          </h1>
        </div>
      </div>
      <div className='relative'>
        <FrequentlyAskeQuestion />
      </div>
    </section>
  );
};

export default Career;
