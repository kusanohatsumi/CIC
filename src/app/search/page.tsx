import Image from "next/image";

export default function Search() {
  return (
    <>
      <header>
        <figure className="icon" style={{ opacity: 0 }}>
          <Image alt="icon" src="/images/image01.jpg" width={35} height={35} />
        </figure>
        <div className="search">
          <div>
            <a href="/search">
              <input
                type="text"
                placeholder="グループを検索"
                style={{
                  width: "251px",
                  height: "31px",
                  borderRadius: "25px",
                  position: "relative",
                  paddingLeft: "40px",
                  fontSize: "14px",
                }}
              />
            </a>
          </div>
        </div>
        <figure style={{ opacity: 0 }}>
          <Image alt="mail" src="/images/mail.svg" width={35} height={35} />
        </figure>
      </header>
      <div className="searchWrap">
        <a href="/community" style={{ width: "100vw", height: "100vh" }}>
          <div className="searchItem log">
            <h2>検索履歴</h2>
            <p>カミングアウト</p>
            <p>上司　カミングアウト</p>
          </div>
          <div className="searchItem">
            <h2>上位のタグ・キーワード</h2>
            <p>飲食店　トイレの性別</p>
            <p>家族　カミングアウト</p>
          </div>
        </a>
      </div>
    </>
  );
}
