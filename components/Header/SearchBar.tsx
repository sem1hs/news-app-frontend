"use client";
import {
  searchBarInitialValues,
  searchBarSchema,
} from "@/schemas/searchBarSchema";
import { SearchQuery } from "@/types/SearchQuery";
import { Field, Form, Formik } from "formik";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = ({ searchQuery }: SearchQuery, { resetForm }: { resetForm: () => void }) => {
    if (!searchQuery || searchQuery.trim().length < 2) return;

    router.push(`/news?search=${encodeURIComponent(searchQuery)}`);
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={searchBarInitialValues}
      validationSchema={searchBarSchema}
    >
      <Form className="relative flex items-center">
        <Field
          name="searchQuery"
          type="text"
          placeholder="Arama Yapın"
          className="w-full h-7 md:h-11 md:ml-auto pl-7 md:pl-11 pr-4 rounded-2xl md:rounded-full border bg-[#272C33] border-[#1b1e23] placeholder:text-zinc-400 focus:outline-none transition text-white"
        />
        <button
          type="submit"
          className="absolute left-2 md:left-4 flex items-center justify-center h-full"
        >
          <Search className="text-white md:w-5 md:h-5 w-4 h-4 cursor-pointer" />
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
