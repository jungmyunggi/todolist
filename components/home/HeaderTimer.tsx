export function HeaderTimer() {
    const time = new Date();

    const formatTime = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const weekDay = date.toLocaleDateString("ko-KR", { weekday: "long" });

        return `${year}년 ${month}월 ${day}일 ${weekDay}`;
    };

    return (
        <span className="hidden md:inline text-gray-500 text-xs">
            {time && formatTime(time)}
        </span>
    );
}
