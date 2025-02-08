"use client";

import { useState } from "react";
import { DriveHeader } from "~/components/drive/DriveHeader";
import { DriveNavigation } from "~/components/drive/DriveNavigation";
import { DriveView } from "~/components/drive/DriveView";

export default function HomePage() {
  const [viewType, setViewType] = useState<"grid" | "table">("grid");
  
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-6">
        <DriveHeader onViewChange={setViewType} currentView={viewType} />
        <DriveNavigation />
        <DriveView viewType={viewType} />
      </div>
    </main>
  );
}
