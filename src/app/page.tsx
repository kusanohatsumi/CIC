import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="start">
        <a href="/community">
          <figure>
            <Image
              alt="equal"
              src="/images/logo.svg"
              width={200}
              height={200}
            />
          </figure>
        </a>
      </div>
    </>
  );
}
