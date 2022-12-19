import React from 'react'

const Registration = () => {
  return (
    <div className='mt-14 py-8 bg-slate-200 text-black'>
<h1 className='text-center text-3xl font-bold mb-6'>
    <span className='md:px-8 border-b-4 border-blue-500 pb-4'>
    Important Dates
    </span>
</h1>
<div className='flex justify-center'>
<div className='md:mx-28 bg-red-100 w-[90%] md:w-[60%] lg:w-[40%] text-sm md:text-lg p-4 mt-8 flex flex-col items-center border-2 border-stone-400'>
<div className='w-full flex justify-between border-b-2 border-gray-400 py-2'>
    <span>Paper Submission Starts</span>
    <span className='text-right'>September 5, 2022</span>
</div>
<div className='w-full flex justify-between border-b-2 border-gray-400 py-2'>
    <span className='text-red-500 font-bold'>Paper Submission Deadline</span>
    <span className='text-red-500 font-bold right'>January 15, 2022</span>
</div>
<div className='w-full flex justify-between border-b-2 border-gray-400 py-2'>
    <span>Acceptance Notification</span>
    <span className='text-right'>January 23, 2023</span>
</div>
<div className='w-full flex justify-between border-b-2 border-gray-400 py-2'>
    <span>Start of Registration</span>
    <span className='text-right'>January 23, 2023</span>
</div>
</div>
</div>
<div id='registration' className='h-12 w-full'>
</div>
<h1 className='text-center text-3xl font-bold mt-12' >
    <span className='border-b-4 border-blue-500 px-4 pb-4'>
    Registration Fee *
    </span>
</h1>
<div className='flex justify-center mt-2'>
<div className='mt-16 p-1 md:p-4 border-2 border-stone-400'>
<table className='text-[12px] md:text-lg lg:text-lg'>
<tbody>
<tr className='h-12'>
        <th></th>
        <th className='text-left text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Category</th>
        <th className='text-left text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Indian Delegates</th>
        <th className='text-left text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Foreign Delegates</th>
    </tr>
    <tr className='border-b-2 border-stone-600'>
    <td className='sm:w-48 md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400' rowSpan={5}>
    Early Paper Submission Advantage (For Paper Submitted Till <span className='text-red-500 font-bold'>31 October, 2022</span>) </td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (IEEE)</td>
        <td className='py-2'>INR 3900/-</td>
        <td className='py-2'>USD 140</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (Non-IEEE)</td>
        <td className='py-2'>INR 4900/-</td>
        <td className='py-2'>USD 190</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Faculty</td>
        <td className='py-2'>INR 7900/-</td>
        <td className='py-2'>USD 200</td>
    </tr>
    <tr className='border-b-4 border-stone-600'>
        <td className='py-2'>Industry</td>
        <td className='py-2'>INR 10900/-</td>
        <td className='py-2'>USD 250</td>
    </tr>
    <tr>
        <td rowSpan={5} className='font-semibold'>Regular</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (IEEE)</td>
        <td className='py-2'>INR 4900/-</td>
        <td className='py-2'>USD 160</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (Non-IEEE)</td>
        <td className='py-2'>INR 5900/-</td>
        <td className='py-2'>USD 210</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Faculty</td>
        <td className='py-2'>INR 9900/-</td>
        <td className='py-2'>USD 220</td>
    </tr>
    <tr className='border-b-4 border-stone-600'>
        <td className='py-2'>Industry</td>
        <td className='py-2'>INR 12900/-</td>
        <td className='py-2'>USD 290</td>
    </tr>
    <tr>
    <td colSpan={4} className='pt-8 pb-4'>
    <div className='text-blue-500 font-bold '>* <span className='pl-2'>GST excluded</span> </div>
        <div className='text-blue-500 font-bold '>** 10% Additional Rebate for Early Bird Registrations ( Before 31 January, 2023, 11 PM-IST ) on all types/ categories of registrations.</div>
    </td>
    </tr>
</tbody>
</table>
</div>
</div>
<div className='h-12 w-full'>

</div>
    </div>
  )
}

export default Registration