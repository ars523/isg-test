"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar, Select, theme } from "antd";
import dayLocaleData from "dayjs/plugin/localeData";
import { toBanglaMonth, toBanglaNum } from "../../utils/index";
import styles from "./ArchiveCalendar.module.css";
import cn from "@/lib/cn";
import { useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";
dayjs.extend(dayLocaleData);

const ArchiveCalendar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("date");
  const { token } = theme.useToken();
  const [selectedDate, setSelectedDate] = useState(
    search ? dayjs(search) : dayjs()
  );

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    margin: "0 auto",
  };

  console.log(selectedDate, "selected date");

  return (
    <div style={wrapperStyle}>
      <Calendar
        value={selectedDate}
        onSelect={(date) => {
          setSelectedDate(date);
          router.push(`/archive?date=${date.format("YYYY-MM-DD")}`);
        }}
        locale={{
          lang: {
            locale: "en",
            shortWeekDays: [
              "রবি",
              "সোম",
              "মঙ্গল",
              "বুধ",
              "বৃহ",
              "শুক্র",
              "শনি",
            ],
          },
        }}
        dateFullCellRender={(date) => (
          <span
            className={cn("hover:text-golden1 font-semibold", {
              "text-golden1 font-bold inline-block": date.isSame(
                selectedDate,
                "day"
              ),
            })}
          >
            {toBanglaNum(date.format("DD"))}
          </span>
        )}
        fullscreen={false}
        headerRender={({ value, _, onChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          let current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }
          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {toBanglaMonth(i + 1)}
              </Select.Option>
            );
          }
          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = 2024 - 3; i < 2024 + 1; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {toBanglaNum(i)}
              </Select.Option>
            );
          }
          return (
            <div className={styles.headerContainer}>
              <div>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  value={year}
                  onChange={(newYear) => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                >
                  {options}
                </Select>
              </div>
              <div>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={month}
                  onChange={(newMonth) => {
                    const now = value.clone().month(newMonth);
                    onChange(now);
                  }}
                >
                  {monthOptions}
                </Select>
              </div>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};
export default ArchiveCalendar;
