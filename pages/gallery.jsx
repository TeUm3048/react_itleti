import { useEffect, useState } from "react"
import { Button } from "../components/Button/Button"
import Image from "next/image";
import css from "../styles/Gallery.module.css";

export default function GalletyPage() {
  const [content, setContent] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  const [titleImg, setTitleImg] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (!thumbnailUrl || !url) return;
    setContent(last => [{
      "title": titleImg,
      url: url,
      thumbnailUrl: thumbnailUrl
    }, ...(last || [])]);

    setTitleImg("");
    setUrl("");
    setThumbnailUrl("");
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(obj => setContent(obj));

  }, [])


  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleClick}>

        <label className={css.form__item}>
          <span className={css.form__item_name}>
            Название картинки
          </span>
          <input className={css.form__item_input} type="text" value={titleImg} onChange={e => setTitleImg(e.currentTarget.value)} />
        </label>
        <label className={css.form__item}>
          <span className={css.form__item_name}>
            Ссылка на картинку
          </span>
          <input className={css.form__item_input} type="url" value={thumbnailUrl} onChange={e => setThumbnailUrl(e.currentTarget.value)} />
        </label>
        <label className={css.form__item}>
          <span className={css.form__item_name}>
            Ссылка на миниатюру картинки
          </span>
          <input className={css.form__item_input} type="url" value={url} onChange={e => setUrl(e.currentTarget.value)} />
        </label>
        <Button type="submit">submit</Button>
      </form>
      <div className={css.paginator}>
        <Button onClick={() => setPageIndex(p => p > 0 ? p - 1 : 0)}>Prev</Button>
        <span>{pageIndex + 1}</span>
        <Button onClick={() => setPageIndex(p => p + 1)}>Next</Button>
      </div>
      <ul className={css.gallery}>
        {content?.slice(pageIndex * 12, (pageIndex + 1) * 12).map((el => (
          <li key={el.id} className={css.gallery__item}>
            <img className={css.gallery__img} src={el.url} alt='' />
            <span className={css.gallery__title}>{el.title}</span>
          </li>

        )))}
      </ul>
    </div>

  )
}