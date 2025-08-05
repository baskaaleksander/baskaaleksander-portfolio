import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Aleksander Baska |{" "}
        <Link
          className="text-xs hover:text-[#1a1a1a] hover:dark:text-gray-100 underline"
          href="https://baskaaleksander.com"
        >
          baskaaleksander.com
        </Link>
      </p>
    </footer>
  );
}
