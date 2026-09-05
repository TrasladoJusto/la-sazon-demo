"use client";
import { useState, ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  children: ReactNode[] | ReactNode;
  className?: string;
}

export function Tabs({ tabs, defaultTab, onChange, children, className = "" }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? "");
  const childArray = Array.isArray(children) ? children : [children];

  const handleTab = (tabId: string) => {
    setActive(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={className}>
      <div className="flex justify-center gap-2 md:gap-8 mb-12 border-b border-outline-variant/10" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => handleTab(tab.id)}
            className={`relative px-4 md:px-8 py-4 font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 ${
              active === tab.id
                ? "text-primary"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {tab.label}
            <span
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-primary transition-transform duration-300 origin-left ${
                active === tab.id ? "scale-x-100" : "scale-x-0"
              }`}
            />
      </button>
        ))}
    </div>
      <div className="relative">
        {childArray.map((child, i) => {
          const tab = tabs[i];
          if (!tab) return null;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              hidden={active !== tab.id}
              className="animate-fade-in"
            >
              {active === tab.id && child}
        </div>
          );
        })}
    </div>
  </div>
  );
}
