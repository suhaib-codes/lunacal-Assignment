import React from 'react';
import LowerCard from "./LowerCard";
import UpperCard from "./UpperCard";


const Container = () => {
  return (
    <div className='mx-auto mt-8 mb-8 w-full max-w-[720px] flex flex-col items-center md:items-end md:mr-20 md:mt-[96px] md:mb-[96px] gap-y-6'>
      <UpperCard />
     
      <LowerCard />
      
    </div>
  );
}

export default Container;
