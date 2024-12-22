import React from "react";

type ProgressSegment = {
  label: string;
  value: number;
  color: string;
};

const ProgressBar = () => {
  const target = 45; // Target in millions
  const progressData: ProgressSegment[] = [

    { label: "Won", value: 18, color: "bg-green-400" },
    { label: "Committed", value: 8, color: "bg-blue-400" },
    { label: "Best case", value: 7, color: "bg-purple-400" },
    { label: "Qualified", value: 3, color: "bg-orange-400" },
    { label: "Leads", value: 75, color: "bg-gray-300" },
  ];

//   const totalAchieved = progressData.reduce((sum, segment) => sum + segment.value, 0);

  const totalAchieved = progressData.reduce((total, segment) => total + segment.value, 0);

  const percentageAchieved =68



  return (
    <div className="  bg-white rounded-lg">
    {/* Header */}
    <div className="flex text-xs justify-between items-center">
      <span className="text-sm text-gray-500">1 month until Q4 ends</span>
      <span className="text-xs font-semibold text-gray-800">
        Target <span className="text-black">${target} million</span>
      </span>
      <span className="text-sm text-gray-500">
        {percentageAchieved}% of target achieved
      </span>
    </div>
  
    {/* Progress Bar */}
    <div className="relative flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      {progressData.map((segment, index) => (
        <div
          key={index}
          className={`${segment.color} h-full`}
          style={{
            width: `${(segment.value/totalAchieved)*100}%`,   // Calculating percentage width
            backgroundColor: segment.color,  // Setting segment color
          }}
        ></div>
        
      ))}
        <div
          className="absolute top-0 h-full border-l-2 border-gray-800"
          style={{
            left: `${percentageAchieved}%`,
          }}
        ></div>
    </div>
  
    {/* Legend */}
    <div className="flex flex-wrap text-xs text-gray-600 gap-1">
      {progressData.map((segment, index) => (
        <div
          key={index}
          className="flex items-center py-1 px-1 space-x-1  text-xs"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: segment.color }}
          ></span>
          <span className=" text-xs font-medium">
            {segment.label} -${segment.value}m
          </span>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProgressBar;
