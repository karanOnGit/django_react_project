import { NavLink } from 'react-router'

export const DelBtn = ({ index }) => {
    return (
        <NavLink to={`/display-items/delete/${index}`}>
            <button
                style={{
                    cursor: "pointer",
                    borderRadius: "6px",
                    border: "none",
                    height: "100%",
                    padding: "0 10px",
                    backgroundColor: "red",
                    fontWeight: "600"
                }}
            >
                Delete
            </button>
        </NavLink>
    )
}
