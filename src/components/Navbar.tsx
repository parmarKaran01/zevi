import { useNavigate} from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className="w-screen bg-slate-500 h-[4rem] flex items-center justify-end pr-[2rem]">
      Navbar

      <button onClick={() => navigate("/products")}>products</button>
    </div>
  );
};

export default Navbar;
