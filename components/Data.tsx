import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useRouter } from "next/router";
import React from "react";

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ID', minWidth: 100 },
    {
        id: 'population',
        label: 'Time start',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Time end',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    // population: number;
    // size: number;
    // density: number;
}

function createData(
    name: string,
    code: string,
    // population: number,
    // size: number,
): Data {
    // const density = population / size;
    return { name, code};
}

const rows = [
    // createData('Lâm', '1', 1324171354, 3287263),
    // createData('Nam', '2', 1403500365, 9596961),
    // createData('Hùng', '3', 60483973, 301340),
    // createData('Kiệt', '4', 327167434, 9833520),
    // createData('Tuấn', '5', 37602103, 9984670),
    // createData('Anh', '6', 25475400, 7692024),
    // createData('Long', '7', 83019200, 357578),
    // createData('Vũ', '8', 4857000, 70273),
    // createData('Ngọc', '9', 126577691, 1972550),
    // createData('Châu', '10', 126317000, 377973),
    // createData('Loc', '11', 67022000, 640679),
    // createData('Hưng', '12', 67545757, 242495),
    // createData('Hùng', '13', 146793744, 17098246),
    // createData('Chanh', '14', 200962417, 923768),
    // createData('Liêm', '15', 210147125, 8515767),
    createData('Lâm', '1'),
    createData('Nam', '2'),
    createData('Hùng', '3'),
    createData('Kiệt', '4'),
    createData('Tuấn', '5'),
    createData('Anh', '6'),
    createData('Long', '7'),
    createData('Vũ', '8'),
    createData('Ngọc', '9'),
    createData('Châu', '10'),
    createData('Loc', '11'),
    createData('Hưng', '12'),
    createData('Hùng', '13'),
    createData('Chanh', '14'),
    createData('Liêm', '15'),
    createData('Hưng', '12'),
    createData('Hùng', '13'),
    createData('Chanh', '14'),
    createData('Liêm', '15'),
];
const styles={
    button:{
        backgroundColor: 'gray',
        color: 'black',
        "&:hover": {backgroundColor: 'blue'},
        width:'120px' 
    }
}
const data = () => {
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const router = useRouter()
    const handleClick=()=>{
        console.log('lam')
        router.push("/login")
    }

    return (
        <Stack flexDirection={'column'} sx={{
            // backgroundColor: 'white',
            m: '5px 5px',
            rowGap:'5px'
            }}>
            <Stack flexDirection={'row'} sx={{justifyContent:'space-between'}}>
                
                <Stack sx={{height:''}} >
                    <Button sx={styles.button} onClick={handleClick}>Back</Button>
                </Stack>
                <Stack sx={{ color: 'black', fontWeight:'bold', fontSize: '20px' }}>Face Database</Stack>
                <Stack >
                    <Button></Button>
                </Stack>
            </Stack>
            {/* <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{backgroundColor:'pink'}}
            /> */}
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 520 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <Stack flexDirection={'row'} sx={{
                justifyContent:'space-between',
                m:'auto 100px'
            }}>
                <Stack>
                    <Button sx={styles.button}>
                        Delete</Button>
                </Stack>

                <Stack>
                    <Button sx={styles.button}>
                        Delete All</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default data