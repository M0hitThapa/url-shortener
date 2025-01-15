import * as React from 'react';

import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
interface IFormContainerProps {
    updateReloadState: () => void;
  }

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const { updateReloadState } = props;
    const [fullUrl, setFullUrl] = React.useState<string>("");
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`${serverUrl}/shorturl`, {
                fullUrl: fullUrl
            });
            setFullUrl("");
            updateReloadState();
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
        <div className='flex justify-center items-center '>
            <div className='relative w-7/12'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>your.Link /</div>
                <input type="text" placeholder='add your link' required className='block w-full p-4 ps-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-50 focus:ring-blue-500 ' value={fullUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)} />
               
            </div>
            <button type='submit' className='h-13 w-24 ml-10 rounded-lg text-slate-200 font-mono bg-teal-800 font-semibold'>Shorten Url</button>
        </div>
    </form>
   </div>
  ) ;
};

export default FormContainer;
