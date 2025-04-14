type Props = {
    children: React.ReactNode;
};
export function FloatingButton({ children }: Props) {
    return (
        <nav className="flex flex-col gap-2 fixed bottom-10 right-10 z-10">
            {children}
        </nav>
    );
}
