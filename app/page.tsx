import { Home } from "@/components/home/Home";
import { Wrapper } from "./wrapper";
import { UserProvider } from "@/components/auth/UserProvider";
export default function HomePage() {
    return (
        <div className="flex flex-1 justify-center items-center w-full p-5">
            <UserProvider>
                <Wrapper>
                    <Home />
                </Wrapper>
            </UserProvider>
        </div>
    );
}
