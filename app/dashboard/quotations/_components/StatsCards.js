"use client";

import { FileText, Clock, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, trend, trendUp, color, delay = 0 }) => {
  const colorClasses = {
    gold: {
      iconBg: "bg-gold-400/10",
      iconColor: "text-gold-400",
      glow: "bg-gold-400/20",
      border: "border-gold-400/20 hover:border-gold-400/40",
      value: "text-gold-400",
    },
    green: {
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      glow: "bg-emerald-500/20",
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      value: "text-emerald-400",
    },
    blue: {
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      glow: "bg-blue-500/20",
      border: "border-blue-500/20 hover:border-blue-500/40",
      value: "text-blue-400",
    },
    purple: {
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      glow: "bg-purple-500/20",
      border: "border-purple-500/20 hover:border-purple-500/40",
      value: "text-purple-400",
    },
    orange: {
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      glow: "bg-orange-500/20",
      border: "border-orange-500/20 hover:border-orange-500/40",
      value: "text-orange-400",
    },
  };

  const classes = colorClasses[color] || colorClasses.gold;

  return (
    <div
      className={`
        relative group overflow-hidden rounded-2xl 
        border ${classes.border}
        transition-all duration-300 ease-out
        hover:translate-y-[-2px] hover:shadow-navy
        animate-fade-up
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        background: 'linear-gradient(to bottom right, #1e2247, #1e2247, #181b38)',
      }}
    >
      {/* Background Glow Effect */}
      <div
        className={`
          absolute -bottom-10 -right-10 w-32 h-32 
          ${classes.glow} 
          rounded-full blur-3xl 
          opacity-40 group-hover:opacity-60 
          transition-opacity duration-300
        `}
      />

      {/* Bottom Accent Line */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-[2px]
          bg-gradient-to-r from-transparent via-current to-transparent
          ${classes.iconColor}
          opacity-50 group-hover:opacity-100
          transition-opacity duration-300
        `}
      />

      {/* Content */}
      <div className="relative p-5 sm:p-6 z-10">
        {/* Icon */}
        <div
          className={`
            w-11 h-11 sm:w-12 sm:h-12 rounded-xl 
            ${classes.iconBg}
            flex items-center justify-center mb-4
            shadow-inner
            transition-transform duration-300
            group-hover:scale-105
          `}
        >
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${classes.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 tracking-wide">
          {title}
        </h3>

        {/* Value */}
        <p className={`text-2xl sm:text-3xl font-bold ${classes.value} mb-2 tracking-tight`}>
          {value}
        </p>

        {/* Trend */}
        {trend && (
          <div className="flex items-center gap-1.5 text-xs sm:text-sm">
            <span className={trendUp ? "text-emerald-400" : "text-red-400"}>
              {trendUp ? "↑" : "↓"} {trend}
            </span>
            <span className="text-gray-500">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function StatsCards({ stats }) {
  const statsConfig = [
    {
      key: "total",
      title: "Total Requests",
      icon: FileText,
      color: "gold",
      trend: null,
    },
    {
      key: "new",
      title: "New Inquiries",
      icon: AlertCircle,
      color: "green",
      trend: null,
    },
    {
      key: "contacted",
      title: "In Progress",
      icon: Clock,
      color: "blue",
      trend: null,
    },
    {
      key: "approved",
      title: "Approved",
      icon: CheckCircle,
      color: "purple",
      trend: null,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {statsConfig.map((config, index) => (
        <StatCard
          key={config.key}
          title={config.title}
          value={stats[config.key] ?? 0}
          icon={config.icon}
          color={config.color}
          trend={config.trend}
          trendUp={config.trendUp}
          delay={index * 50}
        />
      ))}
    </div>
  );
}

