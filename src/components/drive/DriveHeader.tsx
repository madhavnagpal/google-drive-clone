import { LayoutGrid, List } from "lucide-react";
import { Button } from "~/components/ui/button";

interface DriveHeaderProps {
  onViewChange: (view: "grid" | "table") => void;
  currentView: "grid" | "table";
}

export function DriveHeader({ onViewChange, currentView }: DriveHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Drive</h1>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewChange("grid")}
          className={currentView === "grid" ? "bg-accent" : ""}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewChange("table")}
          className={currentView === "table" ? "bg-accent" : ""}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 