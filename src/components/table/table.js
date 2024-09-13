import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
function Table({
    rows,//dados do banco
    columns,//colunas de acesso as propriedades
    checkboxSelection,//true ou false para mostrar checkbox
    pageSize,//linhas por pagina na tabela
    pageSizeOptions,//opções de qtde de linhas por pagina
    onRowClick
}) {
    return (
        //exemplo de como deve vir colunms:
        /*
            [{ field: 'id', headerName: 'ID', width: 70 }]
        */
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { page: 0, pageSize: pageSize } }}
                checkboxSelection={checkboxSelection}
                pageSizeOptions={pageSizeOptions}
                sx={{ border: 0 }}
                onRowClick={onRowClick}
                localeText={{
                    // Root
                    noRowsLabel: 'Sem registros',
                    noResultsOverlayLabel: 'Nenhum resultado encontrado.',

                    // Density selector toolbar button text
                    toolbarDensity: 'Densidade',
                    toolbarDensityLabel: 'Densidade',
                    toolbarDensityCompact: 'Compacto',
                    toolbarDensityStandard: 'Padrão',
                    toolbarDensityComfortable: 'Confortável',

                    // Columns selector toolbar button text
                    toolbarColumns: 'Colunas',
                    toolbarColumnsLabel: 'Selecionar colunas',

                    // Filters toolbar button text
                    toolbarFilters: 'Filtros',
                    toolbarFiltersLabel: 'Mostrar filtros',
                    toolbarFiltersTooltipHide: 'Ocultar filtros',
                    toolbarFiltersTooltipShow: 'Mostrar filtros',
                    toolbarFiltersTooltipActive: (count) =>
                        count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

                    // Quick filter toolbar field
                    toolbarQuickFilterPlaceholder: 'Buscar…',
                    toolbarQuickFilterLabel: 'Busca',
                    toolbarQuickFilterDeleteIconLabel: 'Limpar',

                    // Export selector toolbar button text
                    toolbarExport: 'Exportar',
                    toolbarExportLabel: 'Exportar',
                    toolbarExportCSV: 'Baixar como CSV',
                    toolbarExportPrint: 'Imprimir',
                    toolbarExportExcel: 'Baixar como Excel',

                    // Columns management text
                    columnsManagementSearchTitle: 'Buscar',
                    columnsManagementNoColumns: 'Nenhuma coluna',
                    columnsManagementShowHideAllText: 'Mostrar/Ocultar tudo',
                    columnsManagementReset: 'Redefinir',

                    // Filter panel text
                    filterPanelAddFilter: 'Adicionar filtro',
                    filterPanelRemoveAll: 'Remover todos',
                    filterPanelDeleteIconLabel: 'Excluir',
                    filterPanelLogicOperator: 'Operador lógico',
                    filterPanelOperator: 'Operador',
                    filterPanelOperatorAnd: 'E',
                    filterPanelOperatorOr: 'Ou',
                    filterPanelColumns: 'Colunas',
                    filterPanelInputLabel: 'Valor',
                    filterPanelInputPlaceholder: 'Valor do filtro',

                    // Filter operators text
                    filterOperatorContains: 'contém',
                    filterOperatorDoesNotContain: 'não contém',
                    filterOperatorEquals: 'igual a',
                    filterOperatorDoesNotEqual: 'diferente de',
                    filterOperatorStartsWith: 'começa com',
                    filterOperatorEndsWith: 'termina com',
                    filterOperatorIs: 'é',
                    filterOperatorNot: 'não é',
                    filterOperatorAfter: 'é após',
                    filterOperatorOnOrAfter: 'é em ou após',
                    filterOperatorBefore: 'é antes',
                    filterOperatorOnOrBefore: 'é em ou antes',
                    filterOperatorIsEmpty: 'está vazio',
                    filterOperatorIsNotEmpty: 'não está vazio',
                    filterOperatorIsAnyOf: 'é qualquer um de',
                    'filterOperator=': '=',
                    'filterOperator!=': '!=',
                    'filterOperator>': '>',
                    'filterOperator>=': '>=',
                    'filterOperator<': '<',
                    'filterOperator<=': '<=',

                    // Header filter operators text
                    headerFilterOperatorContains: 'Contém',
                    headerFilterOperatorDoesNotContain: 'Não contém',
                    headerFilterOperatorEquals: 'Igual a',
                    headerFilterOperatorDoesNotEqual: 'Diferente de',
                    headerFilterOperatorStartsWith: 'Começa com',
                    headerFilterOperatorEndsWith: 'Termina com',
                    headerFilterOperatorIs: 'É',
                    headerFilterOperatorNot: 'Não é',
                    headerFilterOperatorAfter: 'É após',
                    headerFilterOperatorOnOrAfter: 'É em ou após',
                    headerFilterOperatorBefore: 'É antes',
                    headerFilterOperatorOnOrBefore: 'É em ou antes',
                    headerFilterOperatorIsEmpty: 'Está vazio',
                    headerFilterOperatorIsNotEmpty: 'Não está vazio',
                    headerFilterOperatorIsAnyOf: 'É qualquer um de',
                    'headerFilterOperator=': 'Igual a',
                    'headerFilterOperator!=': 'Diferente de',
                    'headerFilterOperator>': 'Maior que',
                    'headerFilterOperator>=': 'Maior ou igual a',
                    'headerFilterOperator<': 'Menor que',
                    'headerFilterOperator<=': 'Menor ou igual a',

                    // Filter values text
                    filterValueAny: 'qualquer',
                    filterValueTrue: 'verdadeiro',
                    filterValueFalse: 'falso',

                    // Column menu text
                    columnMenuLabel: 'Menu',
                    columnMenuShowColumns: 'Mostrar colunas',
                    columnMenuManageColumns: 'Gerenciar colunas',
                    columnMenuFilter: 'Filtrar',
                    columnMenuHideColumn: 'Ocultar coluna',
                    columnMenuUnsort: 'Desfazer ordenação',
                    columnMenuSortAsc: 'Ordenar ASC',
                    columnMenuSortDesc: 'Ordenar DESC',

                    // Column header text
                    columnHeaderFiltersTooltipActive: (count) =>
                        count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
                    columnHeaderFiltersLabel: 'Mostrar filtros',
                    columnHeaderSortIconLabel: 'Ordenar',

                    // Rows selected footer text
                    footerRowSelected: (count) =>
                        count !== 1
                            ? `${count.toLocaleString()} registros selecionados`
                            : `${count.toLocaleString()} registro selecionado`,

                    // Total row amount footer text
                    footerTotalRows: 'Total de Registros:',

                    // Total visible row amount footer text
                    footerTotalVisibleRows: (visibleCount, totalCount) =>
                        `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

                    // Checkbox selection text
                    checkboxSelectionHeaderName: 'Seleção por checkbox',
                    checkboxSelectionSelectAllRows: 'Selecionar todas as linhas',
                    checkboxSelectionUnselectAllRows: 'Desmarcar todas as linhas',
                    checkboxSelectionSelectRow: 'Selecionar linha',
                    checkboxSelectionUnselectRow: 'Desmarcar linha',

                    // Boolean cell text
                    booleanCellTrueLabel: 'sim',
                    booleanCellFalseLabel: 'não',

                    // Actions cell more text
                    actionsCellMore: 'mais',

                    // Column pinning text
                    pinToLeft: 'Fixar à esquerda',
                    pinToRight: 'Fixar à direita',
                    unpin: 'Desafixar',

                    // Tree Data
                    treeDataGroupingHeaderName: 'Agrupar',
                    treeDataExpand: 'ver filhos',
                    treeDataCollapse: 'ocultar filhos',

                    // Grouping columns
                    groupingColumnHeaderName: 'Agrupar',
                    groupColumn: (name) => `Agrupar por ${name}`,
                    unGroupColumn: (name) => `Parar de agrupar por ${name}`,

                    // Master/detail
                    detailPanelToggle: 'Alternar painel de detalhes',
                    expandDetailPanel: 'Expandir',
                    collapseDetailPanel: 'Recolher',

                    // Used core components translation keys
                    MuiTablePagination: {},

                    // Row reordering text
                    rowReorderingHeaderName: 'Reordenar linhas',

                    // Aggregation
                    aggregationMenuItemHeader: 'Agregação',
                    aggregationFunctionLabelSum: 'soma',
                    aggregationFunctionLabelAvg: 'média',
                    aggregationFunctionLabelMin: 'mínimo',
                    aggregationFunctionLabelMax: 'máximo',
                    aggregationFunctionLabelSize: 'tamanho',
                }}
            />
        </Paper>
    )
}
export default Table