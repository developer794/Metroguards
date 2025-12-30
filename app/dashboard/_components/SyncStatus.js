"use client";
import { useState, useEffect } from "react";

export default function SyncStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Check initial online status
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      // Trigger sync when coming back online
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        setLastSyncTime(new Date());
      }, 2000);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Set initial sync time
    setLastSyncTime(new Date());

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const formatLastSync = () => {
    if (!lastSyncTime) return "Never";
    const now = new Date();
    const diff = Math.floor((now - lastSyncTime) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return lastSyncTime.toLocaleDateString();
  };

  return (
    <div
      className="sync-status relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
        style={{
          background: isOnline
            ? isSyncing
              ? "rgba(59, 130, 246, 0.1)"
              : "rgba(16, 185, 129, 0.1)"
            : "rgba(239, 68, 68, 0.1)",
          border: `1px solid ${
            isOnline
              ? isSyncing
                ? "rgba(59, 130, 246, 0.3)"
                : "rgba(16, 185, 129, 0.3)"
              : "rgba(239, 68, 68, 0.3)"
          }`,
          cursor: "default",
        }}
      >
        {isSyncing ? (
          <svg
            className="w-4 h-4 animate-spin"
            style={{ color: "#3b82f6" }}
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : isOnline ? (
          <svg className="w-4 h-4" style={{ color: "#10b981" }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" style={{ color: "#ef4444" }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        )}
        <span
          className="text-xs font-medium hidden sm:block"
          style={{
            color: isOnline ? (isSyncing ? "#3b82f6" : "#10b981") : "#ef4444",
          }}
        >
          {isSyncing ? "Syncing..." : isOnline ? "Online" : "Offline"}
        </span>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute top-full right-0 mt-2 z-50"
          style={{
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            border: "1px solid #e5e7eb",
            padding: "12px 16px",
            minWidth: "200px",
          }}
        >
          <div className="text-sm font-semibold text-[#1e2247] mb-2">
            Connection Status
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Status:</span>
              <span
                className="font-medium"
                style={{ color: isOnline ? "#10b981" : "#ef4444" }}
              >
                {isOnline ? "Connected" : "No Connection"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Last Sync:</span>
              <span className="font-medium text-[#1e2247]">{formatLastSync()}</span>
            </div>
            {!isOnline && (
              <div
                className="mt-2 p-2 rounded-lg text-xs"
                style={{
                  background: "rgba(253, 197, 26, 0.1)",
                  border: "1px solid rgba(253, 197, 26, 0.3)",
                  color: "#92400e",
                }}
              >
                📱 Viewing cached data. Changes will sync when online.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

