import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center pt-8 border-t border-gray-700">
      <p className="text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Aleksander Baska |{" "}
        <Link
          className="text-xs hover:text-gray-100 underline"
          href="https://baskaaleksander.com"
        >
          baskaaleksander.com
        </Link>
      </p>
    </footer>
  );
}
