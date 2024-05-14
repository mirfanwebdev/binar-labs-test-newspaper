import NewsItem from "./newsItem";
export default function NewsContainer({ articles }) {
  return (
    <section className="flex flex-wrap justify-around gap-y-8">
      {articles.map((items) => (
        <NewsItem key={items.publishedAt} {...items} />
      ))}
    </section>
  );
}
