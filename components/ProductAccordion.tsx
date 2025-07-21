"use client";
import { useState } from "react";
import Accordion from "./custom/Accordion";

const ProductAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const details = [
    { id: 1, title: "dimensions", listDetail: ["12 x 12 x 4", ""] },
    {
      id: 2,
      title: "detail",
      listDetail: ["Ceramic ware cups", "made in Japan"],
    },
    {
      id: 3,
      title: "reviews",
      listDetail: ["One of the best product.", "Must try."],
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      {details.map(({ id, title, listDetail }, index) => (
        <Accordion
          key={id}
          title={title}
          detail={listDetail}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default ProductAccordion;
