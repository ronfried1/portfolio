import Link from "next/link";

interface Props {
  handleItemClick: (item: string) => void;
}

const Logo = ({ handleItemClick }: Props) => {
  return (
    <>
      <Link
        href={`/`}
        className="font-bold text-rose-500 border-4 border-rose-500 p-2 min-w-max"
        onClick={() => handleItemClick("")}
      >
        RON FRIED
      </Link>
    </>
  );
};

export default Logo;
