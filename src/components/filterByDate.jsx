import { CustomDate } from "./customDate";
import { Button } from "./ui/button";
export default function FilterByDate() {
  return (
    <section className="flex gap-4 justify-center">
      <Button>Today</Button>
      <Button>Yesterday</Button>
      <Button>This week</Button>
      <CustomDate />
    </section>
  );
}
