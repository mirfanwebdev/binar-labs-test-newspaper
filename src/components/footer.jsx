export default function Footer() {
  return (
    <footer className="flex justify-between bg-slate-900 text-white">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">DailyNews</h1>
        <p>Never miss out from our newsletter</p>
        <div id="input email">input</div>
      </div>
      <div id="contact" className="flex flex-col gap-1">
        <p className="font-bold">Company</p>
        <a>About Us</a>
        <a>Contact</a>
        <a>Career</a>
      </div>
      <div id="social" className="flex flex-col gap-1">
        <p className="font-bold">Social</p>
        <a>Instagram</a>
        <a>Twitter</a>
        <a>Facebook</a>
      </div>
    </footer>
  );
}
