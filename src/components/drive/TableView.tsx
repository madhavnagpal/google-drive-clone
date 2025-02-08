import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { File, Folder } from "lucide-react";
import { useDriveStore } from "~/stores/drive-store";

export function TableView() {
  const { getCurrentItems, navigateToFolder } = useDriveStore();
  const items = getCurrentItems();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow 
            key={item.id}
            className="cursor-pointer hover:bg-accent"
            onClick={() => item.type === 'folder' ? navigateToFolder(item.id) : window.open(item.url, '_blank')}
          >
            <TableCell className="flex items-center gap-2">
              {item.type === 'folder' ? (
                <Folder className="h-4 w-4 text-blue-500" />
              ) : (
                <File className="h-4 w-4 text-gray-500" />
              )}
              {item.name}
            </TableCell>
            <TableCell>{item.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
} 