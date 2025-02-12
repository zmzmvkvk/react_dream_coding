export default function Todo({ text }) {
  return (
    <div className="flex py-2 h-5 box-content scroll-auto">
      <input type="checkbox" className="h-5 w-5 bg-white " />
      <label htmlFor="checkbox" className="pl-3 leading-5 flex-1">
        {text}
      </label>
      <button className=" leading-5 text-right hover:scale-130 transition-all">❌</button>
    </div>
  );
}
