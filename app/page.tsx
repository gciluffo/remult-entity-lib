"use client";
import { remult } from "remult";
import { Product } from "../custom-remult-entity-library/dist";
import { useEffect } from "react";

const productRepo = remult.repo(Product);

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const products = await productRepo.find();
      console.log({ products });
    };
    init();
  }, []);

  return <div>test</div>;
}
