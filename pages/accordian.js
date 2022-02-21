import React from 'react';

function accordian() {
  return (
    // <div>
    //   <div className="max-w-lg mx-auto p-8"> 
    //    <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>   
    //     <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">      Accordian 1    </summary>    
    //     <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">     
    //      <p>The mug is round. The jar is round. They should call it Roundtine and the rvs cas </p>   
    //       </div>  
    //       </details>
    //       </div>
    //       <div className="max-w-lg mx-auto p-8"> 
    //    <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>   
    //     <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">      Accordian 2    </summary>    
    //     <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">     
    //      <p>The mug is round. The jar is round. They should call it Roundtine and the rvs cas </p>   
    //       </div>  
    //       </details>
    //       </div>
    // </div>

    <div className='shadow-md w-full md:w-2/3 mx-auto mt-4'>
      <div className='overflow-hidden'>
       <label>
         <input className='absolute opacity-0 peer ' type="checkbox"/>
        <p className='p-5 inline-block'>Label one </p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block float-right mt-5 mr-2 border-2 rounded-full peer-checked:rotate-45 peer-checked:bg-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
</svg>
        <div className='bg-gray-300 max-h-0 peer-checked:max-h-screen'><p className='p-5 text-black'>this is test content</p></div>
        </label>
      </div>
    
      <div></div>
      <div></div>
      
    
  );
}

export default accordian;
