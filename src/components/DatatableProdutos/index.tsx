import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Info, Plus, Trash } from 'phosphor-react';
import { Action, DatatableProdutosContainer } from './styles';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        align: 'center',
        width: 200,
        disableColumnMenu: true,
        headerAlign: 'center'
    },
    {
        field: 'produto',
        headerName: 'Produto',
        align: 'center',
        width: 200,
        disableColumnMenu: true,
        headerAlign: 'center',
        sortable: false
    },
    {
        field: 'quantidade',
        headerName: 'Quantidade',
        align: 'center',width: 200,
        disableColumnMenu: true,
        headerAlign: 'center'
    },
    {
        field: 'dataCompra',
        headerName: 'Data Compra',
        align: 'center',width: 200,
        disableColumnMenu: true,
        headerAlign: 'center'
    },
    {
        field: 'situacao',
        headerName: 'Situação',
        align: 'center',width: 200,
        disableColumnMenu: true,
        headerAlign: 'center'
    },
    {
        field: 'acao',
        headerName: 'Ação',
        width: 200,
        align: 'center',
        sortable: false,
        disableColumnMenu: true,
        headerAlign: 'center',
        renderCell: () => (
            <Action>
                <Plus size={20} />
                <Trash size={20} />
                <Info size={20} />
            </Action>
        )
    },
];

interface DatatableProdutosProps {
    data: any
}

export default function DatatableProdutos(props: DatatableProdutosProps) {

    return (
        <DatatableProdutosContainer>
            <DataGrid
                rows={props.data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                hideFooterSelectedRowCount
                classes={{
                    pinnedRows : 'header',
                }}
            />
        </DatatableProdutosContainer>
    );
}