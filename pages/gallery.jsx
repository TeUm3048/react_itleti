import { useEffect, useState } from "react"
import { Button } from "../components/Button/Button"
import Image from "next/image";

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
    <main>
      <form onSubmit={handleClick}>
        <Button type="submit">submit</Button>
        {/* <input type="url" value={title} onChange={e => setTitle(e.currentTarget.title)} /> */}

        <label >
          Название картинки
          <input type="text" value={titleImg} onChange={e => setTitleImg(e.currentTarget.value)} />
        </label>
        <label >
          Ссылка на картинку
          <input type="url" value={thumbnailUrl} onChange={e => setThumbnailUrl(e.currentTarget.value)} />
        </label>
        <label >
          Ссылка на миниатюру картинки
          <input type="url" value={url} onChange={e => setUrl(e.currentTarget.value)} />
        </label>
      </form >
      <Button onClick={() => setPageIndex(p => p - 1)}>Prev</Button>
      <span>{pageIndex + 1}</span>
      <Button onClick={() => setPageIndex(p => p + 1)}>Next</Button>
      <ul>
        {content?.slice(pageIndex * 12, (pageIndex + 1) * 12).map((el => (
          <li key={el.id}>
            <img src={el.thumbnailUrl} alt='' />
            <span>{el.title}</span>
          </li>

        )))}
      </ul>
    </main>

  )
}