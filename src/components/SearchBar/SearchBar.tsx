import toast, { Toaster } from 'react-hot-toast';
import css from "../SearchBar/SearchBar.module.css"

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = form.elements.img.value;
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