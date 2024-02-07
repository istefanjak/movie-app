"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { FC, FormEventHandler, useState } from "react";
import Button from "@/components/common/Button";

const Search: FC = () => {
  const placeholderText = "Pretražite filmove ili serije";
  const [value, setValue] = useState<string>("");

  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(`/search/${value}`);
  };

  return (
    <form
      className="w-full md:w-96 pr-5 pl-3 py-2 bg-6 rounded-md font-secondary flex items-center gap-3"
      onSubmit={onSubmit}
    >
      <Button icon={<MagnifyingGlass weight="bold" size={16} />} submit />
      <input
        type="text"
        className="w-full bg-transparent p-0 outline-none"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholderText}
      />
    </form>
  );
};

export default Search;
