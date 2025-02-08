import { Card, CardContent } from "~/components/ui/card";
import { File, Folder } from "lucide-react";
import { useDriveStore } from "~/stores/drive-store";

export function GridView() {
  const { getCurrentItems, navigateToFolder } = useDriveStore();
  const items = getCurrentItems();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => item.type === 'folder' ? navigateToFolder(item.id) : window.open(item.url, '_blank')}
        >
          <CardContent className="flex flex-col items-center justify-center p-6">
            {item.type === 'folder' ? (
              <Folder className="h-12 w-12 mb-2 text-blue-500" />
            ) : (
              <File className="h-12 w-12 mb-2 text-gray-500" />
            )}
            <span className="text-sm text-center truncate w-full">
              {item.name}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 