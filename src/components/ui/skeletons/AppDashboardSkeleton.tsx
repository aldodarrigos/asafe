"use client"
import { useTheme } from "next-themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function AppDashboardSkeleton() {
  const { theme } = useTheme();
  
  const skeletonColors = {
    baseColor: theme === 'dark' ? '#202020' : '#e0e0e0',
    highlightColor: theme === 'dark' ? '#444' : '#f0f0f0'
  }
  return (
    <main className="flex-1 overflow-y-auto p-2 sm:p-5 dark:py-0 dark:sm:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 sm:p-4 dark:py-0 dark:sm:py-0 min-h-screen">
        <div className=" h-[710px] dark:bg-gray-800 rounded-md">
          <div className="w-full h-full p-2 sm:p-5">
            <Skeleton 
              className="h-full w-full" 
              baseColor={skeletonColors.baseColor}
              highlightColor={skeletonColors.highlightColor}
             />
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className=" h-[300px] sm:h-full dark:bg-gray-800 rounded-md">
              <div className="h-full w-full p-2 sm:p-5">
                <Skeleton 
                  className="h-full w-full" 
                  baseColor={skeletonColors.baseColor}
                  highlightColor={skeletonColors.highlightColor}
                />
              </div>
            </div>
            <div className=" h-[300px] w-full sm:h-full dark:bg-gray-800 rounded-md">
              <div className="h-full w-full p-2 sm:p-5">
                <Skeleton 
                  className="h-full w-full" 
                  baseColor={skeletonColors.baseColor}
                  highlightColor={skeletonColors.highlightColor}
                />
              </div>
            </div>
          </div>
          <div className=" h-[300px] dark:bg-gray-800 rounded-md">
            <div className="h-full w-full p-2 sm:p-5">
              <Skeleton 
                className="h-full w-full"
                baseColor={skeletonColors.baseColor}
                highlightColor={skeletonColors.highlightColor}
                />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

