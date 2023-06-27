import user from "./user.jpg";

const Navigation = () => {
  return (
    <div className="grid justify-end items-center px-10 py-3 gap-1">
      <span className="grid justify-center">
        <img
          src={user}
          alt="user"
          className="w-10 h-10 rounded-full border cursor-pointer border-slate-400 hover:opacity-60"
        />
      </span>
      <h2 className="text-sm font-semibold text-slate-700">Username</h2>
    </div>
  );
};

export default Navigation;
