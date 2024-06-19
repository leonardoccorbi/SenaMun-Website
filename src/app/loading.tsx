import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex gap-1">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
