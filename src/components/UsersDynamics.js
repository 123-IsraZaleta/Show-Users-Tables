import DataTable from 'react-data-table-component';
import { Formik, Form } from 'formik';

import { addUser, deleteUser } from '../helpers/add-delUsers';
import { TextInput } from './TextInput';
import { validateAdd, validateDel } from './Validations';
import { columnsBase } from '../helpers/columnsBase';
import { useData } from '../hooks/useData';

export const FormikAdd = ({ setRefreshUser }) => {
    return (
        <>
            <h5>Añadir usuario</h5>
            <Formik
                initialValues = {{ name: '', lastName: '', email: '',}}
                validate = { validateAdd }
                onSubmit = { ( values, { resetForm }) => {
                    console.log(values)
                    addUser( values );
                    setRefreshUser( values )
                    resetForm();
                } }
            >
                <Form>
                    <TextInput name = "name" label = "Name"/> {/* <TextInput /> componente personalizado*/}
                    <br />
                    <TextInput name = "lastName" label = "Lastname"/> 
                    <br />
                    <TextInput name = "email" label = "Email"/> 
                    <br />
                    <button className= "btn btn-outline-success" type = "submit"> Send </button>
                </Form>
            </Formik>
        </>
    )
}

export const FormikDel = ({ setRefreshUser }) => {
    return(
        <>
            <h5>Eliminar usuario</h5>
            <Formik
                initialValues = {{ id: '',}}
                validate = { validateDel }
                onSubmit = { (values, { resetForm }) => {
                    deleteUser( values )
                    setRefreshUser( values );
                    resetForm();
                } }
            >
                <Form>
                    <TextInput name = "id" label = "Id"/> {/* <TextInput /> componente personalizado*/}
                    <br />
                    <button className= "btn btn-outline-danger" type = "submit"> Send </button>
                </Form>
            </Formik>
        </>
    )
}

export const DataTables = ({ refreshUser }) => {
    const usersNew = [];
    const { users } = useData( refreshUser );
    users.forEach( user => {
        usersNew.push({
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email
        })
    });
    console.log( usersNew )

    return (
        <>
          {
            ( usersNew.length > 0) ?
              <DataTable
                columns = { columnsBase }
                data = { usersNew }
                title = "Dynamics Solutions Users"
                pagination
                fixedHeaders
                fixedHeaderScrollHeight = "350px"
              />
            :
              <div className = "alert alert-success" role="alert">
                  Por favor introduce usuarios para poder enlistarlos
              </div>
          }
        </>
    );
}