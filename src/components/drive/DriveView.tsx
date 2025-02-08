import { GridView } from "./GridView";
import { TableView } from "./TableView";

interface DriveViewProps {
  viewType: "grid" | "table";
}

export function DriveView({ viewType }: DriveViewProps) {
  return viewType === "grid" ? <GridView /> : <TableView />;
} 