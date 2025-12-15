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
          className="w-full h-11 pl-11 pr-4 rounded-full border border-zinc-300 bg-transparent text-white placeholder:text-zinc-400 focus:outline-none transition"
        />
        <button type="submit" className="flex items-center">
          <Search className="absolute left-4 text-white w-5 h-5 cursor-pointer" />
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
