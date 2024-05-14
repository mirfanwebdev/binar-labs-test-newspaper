import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function FilterSearch() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search news" />
      <Button type="submit">Search</Button>
    </div>
  );
}
