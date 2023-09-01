import Image from "next/image";

export default function Posting() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 12px",
          }}
        >
          <a href="/community">
            <Image alt="close" src="/images/close.svg" width={20} height={20} />
          </a>
          <a
            href="/community"
            style={{
              display: "block",
              textAlign: "center",
              lineHeight: "32px",
              width: "108px",
              height: "32px",
              borderRadius: "25px",
              color: "#fff",
              fontSize: "12px",
              background:
                "linear-gradient(135deg,rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%)",
            }}
          >
            投稿する
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <figure
            className="username"
            style={{ width: "auto", margin: "8px 12px" }}
          >
            <Image
              alt="アイコン"
              src="/images/icon02.svg"
              width={35}
              height={35}
            />
          </figure>
          <textarea
            placeholder="ここに投稿するテキストを入力する"
            style={{
              border: "none",
              width: "300px",
              height: "auto",
              outline: "none",
              padding: "12px",
            }}
          />
        </div>
      </div>
    </>
  );
}
