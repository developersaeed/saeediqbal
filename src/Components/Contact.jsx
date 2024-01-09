
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tvimsz4', 'template_0ubmeyj', form.current, 'vbhaemKZfg4eFaVS2')
      .then((result) => {
          console.log(result.text);
          alert(result.text + 'Form Submitted Successfully');
      }, (error) => {
          console.log(error.text);
      });
  };


  return (<>

  
  {/* Main div */}
  <div id='Contact-me' className='flex flex-col md:flex-row  p-4 gap-4 justify-between lg:mx-48 md:p-12'>

  <div className='bg-acent rounded-md p-4 shadow-md shadow-gray-500 md:p-4 md:h-[50%] md:w-[50%]'>
  
  <h4 className='capitalize py-2 font-medium text-secondary'>Write to Me</h4>
  <h6 className='capitalize text-[11px]'>Have any queries in mind? submit a custom request.</h6>
  <div className=' '> <form ref={form} onSubmit={sendEmail} className='flex flex-col'> 
  {/* <label>Name</label> */}
  <input type="text" name="from_name"   required        className='my-2 outline-1  bg-black py-2 px-2 text-[1rem] text-white rounded-sm shadow-sm shadow-gray-600' placeholder='John Doe' />
  
  {/* <label>Email</label> */}
  <input type="email" name="from_email" required        className='my-2 outline-1  bg-black py-2 px-2 text-[1rem] text-white rounded-sm shadow-sm shadow-gray-600' placeholder='Abc@YourDomain.com' />
  
  {/* <label>Message</label> */}
  <textarea name="message"   cols={30} rows={7} required className='my-2 outline-1  bg-black py-2 px-2 text-[1rem] text-white rounded-sm shadow-sm shadow-gray-600' placeholder='Describe Your Message Here...'/>
  
  <input type="submit" name='submit' value="SUBMIT REQUEST" className='bg-secondary font-semibold hover:bg-black hover:text-secondary  my-2 outline-1  py-2 px-2 text-[1rem] text-white rounded-sm ' />
  </form>   </div>
  </div>


{/* form wali div */}
<div className='bg-acent rounded-md p-4 shadow-md shadow-green-700 md:p-4 md:h-[50%] md:w-[50%]'>
  
<h4 className='capitalize py-2 font-medium text-secondary'>Write to Me</h4>
<h6 className='capitalize text-[11px]'>Have any queries in mind? submit a custom request.</h6>
<div className=' '> <form ref={form} onSubmit={sendEmail} className='flex flex-col'> 
{/* <label>Name</label> */}
<input type="text" name="from_name"   required        className='my-2 outline-1  bg-black py-2 px-2 text-[1rem] text-white rounded-sm shadow-sm shadow-gray-600' placeholder='John Doe' />

{/* <label>Email</label> */}
<input type="email" name="from_email" required        className='my-2 outline-1  bg-black py-2 px-2 text-[1rem] text-white rounded-sm shadow-sm shadow-gray-600' placeholder='Abc@YourDomain.com' />

{/* <label>Message</label> */}
<textarea name="message"   cols={30} rows={7} required className='my-2 outline-1  bg-black py-2 px-2 text-[1rem] text-white rounded-sm shadow-sm shadow-gray-600' placeholder='Describe Your Message Here...'/>

<input type="submit" value="SUBMIT REQUEST" className='bg-btn font-semibold hover:bg-black hover:text-secondary  my-2 outline-1  py-2 px-2 text-[1rem] text-white rounded-sm ' />
</form>   </div>
</div>
  </div>
 

 
  </>
  )
}

export default Contact



