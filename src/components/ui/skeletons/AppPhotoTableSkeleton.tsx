import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function AppPhotoTableSkeleton() {
    return (
        <div className="space-y-4">
        <div className="divide-y">
            {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-8">
                <Skeleton width={30} /> {/* ID */}
                <Skeleton width={400} /> {/* Title */}
                </div>
                <Skeleton width={150} height={150} /> {/* Image */}
            </div>
            ))}
        </div>
        </div>
    );
}

