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
      <div className="flex flex-row gap-11 ">
        <Input
          className="w-1/2"
          type="number"
          label="Kilogramos"
          size="lg"
          endContent="kg"
          value={kgValue.toString()}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setKgValue(value);
            setGValue(value * 1000);
          }}
        />
        <Input
          className="w-1/2"
          type="text"
          label="Gramos"
          size="lg"
          endContent="gr"
          value={gValue.toString()}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setGValue(value);
            setKgValue(value / 1000);
          }}
        />
      </div>
    </div>
  );
}
