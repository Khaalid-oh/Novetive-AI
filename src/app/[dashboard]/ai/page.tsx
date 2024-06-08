"use client"
import { groupList } from "@/app/components/molecules/AiGroupList";
import AIcon from "@/app/ui/icons/AI-Icon";
import SendIcon from "@/app/ui/icons/SendIcon";
import React, { useEffect, useState } from 'react';

function Ai() {

    const [message, setMessage] = useState("Loading");

    useEffect(() => {

        fetch("http://localhost:8080/api/get").then(
            response => response.json()
        ).then(
            data => {
                setMessage(data.message);
            }
        )
    }, [])
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-light">
      <div className="flex flex-col items-center justify-center h-[180px] w-[340px] gap-5">
        <div className="border border-yellow-600 w-[102px] h-[102px] rounded-full flex items-center justify-center">
          <div className="bg-custom-gradient flex items-center justify-center w-[90px] h-[90px] rounded-full">
            <AIcon />
          </div>
        </div>
        <h1 className="font-semibold text-2xl text-gray-800">
          How can I assist you today?
        </h1>
      </div>
      <div className="flex flex-col gap-24">
        <div className="gap-4 grid grid-cols-2 w-[870px] text-gray-800 ">
          {groupList.map((glist) => (
            <div className="bg-white flex flex-col justify-center h-[90px] w-[420px] rounded-lg shadow-sm p-2 px-4">
              {glist.title}
              <p className="text-gray-500">{glist.subtext}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-full flex items-center justify-between h-16 px-4">
          <input
            className="h-full w-[90%] rounded-full"
            placeholder="Ask me anything..."
          />
          <div>{message}</div>
          <div className="flex justify-center items-center bg-custom-gradient w-16 h-12 rounded-3xl">
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai;
