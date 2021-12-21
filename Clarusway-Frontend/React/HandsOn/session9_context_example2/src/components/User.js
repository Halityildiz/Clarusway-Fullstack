import { useUserContext } from "../context/UserContextProvider";

const User = ({ user }) => {
  //? user bilgisini parent'tan props ile aldık
  const { id, login, avatar_url, width } = user;

  //! Ancak,changeImageWidth fonksiyonunu useUserContext yardımıyla Context'ten okuduk
  const { changeImageWidth } = useUserContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
        borderBottom: "8px solid blue",
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>{login}</h1>
      <img
        src={avatar_url}
        alt=""
        width={width}
        style={{ borderRadius: "50% ", border: "5px solid red" }}
      />
      <div style={{ fontSize: "24px", margin: "20px" }}>
        <label htmlFor="width">Image Diameter(px)</label>
        <input
          className="width"
          type="number"
          value={width}
          onChange={(e) => changeImageWidth(id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default User;
