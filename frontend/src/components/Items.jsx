// import { useNavigate } from 'react-router';
import { DelBtn } from './DelBtn';
import { EditBtn } from './EditBtn';

export const Items = ({ data }) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // const navigate = useNavigate();

    return (
        <div style={{
            maxWidth: "980px",
            margin: "0 auto",
        }} >
            <ul style={{
                listStyle: "none",
                textAlign: 'left',
                display: "flex",
                flexDirection: "column",
                gap: "6px"
            }}>
                {data.map((item, index) => (
                    <li key={index}
                        style={{
                            border: "1px solid white",
                            padding: "10px",
                            maxWidth: "100%"
                        }}
                    >
                        <h2 style={{
                            color: 'yellowgreen',
                            position: "relative",
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            {item.name.toUpperCase()} <br />
                            <div style={{
                                position: "absolute",
                                color: "tomato",
                                fontWeight: "800",
                                right: "0",
                                top: "-25px",
                                fontSize: "10px"
                            }}>
                                Created On {item.created.slice(9, 10)} {months[parseInt(item.created.slice(5, 8)) - 1]} Time {item.created.slice(11, 16)}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "15px"
                                }}
                            >
                                <DelBtn index={index + 1} />

                                <EditBtn index={index + 1} />
                            </div>
                        </h2>
                        <div style={{
                            fontWeight: "600",
                            padding: "0 10px",
                        }}>
                            {item.detail}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
