"use client";
import {
  districtsWithDivision,
  divisions,
  upazilaWithDistrict,
} from "@/assets/data/area";
import cn from "@/lib/cn";
import { stat } from "fs";
import Link from "next/link";
import React from "react";

function AreaFilter() {
  const [data, setData] = React.useState({
    div: "",
    district: "",
    upazila: "",
  });

  const getHerf = () => {
    let herf = "/topic";
    if (data.div) {
      herf += `?div=${data.div}`;
    }
    if (data.district) {
      herf += `&district=${data.district}`;
    }
    if (data.upazila) {
      herf += `&upazila=${data.upazila}`;
    }
    return herf;
  };

  return (
    <div className="border-[#d3d3d3] border p-1">
      <div className="bg-[#006563] h-10  mb-[10px]">
        <h6 className="text-white text-center text-lg font-bold leading-10">
          এলাকার খবর
        </h6>
      </div>
      <select
        id="div"
        value={data.div}
        onChange={(e) =>
          setData({ div: e.target.value, district: "", upazila: "" })
        }
        className="w-full text-lg mb-[10px] h-10 border border-gray-500 rounded-sm outline-none"
      >
        <option value="">বিভাগ</option>
        {divisions.map((division, index) => (
          <option key={index} value={division.nameBangla}>
            {division.nameBangla}
          </option>
        ))}
      </select>
      <select
        id="district"
        value={data.district}
        onChange={(e) =>
          setData({ ...data, district: e.target.value, upazila: "" })
        }
        className="w-full text-lg mb-[10px] h-10 border border-gray-500 rounded-sm outline-none"
      >
        <option value="">জেলা</option>
        {districtsWithDivision
          .filter((division) => division.nameBangla === data.div)
          .map((district, index) =>
            district.districts.map((district, index) => (
              <option key={index} value={district.nameBangla}>
                {district.nameBangla}
              </option>
            ))
          )}
      </select>
      <select
        id="upazila"
        value={data.upazila}
        onChange={(e) => setData({ ...data, upazila: e.target.value })}
        className="w-full text-lg mb-[10px] h-10 border border-gray-500 rounded-sm outline-none"
      >
        <option value="">উপজেলা</option>
        {upazilaWithDistrict
          .filter((district) => district.nameBangla === data.district)
          .map((district, index) =>
            district.upazilas.map((upazila, index) => (
              <option key={index} value={upazila.nameBangla}>
                {upazila.nameBangla}
              </option>
            ))
          )}
      </select>
      <Link
        href={getHerf()}
        className={cn(
          "pointer-events-auto w-full bg-[#faa61a] text-[#000] h-10 text-2xl block text-center leading-normal py-1",
          {
            "pointer-events-none": !data.div && !data.district && !data.upazila,
          }
        )}
      >
        খুঁজুন
      </Link>
    </div>
  );
}

export default AreaFilter;
