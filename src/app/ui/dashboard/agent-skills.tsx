"use client"

import { Backdrop, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
// import CustomAccordion from "./Ui/CustomAccordion";
import Face6Icon from '@mui/icons-material/Face6';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import ListIcon from '@mui/icons-material/List';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HandshakeIcon from '@mui/icons-material/Handshake';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import CustomAccordion from "./custom-accordion";

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function AgentModal({ isOpen, onClose }: Props) {
    return (
        <Modal hideBackdrop={true} open={isOpen} onClose={onClose} sx={{ backdropFilter: "blur(5px)" }}>
            <div className="fixed inset-0 flex items-center justify-center">
                <Backdrop className="z-10 relative" open={isOpen} onClick={onClose} />
                <div className="w-full lg:w-[900px] relative z-50 px-3 ">
                    <div className="bg-[#f4f6f8] relative lg:w-[900px] max-h-[calc(100vh-100px)] modal-container overflow-auto rounded-2xl px-6 md:px-10 p-6 z-40">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-end mb-10">
                                <div onClick={onClose}>
                                    <CloseIcon className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src="/copilot.svg" alt="" width={24} height={24} />
                                <h1>Agent skill</h1>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-1 rounded-xl shadow mt-2">
                            <CustomAccordion
                                title="Check if on-hand inventory will allow all sales orders to ship without delay"
                                expanded={false}
                            >
                                <div className="text-sm leading-6">
                                    When <p className="bg-[#c1d8ec] px-2 py-1 inline-flex items-center gap-1 rounded-xl w-fit align-middle my-1">
                                        <Face6Icon sx={{ color: "#3e95e0" }} />
                                        <span className="text-[#3e95e0]">any vendor</span>
                                    </p> send an email with changes to <p className="bg-[#c1d8ec] px-2 py-1 inline-flex items-center gap-1 rounded-xl w-fit align-middle my-1">
                                        <VideoFileIcon sx={{ color: "#3e95e0" }} />
                                        <span className="text-[#3e95e0]">confirmed purchase orders</span>
                                    </p>, check if the resulting <p className="bg-[#c1d8ec] px-2 py-1 inline-flex items-center gap-1 rounded-xl w-fit align-middle my-1">
                                        <ListIcon sx={{ color: "#3e95e0" }} />
                                        <span className="text-[#3e95e0]">on-hand inventory</span>
                                    </p> will allow <p className="bg-[#c1d8ec] px-2 py-1 inline-flex items-center gap-1 rounded-xl w-fit align-middle my-1">
                                        <FileCopyIcon sx={{ color: "#3e95e0" }} />
                                        <span className="text-[#3e95e0]">all sales orders</span>
                                    </p> to <p className="bg-[#c1d8ec] px-2 py-1 inline-flex items-center gap-1 rounded-xl w-fit align-middle my-1">
                                        <HandshakeIcon sx={{ color: "#3e95e0" }} />
                                        <span className="text-[#3e95e0]">ship without delay</span>
                                    </p>. If so, <p className="bg-[#c1d8ec] px-2 py-1 inline-flex items-center gap-1 rounded-xl w-fit align-middle my-1">
                                        <HandshakeIcon sx={{ color: "#3e95e0" }} />
                                        <span className="text-[#3e95e0]">update the purchase order</span>
                                    </p> to reflect the change.

                                </div>
                            </CustomAccordion>
                        </div>
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <RecentActorsIcon sx={{ color: "blue" }} />
                                <h3 className="text-sm font-bold">Enable email access</h3>
                            </div>
                            <p className="text-sm">Allow the agent to access email inboxes to read mail from known vendors</p>
                            <div className="flex flex-col gap-3 md:flex-row md:gap-2">
                                <div className="border border-gray-200 rounded px-2 py-1 flex-1">
                                    <div className="bg-[#f2f2f2] flex gap-2 w-fit rounded-2xl">
                                        <div className="size-6 rounded-full text-sm font-bold bg-pink-500 flex items-center justify-center">P</div>
                                        <span className="text-[#656565]">purchasing@contoso.com</span>
                                        <div className="border-l border-l-gray-300 px-1 flex items-center">
                                            <CloseIcon sx={{ width: 20, height: 20, color: "gray" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-2 font-bold text-white text-sm bg-blue-600 rounded-lg cursor-pointer hover:opacity-75 transition-all duration-300 w-fit">Allow access</div>
                            </div>
                        </div>
                        <div className="mt-24 flex justify-end gap-2 ">
                            <div className="px-5 py-2 font-bold text-[#a9a9a9] text-sm bg-[#f0ecec] rounded-lg cursor-not-allowed">Activate</div>
                            <div
                                className="px-5 py-2 font-bold text-black text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
                                onClick={onClose}
                            >Close</div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}