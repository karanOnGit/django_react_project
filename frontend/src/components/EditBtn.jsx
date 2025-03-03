import { NavLink } from 'react-router'

export const EditBtn = ({ index }) => {
    return (
        <NavLink to={`/display-items/${index}`}>
            <button
                style={{
                    cursor: "pointer",
                    borderRadius: "6px",
                    border: "none",
                    height: "100%",
                    padding: "0 10px",
                    backgroundColor: "blue",
                    fontWeight: "600"
                }}
            >
                Update
            </button>
        </NavLink>
    )
}
