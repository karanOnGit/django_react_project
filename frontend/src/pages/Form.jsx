import AxiosInstance from './Axios'
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RecipePage = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            detail: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, '* Bro, WTF')
                .max(25, '* Bro, Are you Done')
                .required('* Required'),
            detail: Yup.string()
                .min(10, '* Bro, at least add something')
                .required('* Bro, do not ignore'),
        }),

        onSubmit: (values, action) => {
            // alert(JSON.stringify(values, null, 2));
            AxiosInstance.post(`api/`, values)
                .then(() => {
                    console.log("Posted Successfully")
                })
                .catch((err) => {
                    console.log(err.message)
                })

            setTimeout(() => {
                navigate('/display-items')
            }, 1500)

            action.resetForm();
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}
            style={{
                // backgroundColor: "green",
                width: "100%",
                maxWidth: "520px",
                margin: "0 auto",
                position: "relative"
            }}
        >
            <label htmlFor="name"
                style={{
                    display: "flex",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "whitesmoke",
                    margin: "10px"
                }}
            >Recipe Name</label>
            <input
                id="name"
                type="text"
                {...formik.getFieldProps('name')}

                style={{
                    fontSize: "24px",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "none",
                    color: "white",
                    width: "100%",
                    backgroundColor: "gray"
                }}
            />

            {formik.touched.name && formik.errors.name ? (
                <div
                    style={{
                        position: 'absolute',
                        right: '0',
                        color: "tomato",
                        top: '3%',
                        fontWeight: "600"
                    }}
                >{formik.errors.name}</div>
            ) : null}

            <label htmlFor="detail"
                style={{
                    display: "flex",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "whitesmoke",
                    margin: "10px"
                }}>Description</label>
            <textarea
                id="detail"
                type="text"
                {...formik.getFieldProps('detail')}

                style={{
                    fontSize: "24px",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "none",
                    color: "white",
                    width: "100%",
                    height: "40vh",
                    backgroundColor: "gray"
                }}
            />

            {formik.touched.detail && formik.errors.detail ? (
                <div
                    style={{
                        position: 'absolute',
                        right: '-10px',
                        color: "tomato",
                        top: '22%',
                        fontWeight: "600"
                    }}
                >{formik.errors.detail}</div>
            ) : null}

            <button type="submit"
                style={{
                    padding: "10px 40px",
                    marginTop: "20px",
                    fontWeight: "800",
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer"
                }}
            >Submit</button>
        </form>
    );
};

export default RecipePage;