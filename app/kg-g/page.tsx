"use client";

import { useState } from "react";

import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";

export default function DocsPage() {
  const [kgValue, setKgValue] = useState(0);
  const [gValue, setGValue] = useState(0);

  return (
    <div className="flex flex-col gap-28">
      <h1 className={title()}>Kilogramos / Gramos</h1>
      {/* Conversor de kilogramos a gramos y viceversa */}
      <div className="flex lg:flex-row flex-col gap-5 lg:gap-11 ">
        <Input
          className="lg:w-1/2 w-full"
          type="number"
          label="Kilogramos"
          size="lg"
          endContent="kg"
          value={kgValue.toString()}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setKgValue(value);
            if (value === 0 || isNaN(value)) {
              setGValue(0);
              setKgValue(0);
              return;
            }
            setGValue(value * 1000);
          }}
        />
        <Input
          className="lg:w-1/2 w-full"
          type="text"
          label="Gramos"
          size="lg"
          endContent="gr"
          value={gValue.toString()}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (value === 0 || isNaN(value)) {
              setGValue(0);
              setKgValue(0);
              return;
            }
            setGValue(value);
            setKgValue(value / 1000);
          }}
        />
      </div>
    </div>
  );
}
