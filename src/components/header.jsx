import FilterSearch from "./filterSearch";

export default function Header() {
  return (
    <section className="flex justify-between items-center bg-slate-900">
      <h1 className="text-2xl font-bold text-white">DailyNews</h1>
      <FilterSearch />
    </section>
  );
}
