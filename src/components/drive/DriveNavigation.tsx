import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { useDriveStore } from "~/stores/drive-store";

export function DriveNavigation() {
  const { currentPath, navigateToFolder } = useDriveStore();
  
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => navigateToFolder(null)} className="cursor-pointer">
            My Drive
          </BreadcrumbLink>
        </BreadcrumbItem>
        {currentPath.map((item, index) => (
          <BreadcrumbItem key={item.id}>
            <BreadcrumbSeparator />
            {index === currentPath.length - 1 ? (
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink 
                onClick={() => navigateToFolder(item.id)}
                className="cursor-pointer"
              >
                {item.name}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
} 