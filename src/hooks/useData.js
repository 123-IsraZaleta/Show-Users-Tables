import { useEffect, useState } from 'react';
import { loadUsers } from '../helpers/loadUsers';

export const useData = ( refreshUser ) => {
    const [state, setState] = useState({
      users: [],
    })
    useEffect(() =>{
      loadUsers().then( (users) =>{
        setState({ users })
      })
      
    }, []);

    useEffect(() =>{
      loadUsers().then( (users) =>{
        setState({ users })
      })
      
    }, [ refreshUser ]);

    return state
  }