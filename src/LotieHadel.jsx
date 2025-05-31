import React from 'react'
import Lottie from 'lottie-react';
import loder from "../public/LotieFiles/loader.json"
import loder_2 from "../public/LotieFiles/loder_2.json"
import loderError from "../public/LotieFiles/lotieError.json"

function LotieHadel({status , text}) {
console.log(status);

    return (
    <div className='vh-100 flex'>
      <div className='flex flex-column '>
        {status === 'main_page' ?
       <Lottie animationData={loder} className='w-50' />
       : status === "nestd_page" ?
       <Lottie animationData={loder_2} className='w-50' />
       : status === 'error' &&
       <Lottie animationData={loderError} className='w-50' />
    }
      </div>

    </div>
  )
}

export default LotieHadel 