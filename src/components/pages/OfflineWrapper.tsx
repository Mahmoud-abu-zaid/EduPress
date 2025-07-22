"use client";

import { useEffect, useState } from "react";
import { IoCloudOfflineOutline } from "react-icons/io5";

export default function OfflineWrapper({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex items-center justify-center h-[100vh] bg-gray-100 text-center p-4">
        <div>
          <span className="text-gray-600 flex items-center gap-6 text-7xl">
            
            <IoCloudOfflineOutline /> {"You're offline"}
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
