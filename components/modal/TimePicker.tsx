"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
type Props = {
    hour: string;
    minute: string;
    isPM: boolean;
    handleHour: (h: string) => void;
    handleMinute: (m: string) => void;
    handlePM: (b: boolean) => void;
};

export function TimePicker({
    hour,
    minute,
    isPM,
    handleHour,
    handleMinute,
    handlePM,
}: Props) {
    const hours = Array.from({ length: 12 }, (_, i) =>
        String(i + 1).padStart(2, "0")
    );
    const minutes = Array.from({ length: 60 }, (_, i) =>
        String(i).padStart(2, "0")
    );

    return (
        <div className="flex p-4  items-center gap-4">
            <div className="flex gap-2">
                <Label htmlFor="ampm">오후</Label>
                <Checkbox
                    id="ampm"
                    checked={isPM}
                    onCheckedChange={(val) => handlePM(Boolean(val))}
                />
            </div>
            <div className="flex items-center gap-2 w-fit">
                <select
                    value={hour}
                    onChange={(e) => handleHour(e.target.value)}
                    className="p-2 rounded bg-white shadow"
                >
                    {hours.map((h) => (
                        <option key={h} value={h}>
                            {h}
                        </option>
                    ))}
                </select>
                <span className="text-xl font-bold">:</span>
                <select
                    value={minute}
                    onChange={(e) => handleMinute(e.target.value)}
                    className="p-2 rounded bg-white shadow"
                >
                    {minutes.map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
