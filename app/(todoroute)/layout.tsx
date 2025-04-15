import { Header } from "@/components/home/Header";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function TodoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-4 justify-center items-center  w-full  p-5">
            <Header />
            <div className="w-[80%]">
                <Link
                    href={"/"}
                    className="text-sm text-blue-400 flex items-center gap-2"
                >
                    <ArrowLeft />
                    <span>모든보드로 돌아가기</span>
                </Link>
            </div>
            <div className="w-[80%] flex-1">{children}</div>
        </div>
    );
}
