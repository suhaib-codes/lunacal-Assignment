import React, { useState } from 'react';
import SidePanel from './SidePanel';
import CardContent from './CardContent';
import Rectangle from '../assets/rectangle.svg';

const UpperCard = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const aboutMeContent = `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`;
  const experiencesContent = `Hello! I’m Dave, your dedicated sales representative from Salesforce. I’ve had the pleasure of working with this incredible company for the past three years, helping clients grow and succeed.Originally from Albany, NY, I’ve been calling Santa Carla home for the last 10 years, where I live with my wife Tiffany and our twin daughters, Emma and Ella.`;
  const recommendedContent = `Hello! I’m Dave, a sales representative at Salesforce. With three years at the company, I’ve helped many clients thrive. Originally from Albany, NY, I’ve lived in Santa Carla for a decade with my wife Tiffany and our four-year-old twins, Emma and Ella. Mornings are busy as they start school, but I’m here to support you whenever you need it!`;

  return (
    <div className='w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]'>
      <div className='flex items-center justify-center gap-2 mr-2'>
        <SidePanel />
        <CardContent>
          <div className='w-full flex flex-col justify-center gap-y-8'>
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-[614px] h-[62px] rounded-[23px] bg-[#171717] shadow-custom-inset text-white text-[18px] font-medium flex justify-center items-center gap-2'>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`w-full flex-1 h-[49px] rounded-[16px] px-3 py-2 mx-1 transition-all duration-200 text-center font-['Poppins'] leading-[16.12px] ${activeTab === tab
                      ? 'bg-[#28292f] shadow-[0_0_25px_25px_rgba(0,0,0,0.3)] text-white'
                      : 'hover:bg-[#28292f] hover:shadow-md text-[#A3ADB2]'
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[611px] h-[175px] font-['Plus_Jakarta_Sans'] text-[20px] font-normal text-left text-[#969696] leading-[25.2px] mt-2">
              {activeTab === 'About Me' && aboutMeContent}
              {activeTab === 'Experiences' && experiencesContent}
              {activeTab === 'Recommended' && recommendedContent}
            </div>
          </div>
        </CardContent>
        <img src={Rectangle} alt="rectangle-icon" className="w-[8px] h-[64px] " />
      </div>
    </div>
  );
}

export default UpperCard;
