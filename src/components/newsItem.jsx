// import Image from "next/image";
export default function NewsItem({
  title,
  author,
  description,
  urlToImage,
  publishedAt,
}) {
  return (
    <article className="flex flex-col-reverse justify-between max-w-sm">
      <div id="news-content" className="flex flex-col">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm text-slate-600">{author}</p>
        <p>{description}</p>
        <p>{publishedAt}</p>
      </div>
      <div id="news-image">
        <img
          className="object-cover border rounded-xl"
          src={urlToImage}
          alt="news"
        />
      </div>
    </article>
  );
}
