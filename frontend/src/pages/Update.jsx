import AxiosInstance from './Axios'
import { useNavigate, useParams } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

const Update = () => {
    const navigate = useNavigate();
    const MyParameter = useParams();
    const Id = MyParameter.id;

    const [data, setData] = useState(
        {
            name: "",
            detail: ""
        }
    )

    const getData = () => {
        AxiosInstance
            .get(`api/${Id}/`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const formik = useFormik({
        initialValues: {
            name: data.name,
            detail: data.detail,
            // created: data.created,
        },
        
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, '* Bro, WTF')
                .max(25, '* Bro, Are you Done')
                .required('* Required'),
            detail: Yup.string()
                .min(10, '* Bro, at least add something')
                .required('* Bro, do not ignore'),
        }),

        onSubmit: (values) => {
            AxiosInstance
                .put(`api/${Id}/`, values)
                .then(() => {
                    console.log("Updated Successfully")
                })
                .catch((err) => {
                    console.log(values)
                    console.log(err)
                })

            setTimeout(() => {
                navigate('/display-items')
            }, 1500)
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}
            style={{
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
    )
}

export default Update