import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";

const CreateUpdateDialog = ({isOpen, submitCallback, closeCallback, initialValues}) => {
    const [values, setValues] = React.useState(initialValues || {});
    const [isValid, setIsValid] = React.useState(false);
    const handleChange = (event) => {
        let newValues = {...values, [event.target.name]: event.target.value};
        setValues(newValues);
        validate(newValues);
    }
    const validate = (values) => {
        if (!(values.name && values.email && values.age && values.phone)) return setIsValid(false);
        if (!values.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) return setIsValid(false)
        setIsValid(true);
    }
    console.log(values)
    return (<Dialog open={isOpen} onClose={closeCallback}>
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
            <TextField value={values.name} onChange={handleChange} name="name" placeholder="Name" label="Name"/>
            <TextField value={values.email} type={"email"} onChange={handleChange} name="email" placeholder="Email"
                       label="Email"/>
            <TextField value={values.phone} onChange={handleChange} name="phone" placeholder="Phone" label="Phone"/>
            <TextField value={values.age} type={"number"} onChange={handleChange} name="age" placeholder="Age"
                       label="Age"/>
        </DialogContent>
        <DialogActions>
            <Button onClick={closeCallback}>Cancel</Button>
            <Button disabled={!isValid} onClick={() => submitCallback(values)}
                    autoFocus>{values.id ? "Update" : "Create"}</Button>
        </DialogActions>
    </Dialog>)
}
export default CreateUpdateDialog;