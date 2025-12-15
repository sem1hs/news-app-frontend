"use client";
import {
  searchBarInitialValues,
  searchBarSchema,
} from "@/schemas/searchBarSchema";
import { SearchQuery } from "@/types/SearchQuery";
import { Field, Form, Formik } from "formik";
import { Search } from "lucide-react";

const SearchBar = () => {
  const handleSubmit = ({ searchQuery }: SearchQuery) => {
    console.log(searchQuery);
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
          className="w-[50%] md:w-full h-7 md:h-11 ml-auto pl-7 md:pl-11 pr-4 rounded-2xl md:rounded-full border border-zinc-300 bg-transparent placeholder:text-zinc-400 focus:outline-none transition text-white"
        />
        <button type="submit" className="flex items-center">
          <Search className="absolute left-25.5 md:left-4 text-white md:w-5 md:h-5 w-4 h-4 cursor-pointer" />
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
