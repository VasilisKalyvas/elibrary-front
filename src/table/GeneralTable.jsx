import { Card, Spinner, Typography } from "@material-tailwind/react";

export function GeneralTable({ columns, data, config, isLoading = false }) {
  return (
    <Card className="relative h-full w-full overflow-auto min-h-[200px]">
      {
        isLoading
        ?
          <div className="absolute left-[50%] bottom-[50%]">
            <Spinner/>
          </div>
        :
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {columns.map((head, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head.toUpperCase()}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, rowIndex) => {
                const isLast = rowIndex === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
    
                return (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className={classes}>
                          {column === 'actions'
                            ? config[column](rowData)  // Call the actions function with the entire row data
                            : (
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {rowData[column]}
                              </Typography>
                            )
                          }
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
      }
    </Card>
  );
}
