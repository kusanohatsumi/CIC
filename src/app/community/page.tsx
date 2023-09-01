import Image from "next/image";

export default function Community() {
  return (
    <>
      <header>
        <figure className="icon">
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
        <figure>
          <Image alt="mail" src="/images/mail.svg" width={35} height={35} />
        </figure>
      </header>
      <main>
        <div className="groupe">
          <figure>
            <Image
              alt="icon"
              src="/images/createGroupe.svg"
              width={52}
              height={52}
            />
            <figcaption>新規作成</figcaption>
          </figure>
          <figure>
            <Image
              alt="icon"
              src="/images/image02.svg"
              width={52}
              height={52}
            />
            <figcaption>グループ01</figcaption>
          </figure>
          <figure>
            <Image
              alt="icon"
              src="/images/image03.svg"
              width={52}
              height={52}
            />
            <figcaption>グループ02</figcaption>
          </figure>
          <figure>
            <Image
              alt="icon"
              src="/images/image04.svg"
              width={52}
              height={52}
            />
            <figcaption>グループ03</figcaption>
          </figure>
          <figure>
            <Image
              alt="icon"
              src="/images/image05.svg"
              width={52}
              height={52}
            />
            <figcaption>雑談</figcaption>
          </figure>
        </div>
        <div className="timeline">
          <section>
            <figure className="username">
              <Image
                alt="アイコン"
                src="/images/icon01.svg"
                width={35}
                height={35}
              />
              <figcaption>ユーザー名</figcaption>
            </figure>
            <div className="item">
              <figure>
                <Image
                  alt="サムネイル"
                  src="/images/thumbnail.jpg"
                  width={333}
                  height={190}
                />
              </figure>
              <p>
                始めたばかりでわからないことも多いですが、いろんな人とお話しがしたいので仲良くしてください。
              </p>
              <div className="comment">
                <input
                  type="text"
                  name="comment"
                  placeholder="コメントを追加"
                />
                <div className="evaluation">
                  <input className="good" type="radio" name="evaluation" />
                  <input className="bad" type="radio" name="evaluation" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <figure className="username">
              <Image
                alt="アイコン"
                src="/images/icon02.svg"
                width={35}
                height={35}
              />
              <figcaption>ユーザー名</figcaption>
            </figure>
            <div className="item">
              <figure>
                <Image
                  alt="サムネイル"
                  src="/images/thumbnail.jpg"
                  width={333}
                  height={190}
                />
              </figure>
              <p>
                緊張しましたが、初めてのデートでした。お互いに話が合って楽しかったです^^
              </p>
              <div className="comment">
                <input
                  type="text"
                  name="comment"
                  placeholder="コメントを追加"
                />
                <div className="evaluation">
                  <input className="good" type="radio" name="evaluation" />
                  <input className="bad" type="radio" name="evaluation" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <figure className="username">
              <Image
                alt="アイコン"
                src="/images/icon03.svg"
                width={35}
                height={35}
              />
              <figcaption>ユーザー名</figcaption>
            </figure>
            <div className="item">
              <figure>
                <Image
                  alt="サムネイル"
                  src="/images/thumbnail.jpg"
                  width={333}
                  height={190}
                />
              </figure>
              <p>
                相談に乗ってもらっている友達に、自分がゲイであることを打ち明けたいのですが、どのように伝えたらいいでしょうか？
              </p>
              <div className="comment">
                <input
                  type="text"
                  name="comment"
                  placeholder="コメントを追加"
                />
                <div className="evaluation">
                  <input className="good" type="radio" name="evaluation" />
                  <input className="bad" type="radio" name="evaluation" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <figure
          className="posting"
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "25px",
            position: "fixed",
            bottom: "10vh",
            right: "12px",
            zIndex: "9",
            background:
              " linear-gradient(135deg,rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%)",
          }}
        >
          <a
            href="/posting"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              alt="投稿"
              src="/images/postiong.svg"
              width={28}
              height={28}
            />
          </a>
        </figure>
      </main>
      <footer>
        <figure>
          <Image
            alt="マッチング"
            src="/images/nav_matching.svg"
            width={25}
            height={25}
          />
          <figcaption>マッチング</figcaption>
        </figure>
        <figure>
          <Image
            alt="マッチング"
            src="/images/nav_community.svg"
            width={25}
            height={25}
          />
          <figcaption>コミュニティ</figcaption>
        </figure>
        <figure>
          <Image
            alt="マッチング"
            src="/images/nav_space.svg"
            width={25}
            height={25}
          />
          <figcaption>スペース</figcaption>
        </figure>
      </footer>
    </>
  );
}
