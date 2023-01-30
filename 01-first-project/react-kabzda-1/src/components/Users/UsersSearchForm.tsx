import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/usersReducer";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string,
    friend: string
}

const formValidate = (values: any) => {

}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submitHandler = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true"
        }
        props.onFilterChanged(filter);
        console.log(values.term)
        setSubmitting(false);
    };

    return <div>
        <Formik
            initialValues={{term: "", friend: "null"}}
            validate={formValidate}
            onSubmit={submitHandler}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field as="select" name="friend">
                        <option value="null">All</option>
                        <option value="true">Only Followed</option>
                        <option value="false">Only Unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})