import { PlusIcon, WalletCards } from "lucide-react";
import Link from "next/link";

export default function EmptyState() {
    return(
        <div className="text-center mt-10">
            <WalletCards className="mx-auto text-gray-400" width={40} height={40}/>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No collections</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new collection.</p>
            <div className="mt-6">
                <Link 
                    href={"/admin/collections/new"}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true"/>
                    New Collection
                </Link>
            </div>
        </div>
    );
}