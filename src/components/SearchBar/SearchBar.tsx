import React, { FormEvent } from "react";
import toast, { Toaster } from 'react-hot-toast';
import css from "../SearchBar/SearchBar.module.css"

interface SearchBarProps {
  onSearch: (query:string) => void;
}

export default function SearchBar({ onSearch }:SearchBarProps) {
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = (form.elements.namedItem("img") as HTMLInputElement).value;
    if (!data){
      toast.error("Please, enter your request!")
      return;
    }
    onSearch(data);
    form.reset();
}
    return (
    <header>
  <form className={css.form} onSubmit={handleSubmit}>
    <input className={css.text}
      type="text"
      name='img'
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
     <button className={css.btn} type="submit">Search</button>
        <Toaster />
  </form>
        </header>
    )
}