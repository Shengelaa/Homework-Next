import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-[#FFF5F0] w-full h-[200vh] overflow-x-hidden'>
      {" "}
      {/* Fixed horizontal overflow */}
      <header className='flex align-center justify-center flex-wrap ml-5 mr-5'>
        <div className='w-full h-[58px] max-w-[1819px] border-2 rounded border-[#262626] mt-[50px] mb-[15px] flex flex-row justify-between bg-[#FFDECC]'>
          <Image
            src='/assets/header/Design1.png'
            alt='Design'
            width={224}
            height={224}
          />
          <div className='w-[72px] h-[72px]'>
            <Image
              src='/assets/header/Header1.png'
              alt='Header Image'
              width={72}
              height={72}
            />
          </div>
          <p className='text-[#262626] w-[446px] h-[58px] text-center justify-center text-[24px] font-medium mt-3 font-sans'>
            Admission is Open, Grab your seat now.
          </p>
          <div className='w-[58px] flex items-center ml-[-170px] mt-[10px]'>
            <Image
              src='/assets/header/Arrow.png'
              alt='Design'
              width={25}
              height={21}
              className='h-[25px] ml-[30px] '
            />
          </div>
          <div className='mt-[27px] ml-[-100px]'>
            <Image
              src='/assets/header/Header2.png'
              alt='Design'
              width={40}
              height={40}
            />
          </div>
          <Image
            src='/assets/header/Design2.png'
            alt='Design'
            width={224}
            height={224}
          />
        </div>
        <div className='w-full h-[80px] max-w-[1819px] border-2 rounded-xl border-[#262626] flex flex-row justify-between bg-white'>
          <div className='w-[230px] h-[77px] mt-[0.12px] bg-[#FF8D4D] rounded-l-[10px] border-r-2 border-r-[#262626] flex flex-row justify-center items-center'>
            <div className='mr-[20px]'>
              <Image
                src='/assets/header/HeaderShape1.png'
                alt='Design'
                width={40}
                height={40}
              />
            </div>
            <p className='w-[146px] text-[#262626] font-sons text-[20px] font-bold'>
              Little Learners
            </p>
          </div>
          <div className='flex flex-row justify-between max-w-[922px] w-full bg-black rounded-r-xl mb-[80px]'>
            <div className='w-[122px] h-[76px] flex justify-center items-center font-sans text-[20px] border-r-[3px] border-black bg-[#FFEFE5] border-l-[3px] border-l-black text-[#262626]'>
              <a href=''>Home</a>
            </div>
            <div className='w-[148px] h-[76px] flex justify-center items-center font-sans text-[20px] border-r-[3px] border-black bg-white text-[#262626]'>
              <a href=''>About Us</a>
            </div>
            <div className='w-[162px] h-[76px] flex justify-center items-center font-sans text-[20px] border-r-[3px] border-black bg-white text-[#262626]'>
              <a href=''>Academics</a>
            </div>
            <div className='w-[166px] h-[76px] flex justify-center items-center font-sans text-[20px] border-r-[3px] border-black bg-white text-[#262626]'>
              <a href=''>Admissions</a>
            </div>
            <div className='w-[174px] h-[76px] flex justify-center items-center font-sans text-[20px] border-r-[3px] border-black bg-white text-[#262626]'>
              <a href=''>Student Life</a>
            </div>
            <div className='w-[138px] h-[76px] flex justify-center items-center font-sans text-[20px]  bg-[#FFAE80] rounded-r-lg text-[#262626]'>
              <a href=''>Contact</a>
            </div>
          </div>
        </div>
      </header>
      <section className='w-full flex justify-center'>
        <section className='mt-[80px] max-w-[1590px] h-[785px] flex flex-row'>
          <div>
            <Image
              src='/assets/section1/Section1Main.png'
              alt='Design'
              width={765}
              height={785}
              className='max-w-[765px] max-h-[785px]'
            />
          </div>
          <div className='max-w-[765px] h-[500px] ml-[60px] mt-[140px]'>
            <p className='text-[#262626] font-medium font-sans text-[22px]'>
              Welcome to Little Learners Academy
            </p>
            <div className='max-w-[367px] h-1 bg-[#262626] '></div>
            <h1 className='font-extrabold text-[44px] leading-[70px] max-w-[800px] w-full text-[#1A1A1A]'>
              Where Young Minds Blossom and{" "}
              <span className='text-[#FF8D4D]'>Dreams Take Flight</span>
            </h1>
            <p className='mt-[30px] text-[#333333] text-[20px] max-w-[765px] h-[90px]'>
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>
            <div className='max-w-[765px] h-[141px] border-4 border-[#262626] w-full bg-[#FFEFE5] flex flex-row justify-between items-center rounded-xl mt-[60px]'>
              <div className='ml-4'>
                <h2 className='text-[#262626] font-sans font-extrabold text-[44px]'>
                  +7000.
                </h2>
                <p className='text-[#262626] font-sans font-medium text-end ml-2'>
                  Students Passed Out.
                </p>
              </div>
              <div>
                <h2 className='text-[#262626] font-sans font-extrabold text-[44px]'>
                  +37.
                </h2>
                <p className='text-[#262626] font-sans font-medium text-end'>
                  Awards & Recognitions
                </p>
              </div>
              <div>
                <h2 className='text-[#262626] font-sans font-extrabold text-[44px]'>
                  +15.
                </h2>
                <p className='text-[#262626] font-sans font-medium text-center mr-4'>
                  Experience Educators
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='w-full flex justify-center mt-[200px]'>
        <div className='flex justify-center items-center flex-col'>
          <p className='text-black font-medium text-[20px] text-center border-[3px] max-w-[297px] w-full h-[47px] bg-white rounded items-center mb-[19px] border-black pt-2'>
            Children Deserve Bright Future
          </p>
          <p className='text-[#1A1A1A] font-bold text-[58px] font-sans text-center mb-[19px]'>
            Our Benefits
          </p>
          <p className='text-[#333333] font-medium text-[20px] max-w-[922px] text-center'>
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </p>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
