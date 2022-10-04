import React from 'react'

const Registration = () => {
  return (
    <div className='mt-14 bg-slate-200 text-black'>
<h1 className='text-center text-3xl font-bold'>
    <span className='md:px-8 border-b-2 border-blue-500 pb-4'>
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
    <span>Paper Submission Deadline</span>
    <span className='text-right'>November 22, 2022</span>
</div>
<div className='w-full flex justify-between border-b-2 border-gray-400 py-2'>
    <span>Acceptamce Notification</span>
    <span className='text-right'>January 23, 2023</span>
</div>
<div className='w-full flex justify-between border-b-2 border-gray-400 py-2'>
    <span>Start of Registration</span>
    <span className='text-right'>January 23, 2023</span>
</div>
</div>
</div>
<h1 className='text-center text-3xl font-bold mt-12'>
    <span className='border-b-4 border-blue-500 px-4 pb-4'>
    Registration Fee
    </span>
</h1>
<div className='flex justify-center my-4'>
<div className='mt-16 p-1 md:p-4 border-2 border-stone-400'>
<table className='text-sm md:text-md'>
<tbody>
<tr className='h-12'>
        <th></th>
        <th className='text-left text-[13px] sm:text-[15px] p-1'>Category</th>
        <th className='text-left text-[13px] sm:text-[15px] p-1'>Indian Delegates</th>
        <th className='text-left text-[13px] sm:text-[15px] p-1'>Foreign Delegates</th>
    </tr>
    <tr className='border-b-2 border-stone-400'>
    <td className='sm:w-48 md:w-72 text-sm md:text-md px-1 md:px-2 border-b-2 border-stone-400' rowSpan={5}>Early Paper Submission Advantage (For Paper Submitted Till 31 October, 2022) </td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td>Student (IEEE)</td>
        <td>INR 3900/-</td>
        <td>USD 150</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td>Student (Non-IEEE)</td>
        <td>INR 4900/-</td>
        <td>USD 250</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td>Faculty</td>
        <td>INR 7900/-</td>
        <td>USD 350</td>
    </tr>
    <tr className='border-b-4 border-stone-400'>
        <td>Industry</td>
        <td>INR 10900/-</td>
        <td>USD 450</td>
    </tr>
    <tr>
        <td rowSpan={5}>Regular</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td>Student (IEEE)</td>
        <td>INR 4900/-</td>
        <td>USD 190</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td>Student (Non-IEEE)</td>
        <td>INR 5900/-</td>
        <td>USD 290</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td>Faculty</td>
        <td>INR 9900/-</td>
        <td>USD 390</td>
    </tr>
    <tr className='border-b-4 border-stone-400'>
        <td>Industry</td>
        <td>INR 12900/-</td>
        <td>USD 490</td>
    </tr>
    <tr>
    <td colSpan={4}>
        * 10% Additional Rebate for Earlt Bird Registrations ( Before 31 Januray, 2023, 11 PM-IST ) on all types/ categories of registrations.
    </td>
    </tr>
</tbody>
</table>
</div>
</div>
    </div>
  )
}

export default Registration