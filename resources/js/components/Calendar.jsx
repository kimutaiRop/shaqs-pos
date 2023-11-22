import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameMonth,
    isToday,
    parse,
    startOfToday,
} from "date-fns";
import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Calendar = ({ onDateChange, selected }) => {
    let today = startOfToday();
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    console.log(isEqual(new Date(), selected))
    console.log(selected)

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    return (
        <div className="w-full h-full p-2 justify-center items-center flex">
            <div className="flex w-full flex-col justify-center md:pr-14 border rounded p-2 py-6">
                <div className="flex w-full items-center justify-between ">
                    <div>
                        <button
                            type="button"
                            onClick={previousMonth}
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Previous month </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <h2 className="font-semibold text-primaryText">
                        {format(firstDayCurrentMonth, "MMMM yyyy")}
                    </h2>

                    <div>
                        <button
                            onClick={nextMonth}
                            type="button"
                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Next month</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                </div>
                <div className="mt-2 grid grid-cols-7 text-sm">
                    {days.map((day, dayIdx) => (
                        <div
                            key={day.toString()}
                            className={classNames(
                                dayIdx === 0 && colStartClasses[getDay(day)],
                                "py-1.5"
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    onDateChange(day);
                                }}
                                className={classNames(
                                    isEqual(day, selected) && "text-white",
                                    !isEqual(day, selected) &&
                                        isToday(day) &&
                                        "text-accent",
                                    !isEqual(day, selected) &&
                                        !isToday(day) &&
                                        isSameMonth(
                                            day,
                                            firstDayCurrentMonth
                                        ) &&
                                        "text-black",
                                    !isEqual(day, selected) &&
                                        !isToday(day) &&
                                        !isSameMonth(
                                            day,
                                            firstDayCurrentMonth
                                        ) &&
                                        "text-gray-400",
                                    isEqual(day, selected) &&
                                        isToday(day) &&
                                        "bg-accent",
                                    isEqual(day, selected) &&
                                        !isToday(day) &&
                                        "bg-accent",
                                    !isEqual(day, selected) &&
                                        "hover:bg-accent hover:text-white",
                                    (isEqual(day, selected) || isToday(day)) &&
                                        "font-semibold",
                                    "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-base lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:text-lg"
                                )}
                            >
                                <time dateTime={format(day, "yyyy-MM-dd")}>
                                    {format(day, "d")}
                                </time>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];

export default Calendar;
