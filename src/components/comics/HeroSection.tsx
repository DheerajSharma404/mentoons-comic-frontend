import { Link, useNavigate } from "react-router-dom";
import Wordbreak from "./Wordbreak";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/axios";
import { toast } from "sonner";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();
  const [email, setEmail] = useState<string>();

  const currComic = {
    name: "Tanya's Downfall",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-06.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+26.jpg",
    category: "Category",
    comicLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/tanya_s+downfall.pdf",
    type: "ComicType.comic",
  };

  const handleOpenComic = async (comicLink: string) => {
    try {
      if (isLoggedIn) {
        await axiosInstance.post("/email/freeDownloadClaim", {
          email,comicLink
        });
        // if(response.success){
          toast("Comic sent successfully!");
          (window.location.href = comicLink)
        // }
      } else {
        navigate('/register');
      }
    } catch (err) {
      console.error(err);
      toast("An error occurred. Please try again.");
    }finally{
      setShowModal(false)
    }
  };  
  

  return (
    <div className="relative w-full text-[#864747] h-[150vh] md:h-[250vh] bg-comicsHome bg-no-repeat bg-cover bg-bottom bg-[#59B2DC]">
      <div className="relative md:px-14 text-center md:text-start py-44 md:py-20 space-y-4">
        <h1
          className="font-extrabold text-4xl lg:text-8xl"
          style={{
            WebkitTextStroke: "3px black",
            color: "transparent", // Optional, makes only the stroke visible
            textShadow: "4px 4px 4px #FBD33D",
          }}
        >
          Mentoons <Wordbreak /> Comics
        </h1>
        <p className="text-[#592828] text-3xl md:text-4xl font-semibold tracking-wider md:leading-snug">
          Welcome to a world of <Wordbreak /> meaningful stories and valuable{" "}
          <Wordbreak />
          life lessons.
        </p>
        {/*share image  */}
        <img
          className="w-32 relative left-4 lg:left-16"
          src="/assets/comics/4.png"
        />
        {/* message image */}
        <img
          className="w-52 absolute top-[-2rem] left-[43%] md:left-[40%] lg:top-0 lg:left-[43%] transform scale-x-[-1]"
          src="/assets/comics/1.png"
        />
        <>
          {/* large screen comics */}
          {/* Don't fade away comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/dont+fade+away.pdf"
          >
            <img
              className="w-[4rem] md:w-24 lg:w-32 border-[3px] shadow-md shadow-black rounded-md border-black absolute top-[60%] right-[15%] lg:top-8 lg:left-[65%] -rotate-[25deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-04.jpg"
            />
          </Link>
          {/* black jalebi image */}
          <img
            className="w-32 absolute top-[1rem] right-[60%] md:right-20 lg:top-0 lg:right-40"
            src="/assets/comics/3.png"
          />
          {/* one way trip comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/one+way+trip.pdf"
          >
            <img
              className=" w-[4rem] md:w-24 lg:w-32 border-[3px] shadow-md shadow-black rounded-md border-black absolute top-[55%] right-[42%] md:top-[52%] md:right-[43%] lg:top-[28%] lg:right-[10%] rotate-[40deg] lg:rotate-[25deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-22.jpg"
            />
          </Link>
          {/* power image */}
          <img
            className="w-20 md:w-28 lg:w-36 absolute top-[90%] md:top-[130%] left-[5%] lg:top-[33%] lg:left-[67%]"
            src="/assets/comics/2.png"
          />
          {/* bet your life comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/bet+your+life.pdf"
          >
            <img
              className="w-16 md:w-24 lg:w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[10%] bottom-[10%] md:-bottom-[20%] lg:left-[56%] lg:bottom-[30%] rotate-[25deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-09.jpg"
            />
          </Link>
          {/* come out of gaming comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Come+Out+Of+Game.pdf"
          >
            <img
              className="w-16 md:w-24 lg:w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-10 bottom-0 md:right-24 md:-bottom-36 lg:right-20 lg:bottom-8 md:rotate-[20deg] lg:-rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-05.jpg"
            />
          </Link>
          {/* cell life of soniya comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Cell+Life+of+Soniya.pdf"
          >
            <img
              className="w-16 md:w-24 lg:w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-6 -bottom-[30%] md:left-16 md:-bottom-[100%] lg:left-[40%] lg:bottom-12 -rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-12.jpg"
            />
          </Link>
          {/* tanya's downfall comic */}
          <div
            // target="_blank"
            // to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/tanya_s+downfall.pdf"
            onClick={() => setShowModal(true)}
          >
            <img
              className="w-16 md:w-24 lg:w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[10%] -bottom-[60%] md:-bottom-[140%] lg:left-[20%] lg:bottom-0 rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-06.jpg"
            />
          </div>
          {/* live and let live comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/live+or+let+live.pdf"
          >
            <img
              className="w-20 md:w-32 lg:w-[10.5rem] border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[35%] -bottom-[80%] md:-bottom-[170%] lg:left-[10%] lg:-bottom-[30%] -rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-21.jpg"
            />
          </Link>
          {/* i can manage comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Asha+_+Simran-+Time+management+(6-9)+.pdf"
          >
            <img
              className="w-[4.5rem] md:w-24 lg:w-32 block md:hidden lg:block border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[40%] -bottom-[60%] lg:left-[17%] lg:-bottom-[65%] -rotate-[20deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-02.jpg"
            />
          </Link>
          {/* choose wisely comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/choose+wisely.pdf"
          >
            <img
              className="w-16 md:w-24 lg:w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[8%] -bottom-[30%] md:-bottom-[65%] lg:right-[14%] lg:-bottom-[30%] -rotate-[30deg] lg:rotate-[20deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-08.jpg"
            />
          </Link>
          {/* rohan and puppies comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/rohan+and+the+puppies.pdf"
          >
            <img
              className="w-16 md:w-24 lg:w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[10%] -bottom-[55%] md:-bottom-[110%] lg:right-[25%] lg:-bottom-[70%] rotate-[40deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-17.jpg"
            />
          </Link>
          {/* rishi and rohit comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/rohit+and+rishi.pdf"
          >
            <img
              className="hidden md:block w-16 md:w-24 lg:w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[12%] -bottom-[150%] lg:right-[8%] lg:-bottom-[62%] -rotate-[40deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-16.jpg"
            />
          </Link>
          {/* my daily routine comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Supriya-+Time+management+(6-+12)+.pdf"
          >
            <img
              className="hidden xl:block w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[8%] -bottom-[95%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-01.jpg"
            />
          </Link>
          {/* stories on divorce comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Divorce.pdf"
          ></Link>
          <img
            className="hidden xl:block w-40 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[18%] -bottom-[130%] -rotate-[60deg] cursor-pointer hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out"
            src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-07.jpg"
          />
          {/* say sorry comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Say+Sorry.pdf"
          >
            <img
              onClick={() =>
                navigate("/mentoons-comics/audio-comics/Say Sorry")
              }
              className="hidden xl:block w-40 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[10%] md:left-[20%] xl:left-[38%] -bottom-[160%] md:-bottom-[140%] xl:-bottom-[130%] -rotate-[60deg] cursor-pointer hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-10.jpg"
            />
          </Link>
          {/* teenagers job 2 comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/20%2B+script+2+story.pdf"
          >
            <img
              className=" hidden xl:block w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[75%] md:left-[58%] -bottom-[50%] md:-bottom-[110%] -rotate-[10deg] md:-rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-24.jpg"
            />
          </Link>
          {/* Hungry for likes not likes comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Hungry+for+likes+not+life.pdf"
          >
            <img
              className="hidden xl:block w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[30%] md:left-[58%] -bottom-[230%] md:-bottom-[180%] xl:-bottom-[160%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-15.jpg"
            />
          </Link>
          {/* Think before you act comic */}
          <Link
            target="_blank"
            to="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Preppers+Story+(Think+Before+You+Act)+(1).pdf"
          >
            <img
              className="hidden xl:block w-40 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[30%] md:left-[70%] lg:left-[80%] -bottom-[110%] md:-bottom-[110%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/Think_Before_You_Act!.png"
            />
          </Link>
          {/* flower image */}
          <img
            className="w-24 md:w-40 z-50 rounded-md absolute left-[65%] -bottom-[80%] md:left-[60%] md:-bottom-[180%] lg:left-[78%] lg:-bottom-[155%] -rotate-[60deg]"
            src="/assets/images/flowerComics.png"
          />
        </>
      </div>
      {/* clement toonla image */}
      <div className="flex w-full h-full items-center justify-center">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-0 md:-translate-y-[20%] lg:-translate-y-1/2 rotate-[90deg] lg:-rotate-[60deg] xl:-rotate-45 w-[30rem] h-[15rem] md:w-[60rem] md:h-[24rem] lg:w-[70rem] lg:h-[35rem]"
          src="/klement_toonla.png"
          alt="klement toonla image"
        />
      </div>
      {/* popup modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bg-black/50 z-[99999] top-0 w-screen h-screen"
        >
          <div className="bg-rose-50 flex flex-col md:flex-row items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] md:w-[40rem] lg:w-[50rem] h-fit md:h-[25rem] lg:h-[30rem] rounded-md py-6 md:py-0 space-y-4">
            <div
              onClick={() => setShowModal(false)}
              className="absolute cursor-pointer top-6 right-4"
            >
              <MdClose className="text-2xl" />
            </div>
            <div className="w-full md:w-[45%] flex items-center justify-center">
              <img
                className="w-[60%] rounded-lg shadow-2xl shadow-rose-400 "
                src={currComic?.mini_thumbnail}
                alt="comic image"
              />
            </div>
            <div className="w-full text-center md:w-[65%] space-y-8 md:space-y-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-center">
                Tanya's Downfall
              </h1>
              <div className="space-y-2">
                <label className="text-rose-400">
                  Enter Email to Claim your free comic
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-md outline-none w-2/3"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <span
                  onClick={() =>
                    handleOpenComic(
                      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/tanya_s+downfall.pdf"
                    )
                  }
                  className="bg-rose-400 uppercase text-lg font-medium hover:bg-white hover:text-rose-400 transition-all duration-300 ease-in-out text-white py-3 px-7 rounded-full cursor-pointer"
                >
                  Read Now!
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// const ComicModal: React.FC = () => {
//   return (
//     <div className="  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-md border-2 ">
//       <div>Akash</div>
//     </div>
//   );
// };

export default HeroSection;
