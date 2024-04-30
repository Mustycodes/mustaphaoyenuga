import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex bg-blue-200 p-4">
        <Link href="/" className="whitespace-nowrap">Mustapha O.</Link>
        <div className="flex ml-auto bg-red-400 w-full justify-end space-x-6">
          <Link href='/'>Projects</Link>
          <Link href='/'>Musings</Link>
          <Link href='/'>About</Link>
        </div>
    </nav>
  );
};

export default Navbar;
