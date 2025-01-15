import * as React from 'react';

import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

const FormContainer: React.FunctionComponent = () => {
    const [fullUrl, setFullUrl] = React.useState<string>("");
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`${serverUrl}/shorturl`, {
                fullUrl: fullUrl
            });
            setFullUrl("");
        } catch (error) {
            console.log(error);
        }
    }
  return(
   <div className='p-20'>
    <h1 className="text-black text-4xl font-bold font-serif text-center pb-4">Shorten Your Link in One Click</h1>
    <p className='text-black text-center pb-2 text-xl font-extralight'>Drop your complex URL, and we’ll turn it into a neat, short link.</p>
    <p className='text-black text-center pb-4 text-small font-thin'>Free tool for shorten your long messy url</p>
    <form onSubmit={handleSubmit}>
        <div className='flex  '>
            <div className='relative w-full'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>urlShortner.link /</div>
                <input type="text" placeholder='add your link' required className='block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-100 focus:ring-blue-500 ' value={fullUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)} />
                <button type='submit' className='absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-teal-800 rounded-xl border border-teal-700  '>Shorten Url</button>
            </div>
        </div>
    </form>
   </div>
  ) ;
};

export default FormContainer;
