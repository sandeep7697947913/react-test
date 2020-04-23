import React,{ useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Button} from '@material-ui/core'
import * as axios from 'axios'


export default class View extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            todos :[]
        };
    }


    componentDidMount(){
        sendRequest.then((data)=>{
                this.setState({
                    todos : data
                });  
            }).catch((error)=>{console.error(error)});
    }



    render(){     
        return  ( <TableContainer component='paper' >
            <Table stickyHeader>
                    <TableHead >
                        <TableRow>
                            <TableCell>
                            userId
                            </TableCell>
                            <TableCell>
                            id
                            </TableCell>
                            <TableCell>
                                title
                            </TableCell>
                            <TableCell>
                                Completed
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {
                            this.state.todos.map((value)=>{
                              return   (<TableRow>
                              <TableCell>{value.userId}</TableCell>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.title}</TableCell>
                            <TableCell>{value.completed.toString()}</TableCell>
                          </TableRow>);
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        
                    </TableFooter>
            </Table>
        </TableContainer>
        )
    }
}

const sendRequest = new Promise(async (res,rej)=>{
    try {
        const response = await axios.default.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        res(response.data);
    } catch (error) {
        rej(error)
    }
})