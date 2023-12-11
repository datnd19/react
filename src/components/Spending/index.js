import { AiFillPlusSquare } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Layout from '../Layout'
import { MdLocalHospital } from "react-icons/md";
import React from 'react'
import { TiDelete } from "react-icons/ti";

function index({ setTab }) {
    return (
        <Layout tab={'spending'} setTab={setTab}>
            <div className='w-full  p-10 max-w-[1000px]'>
                <div className='text-left text-3xl font-bold'>
                    Tổng chi tiêu | <span className="text-red-500">- 450.000 VND</span>
                </div>
                <div className='grid grid-cols-3 py-10 gap-10'>
                    <div className='col-span-1 mb-3'>
                        <div className='flex flex-col items-start pb-4'>
                            <div>Ghi chú</div>
                            <input placeholder='Chưa nhập vào' className='p-2 border-[1px] min-w-full outline-none rounded-lg border-black bg-slate-100' />
                        </div>
                        <div className='flex flex-col items-start pb-4'>
                            <div>Tiền thu</div>
                            <input placeholder='0 VND' className='p-2 border-[1px] min-w-full outline-none rounded-lg border-black bg-slate-100' />
                        </div>
                        <div className='flex flex-col items-start pb-4'>
                            <div>Ngày</div>
                            <input placeholder='22/11/2023' className='p-2 border-[1px] min-w-full outline-none rounded-lg border-black bg-slate-100' />
                        </div>
                        <div className='flex flex-col items-end pb-4'>
                            <div>Danh mục</div>
                            <select className='p-2 border-[1px] outline-none rounded-lg border-black bg-slate-100'>
                                <option selected>Quần áo</option>
                            </select>
                        </div>
                        <span className='text-red-500 block w-full text-right'>
                            Nhập toàn bộ các mục
                        </span>
                        <button className='flex items-center text-white bg-black rounded-lg mt-5 justify-center  min-w-full py-2 text-2xl text-center'>
                            <AiFillPlusSquare />
                            <span>Thêm</span>
                            <span>/</span>
                            <span>Sửa</span>
                        </button>
                    </div>


                    <div className="col-span-2 py-10">
                        <div className="w-full p-3 bg-slate-100 flex items-center border-[1px] border-gray-200 justify-start rounded-lg">
                            <div className="text-3xl px-3">
                                <MdLocalHospital />
                            </div>
                            <div className="flex-1 flex flex-col items-start">
                                <div className="flex items-center">
                                    <div className="text-red-400"><GoDotFill /></div>
                                    <div>Khám răng</div>
                                </div>
                                <div className="flex items-center">
                                    <span className="pr-3"> VND 150.000</span>
                                    <FaRegCalendarDays />
                                    <span className="pr-3"> 27/10/2023</span>
                                    <BiSolidMessageRounded />
                                    <span>Nhổ răng</span>
                                </div>
                            </div>
                            <div className="text-3xl flex items-center">
                                <span className="text-yellow-400 px-2">
                                    <FaRegEdit />
                                </span>
                                <span className="text-red-500 px-2">
                                    <TiDelete />
                                </span>
                            </div>
                        </div>
                        <div className="w-full p-3 mt-5 bg-slate-100 flex items-center border-[1px] border-gray-200 justify-start rounded-lg">
                            <div className="text-3xl px-3">
                                <MdLocalHospital />
                            </div>
                            <div className="flex-1 flex flex-col items-start">
                                <div className="flex items-center">
                                    <div className="text-red-400"><GoDotFill /></div>
                                    <div>Khám răng</div>
                                </div>
                                <div className="flex items-center">
                                    <span className="pr-3"> VND 150.000</span>
                                    <FaRegCalendarDays />
                                    <span className="pr-3"> 27/10/2023</span>
                                    <BiSolidMessageRounded />
                                    <span>Nhổ răng</span>
                                </div>
                            </div>
                            <div className="text-3xl flex items-center">
                                <span className="text-yellow-400 px-2">
                                    <FaRegEdit />
                                </span>
                                <span className="text-red-500 px-2">
                                    <TiDelete />
                                </span>
                            </div>
                        </div>
                        <div className="w-full p-3 mt-5 bg-slate-100 flex items-center border-[1px] border-gray-200 justify-start rounded-lg">
                            <div className="text-3xl px-3">
                                <MdLocalHospital />
                            </div>
                            <div className="flex-1 flex flex-col items-start">
                                <div className="flex items-center">
                                    <div className="text-red-400"><GoDotFill /></div>
                                    <div>Khám răng</div>
                                </div>
                                <div className="flex items-center">
                                    <span className="pr-3"> VND 150.000</span>
                                    <FaRegCalendarDays />
                                    <span className="pr-3"> 27/10/2023</span>
                                    <BiSolidMessageRounded />
                                    <span>Nhổ răng</span>
                                </div>
                            </div>
                            <div className="text-3xl flex items-center">
                                <span className="text-yellow-400 px-2">
                                    <FaRegEdit />
                                </span>
                                <span className="text-red-500 px-2">
                                    <TiDelete />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default index