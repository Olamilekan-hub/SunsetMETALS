    import Link from 'next/link';
    import { ChevronRight } from 'lucide-react';
    import { Crumb, BreadcrumbProps } from "@/types"


    const Breadcrumbs: React.FC<BreadcrumbProps> = ({ crumbs }) => {
        const crumb: Crumb = crumbs;

        return (
        <div className="bg-[url('/image.png')] bg-cover bg-center bg-no-repeat relative border-b border-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
                <Link href="/" className="text-gray-100 hover:text-sunset-orange">Home</Link>
                <ChevronRight className="h-4 w-4 text-gray-100" />
                <Link href={`/${crumb.subpage1}`} className="first-letter:uppercase text-gray-100 hover:text-sunset-orange">{crumb.subpage1}</Link>
                <ChevronRight className="h-4 w-4 text-gray-100" />
                <Link href="#" className="text-gray-100 hover:text-sunset-orange first-letter:uppercase">{crumb.subpage2}</Link>
                <ChevronRight className="h-4 w-4 text-[#FF8A33]" />
                <span className="text-[#FF8A33] font-medium">{crumb.subpage3}</span>
            </nav>
            </div>
        </div>
        );
    }


    export default Breadcrumbs;




    export const Breadcrumbs1: React.FC<BreadcrumbProps> = ({ crumbs }) => {
        const crumb: Crumb = crumbs;

        return (
        <div className="bg-[url('/image.png')] bg-cover bg-center bg-no-repeat relative border-b border-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
                <Link href="/" className="text-gray-100 hover:text-sunset-orange">Home</Link>
                <ChevronRight className="h-4 w-4 text-[#FF8A33]" />
                <Link href={`/${crumb.subpage1}`} className="first-letter:uppercase text-[#FF8A33] hover:text-sunset-orange">{crumb.subpage1}</Link>
            </nav>
            </div>
        </div>
        );
    }




    export const Breadcrumbs2: React.FC<BreadcrumbProps> = ({ crumbs }) => {
        const crumb: Crumb = crumbs;

        return (
        <div className="bg-[url('/image.png')] bg-cover bg-center bg-no-repeat relative border-b border-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
                <Link href="/" className="text-gray-100 hover:text-sunset-orange">Home</Link>
                <ChevronRight className="h-4 w-4 text-gray-100" />
                <Link href={`/${crumb.subpage1}`} className="first-letter:uppercase text-gray-100 hover:text-sunset-orange">{crumb.subpage1}</Link>
                <ChevronRight className="h-4 w-4 text-[#FF8A33]" />
                <Link href="#" className="text-[#FF8A33] hover:text-sunset-orange first-letter:uppercase">{crumb.subpage2}</Link>
            </nav>
            </div>
        </div>
        );
    }